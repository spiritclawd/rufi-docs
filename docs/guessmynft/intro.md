---
id: intro
title: What is guessmyNFT?
sidebar_position: 1
---

# guessmyNFT

**On-chain deduction game on Starknet. No lying possible.**

guessmyNFT is a two-player game where you and your opponent each secretly choose an NFT from a collection. You take turns asking binary trait questions — and the answers are enforced by zero-knowledge proofs on-chain. Nobody can lie.

First player to correctly guess the opponent's NFT wins.

## Quick Start

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
  <TabItem value="play" label="Play Now" default>

1. Go to [guesschizodio.fun](https://guesschizodio.fun)
2. Choose **Practice Mode** — no wallet needed
3. Pick a collection, select your character
4. Ask questions, eliminate candidates, guess

  </TabItem>
  <TabItem value="wallet" label="Play On-chain">

1. Connect your **Cartridge Controller** wallet
2. Choose **Solo Mode** (vs AI) or **Multiplayer** (vs a friend)
3. Commit to a hidden NFT — ZK proof generated in your browser
4. Play — every answer is verified on-chain

  </TabItem>
</Tabs>

## Game Modes

| Mode | On-chain | Wallet | Stakes |
|------|----------|--------|--------|
| **Practice** | ❌ | ❌ | None — just for fun |
| **Solo** | ✅ | ✅ | Leaderboard score |
| **Multiplayer** | ✅ | ✅ | None (coming: NFT wagers) |

## How it Works

```
1. Both players commit to a hidden NFT (Poseidon2 hash on-chain)
2. Players alternate asking binary trait questions
3. Each answer comes with a ZK proof — enforced by Garaga on Starknet
4. First correct guess wins
5. The committed NFT is revealed and verified
```

The ZK proof means the game is **trustless** — no server, no referee, no way to cheat.

## Tech Stack

- **Contracts:** Cairo + Dojo engine (ECS)
- **ZK Proofs:** Noir circuits + UltraHonk via bb.js
- **Verifier:** Garaga (on-chain, Starknet Sepolia + Mainnet)
- **Wallet:** Cartridge Controller (session keys — no popups during gameplay)
- **Indexer:** Torii (managed by Zaia at [torii.aircade.xyz](https://torii.aircade.xyz))
- **Frontend:** React + TypeScript + Vite + Zustand

## Networks

| Network | Status | World |
|---------|--------|-------|
| Starknet Mainnet | ✅ Live | `0x078509759affab35897e5be946a31fe4f681cc29c3aed269c4ff8e80a4bab2ce` |
| Starknet Sepolia | ✅ Live | `0x02f71a9820c76b4b17a95e59004ae0428f78553c3d1b6ffca6a77bebdb6c9141` |
