---
id: integrate
title: Integrate Your Collection
sidebar_position: 1
---

# Integrate Your Collection

Want your NFT collection playable on guessmyNFT? Here's how it works.

## Requirements

1. **Starknet NFT contract** — ERC721 compatible
2. **On-chain metadata** — traits accessible via `tokenURI`
3. **Minimum CQS of 0.55** — collection must be playable (we run the analysis)
4. **Minimum collection size** — 50 NFTs

## The Process

### 1. We run the GI analysis

Send us your contract address. We run `analyze_collection.py` and generate:
- Collection Quality Score (CQS)
- GI distribution across all tokens
- Anti-pattern detection (dominant traits, zero-info categories)
- Full collection report

### 2. Trait bitmap mapping

We map your collection's traits to a per-trait bitmap — one bit per unique trait value. Each question maps to exactly one bit. SCHIZODIO BROTHERS uses a 424-bit bitmap (424 trait values across 14 categories). Collections are analyzed individually to determine the optimal mapping.

### 3. Merkle tree generation

We build a Poseidon2 Merkle tree from your collection data. The `traits_root` hash gets registered on-chain.

### 4. Registration

Your collection is registered in the game contract with:
- `traits_root` — the Merkle root
- `nft_contract` — your contract address  
- `verifier` — Garaga ZK verifier address

### 5. Live

Players can now select your collection and play.

## Collection Fitness Report

Every integrated collection gets a public **Collection Fitness Report** — a shareable analysis page showing:

- CQS score and breakdown
- GI distribution chart
- Risk tier breakdown
- Optimal wagering strategy for your collection

## Get in Touch

→ [hello@rufi.aircade.xyz](mailto:hello@rufi.aircade.xyz)
