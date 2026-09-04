# Governance Overview

The TEOS ecosystem is governed by a single, non-bypassable authority chain
(the **ICBC authority chain**):

```
International Civic Blockchain Constitution (ICBC) — Source of Truth
↓
TEOS-FORGE — Stewardship & Lifecycle
↓
TEOS-Governance — Policy & Oversight
↓
TEOS-Compliance-Kit — Regulatory Enforcement
↓
TEOS-AI-Guard — AI Safety Gates
↓
TEOS-AI-Auditor — Audit & Logging
↓
Teos-Sovereign-System — Execution Kernel
↓
TEOS-API-Sovereign — API Gateway
↓
External Applications, Institutions, Nations & Partners
```

## Rules That Cannot Be Bypassed

- Authority flows **downward only**; execution never creates authority.
- Governance **precedes** automation.
- AI **advises**; human authority **decides**.
- Every state-changing action produces **audit evidence**.
- **Not a DAO** — no community voting, no permissionless protocol.

## The Governance Lifecycle

Every governance artifact follows:

```
DRAFT → SUBMITTED → VALIDATION → COUNCIL_REVIEW → RATIFIED/REJECTED → DEPLOYMENT_READY → EXECUTED
```

`REJECTED` is terminal by construction (enforced by the TEOS Forge Proposal
Engine). Nothing can transition out of `REJECTED`.

## What "Ratified" Means Here

Ratification is **not** a like-count or a community poll. It means:

- The artifact passed **structural validation**.
- The responsible council reached **quorum**.
- The vote satisfied the council's **majority rule**.
- The decision was written to the **cryptographic audit chain**.
- The full record is **independently verifiable**.

## Canonical References

- Governance lifecycle (Forge): https://github.com/Elmahrosa/teos-forge/blob/main/docs/governance-lifecycle.md
- Council onboarding: ./COUNCIL_MEMBERSHIP_ONBOARDING.md
- ICBC Constitution: https://github.com/Elmahrosa/teos-international-civic-blockchain-constitution