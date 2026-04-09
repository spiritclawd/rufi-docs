---
id: zk-proofs
title: Zero-Knowledge Proofs
sidebar_position: 3
---

# Zero-Knowledge Proofs in guessmyNFT

## Why ZK?

In a traditional digital game, you'd trust a server to enforce honest answers. We don't have a server. Every answer in guessmyNFT is backed by a cryptographic proof — generated in your browser, verified on-chain. Nobody can lie.

## How it Works

### Commit phase

When you start a game, you select a hidden NFT. Your browser generates:

```
commitment = Poseidon2(game_id, player_address, character_id, salt)
```

The salt is a random 251-bit value (constrained to the Stark field). This hash is stored on-chain. Your opponent sees the commitment but not the NFT.

### Answer phase

When your opponent asks a question, you answer. Your browser generates a ZK proof that:

1. You know the preimage of your commitment (your actual NFT)
2. The answer to the question is consistent with that NFT's traits

The proof is submitted on-chain. Garaga verifies it. If the proof is invalid, the transaction reverts.

### Reveal phase

At the end of the game, you reveal your NFT. The on-chain verifier checks the Merkle proof — confirming your NFT's traits are part of the registered collection.

## The Circuit

```noir
// Simplified guessmyNFT circuit
fn main(
    character_id: u32,          // private
    bitmap: [Field; 4],         // private (your NFT's traits)
    salt: Field,                // private
    commitment: pub Field,      // public (stored on-chain)
    question_bit: pub u32,      // public (which trait was asked)
    answer: pub bool,           // public (your answer)
) {
    // Verify commitment
    let computed = poseidon2([character_id, bitmap[0], bitmap[1], bitmap[2], bitmap[3]]);
    assert(computed == commitment);

    // Verify answer is honest
    let bit_value = (bitmap[question_bit / 64] >> (question_bit % 64)) & 1;
    assert((bit_value == 1) == answer);
}
```

## Stack

| Component | Technology |
|-----------|-----------|
| Circuit language | Noir 1.0.0-beta.16 |
| Proof system | UltraHonk |
| Client prover | bb.js (runs in browser) |
| On-chain verifier | Garaga (Starknet) |
| Verifier address (Mainnet) | `0x64cb378d475b6247b0bbbe5ff5c3ec0615fbc2d63ed8e09b55e39c0a8597595` |

## Performance

Proof generation runs in the browser using WebAssembly. Current times:
- Proof generation: ~8–15 seconds (warm: 5–10s after first proof in session)
- On-chain verification: included in the answer transaction
- No server round-trip needed

We are actively working to reduce proving time to under 3 seconds. Read the [full performance roadmap](/blog/zk-local-proving-performance).

## Current Implementation

### Stack
- Circuit language: **Noir** (v1.0.0-beta.16)
- Proving backend: **UltraHonk** via `@aztec/bb.js` (3.0.0-nightly)
- Proof format: **Garaga** calldata for on-chain verification
- Prover: Server-side Node.js prover (sub-2s per proof, 4 CPU threads)
- Commitment hash: Poseidon2 computed via Noir ACVM (not native browser)

### Proof Generation Flow
1. Player selects hidden NFT → browser computes commitment via Noir ACVM
2. Commitment stored on-chain (Starknet)
3. Opponent asks question → prover server generates UltraHonk proof (~1.8s)
4. Garaga-formatted calldata sent to chain
5. On-chain verifier validates: player answered honestly without revealing their NFT

### Why Server-Side Proving?
Browser WASM proving took 8-20s — too slow for real-time play. The server prover reduces this to ~1.8s using multi-threaded Barretenberg. The proof is still trustless: the circuit enforces correctness regardless of where it runs.
