---
id: privacy-model
title: Privacy Model
sidebar_position: 2
description: How Shadow Vault delivers working privacy today — and the honest roadmap to full FHE.
---

# Privacy Model

> **Shadow Vault delivers working privacy TODAY — not promises for tomorrow.**

## What's Working Right Now

- ✅ **Deposit amounts hidden** via SHA-256 commitment scheme
- ✅ **Withdrawals unlinkable** to deposits via nullifier bitmap
- ✅ **Order details encrypted** — only hashes visible on-chain
- ✅ **Policy limits stored as commitments** (hidden values)
- ✅ **Double-spend prevention** via nullifier tracking
- ✅ **Commitment accumulator** for future membership proofs

## What's Planned

- 🔲 **FHE integration** via Inco Network Lightning FHE SDK
- 🔲 **ZK proofs** for policy compliance
- 🔲 **Merkle tree nullifier scaling** (current: 1024 per vault)
- 🔲 **SPL token confidential transfers**

The key insight: most "privacy" projects announce FHE and ZK as their core value prop — then deliver nothing working. Shadow Vault inverts this: **ship real privacy primitives first, upgrade the crypto later.**

---

## The Privacy Spectrum

```
No Privacy ◀─────────────────────────────────────▶ Full FHE
```

| Level | Amount Privacy | Linkability | On-chain Computation | Working Now? |
|-------|---------------|-------------|---------------------|--------------|
| Plaintext | ❌ None | ❌ Fully linkable | ✅ Full | ✅ |
| Basic Mixers | ⚠️ Pooled | ⚠️ Timing attacks | ✅ Full | ⚠️ Fragile |
| **Shadow Vault v0.2** | **✅ Hidden** | **✅ Unlinkable** | **❌ Limited** | **✅ YES** |
| ZK + Commitments | ✅ Hidden | ✅ Unlinkable | ⚠️ Proof generation | 🔲 Future |
| Full FHE | ✅ Hidden | ✅ Unlinkable | ✅ On encrypted data | ❌ Not deployed |

Shadow Vault sits in the pragmatic middle: **proven crypto, honest about limits, clear upgrade path.**

---

## Honesty vs. Hype

### What Other Projects Claim

| Project | Claims | Reality |
|---------|--------|---------|
| **Shadow Book** | FHE infrastructure layer | No agent-focused privacy. Infrastructure without application. |
| **LatticA** | FHE coprocessor | Not deployed. Concept-stage only. |
| **Generic "Privacy" Projects** | ZK proofs, FHE, cutting-edge crypto | Most ship nothing working. Vaporware with whitepapers. |

### What Shadow Vault Delivers

- SHA-256 commitments — battle-tested, auditable, efficient
- Nullifier bitmaps — simple, correct, upgradeable
- No FHE pretense — honest about what works today
- Real hiding of amounts, unlinking of withdrawals, encryption of order data

**The honest path wins.** A project that delivers real privacy with proven primitives beats a project that promises FHE and delivers nothing.

---

## Technical Primitives

### SHA-256 Commitments

```
commitment = SHA256(amount || secret)
```

The vault stores only the commitment hash. The actual amount and secret never hit the chain. The owner retains the secret for later proof of deposit.

### Nullifier Bitmap

Each withdrawal consumes a nullifier — a deterministic hash derived from the vault and a nonce. Once spent, the nullifier is marked in a bitmap. This prevents:
- Double-withdrawal
- Linking deposits to withdrawals
- Transaction graph analysis

Current capacity: **1024 nullifiers per vault** (expandable to Merkle trees in v0.3).

### Policy Commitments

Policy parameters (max order size, allowed tokens, spend limits) are stored as commitments rather than plaintext. The agent proves compliance without revealing the actual limits.

---

## Future Upgrades

### v0.3 — ZK Policy Compliance
Replace nullifier bitmaps with Merkle trees. Add ZK proofs that an order satisfies policy without revealing order details.

### v0.4 — FHE Integration
Integrate Inco Network's Lightning FHE SDK for encrypted computation on-chain. This enables:
- Encrypted balance math
- Private order matching
- Hidden position sizing

### v0.5 — Cross-Protocol Privacy
Extend beyond single-vault privacy to private routing across DEXs, lending protocols, and perp markets.
