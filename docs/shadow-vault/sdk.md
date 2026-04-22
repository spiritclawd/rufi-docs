---
id: sdk
title: SDK Reference
sidebar_position: 4
description: TypeScript SDK for integrating Shadow Vault into AI agents and trading bots.
---

# SDK Reference

```bash
npm install @shadow-vault/solana
```

## ShadowVaultSDK

### Constructor

```typescript
import { ShadowVaultSDK } from '@shadow-vault/solana';
import { Connection, Keypair, PublicKey } from '@solana/web3.js';

const connection = new Connection('https://api.devnet.solana.com');
const wallet = /* your wallet adapter */;

const sdk = new ShadowVaultSDK(connection, wallet);
```

### createVault

Create a new vault with an attached policy.

```typescript
const vault = await sdk.createVault({
  agent: agentKeypair.publicKey,
  policy: {
    maxOrderSize: 2_000_000_000,       // 2 SOL (lamports)
    maxSpendPerEpoch: 10_000_000_000,  // 10 SOL
    epochDuration: 86400,              // 24 hours (seconds)
    allowedTokens: [
      new PublicKey('EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v'), // USDC
      new PublicKey('So11111111111111111111111111111111111111112'),  // wSOL
    ],
    allowedProtocols: [/* protocol PDAs */],
    maxPositions: 5,
  }
});

console.log(vault.address.toBase58());
```

### deposit

Deposit SOL into a vault. The amount is committed on-chain, not stored in plaintext.

```typescript
await sdk.deposit(vaultAddress, 10_000_000_000); // 10 SOL
```

### executeOrder

Execute an encrypted order. Only the authorized agent can call this.

```typescript
await sdk.executeOrder(vaultAddress, {
  amount: 1_000_000_000,   // 1 SOL
  direction: 'buy',        // or 'sell'
  targetPrice: 4200,       // price target (USDC cents)
  slippageBps: 50,         // 0.5%
});
```

### withdraw

Withdraw SOL from vault back to owner.

```typescript
await sdk.withdraw(vaultAddress, 5_000_000_000); // 5 SOL
```

### getVaultState

Read the current state of a vault (encrypted balances; plaintext metadata).

```typescript
const state = await sdk.getVaultState(vaultAddress);
console.log(state.totalDeposited);   // committed value
console.log(state.orderCount);       // plaintext
console.log(state.isActive);         // plaintext
```

### getAuditLog

Retrieve the encrypted audit trail for a vault.

```typescript
const logs = await sdk.getAuditLog(vaultAddress, { limit: 50 });
for (const entry of logs) {
  console.log(entry.action, entry.timestamp, entry.dataCt);
}
```

---

## Policy Engine

The SDK validates orders against policy BEFORE submitting to the chain:

| Check | Behavior on Failure |
|-------|---------------------|
| `order.amount <= policy.maxOrderSize` | Throws `PolicyExceededError` |
| `epochSpent + order.amount <= policy.maxSpendPerEpoch` | Throws `EpochLimitError` |
| `token in policy.allowedTokens` | Throws `TokenNotAllowedError` |
| `activePositions < policy.maxPositions` | Throws `PositionLimitError` |
| `policy.isActive == true` | Throws `PolicyFrozenError` |

---

## Error Handling

```typescript
try {
  await sdk.executeOrder(vault, order);
} catch (err) {
  if (err instanceof PolicyExceededError) {
    // Order exceeds maxOrderSize
  } else if (err instanceof EpochLimitError) {
    // Epoch spend limit reached
  } else if (err instanceof AgentNotAuthorizedError) {
    // Wrong signer for agent
  }
}
```

---

## Types

```typescript
interface VaultConfig {
  agent: PublicKey;
  policy: PolicyConfig;
}

interface PolicyConfig {
  maxOrderSize: number;
  maxSpendPerEpoch: number;
  epochDuration: number;
  allowedTokens: PublicKey[];
  allowedProtocols?: PublicKey[];
  maxPositions?: number;
}

interface OrderParams {
  amount: number;
  direction: 'buy' | 'sell';
  targetPrice?: number;
  slippageBps?: number;
}

interface VaultState {
  owner: PublicKey;
  agent: PublicKey;
  totalDeposited: bigint;   // commitment
  totalWithdrawn: bigint;   // commitment
  orderCount: number;
  isActive: boolean;
}

interface AuditEntry {
  vault: PublicKey;
  action: 'deposit' | 'withdraw' | 'order' | 'decrypt';
  timestamp: number;
  dataCt: Uint8Array;       // 32-byte ciphertext reference
  actor: PublicKey;
  sequence: number;
}
```

---

## Repository

[github.com/karlostoteles/shadow-vault →](https://github.com/karlostoteles/shadow-vault)
