# Tutorial: Submitting a Governance Proposal

**Goal:** Draft, submit, and advance a governance proposal using the
lifecycle enforced by TEOS Forge.

**Outcome:** A proposal in `COUNCIL_REVIEW` awaiting legitimate ratification.

---

## 1. Choose a Proposal Type

Proposals are routed to a council by scope. Map your intent to the correct
type so the right council reviews it:

| Type | Council |
| --- | --- |
| governance / membership / lifecycle | Governance |
| compliance / regulatory / institutional | Compliance |
| audit / security / release / forensic | Audit |
| treasury / emission / token / mining / value-flow | Treasury |
| code / tooling / protocol / deployment | Technical |

## 2. Draft

Write the proposal with a title, a plain-language summary, the concrete change
or policy, and any supporting payload. Every proposal must carry the audit
fields: author, type, council, and evidence references.

Start from the template in
`examples/proposal-membership.yaml` and `examples/sample_proposal.md`.

## 3. Submit

Submit the draft through the TEOS Forge Proposal Engine:

```
DRAFT → SUBMITTED
```

Submission records the author and timestamp in the audit chain. A proposal is
**not** considered by any council until it is submitted.

## 4. Structural Validation

The engine validates that the proposal has content and conforms to the schema:

```
SUBMITTED → VALIDATION
```

If validation fails, the proposal is moved to `REJECTED` with a recorded
reason. There is **no path** from `REJECTED` back into the lifecycle.

## 5. Council Review

A validated proposal enters `COUNCIL_REVIEW`. It sits here until the assigned
council reaches quorum and votes. The Ratification Engine will not finalize a
decision without quorum.

## 6. Decision

- Quorum met **and** majority achieved → `RATIFIED`
- Otherwise → `REJECTED`

Both outcomes are written to the audit chain with the full vote tally.

## 7. Execution

For a ratified proposal, deployment requires the timelock to expire, after
which the proposal becomes `DEPLOYMENT_READY` and may be `EXECUTED`.

## Checklists

Before you submit:

- [ ] Correct council by scope
- [ ] Author and evidence recorded
- [ ] Summary and payload present
- [ ] No governance bypass attempted

After it advances:

- [ ] Audit events readable in `forge/src/audit.js` chain
- [ ] Tally published when quorum met