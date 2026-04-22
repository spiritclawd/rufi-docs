---
id: intro
title: What is Shadow Vault?
sidebar_position: 1
description: Encrypted vaults for AI agents on Solana. Hide strategies, prevent front-running, trade without exposure.
---

# Shadow Vault

> **Private limit orders on Solana — trade with intent, not visibility.**

Shadow Vault is an on-chain vault system that separates order *intents* from order *details*. AI agents deposit funds into vaults with SHA-256 commitment schemes — the commitment hides order parameters (amount, direction, price target) while the on-chain program enforces execution rules trustlessly. Nullifiers prevent double-spending without revealing which vault is being consumed.

---

## The Problem

Every limit order on Solana is a public signal. When a large trader places a buy at $42, every MEV bot and front-runner sees it and acts before execution. On-chain order books leak strategy by design, costing traders billions annually in slippage and adverse execution.

AI agents are trading **$4B+ daily** on Solana. Every trade is visible. Every position is copyable. Every strategy is extractable.

Existing privacy solutions either require trusted hardware or are too slow for real-time trading.

## What We Built

Shadow Vault gives AI agents encrypted vaults with policy-guarded execution:

| Feature | Status |
|---------|--------|
Commitment-based vaults (SHA-256) | ✅ Live on Solana Devnet |
Deposit / withdraw with hidden amounts | ✅ Live |
Encrypted order execution | ✅ Live |
Nullifier double-spend prevention | ✅ Live |
Policy engine (spend limits, token whitelist) | ✅ Live |
TypeScript SDK | ✅ Published on npm |
FHE integration | 🔲 Future (Encrypt SDK) |
ZK policy compliance proofs | 🔲 Future |

**What's on-chain today:** Commitment-based vaults, deposit/withdraw flow, order execution with nullifier verification, and a TypeScript SDK for building private trading agents.

**What's NOT on-chain yet:** FHE-based encrypted order matching, full MEV resistance, cross-protocol private routing. [See the Privacy Model →](./privacy-model)

---

## Live Links

| Resource | Link |
|----------|------|
| **Landing Page** | [spiritclawd.github.io/shadow-vault](https://spiritclawd.github.io/shadow-vault/) |
| **Solana Explorer** | [Devnet Program](https://explorer.solana.com/address/9yhMKQU4baJPW2ncaMrEDAFGy4R7MvUsDgfoshEEdKRH?cluster=devnet) |
| **NPM SDK** | `@shadow-vault/solana@0.2.0` |
| **GitHub** | [github.com/karlostoteles/shadow-vault](https://github.com/karlostoteles/shadow-vault) |

---

## Quick Start

```bash
# Install the SDK
npm install @shadow-vault/solana

# Initialize a vault
import { ShadowVaultSDK } from '@shadow-vault/solana';

const sdk = new ShadowVaultSDK(connection, wallet);
const vault = await sdk.createVault({
  agent: agentKeypair.publicKey,
  policy: {
    maxOrderSize: 2_000_000_000,      // 2 SOL
    maxSpendPerEpoch: 10_000_000_000, // 10 SOL
    epochDuration: 86400,             // 24 hours
    allowedTokens: [USDC_MINT, SOL_MINT],
  }
});

// Deposit (amount hidden via commitment)
await sdk.deposit(vault.address, 10_000_000_000); // 10 SOL

// Execute encrypted order (agent-only)
await sdk.executeOrder(vault.address, {
  amount: 1_000_000_000,
  direction: 'buy',
  targetPrice: 4200,
});
```

See the full [SDK Reference →](./sdk)

---

## Team

| Role | Who |
|------|-----|
| **Founder & Product** | Carlos de la Figuera — [karlostoteles](https://github.com/karlostoteles) |
| **AI Co-founder & Infra** | Zaia — Hermes agent, 24/7 ops |
| **Smart Contracts** | Rust/Anchor, audited patterns |
| **SDK & Agent** | TypeScript, Zerion integration |

---

## Colosseum Submission

Shadow Vault was built for the **Colosseum Solana Hackathon** (April–May 2026), targeting the Encrypt / Umbra / Privacy track and the Grand Prize.

- **Program:** Live on Solana Devnet
- **SDK:** Published on npm
- **Demo:** Interactive landing with real-time execution flow
- **Pitch:** [OpenClaw, April 25](https://openclaw.xyz)

[See Business Model & Competitive Position →](./business-model)
