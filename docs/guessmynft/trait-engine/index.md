---
title: 'Trait Engine'
sidebar_label: 'Overview'
---
# Trait Engine

The Trait Engine is the intelligence behind guessmyNFT. It transforms NFT metadata into strategic insights that power fair gameplay, collection quality assessment, and data-driven partnerships.

## What It Does

The Trait Engine computes two core metrics:

- **Guessability Index (GI)**: A per-NFT score indicating how easy or hard it is to identify that token in a deduction game. High GI means the NFT is distinctive and can be guessed quickly; low GI means it blends into the crowd.
- **Collection Quality Score (CQS)**: A composite rating of an entire collection's suitability for gameplay, from “Excellent” (CQS ≥ 0.85) down to “Unsuitable” (CQS < 0.40). CQS considers entropy, uniqueness, flatness, and independence of traits.

These metrics drive matchmaking, fairness adjustments, and the wager eligibility threshold (CQS ≥ 0.70).

## Why It Matters

Traditional NFT valuation focuses on rarity. The Trait Engine introduces a new axis: **playability**. Even the most common traits gain strategic value in wagering, creating a dual-market for NFTs. Collection owners can optimize their traits for balanced games, and players can identify undervalued NFTs with favorable GI.

The Trait Engine also generates proprietary market data that no other platform captures — trait-level demand signals, behavioral analytics, and cross-collection meta insights. This data becomes a defensible moat and potential revenue stream.

## Learn More

- Read the full technical specification: [Trait Engine Theory](/docs/guessmynft/trait-engine/theory)
- Integrate your collection: [Collection Integration Guide](/docs/guessmynft/collections/integrate)

