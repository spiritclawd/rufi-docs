---
id: game-modes
title: Game Modes
sidebar_position: 5
---

# Game Modes

## Practice Mode

**No wallet. No blockchain. Just play.**

Practice Mode runs entirely client-side with a randomized opponent. Perfect for learning the game before going on-chain.

- No wallet required
- Instant start
- Random AI opponent
- Doesn't count toward leaderboard

## Solo Mode

**On-chain. One player. One Boss. Golf-par scoring.**

Play against the Schizodio Boss — an AI opponent whose hidden NFT is selected by difficulty-weighted math. Every answer is ZK-proven on-chain. Your score is measured against par and recorded on the eternal leaderboard.

Two access modes:

- **Random** — login required, no NFT ownership. Boss picked from the full collection. The onboarding path — earn NFT prizes, unlock Owned mode.
- **Owned** — login + NFT ownership. Boss picked from the collection minus your committed NFT. Strategic depth — your choice shapes the candidate space.

Scoring uses **golf-par**: `par = ceil(log2(candidate_space))`, your score = questions used. Lower is better. Wrong guess = no leaderboard entry.

Each NFT displays a **GI tier badge** (LOW / MEDIUM / HIGH / CRITICAL) indicating how hard it is to identify. See [Solo Mode](/docs/guessmynft/solo-mode/) for full details and the [Trait Engine](/docs/guessmynft/trait-engine/) for the underlying math.

- Cartridge Controller wallet required
- Results recorded on-chain
- Separate eternal leaderboards per (collection × mode)
- GI tier badges on every NFT

## Multiplayer Mode

**On-chain PvP. Real opponent.**

Challenge a specific wallet address or join a public room. Both players commit to hidden NFTs — ZK proofs enforce honest play throughout.

- Create or join a room with a room code
- Both players commit their NFT choice on-chain
- ZK-enforced answers — no lying possible
- Winner determined on-chain

## Collector Mode

**Coming soon. NFTs on the line.**

Collector Mode is the competitive layer of guessmyNFT. The loser of each game transfers their NFT to the winner. The winner pays a 10% claim fee — 90% of which goes directly to buying NFTs from the collection (community buybacks), with 10% going to the protocol treasury.

- One NFT wagered per player
- Winner takes the loser's NFT
- 10% claim fee paid by the winner
- 90% of fee → automatic collection buybacks
- 10% of fee → protocol
- Separate leaderboard for Collector Mode games

The fee structure is designed to create a self-sustaining collection economy: every Collector Mode game returns value to the collection floor.

## Tournaments

**Time-bounded competitive events on the eternal Solo leaderboards.**

Tournaments are seasons stacked on the permanent Solo Mode leaderboards. Play during the tournament window, rank on the leaderboard, win prizes. After the tournament ends, the leaderboard persists forever.

The **Schizodio Inauguration Tournament** is the first event — 7 days, no entry fee, NFT prizes for Random mode, $100 USDC pool for Owned mode.

See [Tournaments](/docs/guessmynft/tournaments/) for full details and prize breakdowns.
