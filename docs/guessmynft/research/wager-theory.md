---
id: wager-theory
title: Wager Theory
sidebar_position: 2
---

# Wager Game Theory

## The Fundamental Wagering Inequality

A wager is +EV if and only if:

```
T₁ / T₂ > V₁ / V₂
```

Where:
- `T₁` = expected turns for opponent to identify your NFT (your survival time)
- `T₂` = expected turns for you to identify opponent's NFT (your attack time)  
- `V₁` = value of your NFT
- `V₂` = value of opponent's NFT

**In plain english:** Your NFT must be proportionally harder to guess than it is valuable.

## Win Probability

Under equal skill:

```
P(win) = T₁ / (T₁ + T₂)
```

Your win probability is proportional to how long your NFT survives.

## Expected Value

```
EV = P(win) × V₂ - P(lose) × V₁
   = [T₁ × V₂ - T₂ × V₁] / (T₁ + T₂)
```

## Example: The Whale Trap

| | P1 (Whale) | P2 (Shark) |
|--|-----------|-----------|
| NFT Value | 10 ETH | 1 ETH |
| GI | 1.6 (Critical) | 0.7 (Low) |
| E[Turns to crack] | 6.25 | 14.29 |
| Win probability | 30.4% | 69.6% |
| EV | **-6.66 ETH** | **+6.66 ETH** |

The whale holds a 10x more valuable NFT but loses 70% of the time. The rarity that made it expensive at mint makes it dangerous to wager.

## Kelly Criterion for Repeat Wagerers

Optimal fraction of bankroll to risk:

```
f* = P(win) - P(lose) / b

where b = V_opponent / V_own
```

Only wager when `f* > 0` — which reduces to the fundamental inequality above.
