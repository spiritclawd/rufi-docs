---
id: protocol-economics
title: Protocol Economics
sidebar_position: 6
description: How value flows through guessmyNFT — fees, buybacks, treasury, and the long-term revenue model.
---

# Protocol Economics

guessmyNFT earns when people play. Every claimed win pays a small on-chain fee, and that fee does two things at once: it returns capital to the collection the game was played on, and it funds the protocol that made the game possible. Nothing is minted out of thin air, nothing depends on emissions. If the game runs, the economics run.

## Where value comes from

The only source of protocol revenue is the **claim fee** paid at the end of a Collector Mode game. When a player wins and chooses to claim, they pay 10% of their opponent's NFT floor price and receive the NFT. You can read the full mechanic on the [Collector Mode](./collector-mode.md) page.

No subscription. No premium tier. No ad inventory. Every cent of revenue traces back to a game someone actually wanted to play.

## Where value goes

Each claim fee splits two ways:

| Share | Destination | Purpose |
|------:|-------------|---------|
| **90%** | Collection buybacks | Sweeps the floor of the collection the game was played on. Removes sell-side pressure, tightens the floor, benefits every holder. |
| **10%** | Protocol treasury | Funds operations, reserves, audits, and the long-term health of the protocol. |

The 90% share is not a partnership incentive layered on top of the product — it *is* the product. It's enforced by the smart contract. Every game creates a verifiable floor-support event on the collection's own chain.

## The dual-asset treasury

Over time the protocol accumulates two different kinds of capital.

**ETH reserves** fund the operational side: engineering, audits, infrastructure, partner support. A portion is converted to stablecoins at a measured pace so that a volatile market can't evaporate runway.

**NFT reserves** accumulate from buyback activity — the protocol holds floor NFTs from every partner collection. These are not idle. They become the inventory for the next phase of the protocol.

## Buy-and-deploy, not buy-and-burn

Most token buybacks destroy what they purchase. Burning tokens reduces supply but ends the story there. guessmyNFT's buyback does something different.

Bought-back NFTs stay on the protocol's balance sheet and, in Phase 2, become **rentable assets** for the lending protocol. A player who wants to compete in Collector Mode without owning an NFT can rent one from the treasury for a small rental fee. The NFT earns revenue every time it's used. The treasury grows instead of thinning.

This is closer to how a productive balance sheet works than how a traditional token buyback works. Every NFT acquired is an asset that keeps paying, not a value-destruction event.

## Why this is structurally sustainable

Most protocol revenue models depend on discretionary action — a DAO voting to buy back tokens, a company allocating quarterly profits, a team deciding to turn the flywheel on. guessmyNFT's model is different: **as long as people play, the buybacks happen, automatically, on every claim.** The mechanism is embedded in the game itself, not bolted on top of it.

This makes the model anti-fragile in a way discretionary buybacks are not. Market downturns reduce the per-game buyback value, but they don't stop the mechanism. A bad quarter doesn't turn off the flywheel; it just turns its RPM down until volume recovers.

## Safeguards

The treasury isn't a promise — it's a balance sheet. Protecting it matters more than growing it fast.

- **Collection quality gates.** Before a collection can route buyback capital, it has to meet a minimum quality score (contract health, community depth, trading stability). Collections below threshold can still be played in free modes, but don't receive buybacks.
- **Exposure limits.** No single collection can dominate the NFT treasury beyond a set share, so a single collection's collapse can't impair the whole balance sheet.
- **Circuit breakers.** Automated triggers pause buybacks to a collection if its floor drops sharply or its activity falls below healthy levels.
- **Timelocks on treasury actions.** Material changes to how treasury capital is deployed move through governance with delay — no same-day reversals of economic policy.
- **Multisig custody.** Operational, treasury, and emergency actions are split across separate multisigs with different signer requirements.

## What this is not

guessmyNFT's economics are not a token distribution schedule. No token exists yet, and none will be issued until the protocol has demonstrated durable revenue at scale. The revenue model stands on its own — the fee, the buyback, the treasury. Everything else is optional.

## Next

- See [Community Flywheel](./community-flywheel.md) for why the three sides of the protocol — players, collections, holders — pull each other forward.
- See [Expected Results](./expected-results.md) for what each phase of the protocol looks like and how progress is measured.
