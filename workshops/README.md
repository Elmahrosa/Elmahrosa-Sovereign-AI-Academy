# Workshop Index — Sovereign AI Academy

Workshops are structured sessions for auditors, developers, and institutional
partners. Each workshop ships with slides, lab exercises, and certification
prep. Content is added as sessions are ratified for release.

## Planned Sessions

| # | Topic | Audience | Status |
| --- | --- | --- | --- |
| W-01 | Governance lifecycle & the ICBC authority chain | All | Planned |
| W-02 | Council onboarding & membership proposals | Candidates | Planned |
| W-03 | Audit-first development & evidence chains | Auditors, Devs | Planned |
| W-04 | Sovereign AI philosophy: AI advises, humans decide | All | Planned |
| W-05 | Proposal drafting & YAML templates | Institutional | Planned |

## Lab Exercise (W-01 sample)

**Exercise:** Trace one governance artifact through the full lifecycle and
confirm that `REJECTED` cannot reach `EXECUTED`.

1. Read `docs/governance.md`.
2. Read the lifecycle in the TEOS Forge repo:
   `forge/src/proposal.js` (transition table).
3. Verify: `canTransition("REJECTED", "EXECUTED") === false`.
4. Document the audit events that a rejected proposal would leave behind.

## Certification Prep

Certification tracks are under development. A track typically requires:
- Governance lifecycle exam (W-01 content)
- Onboarding-ethics assessment (W-02 content)
- Evidence/audit practical (W-03 content)

No certification grants membership or authority — membership comes **only**
from ratified council decisions.