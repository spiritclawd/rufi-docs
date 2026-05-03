---
id: faq
title: FAQ
sidebar_position: 10
description: Frequently asked questions about guessmyNFT — gameplay, scoring, leaderboards, tournaments, and the business model.
---

# FAQ

## Getting Started

### Do I need an NFT to play?

No. **Practice Mode** requires no wallet and no NFT — just go to [guesschizodio.fun](https://guesschizodio.fun) and play. **Solo Random Mode** requires a Cartridge Controller wallet but no NFT ownership. Only **Solo Owned Mode** requires you to hold an NFT from the collection.

### What is Cartridge Controller?

Cartridge Controller is a smart wallet built for on-chain games on Starknet. It uses **session keys** — once you approve the game, transactions happen seamlessly during gameplay without wallet popups on every action. No gas signing interruptions mid-match.

You can create a Cartridge Controller wallet at [cartridge.gg](https://cartridge.gg).

### Can I play on mobile?

Yes. Cartridge Controller works on mobile browsers. The game UI is responsive. Desktop is recommended for the best experience, but mobile is fully playable.

### Which network is guessmyNFT on?

**Starknet** — both mainnet and Sepolia (testnet). The production game runs on Starknet Mainnet. All game logic, ZK proof verification, and leaderboard data are on-chain.

---

## Gameplay

### How does the game work?

Both you and the Boss secretly hold a hidden NFT. You take turns asking binary trait questions — "Does your NFT have a hat?" — and each answer comes with a **zero-knowledge proof** verified on-chain. Nobody can lie. First to correctly identify the opponent's NFT wins.

In Solo Mode, the Boss is an AI opponent whose NFT is selected by difficulty-weighted math.

### What happens if I guess wrong?

**No score is recorded.** A wrong guess is a failed run — you don't appear on the leaderboard for that game. You can immediately start a new game and try again. There's no penalty beyond losing that attempt's potential score.

### How is the Boss picked?

The Boss is selected by **Athanor-derived probability math** — a weighted draw biased toward the hardest-to-identify NFTs in the candidate space. This is not plain randomness. The system deliberately picks tricky opponents that require more deduction to identify.

In Owned Mode, the NFT you commit to the session is excluded from the Boss pool — the Boss will never be the same NFT you're playing with.

### What are GI tier badges?

Every NFT displays a **Guessability Index (GI) tier badge** — LOW, MEDIUM, HIGH, or CRITICAL — indicating how hard it is to identify:

- **LOW** — Blends in. Shared traits make it hard to narrow down. The hardest Boss.
- **MEDIUM** — Standard difficulty. Most of the collection falls here.
- **HIGH** — Distinctive traits make it easier to identify.
- **CRITICAL** — Rare-trait outlier. Easiest to identify — stands out immediately.

The tier is derived from the NFT's statistical position relative to the collection's trait distribution. See the [Trait Engine](/docs/guessmynft/trait-engine/) for the full math.

### Why is a common NFT harder to identify than a rare one?

This is the **Rarity Paradox**. In a deduction game, what matters is how distinguishable a character is from the others. A rare NFT with unique traits is immediately identifiable — one question can confirm it. A common NFT shares traits with many others, requiring deep elimination to narrow down. The floor NFT is the hardest Boss.

### What's the optimal strategy?

Maximize **information gain** per question. The best question splits the remaining candidates as close to 50/50 as possible. Don't ask about rare traits early — a "no" tells you almost nothing when 95% of the collection shares that answer. Ask questions that divide the candidate space evenly.

---

## Scoring & Leaderboards

### How is my score calculated?

**Golf-par scoring.** Each NFT has a par value: `par = ceil(log2(candidate_space))`. Your score is the number of questions you used to correctly identify the Boss. The leaderboard shows your score relative to par:

| Display | Meaning |
|---------|---------|
| −2 | Two under par (excellent) |
| E | Even par (solid play) |
| +3 | Three over par (room to improve) |

Lower is better.

### Why golf-par instead of just counting turns?

Because not all NFTs are equally hard to identify. A 7-question game against an easy Boss and a 7-question game against a hard Boss would score the same with simple turn counting — but the hard game required much more skill. Golf-par normalizes for difficulty by measuring you against the mathematical expectation for that specific NFT.

### What's the difference between Random and Owned leaderboards?

They're completely separate. A Random player faces the full 999-NFT candidate space; an Owned player faces 998 (their committed NFT is excluded). Mixing them would be unfair. Each mode has its own board, its own rankings, and its own prizes.

### Do my scores expire?

No. The leaderboards are **eternal** — they never close. Your scores persist forever. Tournaments are time-bounded competitive events layered on top of the permanent boards, but the boards themselves are permanent.

### Can I see other players' scores?

Yes. The leaderboard is public. You can view the full rankings at [guessstats.aircade.xyz](https://guessstats.aircade.xyz) or directly in-game via the Leaderboard panel.

---

## Tournaments

### What is a tournament?

A tournament is a **time-bounded competitive event** (typically 7 days) on the eternal Solo Mode leaderboards. During the tournament window, your games count toward both the permanent leaderboard and the tournament ranking. Prizes are awarded at the end.

### Do I need to register?

No. Just play Solo Mode during the tournament window — every correct-guess game automatically counts.

### How are tournament winners determined?

By **golf-par score** during the tournament window. Your best score relative to par determines your ranking. Lower is better. In case of a tie, the earlier timestamp wins.

### What are the prizes for the Schizodio Inauguration Tournament?

**Random Mode** — top 2 players each win a Schizodio NFT.
**Owned Mode** — top 10 players split $100 USDC ($25 / $20 / $15 / $10 / $8 / $7 / $5 / $4 / $3 / $3), paid on Starknet.

No entry fees. Self-funded by RUFi.

### What happens to my score after the tournament ends?

Your score stays on the **eternal leaderboard** forever. The tournament is a snapshot in time — prizes are awarded based on the window — but your leaderboard entry is permanent. Future tournaments are new seasons on the same boards.

---

## Business Model & Trust

### How does RUFi make money?

guessmyNFT's revenue model is built around **Collector Mode** (coming soon) — the NFT wagering layer. When a Collector Mode game ends, the winner pays a 10% claim fee. Of that fee, 90% goes to automatic collection buybacks (buying NFTs from the collection floor) and 10% goes to the protocol treasury.

Every Collector Mode game returns value to the collection. The more games played, the more buyback pressure on the floor.

### Are my NFTs safe?

Yes. In Solo Mode, **no NFTs are at risk** — it's a skill-based leaderboard game, not a wager. Your NFTs stay in your wallet. Collector Mode (when it launches) will use on-chain escrow for wagered NFTs — the smart contract holds the NFTs during the game and releases them to the winner. No custody by RUFi.

### Is the game provably fair?

Yes. Every answer in the game comes with a **zero-knowledge proof** verified on-chain by the Garaga verifier on Starknet. The Boss's identity is committed as a Pedersen hash at game-start and revealed at game-end. No server, no referee, no way to cheat — the math enforces honesty.

The ZK circuits are open-source. The verifier contract is deployed on-chain. You can verify proofs independently.

### What is RUFi Studio?

RUFi Studio builds on-chain products on Starknet. guessmyNFT is the flagship — a deduction game where zero-knowledge proofs enforce fair play. Other products include Veil (compliance infrastructure) and AlliGo (AI agent trust layer). RUFi is bootstrapped and product-focused.

### Is the code open source?

The game contracts and ZK circuits are on-chain and verifiable. The frontend is deployed and the build can be verified. Collection data and trait analysis are published. Research (Guessability Index, Trait Engine theory) is open.

---

## Technical

### What ZK proof system does guessmyNFT use?

**Noir circuits** with **UltraHonk** proving via bb.js. Proofs are verified on-chain by a **Garaga** verifier deployed on Starknet. Proofs are generated in the browser — no server-side proving.

### What is the Trait Engine?

The Trait Engine is RUFi's quantitative framework for analyzing NFT collections. It produces two scores:

- **GI (Guessability Index)** — per-NFT difficulty to identify in-game
- **CQS (Collection Quality Score)** — how playable a collection is for deduction games

The Trait Engine determines which collections are good fits for guessmyNFT and powers the GI tier badges you see in-game. See [Trait Engine](/docs/guessmynft/trait-engine/) for the full technical report.

### How does the Torii indexer work?

[Torii](https://torii.aircade.xyz) is a Dojo-native indexer that tracks all on-chain game state — games, turns, scores, leaderboards. The client queries Torii for real-time data. It's the bridge between on-chain state and what you see in the UI.

### Can I integrate my NFT collection?

Yes. See [For Collection Owners](/docs/guessmynft/collections/integrate/) for the integration guide. The key requirement is a **Guessability Index analysis** — the Trait Engine evaluates whether your collection's trait distribution supports good deduction gameplay.

---

## Still have questions?

Join the community or check the [Stats Dashboard](https://guessstats.aircade.xyz) for live game data.
