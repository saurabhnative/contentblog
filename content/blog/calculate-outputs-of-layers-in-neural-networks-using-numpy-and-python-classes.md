---
path: layeroutputinneuralnetworks
date: 2020-06-17T01:17:27.785Z
title: Calculate outputs of layers in neural networks using numpy and python classes
description: A short article on how to calculate layer outputs using numpy classes
---
* Introduction
  * In the last [article](https://coderwhodreams.com/blog/how-to-calculate-dot-product-in-perceptrons/) we covered how dot product is used to calculate output in a a neuron of a neural network.
  * For just a brief recap here are the essential parts of a node in neural network
    ![Perceptron parts](https://res.cloudinary.com/dk22rcdch/image/upload/v1592035333/Blogimages/Perceptron.001_mw0jtq.jpg "Parts of perceptron")
  * We calculate the output using the formula
    ![Calculation  of output](https://res.cloudinary.com/dk22rcdch/image/upload/v1592357045/Blogimages/Screenshot_2020-06-17_at_6.53.42_AM_lyfb5v.png "Calculation of output")
  * In today's article, we are going to understand how to calculate the output value in neural networks using numpy and python class.
* Let's say we have a set of inputs in for our neural network as follows:

```python
# Implement multilayer neural network using numpy
import numpy as np
#Input Values
X = [[1,2,5,7],
    [0.5,0.6,0.7,0.8],
    [1.2,2.1,2.2,1],
    [1.3,4.5,6.7,8.9]    
   ]
```

* First step we do is initialise a class in Python for our layer as shown below:

```python
  #Class for creating layer
  class Layer_Dense:
      def __init__(self, n_inputs, n_neurons):
          self.weights = 0.10 * np.random.randn(n_inputs, n_neurons)
      self.biases = np.zeros((1, n_neurons))  
```

In line no 2 we initialised a class for our layer. The `__init__` method helps us to initialise the attributes in a class. 
The first variable we define in the init method is weights array with random values. We make use of np.random method to initialise it with random values. 
Next we initialise the bias values in an array with zero values initially.

* Now we can calculate the output of the layer with the formula shown above as follows:

```python
     def forward(self, inputs):
        self.output = np.dot(inputs, self.weights) + self.biases
```

* We can then pass the output from one layer to another as followed:

```python
#Sample layer example
layer1 = Layer_Dense(4,5)
layer2 = Layer_Dense(5,2)

layer1.forward(X)
# print(layer1.output)
layer2.forward(layer1.output)
print(layer2.output)
```

You can find complete code for the example here: [Github](https://github.com/codeclassifiers/nnfs/blob/master/6_Layers_with_Numpy.py)

* This covers a short introduction on calculation of layer outputs in numpy. In the next article we will see how to combine this with an activation function to get a basic working neural network.
* References: [Neural Networks from Scratch](https://www.youtube.com/watch?v=TEWy9vZcxW4&list=PLQVvvaa0QuDcjD5BAw2DxE6OF2tius3V3&index=4) by Sentdex
