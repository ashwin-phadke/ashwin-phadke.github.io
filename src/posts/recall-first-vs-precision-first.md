---
title: Recall-first vs precision-first: tuning the same RAG pipeline for eDiscovery and legal research
date: 2026-10-05
category: Retrieval
excerpt: eDiscovery and legal research can run on the same hybrid retrieval pipeline, but they want opposite things from it. One cannot afford to miss a document, the other cannot afford to show a wrong one.
---

A hybrid retrieval pipeline has the same parts whatever you use it for: a keyword index, an embedding index, a way to merge the two, and usually a reranker. I have worked on that pipeline for both eDiscovery and legal research, and the two pull its settings in different directions. The reason is the trade-off from the confusion matrix: which mistake costs more.

### Two tasks, two expensive mistakes
In **eDiscovery**, the question is "find every document in this collection that is relevant to the matter". The expensive mistake is a false negative. A relevant document that was never retrieved is never reviewed, and nobody knows it was missed. A false positive is cheap by comparison: a reviewer, or a later model, looks at it and discards it.

In **legal research**, the question is "which authorities answer this issue?". The attorney, and the model writing the answer, will only read the first few results. The expensive mistake is a false positive: a case that looks on point but is not, sitting in the top five, either wastes the reader's time or ends up cited in the answer. Missing the tenth most relevant case rarely matters if the first three are right.

So eDiscovery is a recall problem and legal research is a precision problem, and that decides every setting below.

### The knobs
| Knob | Recall-first (eDiscovery) | Precision-first (legal research) |
|---|---|---|
| Candidates per retriever | Large | Small |
| Merging BM25 and embeddings | Union: keep what either finds | Favour what both agree on |
| Score threshold | Low, or none | High |
| Query expansion | Aggressive | Minimal |
| Reranker | Orders the review queue | Cuts the list to a handful |
| Nothing good found | Return the weak matches anyway | Say that nothing was found |
| Metric to watch | Recall at a fixed review budget | Precision@k, MRR |

### Merging the two retrievers
BM25 and embeddings fail in different places. BM25 finds exact strings: a party name, a docket number, a defined term, a statute section. It misses a document that says the same thing in different words. Embeddings find the paraphrase and miss the exact identifier.

For recall, that difference is the point. Take the **union** of both result lists, because a document found by only one retriever is exactly the document the other would have lost.

For precision, **agreement** is the signal. A common way to merge is reciprocal rank fusion, which scores each document by its rank in every list it appears in:
```
score(d) = sum over retrievers of 1 / (k + rank(d))
```
A document ranked highly by both retrievers beats one ranked highly by only one. Keep the top of that fused list and drop the rest.

### Thresholds and candidate size
This is the decision threshold from the confusion matrix again. Lowering it lets more documents through, which raises recall and lowers precision.

In the recall-first setting, pull a large candidate set and set the threshold low. The cost is volume, and volume is something the next stage can handle. In the precision-first setting, a small candidate set and a high threshold keep the context short and clean, which matters because everything retrieved is handed to a model that will try to use it.

### Query expansion
Collections in eDiscovery are written by people who were not trying to be found: nicknames, abbreviations, project code names, misspellings. Expanding the query with synonyms and variants catches documents the original wording would miss. Each expansion also brings in noise, which is acceptable here.

In legal research the same expansion causes drift. A query about one doctrine widens into its neighbours, and the top results fill with cases that are related but not on point. Keep the query close to the issue as stated.

### What the reranker is for
The reranker is the same model in both pipelines and does a different job in each. In eDiscovery it does not remove anything. It **orders** the candidates so the most likely relevant documents are reviewed first. In legal research it **filters**: score the candidates, keep the top few, discard the rest.

### When nothing matches
A recall-first pipeline should return its weak matches, clearly ranked low, because a human will make the final call. A precision-first pipeline should be able to return nothing. An answer that says "no authority found" is more useful than one built on the best of a bad set, because that is how a wrong citation gets written.

### Measuring it
Precision is the easy one to measure: look at the top k results and count how many are right.

Recall is harder, because the missing documents are by definition the ones you did not see. The usual approach is to sample from the documents that were **not** retrieved, have them reviewed, and use the rate of relevant documents in that sample to estimate how many were left behind. Without that sample, a recall number is a guess.

### The takeaway
The components did not change between the two products. What changed was the answer to one question: is it worse to miss something or to show something wrong? Decide that first, write it down, and most of the tuning decisions follow from it.
