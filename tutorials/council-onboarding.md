# Tutorial: Council Onboarding for a Member

**Goal:** Understand how a person becomes an operational council member.

**Outcome:** An awareness of the exact, audited steps — and a clear statement
of what must **not** happen.

---

## The Rule

> No identities may be invented, simulated, or assumed.

A member is created **only** by a ratified membership decision. There is no
other path.

## The Path (Nominator's View)

1. **Collect evidence.** Legal identity, eligibility mapped to a council
   scope, independence declaration, and written consent.
2. **Author a membership proposal.** Use the structure in
   `examples/proposal-membership.yaml`.
3. **Submit to TEOS Forge.** The Proposal Engine records the nomination in the
   audit chain (`member_nominated`).
4. **Await validation.** Identity and eligibility are checked
   (`member_validated` or `member_invalidated`).
5. **Council vote.** The relevant council reaches quorum and votes
   (`vote_recorded`).
6. **Ratification.** Majority achieved → `member_ratified`.
7. **Activation.** The ratified member becomes operational
   (`member_operational`).

## The Path (Candidate's View)

- Candidate consents in writing.
- Candidate may not vote, sign, or act for the council **before**
  `member_operational` exists in the audit chain.
- Candidate's first act after activation is confirming their own audit record.

## Anti-Patterns (Never Do These)

- ✗ Adding a name to a council YAML as "trust me"
- ✗ Recording a vote without a ratified membership
- ✗ Generating placeholder identities to make quorum
- ✗ Simulating a council in a demo and calling it real
- ✗ Using the Academy examples as if they were live members

## Current State

```
Councils populated: 0/5
Operational members: 0
```

Expected, correct, and enforced.