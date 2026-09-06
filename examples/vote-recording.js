// examples/vote-recording.js
// Example: how a council vote is recorded against the TEOS Forge
// Ratification + Audit engines.
//
// This is a TEACHING SNAPSHOT of the engine API surface. It mirrors
// forge/src/ratification.js in the teos-forge repository.
// It does NOT record any real vote — instantiate with a real registry and
// ratified members only.

/**
 * Minimal contract of the RatificationEngine used by TEOS Forge:
 *   recordVote({ proposalId, memberId, decision, councilId })
 *   tally(proposalId)
 *   quorumMet(proposalId, councilId)
 *   majorityApproved(councilId, tally)
 *   decide({ proposalId, councilId, proposalEngine, proposal })
 */

// Pseudo-implementation for illustration only.
export function recordVoteExample(
  ratificationEngine,
  { proposalId, memberId, decision, councilId }
) {
  if (!["APPROVE", "REJECT", "ABSTAIN"].includes(decision)) {
    throw new Error(`Invalid decision: ${decision}`);
  }

  // The engine refuses non-members and duplicate votes.
  const vote = ratificationEngine.recordVote({
    proposalId,
    memberId,
    decision,
    councilId,
  });

  // An audit entry (vote_recorded) is appended to the chain.
  return vote;
}

// After all votes are cast, the ratified proposal advances:
// ratificationEngine.decide({ proposalId, councilId, proposalEngine, proposal })
//   -> "RATIFIED" only if quorum met AND majority approves; else "REJECTED".