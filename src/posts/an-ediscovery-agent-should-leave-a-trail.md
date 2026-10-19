---
title: An eDiscovery agent should leave a trail a lawyer can defend
date: 2026-10-19
category: Agents
excerpt: An agent that reviews documents is making decisions someone may have to explain to a judge. What it did matters as much as what it found.
related: recall-first-vs-precision-first, understanding-the-confusion-matrix
---

When an agent reviews documents for a matter, its output is not just a set of tags. It is part of a discovery process that the other side can challenge and that a lawyer signs off on. If the review is questioned, "the model marked it not relevant" is not an answer. The lawyer needs to show what was searched, what was decided, why, and how they know the result is good enough. I have found that this requirement shapes an eDiscovery agent more than any accuracy target does.

### What gets challenged
Disputes about a review are rarely about one document. They are about the process:

- **Scope**: which custodians, date ranges and sources were collected, and which were left out.
- **Search**: which queries or search terms were run, and who chose them.
- **Decisions**: why a document was coded not responsive, or withheld as privileged.
- **Stopping**: why review stopped where it did, and what evidence shows enough was found.

A human review team answers these with protocols, coding manuals and quality-control samples. An agent has to answer the same questions, and the only way it can is from its records.

### What to record
| Event | What to record | Why it matters |
|---|---|---|
| Search | Exact query, index snapshot, number of hits | Shows what was looked at, and lets someone rerun it |
| Decision | Document ID, label, reason, supporting text | Shows why, not just what |
| Model call | Model version, prompt version, settings | The same document can get a different answer from a different model |
| Human action | Who confirmed, overrode or escalated, and when | Separates what the agent proposed from what a lawyer decided |
| Validation | Sample drawn, results, recall estimate | The evidence that the review is good enough |

A single decision record might look like this:
```
{
  "doc_id": "ACME-0041872",
  "label": "not_responsive",
  "reason": "Office lunch order; no reference to the supply contract or its parties",
  "evidence": ["Who wants sushi on Friday?"],
  "model": "reviewer-v3.2",
  "prompt": "responsiveness-v14",
  "reviewed_by": null,
  "timestamp": "2026-10-12T09:41:07Z"
}
```

### A reason, not just a label
A label tells you what the agent decided. A reason tells you whether it decided for the right reason. Ask the agent to quote the text it relied on and check that the quote actually appears in the document. A reason that cites text which is not there is a warning sign worth catching automatically.

Reasons also make quality control faster. A reviewer checking a sample can read a one-line reason and a quote instead of re-reading the whole document, and a pattern of bad reasons ("mentions the company name, so responsive") points at a problem in the instructions, not just one wrong call.

### Reproducible, or at least explainable
If the same document is reviewed twice, it should get the same answer, or you should be able to say why it did not. That means pinning everything that can change the output: the model version, the prompt, the settings, and the snapshot of the collection that was searched.

Model versions are the trap. A matter can run for months, and a provider can update a model in the middle of it. If half the collection was coded by one version and half by another, the records should say so, and validation should cover both halves.

### Agent proposed, lawyer decided
Keep the agent's output and the human's decision as separate fields, never overwrite one with the other. When a reviewer overrides the agent, that disagreement is the most useful data you have: it measures the agent's error rate on the documents people actually checked, and it shows where the instructions need work.

It also keeps the responsibility where it belongs. The lawyer who certifies the production is relying on the process, and the records should show which decisions a person made and which were accepted from the agent.

### Proving it is good enough
This is the recall measurement from [recall-first vs precision-first](/blog/recall-first-vs-precision-first) again. Sample from the documents the agent coded not relevant, have people review that sample, and estimate how many relevant documents were left behind. Record the sample, who reviewed it and the result. That number, with the process behind it, is what answers "why did you stop here?".

### A trail is not a transcript
Dumping every token the model produced into a log feels thorough, and it is not much use. Nobody will read a million pages of model reasoning, and long free-text reasoning is easy to pick apart in a dispute. Structured records with short reasons and quoted evidence are easier to search, easier to sample and easier to explain.

### The takeaway
Accuracy is necessary but it is not what gets an agent's review accepted. What gets it accepted is being able to answer, for any document and any step, what was done, why, by whom and how you know it worked. Design the records before you design the agent, because adding them afterwards means reviewing the collection again.
