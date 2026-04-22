---
id: business-model
title: Business Model & Position
sidebar_position: 5
description: Revenue model, market sizing, competitive moats, and go-to-market for investors and partners.
---

# Business Model & Position

> **Shadow Vault isn't a hackathon project. It's a $100M+ protocol hiding in a hackathon.**

---

## The Problem Worth Solving

AI agents are trading **$4B+ daily** on Solana alone. Every single trade is visible. Every position is copyable. Every strategy is extractable by MEV bots.

The agent economy needs privacy infrastructure — and nobody is selling it to them.

---

## Revenue Streams

### 1. Transaction Fees (Protocol Revenue)

**Model:** 0.1% on every deposit + withdraw through Shadow Vault

| Scale | Volume | Monthly Revenue |
|-------|--------|----------------|
| Bootstrap | $10M/agent/month | $10K/month |
| Target (Y1) | 500 agents × $5M avg | **$5M/month** |

### 2. Agent SDK Pro (SaaS)

**Free tier:** Basic vault (init, deposit, withdraw)

**Pro tier ($99/mo):**
- Policy engine (spend limits, market restrictions)
- Encrypted audit logs
- Multi-agent vault sharing
- Priority execution

**Enterprise tier ($999/mo):**
- Custom policies
- Compliance exports
- Dedicated support
- White-label SDK

### 3. Privacy-as-a-Service (API)

**Model:** Per-call pricing for protocols integrating Shadow Vault

**Pricing:** $0.005 per encrypted operation

**At scale:** 10M operations/day = **$50K/day**

### 4. Data & Analytics (Opt-in)

Anonymized aggregate trading data sold to market makers, research firms, and protocols. 50% revenue share to vault owners.

### 5. Governance Token ($SHADOW)

**Utility:**
- Fee discounts
- Governance votes (policy templates, fee rates)
- Staking for premium features
- Revenue sharing from protocol fees

---

## Market Sizing

| | Value |
|--|-------|
| **TAM** | Solana DeFi TVL: $12B; AI agent trading: $4B+/day; Privacy infra: $2B+ (40% YoY) |
| **SAM** | 50,000+ agents on Solana; avg volume $100K/day; 0.1% privacy premium = **$5M/day** |
| **SOM (Y1)** | 500 agents, $50M daily volume = **$50K/day = $18M/year** |
| **SOM (Y2)** | 5,000 agents, $500M daily volume = **$500K/day = $180M/year** |

---

## Competitive Landscape

### Direct Competitors (Privacy on Solana)

| Project | Approach | Status | Gap vs. Shadow Vault |
|---------|----------|--------|----------------------|
| **Shadow Book** | FHE for token transfers | Conceptual | No agent integration; FHE impractical for speed |
| **LatticA** | FHE coprocessor | Stealth/early | Infrastructure-heavy; no agent SDK |
| **Encifher** | Encrypted swaps via Jupiter | Live (3rd prize Solana Privacy Hackathon) | DeFi-specific; no agent framework integration |
| **VeilVault** | ZK for RWA | Conceptual | RWA-focused; not agent-targeted |
| **Arcium** | MPC for encrypted computing | Active dev | General-purpose infra; no agent privacy SDK |

### Indirect Competitors (Agent Infrastructure)

| Project | Focus | Privacy? |
|---------|-------|----------|
| **ElizaOS** | Agent framework (200+ plugins) | ❌ None built-in |
| **Arc** | Trading agent infra | ❌ None |
| **Solana Agent Kit** | Solana-specific agent toolkit | ❌ None |

**Shadow Vault positions as a privacy plugin for ALL agent frameworks** — complementary, not competitive.

### Competitive Moats

1. **First mover** — No agent-specific privacy vault exists
2. **Network effects** — More agents = more valuable audit logs
3. **Integration lock-in** — Once agents build on SDK, switching cost is high
4. **Data flywheel** — Aggregate data improves policy engine
5. **Community** — Agent builders become evangelists

---

## Unit Economics

| Metric | Value |
|--------|-------|
| CAC (Customer Acquisition) | ~$50 (hackathon/community) |
| LTV (Lifetime Value) | $12,000 (100 months × $99/mo + tx fees) |
| LTV:CAC Ratio | **240:1** |
| Gross Margin | 95% (software + protocol fees) |
| Payback Period | < 1 month |

---

## Go-to-Market

### Phase 1: Hackathon → Validation (Now – June 2026)
- Win hackathon prizes ($60K+ potential from Colosseum)
- Get 10 beta agents using Shadow Vault
- Prove product-market fit with real agents

### Phase 2: Launch → Growth (July – Dec 2026)
- Mainnet deployment
- Agent SDK v1.0 public release
- Integrate with 3 major agent frameworks (Eliza, Solana Agent Kit, etc.)
- Target: 500 agents, $1M/month revenue

### Phase 3: Scale → Dominance (2027)
- Multi-chain expansion (Ethereum, Base, Arbitrum)
- Enterprise tier for trading desks
- Privacy token launch ($SHADOW)
- Target: 5,000 agents, $10M/month revenue

---

## Why Now?

1. **Agent explosion** — 100x growth in AI agents on Solana in 2026
2. **MEV crisis** — Agents losing $100M+ annually to front-running
3. **Privacy demand** — Solana Foundation actively promoting privacy infra
4. **Regulatory clarity** — Compliance-friendly privacy (audit logs) beats mixers
5. **FHE maturity** — Encrypt's FHE on SVM makes this actually possible

---

## Team

| Role | Who |
|------|-----|
| **Founder & Product** | Carlos de la Figuera — vision, business, ecosystem |
| **AI Co-founder & Infra** | Zaia — Hermes agent, 24/7 ops, content |
| **Smart Contracts** | Rust/Anchor, audited patterns |
| **SDK & Agent** | TypeScript, Zerion integration |

---

## Submission

Built for the **Colosseum Solana Hackathon** (April–May 2026). Targeting:
- Encrypt / Umbra / Privacy Track
- Grand Prize ($60K total pool)

**Deliverables:**
- ✅ Program live on Solana Devnet
- ✅ SDK published on npm (`@shadow-vault/solana@0.2.0`)
- ✅ Interactive demo landing page
- ✅ 10-min pitch at OpenClaw (April 25)
