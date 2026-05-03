---
id: tournaments
title: Tournaments
sidebar_position: 5
description: Competitive events layered on the eternal Solo Mode leaderboards. Schizodio Inauguration Tournament details.
---

# Tournaments

**Time-bounded competitive events on the eternal leaderboards.**

Tournaments are seasons stacked on top of the permanent Solo Mode leaderboards. They bring prizes, urgency, and community focus — but the leaderboard itself never closes. A tournament ends; the board keeps growing.

## How Tournaments Work

A tournament is a **time window** (typically 7 days) during which Solo Mode games on a specific collection count toward both the eternal leaderboard and the tournament standings.

- Play Solo Mode (Random or Owned) during the tournament window
- Your scores count toward the eternal leaderboard (always) and the tournament ranking (during the window)
- Tournament prizes are awarded at the end of the window based on final standings
- After the tournament ends, the leaderboard persists — your scores remain

Each tournament is tied to a single collection. Collections never cross-pollinate prizes — a Schizodio tournament only features Schizodio games.

## Schizodio Inauguration Tournament

The first-ever guessmyNFT tournament. Self-funded by RUFi to inaugurate the Schizodio Solo leaderboards.

### Details

| Field | Value |
|-------|-------|
| Collection | Schizodio Brothers (999 NFTs) |
| Duration | 7 days |
| Entry fee | None — free to play |
| Modes | Random + Owned (separate leaderboards, separate prizes) |

### Prize Tracks

**Random Mode** — top 2 players each win a Schizodio NFT.

| Rank | Prize |
|------|-------|
| 1st | Schizodio NFT |
| 2nd | Schizodio NFT |

**Owned Mode** — top 10 players split a $100 USDC pool.

| Rank | Prize |
|------|-------|
| 1st | $25 USDC |
| 2nd | $20 USDC |
| 3rd | $15 USDC |
| 4th | $10 USDC |
| 5th | $8 USDC |
| 6th | $7 USDC |
| 7th | $5 USDC |
| 8th | $4 USDC |
| 9th | $3 USDC |
| 10th | $3 USDC |

Prizes are paid in USDC on Starknet.

### Historical Badges

Winners of the inaugural tournament receive a **permanent historical badge** on the leaderboard. These badges mark the first competitive season — a one-time distinction that can never be earned again.

### How to Participate

1. Go to [guesschizodio.fun](https://guesschizodio.fun)
2. Connect your Cartridge Controller wallet
3. Choose **Solo → Random** (no NFT needed) or **Solo → Owned** (NFT required)
4. Play — every correct-guess game during the tournament window counts
5. Check the leaderboard on the [Stats Dashboard](https://guessstats.aircade.xyz)

Your best score during the tournament window determines your ranking. The golf-par scoring system measures efficiency — fewer questions relative to par means a better score.

## What Happens After

The Schizodio leaderboards (Random + Owned) open with this tournament and **never close**. After the 7-day window:

- Tournament prizes are distributed to winners
- Historical badges are minted on the leaderboard
- The eternal leaderboard continues — your scores persist forever
- Future Schizodio tournaments are new seasons on the same boards

Your lifetime stats accumulate across all seasons. The leaderboard is the permanent record; tournaments are the competitive highlights.

## Future Collections

Each new collection inaugurates with its own tournament:

| Collection | Status | Notes |
|-----------|--------|-------|
| Schizodio Brothers | Inaugurating | First tournament — this one |
| Bloberts | Queued | Post-Realms coordination |
| Ducks | Queued | Post-Guessability Index v2 |

Every collection gets its own pair of eternal leaderboards (Random + Owned) and its own inaugural tournament. Collections are never cross-pollinated — a Schizodio tournament only features Schizodio NFTs.

## The Funnel

Tournaments are the gateway to the full competitive ecosystem:

```
Random tournament → win NFT prize → unlock Owned mode → Owned tournament → Collector Mode (wagering)
```

The inaugural Random tournament gives NFT prizes to top performers. Those NFTs unlock Owned mode — the higher-stakes competitive layer with better prizes. From Owned, the natural progression is Collector Mode, where your NFT is on the line in head-to-head wagered games.

:::tip Self-funded inaugurations
The first tournament for each collection is self-funded by RUFi. No entry fees, no treasury drain from players — the prizes come from RUFi's reserves. This ensures the inaugural competitive experience is accessible to everyone, not just those who can afford buy-ins.
:::

## Leaderboard Mechanics

Tournament standings use the same golf-par scoring as the eternal leaderboard:

```
par = ceil(log2(candidate_space))
score = questions_used − par
```

**Lower is better.** Under par (negative score) means you identified the Boss faster than the mathematical expectation.

- **Random mode**: candidate_space = 999 (full collection)
- **Owned mode**: candidate_space = 998 (your committed NFT excluded)

Tie-breaking: in the event of identical par-relative scores, the earlier timestamp wins.

See [Solo Mode](/docs/guessmynft/solo-mode/) for full details on gameplay mechanics, scoring, and access modes.
