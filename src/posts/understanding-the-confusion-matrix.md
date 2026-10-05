---
title: Understanding the confusion matrix in a simple way
category: Machine Learning
excerpt: Accuracy alone can make a useless classifier look great. The confusion matrix shows where a model is actually right and wrong, and which mistakes it makes.
---

A classifier can be highly accurate and still be useless. The confusion matrix is the simplest tool for seeing why, because it shows not just how often a model is wrong but which kind of wrong it is.

### The matrix
For a binary classifier, every prediction lands in one of four cells. Rows are the actual labels, columns are what the model predicted.

| | Predicted positive | Predicted negative |
|---|---|---|
| **Actually positive** | True Positive (TP) | False Negative (FN) |
| **Actually negative** | False Positive (FP) | True Negative (TN) |

- **True Positive**: the model said yes and it was right.
- **False Positive**: the model said yes but the answer was no.
- **True Negative**: the model said no and it was right.
- **False Negative**: the model said no but the answer was yes.

### The metrics
**Accuracy** is the share of all predictions that were correct.
```
Accuracy = (TP + TN) / (TP + TN + FP + FN)
```

**Precision** asks: of everything the model flagged, how much was right?
```
Precision = TP / (TP + FP)
```

**Recall** asks: of everything it should have found, how much did it find?
```
Recall = TP / (TP + FN)
```

**F1-score** is the harmonic mean of the two, so it is only high when both are.
```
F1 = 2 * (Precision * Recall) / (Precision + Recall)
```

### Why accuracy is not enough
When positives are rare, a model that always predicts negative is right most of the time, so its accuracy looks excellent. It also never finds a single positive. Recall exposes that immediately: it is 0.

This happens whenever the classes are imbalanced, which is most real problems: fraud, defects, rare diseases.

### Which metric to care about
It depends on which mistake costs more.

- When a miss is expensive, optimise for **recall**. In medical screening, a missed case is usually a bigger problem than a follow-up test that turns out to be unnecessary.
- When a false alarm is expensive, optimise for **precision**. A spam filter that buries a real email does more harm than one that lets some spam through.
- When both matter and you need a single number, use **F1**.

Precision and recall pull against each other. Lowering the decision threshold flags more positives, which raises recall and usually lowers precision. The confusion matrix at a given threshold is a snapshot of that trade-off, and choosing the threshold is a decision about the problem, not about the model.
