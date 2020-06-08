---
path: dotproductinnumpy
date: 2020-06-08T17:55:01.756Z
title: How to calculate dot product in perceptrons?
description: How to calculate dot product in perceptrons?
---
Neural networks are a collection of individuals nodes called as artificial neurons or perceptrons.

Each perceptron takes in an input array, multiples it with weights array and add a bias value to create a computed sum.

This computed computed is passed to an activation function to compute the final output value of a neuron.

We can see the basic parts of a perceptron below:

![Example of a perceptron](/../assets/perceptron.001.jpeg "Example of a perceptron")

We can calculate the summation value of neuron inputs, weight and bias in the for a sample neuron as explained in example below:

```
#Example of dot product using numpy
import numpy as np

#Sample input to perceptron
inputs = [1.2, 2.2, 3.3, 2.5]

#Weights passed to perceptron
weights = [0.4,0.6,-0.7, 1.1]

#bias for a particular perceptron
bias = 2

#Take dot product between weights and input 
#and add bias to the summation value
output = np.dot(inputs, weights) + bias
print(output)

#Output:-
4.24
```

That's it for today's short tutorial on dot product using numpy.
Reference:
[Neural  Networks from Scratch by SentDex](https://www.youtube.com/watch?v=tMrbN67U9d4&t=807s)
