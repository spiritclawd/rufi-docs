---
id: integrate
title: Integrate Your Collection
sidebar_position: 1
---

# Integrate Your Collection

The platform supports any collection with on-chain or IPFS‑hosted metadata. Follow this guide to check eligibility and execute the onboarding pipeline.

## Eligibility Criteria

- CQS ≥ 0.70 (wager‑ready)
- Metadata conforms to the standard trait schema
- Trait independence (no strong correlation)
- Minimum trait frequency 5%

## Onboarding Pipeline

1. Import metadata via Cartridge endpoint
2. Run `analyze_collection.py` (see [reference](https://github.com/karlostoteles/guessmyNFT/blob/main/research/guessability/analyze_collection.py))
3. Receive report with GI distribution and CQS
4. Accept collection into the registry (Tier 1, 2, or 3)

## Reference

- [Trait Engine Theory](/docs/guessmynft/trait-engine/theory) (GI and CQS formulation)
- Example output: [schizodio_analysis.json](https://github.com/karlostoteles/guessmyNFT/blob/main/research/guessability/empirical/schizodio_analysis.json)