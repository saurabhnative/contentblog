---
path: csspreprocessors
date: 2020-08-17T15:32:41.546Z
title: 'Interview Series 1: Advantages and disadvantages of using CSS preprocessors'
description: In this article learn the advantages and disadvantages of CSS preprocessors
---
* A CSS preprocessor is a program/utility which lets us generate CSS from the preprocessor's own unique syntax. Most CSS preprocessors will add some features that don't exist in pure CSS, such as mixin, nesting selector, inheritance selector, and so on. 
* **Introduction**\
  These features make the CSS structure more readable and easier to maintain especially for large production level projects.\
  CSS preprocessors make it easy to automate repetitive tasks, reduce the number of errors and allow us to create reusable code snippets.\
  The three most popular and stable CSS preprocessors currently are Sass, LESS, and Stylus. Let's see how we use SASS in brief so that we get a basic idea about CSS preprocessors.
* **Sass**\
  Sass is the oldest CSS preprocessor, initially released in 2006. Sass can be written in two types of syntax. The \`.sass\` file extension uses the older syntax that is indentation-based and omits semicolons and curly brackets from the code. The newer and more widely used syntax belonging to the \`.scss\` file extension and uses the standard CSS syntax with braces and semicolons.\
  SCSS syntax:\
  \`gist:codeclassifiers/2b811eafea144dba7945c7fc63167d65#sample.scss\`\
  The code above declares a variable \`$primary-color\` and then it is used to apply the color body text.   
    \
  Same code with SASS syntax
  \`gist:codeclassifiers/7093ba199994f25f72e8a9b87b305eb8#sample.sass\`
  \
  Same code, when compiled to normal CSS, leads to: \
  \`gist:codeclassifiers/6793a416bf981ba2754c88ad07d82fab#sample.css\`
