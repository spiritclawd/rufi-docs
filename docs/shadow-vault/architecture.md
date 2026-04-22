---
id: architecture
title: Architecture
sidebar_position: 3
description: Smart contract design, state accounts, and security model for integrators.
---

# Architecture

```
                    ┌──────────────────────┐
                    │   Solana Blockchain  │
                    │                     │
                    │  ┌─────────────┐  │
                    │  │ Shadow Vault  │  │
                    │  │   Program     │  │
                    │  │  (Rust/Anchor)│  │
                    │  └─────────────┘  │
                    │          │          │
                    └──────────┬──────────┘
                               │
                    ┌───────────┬────────┬────────┐
                    │          │          │
              ┌─────┬────┐   │   ┌─────┬──────┐
              │   Agent   │   │   │     UI      │
              │(TypeScript)│   │   │   (React)   │
              │           │   │   │             │
              │ • Zerion  │   │   │ • Dashboard │
              │ • Policy  │   │   │ • Controls  │
              │ • FHE Sim │   │   │ • Audit Log │
              └─────────────┘   │   └──────────┘
                              │
                    ┌────────┬─────────────┐
                    │   Encrypt FHE     │
                    │   (On-chain)      │
                    │                   │
                    │ • Encrypted math  │
                    │ • Ciphertext refs │
                    │ • Key management  │
                    └────────────────────────┘
```

---

## Smart Contract Design

### State Accounts

#### Vault
```rust
pub struct Vault {
    pub owner: Pubkey,          // Vault owner
    pub agent: Pubkey,          // Authorized agent
    pub policy_id: Pubkey,      // Linked policy
    pub total_deposited: u64,   // Lifetime deposits
    pub total_withdrawn: u64,   // Lifetime withdrawals
    pub order_count: u64,       // Total orders executed
    pub is_active: bool,        // Vault status
    pub bump: u8,               // PDA bump
}
```

#### Policy
```rust
pub struct Policy {
    pub vault: Pubkey,                   // Linked vault
    pub max_order_size: u64,             // Max single order (lamports)
    pub max_spend_per_epoch: u64,        // Max spend per epoch
    pub epoch_duration: i64,             // Epoch length (seconds)
    pub allowed_tokens: [Pubkey; 8],     // Whitelisted tokens
    pub allowed_protocols: [Pubkey; 4],  // Whitelisted protocols
    pub max_positions: u8,               // Max concurrent positions
    pub is_active: bool,                 // Policy status
    pub bump: u8,
    // Runtime state
    pub epoch_start: i64,
    pub epoch_spent: u64,
    pub expiry: i64,
}
```

#### AuditEntry
```rust
pub struct AuditEntry {
    pub vault: Pubkey,
    pub action: AuditAction,   // Deposit / Withdraw / Order / Decrypt
    pub timestamp: i64,
    pub data_ct: [u8; 32],     // Encrypted action data
    pub actor: Pubkey,
    pub sequence: u64,
    pub bump: u8,
}
```

### Instructions

| Instruction | Description | Access |
|-------------|-------------|--------|
| `create_vault` | Create new vault with encrypted balance | Owner |
| `deposit` | Deposit SOL into vault (encrypted) | Owner |
| `execute_order` | Execute encrypted trade | Agent |
| `withdraw` | Withdraw from vault | Owner |
| `log_audit` | Record action in audit trail | Agent |
| `update_agent` | Change authorized agent | Owner |
| `deactivate_vault` | Freeze vault | Owner |
| `deactivate_policy` | Freeze policy | Owner |

### Security Model

1. **PDA-based ownership** — Vault and Policy derived from owner's pubkey
2. **Agent authorization** — Only designated agent can execute orders
3. **Policy enforcement** — All orders checked against policy BEFORE execution
4. **Audit trail** — Every action logged with encrypted data
5. **Owner-only decryption** — Only owner key can decrypt vault data

### Transfer Mechanism

Uses `solana_invoke::{invoke, invoke_signed}` for SOL transfers:
- **Deposit:** `invoke(transfer(owner → vault))`
- **Withdraw:** `invoke_signed(transfer(vault → owner), vault_seeds)`

The vault is a PDA, so withdrawals require `invoke_signed` with the vault's seeds.

---

## Deployment

| Parameter | Value |
|-----------|-------|
| **Program ID** | `9yhMKQU4baJPW2ncaMrEDAFGy4R7MvUsDgfoshEEdKRH` |
| **Network** | Solana Devnet |
| **Deploy Slot** | 457071709 |
| **Data Length** | 208,648 bytes |
| **Owner** | BPFLoaderUpgradeab1e11111111111111111111111 |
| **Authority** | `77TjzJn2M1r2WzCwGe4Vn7PTUhgCxfQW3LV8Spn9m9HD` |

```bash
# Verify
solana program show 9yhMKQU4baJPW2ncaMrEDAFGy4R7MvUsDgfoshEEdKRH --url devnet
```

[Explorer →](https://explorer.solana.com/address/9yhMKQU4baJPW2ncaMrEDAFGy4R7MvUsDgfoshEEdKRH?cluster=devnet)

---

## FHE Integration Pattern

The program is designed to integrate with the Encrypt SDK:

```rust
// Future integration point
pub fn execute_order(ctx: Context<ExecuteOrder>, ...) -> Result<()> {
    // Current: Store ciphertext reference
    // Future: Encrypt CPI call
    // let encrypt_ctx = EncryptContext { ... };
    // encrypt_ctx.execute_order_graph(balance_ct, amount_ct, price_ct, ...)?;
}
```

Currently stores `[u8; 32]` ciphertext references. When Encrypt SDK reaches production on Solana, these will be replaced with actual FHE operations.
