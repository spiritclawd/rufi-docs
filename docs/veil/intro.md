---
id: intro
title: What is Veil?
sidebar_position: 1
---

# Veil

**Own Anything. Reveal Nothing. Prove Everything.**

Veil is a privacy and compliance infrastructure layer for NFTs on Starknet. It uses STWO zero-knowledge proofs to enable private NFT transfers with selective disclosure — without sacrificing auditability.

## The Problem

Public blockchains expose everything. For NFTs specifically:

- Every transfer reveals sender, receiver, and asset ID publicly
- Existing privacy solutions (Tornado Cash et al.) are sanctioned or provide zero auditability
- No existing solution is built natively for NFTs — they're all retrofitted from fungible token logic

The macro forcing function: **$16T+ in RWAs tokenizing**. Institutions won't move sensitive financial positions onto a public ledger.

## The Solution

Veil wraps NFT transfers with ZK proofs that:

1. **Hide** the asset, sender, and receiver from public view
2. **Prove** ownership to authorized parties via encrypted viewing keys
3. **Comply** — selective disclosure for regulators and auditors without exposing data publicly

## Competitive Landscape

| Protocol | Private NFTs | Compliance | Sub-5s Proofs |
|----------|-------------|------------|---------------|
| **Veil** | ✅ | ✅ | ✅ |
| STRK20 | ❌ | ✅ | ✅ |
| Aztec | ❌ | ❌ | ❌ |
| Railgun | ❌ | ❌ | Partial |

## Status

:::info Active Development
Veil is in active development. Full documentation coming soon. Meetings with institutional partners underway April 2026.
:::

→ [veil.aircade.xyz](https://veil.aircade.xyz)
