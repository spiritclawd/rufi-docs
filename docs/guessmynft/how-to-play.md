---
id: how-to-play
title: How to Play
sidebar_position: 2
---

# How to Play

## The Core Loop

guessmyNFT is Guess Who — but with NFTs, and every answer is cryptographically enforced.

### Step 1 — Choose your character

Both players secretly select an NFT from the collection. Your choice is committed to the blockchain as a ZK hash — your opponent can't see it.

### Step 2 — Ask questions

On your turn, ask a binary question about a trait:

> "Does your NFT have a weapon?"  
> "Is the background dark?"  
> "Does your NFT have rare eyewear?"

The answer arrives with a ZK proof — verified on-chain. No lying.

### Step 3 — Eliminate candidates

Cross off NFTs that don't match the answers. Narrow it down.

### Step 4 — Guess

When you're confident, guess instead of asking. First correct guess wins.

:::tip Strategy tip
Don't ask about rare traits early — a "no" tells you almost nothing when 95% of the collection shares that answer. Ask questions that split the remaining candidates ~50/50 for maximum information gain.
:::

## Optimal Play

The mathematically optimal strategy is to maximize **information gain** per question.

For each trait category, the ideal question splits the remaining candidates as close to 50/50 as possible. A perfectly balanced question gives you 1 full bit of information — cutting candidates in half.

See the [Guessability Index research](/docs/guessmynft/research/guessability-index) for the full mathematical framework.

## Collections

Each collection has different traits and a different **Guessability Index (GI)**. Some collections are designed for deduction games — others less so.

SCHIZODIO BROTHERS (CQS: 0.868 — Excellent) is the launch collection on mainnet.
