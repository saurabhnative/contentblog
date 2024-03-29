---
path: visualising-simplest-math-problem
date: 2021-11-07T14:59:06.649Z
title: Visualising the simplest Math problem no one can solve using React.js
description: >-
  Replicate a few of the visualisations of the 3x+1 series which is popularly
  known as collatz conjecture using react.js
---
Hello, amazing reader,   

Hope you are doing fine in your life. I wanted to share some interesting insights I had after watching the 3x+1 problem on Veritasium last week:-

\[Veritasium Youtube Video](https://youtu.be/094y1Z2wpJg)

\## Series Explanation

The rules of the series are as follows:-

\- Start with any positive integer n.    

\- Then each term is obtained from the previous term as follows: 

\- If the previous term is even, the next term is one half of the previous term. 

\- If the previous term is odd, the next term is 3 times the previous term plus 1.           

\- The conjecture is that no matter what value of n, the sequence will always reach 1.   

!\[Example.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1632038198074/kKasVp3b_.png)

Although the explanation is surprisingly easy to follow from the Youtube video above, no one has been able to prove the series yet.

\## Visualisation using react.js

The problem in itself is really interesting to watch, but I personally found the practical examples and visualisations used in explaining the problem quite fascinating. 

Therefore I wanted to see if I can replicate a few of the visualisations of the series which is popularly known as collatz conjecture using react.js this week. I was successful in building a basic graph of the first 10 numbers in the series as shown below:

!\[Screenshot 2021-09-17 at 7.51.14 PM.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1631888484109/Vc04Phv99.png)

You can directly check out the code for this graph here on Codesandbox:-

\[3x+1 in React.js](https://codesandbox.io/s/3x-1-problem-yvd7s?file=/src/components/seriesGeneration.js)

%\[https://codesandbox.io/s/3x-1-problem-yvd7s?fontsize=14&hidenavigation=1&theme=dark]

There is a utility function in the code to generate the series for a particular number:-

`gist:saurabhnative/51e3739906a7f847233e9ed026137dc2#index.html`

We then use this function in \`seriesGeneration\` component to create series for the first 10 numbers. The numbers are then visualised using  \[recharts](https://recharts.org/) library.

I am planning to build a few more visualisations on the same number series, so stay tuned for upcoming articles.
