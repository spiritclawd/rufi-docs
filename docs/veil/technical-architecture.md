---
id: technical-architecture
title: Technical Architecture
sidebar_position: 4
---

# Veil — Technical Architecture

> Veil applies the same privacy primitives that power STRK20 (Starknet's native privacy layer for ERC-20 tokens) to non-fungible assets: NFTs and real-world asset tokens.

## Foundation: Starknet's ZK-Native Privacy Stack

Veil is built on Starknet's cryptographic infrastructure — the same stack used to settle $1.38T in cumulative volume via StarkEx and now powering STRK20 private transfers.

### Why This Stack

| Property | How Starknet Provides It |
|---|---|
| Post-quantum security | STARK proofs — no trusted setup, quantum-resistant |
| Sub-5s proof generation | STWO prover (Circle STARKs) |
| Cairo-native | Single codebase for client-side proofs + on-chain contracts |
| No wrappers needed | Privacy at the asset layer, not via separate wrapped tokens |
| Regulatory path | Encrypted viewing keys + selective disclosure built-in |

---

## Core Mechanism: The Privacy Layer

Veil operates through a **Privacy Pool** scoped per NFT collection (analogous to the Starknet Privacy Pool in STRK20, but non-fungible).

### How a Private NFT Transfer Works

```
1. Asset owner deposits NFT into Veil
   → Commitment generated: Poseidon2(owner, token_id, salt)
   → Commitment stored on-chain
   → Encrypted viewing key registered (owner-controlled)

2. Private transfer initiated
   → ZK proof generated client-side
   → Proof: "I own this NFT and am transferring it to recipient X"
   → On-chain: commitment nullified, new commitment created
   → External observer sees: a proof was verified. Nothing else.

3. Recipient claims the NFT
   → ZK proof: "I hold the valid commitment for this asset"
   → Asset unlocked to recipient's address
```

### What Observers See

| Party | Visible on-chain |
|---|---|
| Public | Proof was verified. Transfer occurred. |
| Auditor (with viewing key) | Full transfer history, asset details |
| Regulator (with viewing key) | Selective audit trail |
| Counterparty | Proof of validity only |

---

## Selective Disclosure: Encrypted Viewing Keys

Directly adapted from STRK20's compliance mechanism:

> *"Users get privacy by default. Auditors get access when the law requires it. The architecture holds both without compromising either."* — Starknet STRK20 Blog, March 2026

Veil extends this to NFT metadata:

- **Owner** registers an encrypted viewing key on-chain at deposit time
- **Key holder** (auditor, bank partner, regulator) can decrypt the full asset record
- **No third party** holds a master key — disclosure is always owner-initiated
- **Scoped access** — decrypting one key reveals one asset's history, not the full pool

For RWA use cases (invoices, receivables, real estate): the counterparty name, amount, and credit data remain encrypted on-chain. A bank partner receives a viewing key scoped to their specific compliance requirements.

---

## Proof System: STWO (Circle STARKs)

Veil uses the same proving system as Starknet's core infrastructure:

- **Circuit language:** Cairo (same as Starknet contracts)
- **Prover:** STWO — Starkware's Circle STARK implementation
- **Proof time:** Sub-5 seconds (current), mobile-ready by late 2026
- **Verification:** On-chain Cairo verifier — no trusted setup required
- **Post-quantum:** STARK proofs are resistant to quantum computing attacks

This is the same proving infrastructure that verified Bitcoin's full header chain in 25ms on Starknet.

---

## NFT vs. Fungible Token: Key Differences

STRK20 handles fungible tokens — identical, interchangeable units. NFTs are unique, which requires different handling:

| | STRK20 (fungible) | Veil (non-fungible) |
|---|---|---|
| Asset type | Any ERC-20 token | NFTs + RWA tokens |
| Privacy pool | Universal (one pool for all) | Per-collection pools |
| Proof content | Amount + sender/receiver | Token ID + metadata + owner |
| Metadata | Not applicable | Encrypted on-chain |
| Compliance | Amount-level audit trail | Full metadata audit trail |
| Viewing keys | Transaction history | Asset identity + history |

---

## RWA Integration Pattern

For real-world asset tokenization (invoices, receivables, trade finance):

```
Traditional RWA NFT (public):
  token_id: 2847
  issuer: Al Futtaim Trading LLC        ← visible
  counterparty: Karachi Steel Works     ← visible
  amount: $247,500                      ← visible
  credit_score: 847/1000               ← visible

Veil-wrapped RWA NFT (private):
  token_id: 2847
  commitment: 0xabc...def              ← ZK hash
  proof: VERIFIED ✓                   ← public
  metadata: [ENCRYPTED]               ← private
  viewing_key: 0x... (bank partner)   ← scoped access
```

The lender verifies creditworthiness via ZK proof. The bank partner verifies compliance via viewing key. The public ledger records only that a valid transfer occurred.

---

## Current Status

Veil is in active development on Starknet Sepolia.

- **Proof infrastructure:** In development on Starknet Sepolia
- **Privacy pool contracts:** In development
- **Viewing key system:** Specification complete
- **Target:** Starknet Mainnet — Q3 2026
