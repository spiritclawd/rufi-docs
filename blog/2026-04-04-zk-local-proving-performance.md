---
slug: zk-local-proving-performance
title: "ZK Local Proving in the Browser: Why We Do It, Where We Are, and Where We're Going"
description: "From 15 seconds to sub-second execution roadmap — UI focused, maintaining integrity."
authors:
  - carlos
date: 2026-04-04
tags: [zk, starknet, guessmynft, research]
---

*From 15 seconds to sub-second execution — UI focused, maintaining integrity.*

Every time a player answers a question in guessmyNFT's PvP mode, a zero-knowledge proof is generated in their browser. No server. No trusted third party. The proof is produced client-side, submitted on-chain, and verified by a Garaga contract on Starknet mainnet.

This is not a prototype. It is live today.

But it takes 8–15 seconds. And we want to get it under 3. This post explains the full picture: why we do local proving, how the current pipeline works, what makes it hard, and what the path forward looks like.

<!-- truncate -->

## Why Local Proving at All

The easiest approach to hidden game state is a server. Player commits to a character. Server stores the private input. Server verifies answers. This is how most "private" games work.

The problem is trust. If there is a server, someone runs it. If someone runs it, they can see your character. They can cheat. You have to trust them not to.

guessmyNFT doesn't ask for that trust. The hidden state — which NFT you picked — never leaves your device. The ZK circuit proves that your answer is correct without revealing what you're hiding. When the game ends, the proof goes on-chain. Neither player can cheat. Neither player needs to trust us.

This is what makes the game actually work as a wager mechanic. You can't fake a ZK proof. You can't collude with the server that doesn't exist.

Local proving is the price of trustlessness. We pay it gladly. But we want to make it cheaper.

## The Current Pipeline

The proving stack has three components:

**1. Noir circuit (UltraHonk)**

The circuit is written in [Noir](https://noir-lang.org/), a Rust-like DSL for ZK programs. It takes as private inputs:
- The player's character ID
- A 512-bit trait bitmap (split into four 128-bit limbs)
- A Poseidon2 salt
- A Merkle path (depth 10, proving the character is in the registered collection)

And as public inputs:
- The game ID
- The player's address
- The ZK commitment (computed at game start)
- The question ID
- The Merkle root (traits_root, stored on-chain per collection)

The circuit verifies three things simultaneously:
1. The commitment is valid: `Poseidon2(game_id, player, character_id, salt) == commitment`
2. The character is in the collection: Merkle path resolves to traits_root
3. The answer is correct: bit at `question_id` in the bitmap equals `answer_bit`

The output — `answer_bit` — is the only thing revealed. The character stays hidden.

**2. bb.js (Barretenberg WASM)**

Circuit execution and proof generation happen in a Web Worker via [`@aztec/bb.js`](https://github.com/AztecProtocol/barretenberg). The backend uses UltraHonk with KeccakZK mode — required for Garaga compatibility.

The worker lifecycle:
```typescript
// Singleton backend — initialized once, reused per proof
backend = new UltraHonkBackend(circuit.bytecode, { threads: 1 });
noir = new Noir(circuit);
vk = await backend.getVerificationKey({ keccakZK: true });

// Per proof:
const { witness } = await noir.execute(inputs);
const proofData = await backend.generateProof(witness, { keccakZK: true });
```

The `threads: 1` constraint is real — WASM in browsers has limited threading capabilities. SharedArrayBuffer is required for multi-threading and may not be available in all contexts.

**3. Garaga calldata formatting**

The raw UltraHonk proof is ~4-5KB. On-chain verification via Garaga requires a specific calldata format. The [garaga](https://github.com/keep-starknet-strange/garaga) WASM library transforms the proof into ~800 felts of calldata:

```typescript
const piBytes = flattenFieldsAsArray(proofData.publicInputs);
const calldata = getZKHonkCallData(proofData.proof, piBytes, vk);
```

These ~800 felts are submitted as a single Starknet transaction. The Garaga verifier contract checks them on-chain.

## Where the Time Goes

Current proving time: **8–15 seconds** on a modern laptop.

The breakdown is roughly:
- Backend init (first proof): ~3–4s (WASM compilation + VK generation)
- Witness generation (Noir execute): ~1–2s
- Proof generation (UltraHonk): ~4–8s
- Garaga formatting: ~0.5s

The backend is a singleton — init cost is paid once per session. Subsequent proofs skip WASM compilation and VK generation, landing closer to 5–10s per proof.

5–10 seconds per question in a game with 10 turns is too slow for a good UX. The player commits, waits, submits. It breaks the rhythm.

The target is **< 3 seconds** per proof, with < 1 second for the warm case.

## Why It's Hard

**UltraHonk constraint count.** The current circuit has a 512-bit bitmap (four u128 limbs), a depth-10 Merkle tree, and a Poseidon2 commitment. Each of these adds constraints. More constraints = longer proving time. The circuit is not large by ZK standards, but in WASM with a single thread, every constraint counts.

**WASM single-threaded.** Barretenberg in the browser uses WASM. WASM has no native parallelism beyond SharedArrayBuffer, which requires specific HTTP headers (`Cross-Origin-Opener-Policy`, `Cross-Origin-Embedder-Policy`) and doesn't work everywhere. With `threads: 1`, proving is sequential.

**KeccakZK mode.** Garaga's on-chain verifier for UltraHonk uses KeccakZK — which is more expensive to prove than the standard Poseidon transcript. This is a trade-off between proving cost (client) and verification cost (on-chain). Garaga doesn't yet support a cheaper transcript mode.

**Cold start cost.** The first proof in a session pays the full WASM compilation + VK generation overhead. This can be partially mitigated with preloading but not eliminated.

## The Performance Roadmap

### Near term: Circuit optimization

The circuit has room to shrink. Specific targets:

- **Bitmap width.** 512 bits (four u128 limbs) covers up to 512 questions. SCHIZODIO has 424. We're carrying 88 unused bits. A 424-bit or power-of-2-optimized representation could reduce constraint count.
- **Merkle depth.** Depth 10 supports 1024 leaves. For collections under 512 tokens, depth 9 works. Each level removed reduces constraint count.
- **Poseidon2 permutation count.** The commitment uses two permutation rounds. Analysis may show one is sufficient for security.

None of these are guaranteed wins — ZK circuit optimization requires careful benchmarking. But they're the right place to start before reaching for external solutions.

### Near term: WASM threading

If `SharedArrayBuffer` can be enabled site-wide (requires COOP/COEP headers), `threads: 4` or `threads: 8` could cut proving time significantly. Benchmarks from the bb.js team suggest 2–4x speedup with multi-threading.

This requires server-side header configuration — trivial for our Netlify deployment.

### Medium term: WebGPU acceleration

WebGPU is a new browser API for GPU compute. Barretenberg has early WebGPU support. GPU proving in the browser would be a step-change — potentially 10–50x faster than single-threaded WASM.

WebGPU browser support is growing (Chrome, Edge, some Firefox builds). It's not ready for production today, but it will be within the next 12–18 months. The architecture should accommodate it as a drop-in backend swap.

### Medium term: Proof size and calldata compression

~800 felts of calldata per proof costs gas. On Starknet, this is affordable today, but it adds up at scale. Directions:

- **Recursive proofs.** Batch multiple turn answers into a single proof. One game (10 turns) becomes one on-chain verification instead of ten. Gas cost drops ~10x. Proving cost rises but can be amortized.
- **Calldata compression.** Garaga may support compressed calldata formats in future versions. Worth tracking.

### Longer term: S-TWO

[S-TWO](https://starkware.co/blog/ststwo/) is StarkWare's next-generation proving system, designed for extremely fast proof generation — targeting seconds to milliseconds. It uses a STARK-based system over a different field than UltraHonk.

The compatibility question: our circuit is Noir (UltraHonk, BN254 field). S-TWO is a different proving system. Migration would require rewriting the circuit in a compatible language (likely Cairo-native or a future Noir backend targeting S-TWO).

This is a longer-term path. We're watching the S-TWO roadmap closely. If the proving time improvement is 10x+, the migration cost is worth it. The circuit logic doesn't change — only the proof system underneath.

## The Constraint We Can't Compromise

Whatever performance optimizations we make, the ZK commitment scheme must remain consistent between proof generation (client) and verification (on-chain).

Specifically:
- The commitment uses **Poseidon2 over BN254** (not Stark curve Pedersen). This is because bb.js natively supports BN254 field arithmetic. The salt must be valid in both BN254 (for Poseidon2) and the Stark field (for on-chain storage) — the Stark prime is the binding constraint.
- The Merkle tree uses **Poseidon2 over BN254** with a specific leaf encoding. Changing the hash function requires redeploying the on-chain verifier and re-registering all collections.
- The on-chain answer is a **single bit** (0 or 1). The public input ordering in the circuit is fixed and tied to the Garaga calldata format.

Any optimization must preserve these constraints. This is not a limitation of the design — it's the design.

## Where We Are Today

The full game loop is verified on Starknet mainnet:

1. Player picks a character → ZK commitment generated in-browser (Poseidon2, < 1s)
2. Commitment stored on-chain (Dojo ECS)
3. Opponent asks a question → player's browser generates a Noir UltraHonk proof (~8–15s)
4. Proof submitted to Garaga verifier on-chain → answer bit returned
5. Game state updated (Dojo), displayed in UI (Torii indexer)

Steps 1–5 work. Real proofs. Real mainnet. Real NFTs.

The work now is making step 3 fast enough that players forget it's happening.

---

*guessmyNFT is live at [guesschizodio.fun](https://guesschizodio.fun). Research notes, collection analysis, and technical documentation at [rufidocs.aircade.xyz](https://rufidocs.aircade.xyz).*
