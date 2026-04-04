---
id: guessability-index
title: Is My Collection Playable?
sidebar_position: 2
---

# Is My Collection Playable?

Not every NFT collection makes a good deduction game. Here's how to evaluate yours.

## Quick Checklist

- [ ] At least 6 meaningful trait categories (Background, Body, Eyes, etc.)
- [ ] No single trait value dominates > 80% of the collection
- [ ] Most trait combinations are unique across the collection
- [ ] Traits are relatively independent (Body type shouldn't predict Background color)

## The CQS Score

Run the analysis yourself:

```bash
# Clone the repo
git clone https://github.com/NormieLabs/NormaLabs-HQ

# Install dependencies
pip install numpy matplotlib

# Run analysis on your collection metadata JSON
python3 obsidian_vault/guessmynft/research/guessability/analyze_collection.py \
  your-collection.json \
  --output my-collection
```

Your metadata JSON should have this format:

```json
{
  "name": "My Collection",
  "characters": [
    {
      "id": 1,
      "name": "NFT #1",
      "attributes": [
        {"trait_type": "Background", "value": "Red"},
        {"trait_type": "Body", "value": "Dragon"}
      ]
    }
  ]
}
```

## Interpreting Results

| CQS | Verdict |
|-----|---------|
| ≥ 0.85 | ✅ Excellent — ideal for all modes including wagers |
| 0.70 – 0.84 | ✅ Good — suitable, minor imbalances |
| 0.55 – 0.69 | ⚠️ Fair — playable but some NFTs have significant advantage |
| < 0.55 | ❌ Poor — not recommended |

## Common Anti-Patterns

**The "None" problem:** If 95% of your collection has "No Accessory" for the Accessories trait, that category provides almost zero information. Questions about it are wasted turns.

**Correlated traits:** If every Dragon body always has a Fire background, knowing the body type reveals the background for free. This reduces effective trait categories.

**Duplicate combinations:** If many NFTs share identical trait vectors, they become indistinguishable by questions alone — requiring random guessing at the end.
