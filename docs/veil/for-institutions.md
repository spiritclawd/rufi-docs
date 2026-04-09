---
id: for-institutions
title: For Institutions
sidebar_position: 2
---

# Veil for Institutions

> "Your bank partners require financial privacy. Your blockchain infrastructure makes everything public. Veil bridges that gap."

## The Compliance Problem

Tokenizing real-world assets on a public blockchain creates a conflict:

- Blockchain transparency requires all data to be visible
- Financial regulation requires sensitive data to be private
- Bank partners, auditors, and regulators each need different levels of access

This is not a theoretical problem. It is blocking institutional adoption of RWA tokenization today.

## What Veil Does

Veil wraps asset NFTs with zero-knowledge proofs that separate **proof of validity** from **disclosure of data**.

A bank can verify that:
- An invoice exists and is legitimate ✓
- The credit score meets their threshold ✓
- The counterparty is not sanctioned ✓

Without ever seeing:
- The counterparty's name ✗
- The invoice amount ✗
- The issuer's credit history ✗

## Selective Disclosure

Veil uses **encrypted viewing keys** — not backdoors. The asset owner controls access:

| Party | What they see |
|---|---|
| Public blockchain | Transaction occurred. Asset moved. |
| Counterparty | Proof of validity only |
| Auditor (with key) | Full asset data |
| Regulator (with key) | Full audit trail |
| Bank partner (with key) | Creditworthiness proof |

No trusted third party holds the keys. The owner assigns them.

## For RWA Invoice Tokenization

The specific use case for protocols like DeFa:

**Before Veil:**
```
Invoice NFT on-chain:
  Issuer: Al Futtaim Trading LLC        ← public
  Counterparty: Karachi Steel Works     ← public  
  Amount: $247,500                      ← public
  Credit Score: 847/1000                ← public
```

**With Veil:**
```
Invoice NFT on-chain:
  Issuer: [ENCRYPTED]                   ← private
  Counterparty: [ENCRYPTED]             ← private
  Amount: [ENCRYPTED]                   ← private
  Credit Score: VERIFIED ✓              ← public proof
```

Lenders can verify creditworthiness. Banks stay compliant. Sensitive data stays private.

## Integration

Veil is designed to wrap existing asset NFTs — no rebuild required:

1. Existing NFT contract stays unchanged
2. Veil wraps it with a privacy layer
3. Viewing keys distributed to designated parties
4. Public chain only sees proof confirmations

## Pilot Program

We are offering a pilot integration for qualified RWA tokenization protocols. The pilot covers:

- Wrapping one invoice batch with Veil proofs
- Viewing key setup for bank partners
- On-chain verification on Starknet Sepolia
- Full compliance documentation

Contact: [carlos@rufi.xyz](mailto:carlos@rufi.xyz)
