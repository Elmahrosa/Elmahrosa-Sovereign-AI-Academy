# Council Membership Onboarding

**Status:** Reference process — councils remain **empty** until members are
legitimately ratified through this process.

**Principle:** No identities may be invented, simulated, or assumed. A council
member exists **only** after a ratified governance decision confirms their
appointment.

---

## 1. The Five Councils

Governance is reviewed through five councils (source of truth: TEOS Forge
`forge/councils/*.yaml`):

| Council | Scope |
| --- | --- |
| Governance | governance, membership, lifecycle |
| Compliance | compliance, regulatory, institutional |
| Audit | audit, security, release, forensic |
| Treasury | treasury, emission, token, mining, value-flow |
| Technical | code, tooling, protocol, deployment |

Each council defines a **quorum ratio** and a **majority rule** (simple or
supermajority). Quorum is computed from the number of *ratified* members, so
an empty council has quorum `0` and cannot conduct business.

## 2. Onboarding Lifecycle

A membership candidate follows the same lifecycle as any governance artifact:

```
NOMINATED → SUBMITTED → VALIDATION → COUNCIL_REVIEW → RATIFIED → OPERATIONAL
                                         ↘ REJECTED (terminal)
```

1. **Nominations** are authored by an existing, ratified member (or by an
   authorized institutional sponsor), citing verifiable evidence of identity
   and eligibility.
2. **Submission** creates a formal membership proposal through TEOS Forge.
3. **Validation** confirms the candidate's identity claims, verification
   status, and eligibility against the governing rules.
4. **Council review** reaches quorum; the council votes with majority rules.
5. **Ratification** records the decision in the cryptographic audit chain.
6. **Operational** — only a ratified member may vote or act.

`REJECTED` is structurally terminal: a rejected nomination can never become
operational.

## 3. Evidence Requirements

A valid nomination must carry:

- **Identity:** verifiable legal identity (institutional or public-sector
  affiliation preferred).
- **Eligibility:** reason for appointment (auditor, developer, regulator,
  etc.) mapped to a council scope.
- **Independence:** a candidate must not hold conflicting authority within the
  same scope.
- **Consent:** explicit written consent by the candidate.

Nominations without verifiable evidence **are not submitted** — evidence is
audited, not assumed.

## 4. Audit Trail

Every onboarding step writes an entry to the audit chain (TEOS Forge Audit
Engine, SHA-256 chained):

| Step | Audit event |
| --- | --- |
| Nomination | `member_nominated` |
| Validation | `member_validated` / `member_invalidated` |
| Vote | `vote_recorded` |
| Decision | `member_ratified` / `member_rejected` |
| Activation | `member_operational` |

A member is *operational* only when a `member_operational` event exists in the
chain as the final record of their onboarding cascade.

## 5. Current Status

```
Councils populated: 0/5
Members operational: 0
```

This is the **correct and expected** state. Tools are ready to record REAL
nominations and votes; no placeholder identities are present.