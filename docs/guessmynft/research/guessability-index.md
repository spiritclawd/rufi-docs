---
id: guessability-index
title: Guessability Index
sidebar_position: 1
---

# Guessability Index (GI)

The Guessability Index is a mathematical framework for quantifying how easy or difficult it is to identify a specific NFT through binary trait queries.

## The Core Formula

For NFT *i* with trait vector *(t₁, t₂, ..., tₖ)*:

```
SI(i) = -∑ log₂(pₖ(tᵢₖ))    (self-information)

GI(i) = SI(i) / log₂(N)     (normalized guessability)
```

Where:
- `pₖ(v)` is the frequency of trait value `v` in category `k`  
- `N` is the collection size  
- `GI = 1.0` means average difficulty  
- `GI > 1.0` means easier to identify (rare traits = more distinctive)  
- `GI < 1.0` means harder to identify (common traits = blends in)

## Risk Tiers

| Risk | GI Range | Meaning |
|------|----------|---------|
| **Critical** | > 1.5 | Identifiable in far fewer turns than average |
| **High** | 1.2 – 1.5 | Noticeably easier to identify |
| **Medium** | 0.8 – 1.2 | Near-average difficulty |
| **Low** | < 0.8 | Hard to identify — blends into the crowd |

## The Rarity Paradox

In traditional NFT markets: **Rarity = Premium**

In guessmyNFT wagering: **Rarity = Liability**

Rare traits make an NFT more distinctive — easier to identify in fewer questions. An opponent who knows your NFT is the only one with a Crown can confirm it in a single question.

**Implication for wager strategy:** Floor price NFTs (common traits, low GI) are the optimal wagering instruments. Their value splits into "collector value" (low) and "wager value" (high).

## Collection Quality Score (CQS)

CQS evaluates how suitable a collection is for deduction gameplay:

```
CQS = 0.30 × E + 0.25 × U + 0.25 × F + 0.20 × I
```

| Component | Measures |
|-----------|---------|
| **E** — Entropy Ratio | Information capacity utilization |
| **U** — Uniqueness | Fraction of NFTs with unique trait combos |
| **F** — Flatness | How uniform the trait distributions are |
| **I** — Independence | Statistical independence between trait categories |

| CQS | Rating |
|-----|--------|
| ≥ 0.85 | Excellent |
| 0.70 – 0.84 | Good |
| 0.55 – 0.69 | Fair |
| < 0.55 | Poor |

## SCHIZODIO BROTHERS Results

- **CQS: 0.868 — Excellent**
- 999 tokens, 14 trait categories, 424 questions (v3 pipeline)
- 999 unique bitmaps (v3 — 1:1 bit-to-trait-value mapping, zero coverage gaps)

[Full technical paper →](/docs/guessmynft/research/wager-theory)
