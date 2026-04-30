---
id: skills
title: Skills & Tools
sidebar_position: 10
description: Reusable skills, tools, and resources built by the RUFi team for on-chain game development.
---

# Skills & Tools

We ship code and we ship knowledge. These are reusable assets we've built — skills that load into Claude Code, tools that speed up development, and patterns we've documented so others don't have to rediscover them.

## Claude Code Skills

### On-Chain Gaming Skill

13 rules for shipping on-chain games on Starknet. Earned the hard way through building guessmyNFT, Axis Arena, and Shadow Vault.

- **Repo:** [karlostoteles/claude-skill-onchain-gaming](https://github.com/karlostoteles/claude-skill-onchain-gaming)
- **Topics:** Starknet, Dojo Engine, Garaga ZK, Cartridge, on-chain gaming
- **Use case:** Load into Claude Code to get context-aware guidance on Cairo contracts, Dojo ECS, ZK proof integration, and Starknet deployment patterns.

### Animated Logo Skill

A skill for building theatrical logo animations through live iteration. Pure CSS/JS, exports React components.

- **Repo:** [karlostoteles/animated-logo-skill](https://github.com/karlostoteles/animated-logo-skill)
- **Topics:** CSS animation, motion design, React, web animation
- **Use case:** Load into Claude Code to generate brand logo animations with dramatic timing, glow effects, and export-ready React components.

## How to use these skills

1. **Install Claude Code** on your machine
2. **Clone the skill repo** into your Claude Code skills directory
3. **Reference the skill** in your prompt: *"Use the on-chain-gaming skill to review my Dojo contract"*
4. **Iterate** — skills improve with use and feedback

## Internal Tools

| Tool | Purpose | Status |
|------|---------|--------|
| ZK Prover Server | Browser-side proof generation (Noir + bb.js) | ✅ Live |
| Stats Dashboard | Real-time on-chain game analytics | ✅ Live |
| Image CDN | Self-hosted WebP NFT assets via GitHub Pages | ✅ Live |
| Torii Indexer | Managed Dojo indexer for game state | ✅ Live |

## Contributing

These skills are open source (MIT). If you use them and improve them, PRs welcome. If you build a new skill on top of them, let us know — we'll link it.
