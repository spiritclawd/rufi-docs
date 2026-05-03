---
id: solo-mode
title: Solo Mode
sidebar_position: 4
description: Single-player on-chain deduction against the Schizodio Boss. Two access modes, golf-par scoring, eternal leaderboards.
---

# Solo Mode

**One player. One hidden Boss. ZK-enforced answers. Score against par.**

Solo Mode is the single-player competitive layer of guessmyNFT. You face the **Schizodio Boss** — an AI opponent whose hidden NFT is selected by difficulty-weighted math, not plain randomness. Every answer you receive is verified on-chain. Your score is measured against par, and your result lands on the eternal leaderboard.

## How It Works

1. **Connect** your Cartridge Controller wallet
2. **Choose access mode** — Random or Owned
3. **The Boss is selected** — difficulty-weighted pick from the collection (Athanor-derived math — biased toward hardest-to-identify NFTs)
4. **Ask trait questions** — one per turn, each answered with a ZK proof on-chain
5. **Guess when ready** — correct guess records your score; wrong guess = no leaderboard entry

The loop is identical to PvP deduction — same questions, same ZK proofs, same elimination logic. The difference: you're playing against the system's Boss, not a human opponent.

## Two Access Modes

### Random Mode

**Login required. No NFT ownership needed.**

The Boss is picked from the full playable collection. This is the onboarding path — play, prove your skill, earn your way onto the leaderboard. Top Random players win NFT prizes, which unlock Owned mode for that collection.

- Cartridge Controller login required
- Boss selected from all 999 Schizodio NFTs
- Separate leaderboard from Owned mode
- NFT prizes for top performers

### Owned Mode

**Login + NFT ownership required. Strategic depth.**

You must hold an NFT from the playable collection. You pick which of your NFTs to commit to the session — that NFT is excluded from the Boss pool (the Boss will never be the NFT you committed). This is the whale-fair rule: owning more NFTs doesn't shrink the Boss pool beyond your single committed pick.

- Cartridge Controller login + NFT ownership verified on-chain
- Boss selected from collection **minus** your committed NFT
- Your choice of committed NFT shapes the candidate space
- Separate leaderboard from Random mode
- Higher-stakes rewards

:::tip Why two separate leaderboards?
Random and Owned players face fundamentally different conditions. A Random player sees the full 999-NFT candidate space; an Owned player sees 998 (minus their committed NFT). Mixing them on one board would be unfair. Each mode has its own world, its own prizes, and its own community.
:::

## Scoring: Golf-Par

Each NFT has a **par value** derived from its candidate space:

```
par = ceil(log2(candidate_space))
```

Your score is the number of questions you used to correctly identify the Boss. The leaderboard displays your performance relative to par:

| Score | Meaning |
|-------|---------|
| −2 | Two under par (excellent) |
| E | Even par (solid play) |
| +3 | Three over par (room to improve) |

**Lower is better.** Under par means you identified the Boss faster than the mathematical expectation. Wrong guesses record no score — a failed guess is a failed run.

:::info Why golf-par?
The old linear scoring `(board_size - turn_count) × 10` didn't account for how hard a specific NFT is to identify. A 7-question game against an easy Boss and a 7-question game against a hard Boss scored the same — but the hard game required much more skill. Golf-par normalizes difficulty: beating a CRITICAL-tier Boss in 6 questions when par is 8 is a far greater achievement than beating a MEDIUM-tier Boss in 6 when par is 7.
:::

## GI Tier Badges

Every NFT in the game displays a **Guessability Index (GI) tier badge** — a visual indicator of how hard that NFT is to identify.

| Tier | Label | Meaning |
|------|-------|---------|
| LOW | Common | Blends in — hardest to identify. Shared traits make it hard to narrow down. |
| MEDIUM | Standard | Typical identification difficulty. The majority of the collection. |
| HIGH | Notable | Distinctive traits make it easier to identify. |
| CRITICAL | Outlier | Rare-trait outlier — easiest to identify. Stands out immediately. |

The tier is derived from the NFT's **z-score** relative to the collection's mean self-information (SI). An NFT with z-score below −1.0 is LOW (harder than average); above +1.0 is HIGH; above +2.0 is CRITICAL.

**Schizodio distribution** (current): 6.0% LOW · 81.5% MEDIUM · 6.9% HIGH · 5.6% CRITICAL

:::tip The Rarity Paradox
In Solo Mode, rare NFTs are the easiest Bosses. A CRITICAL-tier NFT has unique traits that make it immediately distinguishable — one or two questions often eliminate it. Meanwhile, LOW-tier floor NFTs share traits with many others, requiring deep deduction to identify. The hardest Boss is the most common one.
:::

See the [Trait Engine](/docs/guessmynft/trait-engine/) for the full mathematical framework behind GI scores and tier classification.

## The Schizodio Boss

The Boss is not picked by uniform random. The selection uses **Athanor-derived probability math** — a weighted draw biased toward the hardest-to-identify NFTs given the candidate space. This means the Boss you face is more likely to be a tricky, hard-to-narrow-down NFT than an easy-to-spot rare one.

For Random mode, the Boss pool is all 999 Schizodio NFTs.
For Owned mode, the Boss pool is 998 (your committed NFT is excluded).

The Boss's identity is committed as a Pedersen hash at game-start — the answer is never leaked through on-chain events.

## Eternal Leaderboards

Each (collection × mode) pair has its own **permanent leaderboard**. Leaderboards never close. Tournaments run as seasons stacked on top of them — but the board itself persists forever.

- **Schizodio Random** — permanent board, inaugurated with the first tournament
- **Schizodio Owned** — permanent board, inaugurated with the first tournament
- **Future collections** — each gets its own pair of boards on inauguration

First-tournament winners receive a permanent historical badge. Future tournaments are seasons on the same boards — your lifetime stats accumulate across all seasons.

See [Tournaments](/docs/guessmynft/tournaments/) for competitive events layered on the eternal leaderboards.

## The Economic Flywheel

Solo Mode is the gateway to the full guessmyNFT economy:

```
Random play → win NFT prize → unlock Owned mode → higher-stakes leaderboard → Collector Mode (wagering)
```

NFT prizes for top Random performers come from multiple sources: free market acquisition, collection partner contributions, and the RUFi treasury. Winning a prize NFT doesn't just give you a collectible — it opens the door to Owned mode and the higher-stakes competitive layer.

This is the structural funnel: **owning an NFT opens you doors.**

## Technical Details

| Component | Technology |
|-----------|-----------|
| Contracts | Cairo + Dojo engine (ECS) |
| Boss commitment | Pedersen hash at game-start, reveal at game-end |
| Answer proofs | Noir circuits + UltraHonk via bb.js |
| Verifier | Garaga (on-chain, Starknet mainnet) |
| Wallet | Cartridge Controller (session keys) |
| Scoring | Golf-par: `questions_used` vs `ceil(log2(candidate_space))` |
| Leaderboard | Per-(collection × mode), Torii-indexed |

## What's Next

Solo Mode V1 launches with Schizodio as the inaugural collection. Future updates include:

- **Bloberts and Ducks** — new collections, each with their own Boss and leaderboard
- **Best-score aggregation** — personal bests across attempts (pending retry policy decision)
- **GI rework** — refined difficulty scoring for Boss selection and UI badges
- **Collector Mode** — NFT wagering layer that shares the same deduction engine

See the [Roadmap](/docs/guessmynft/roadmap/) for the full development timeline.
