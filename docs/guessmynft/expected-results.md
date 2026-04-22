---
id: expected-results
title: Expected Results
sidebar_position: 8
description: How success is measured, what each phase looks like, and the honest uncertainty behind the projections.
---

# Expected Results

This page describes what the protocol is trying to achieve and how we measure whether it's working. These are **targets, not promises.** Every number here is a best-effort projection from the current model. They exist so that expectations are legible, progress is auditable, and failure is obvious before it's catastrophic.

## The three phases

The protocol grows in stages, each one unlocking the next. Phases aren't dates on a calendar — they're milestones in the mechanic.

### Phase 1 — Foundation

**Goal:** Prove the game is fun, the buyback actually moves floors, and the protocol can sustain its own operations.

| What we're building toward | Target |
|----------------------------|--------|
| Partner collections live in Collector Mode | ~5 |
| Daily games (blended across modes) | 200 → 500 |
| Operational break-even (monthly) | Reached inside Phase 1 |
| Minimum measurable floor impact per collection | Observable within first ~1,000 games |

**What success looks like in Phase 1:** a player can open the game, pick a collection, find an opponent within seconds, enjoy a match, and (if they choose) claim. The weekly activity feed shows real buybacks on real collections, with on-chain receipts. A new collection can look at the numbers and decide, "yes, we want in."

### Phase 2 — Expansion

**Goal:** Diversify revenue beyond claim fees, turn the NFT treasury into productive inventory, and deepen the network of collections.

| What we're building toward | Target |
|----------------------------|--------|
| Partner collections live | ~15 |
| Lending protocol live | At least one collection supported |
| Cross-collection tournaments | Regular cadence |
| Revenue mix | Claim fees + lending fees + EGS-driven engagement |

Phase 2 is where the three-sided flywheel starts behaving like one. Players who don't own NFTs rent them from the treasury to participate. The treasury earns rental revenue on assets it acquired through buybacks — capital that was spent once now earns continuously. Cross-collection tournaments turn the game from a pile of isolated leaderboards into a shared cultural layer.

### Phase 3 — Scale

**Goal:** Multichain presence, mature treasury, optional token once the protocol has earned the right to one.

| What we're building toward | Target |
|----------------------------|--------|
| Partner collections | 50+ |
| Chains active | Starknet, Ethereum, and selected peers |
| Lending as share of revenue | Material — not a side stream |
| Token launch | Only after durable thresholds are met |

A token does not exist today and will not be issued to make up for a slow quarter. The protocol has a revenue model that stands without one. If and when a token arrives, it will be because the protocol has a balance sheet, a verifiable revenue history, and a user base large enough to participate in governance seriously — not because emissions would juice short-term metrics.

## What success looks like

For each stakeholder, there's a concrete "what good looks like":

**For players.** Matchmaking that finds opponents quickly. A ranked ladder deep enough to be interesting. Skill genuinely rewarded. Fairness verifiable on-chain (not trusted, proven). A daily reason to come back that doesn't involve paying for anything.

**For collections.** A measurable floor-impact dashboard showing the actual buybacks the protocol has executed on their collection, publicly. Reactivation of dormant holders. A polished game running on their own site via EGS. No integration cost, no revenue extraction — a partnership where the math obviously favors them.

**For the protocol.** Revenue that compounds without emissions. A treasury that funds its own operations and grows faster than it's spent. A set of partnerships that can't easily be un-signed because the community has come to expect them. An on-chain track record that makes every new partnership conversation shorter.

## How we'll know if it's working

A small set of metrics tell the truth. They're published transparently and reviewed on a steady cadence.

- **Daily active games, by mode.** The base vital sign. Fluctuates with the market, but the trend has to bend upward across seasons.
- **Collection activity.** Per-collection games/day and per-collection buyback volume. A dead collection in a live protocol is a loud signal.
- **Floor impact per collection.** Measurable correlation between game activity and floor behavior. Not causation, but the kind of correlation partners can show their communities.
- **Retention.** D1, D7, D30 for active players. If Day 30 is below a healthy floor, no amount of partnership growth fixes the product underneath.
- **Treasury health.** ETH reserves runway in months, NFT treasury concentration by collection, stablecoin coverage of operating costs.
- **Revenue run rate.** Not a single event — a rolling average that can only grow by sustained behavior change.

## Honest uncertainty

A good projection page says what it assumes and what could break it. Ours assumes:

- **The game is genuinely fun.** If Day 1 retention stays low across iterations, nothing downstream works and the model should be rebuilt, not defended.
- **Collections sign.** Distribution depends on partner sites embedding the game. If the first waves of conversations don't convert, the go-to-market has to change before the numbers do.
- **The NFT market remains viable.** A generational collapse of the underlying NFT asset class would reduce the per-game economics proportionally. The protocol survives it, but Phase 3 timelines shift.
- **Regulatory clarity on skill-based on-chain games.** The skill component is real and cryptographically provable, which is our strongest defense, but jurisdictions move at their own pace. Phase 3 assumes a workable regulatory environment in the markets that matter most.

We've modeled what happens at **half** the projected volume. The protocol still clears operations; the timeline to Phase 2 lengthens; the token launch threshold pushes out. The model is conservative enough at the base case that a significantly worse outcome is still survivable.

## What would make us slow down

Growing fast in the wrong direction is worse than growing slow in the right one. The following would cause us to pause scaling and rethink:

- **A collection we onboarded loses floor faster than it would have without us.** The mechanic is supposed to support floors, not mask their decline. If the data ever disagrees with the thesis, we de-list and investigate.
- **Retention at any tier falls below healthy floors and stays there across iterations.** Product fit before product scale, always.
- **A regulatory determination that materially changes the Collector Mode thesis.** We'd adapt the mechanic before pushing more collections into it.
- **A security event in the treasury or game contracts.** Immediate pause, public disclosure, no scaling until the fix and audit are complete.

## The stakeholder compact

If you're a player, a partner, or a potential contributor, here's what you can hold us to:

- Targets on this page are updated honestly as the protocol grows, even when they move down.
- Treasury actions of material size are visible on-chain.
- Collection data (games, buybacks, retention) is published openly, not behind a dashboard we control.
- The core mechanic — 90% buyback, 10% treasury, ZK-enforced fairness — does not change without governance and without notice.

Everything else is execution. This page exists so that execution has a scoreboard.

## Next

- See [Protocol Economics](./protocol-economics.md) for the mechanics behind the numbers.
- See [Community Flywheel](./community-flywheel.md) for why all three sides of the system need each other to succeed.
- See [Collector Mode](./collector-mode.md) for the end-game mechanic the protocol is built around.
