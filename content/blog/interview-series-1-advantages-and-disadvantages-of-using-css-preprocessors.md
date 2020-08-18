---
path: csspreprocessors
date: 2020-08-17T15:32:41.546Z
title: 'Interview Series 1: Advantages and disadvantages of using CSS preprocessors'
description: In this article learn the advantages and disadvantages of CSS preprocessors
---
<center>
<img src="https://res.cloudinary.com/dk22rcdch/image/upload/v1597723781/Blogimages/webdev_juqaex.png" height=400/>     
<div>Image by gTheMesh from Pixabay</div>
</center>   

* A popular frontend development question asked in interviews is _'Do you use CSS preprocessors? What are their advantages and disadvantages?'_
  Let's learn about CSS preprocessors and how to answer this question in interviews.

* A CSS preprocessor is a program/utility which lets us generate CSS from the preprocessor's own unique syntax. Most CSS preprocessors will add some features that don't exist in pure CSS, such as mixin, nesting selector, inheritance selector, and so on. 
* **Introduction**\
  These features make the CSS structure more readable and easier to maintain especially for large production level projects.\
  CSS preprocessors make it easy to automate repetitive tasks, reduce the number of errors and allow us to create reusable code snippets.\
  The three most popular and stable CSS preprocessors currently are Sass, LESS, and Stylus. Let's see how we use SASS in brief so that we get a basic idea about CSS preprocessors.
* **Sass**\
   Sass is the oldest CSS preprocessor, initially released in 2006. Sass can be written in two types of syntax. The `.sass` file extension uses the older syntax that is indentation-based and omits semicolons and curly brackets from the code. The newer and more widely used syntax belonging to the `.scss` file extension and uses the standard CSS syntax with braces and semicolons.\
   SCSS syntax:\
   `gist:codeclassifiers/2b811eafea144dba7945c7fc63167d65#sample.scss`\
  The code above declares a variable `$primary-color` and then it is used to apply the color body text.
   Same code with SASS syntax\
   `gist:codeclassifiers/7093ba199994f25f72e8a9b87b305eb8#sample.sass`
   Same code, when compiled to normal CSS, leads to:\
   `gist:codeclassifiers/6793a416bf981ba2754c88ad07d82fab#sample.css`\  
   As we can same colour code can be used twice using SCSS syntax by declaring variables. You can find more information on the topic here: [SASS docs](https://sass-lang.com/guide)
* **Advantages of using CSS Preprocessors** 
  * **Option to add variables, mixins and functions for code reusability**\
    Basic CSS is direct and offers less flexibility. With CSS Preprocessor, we can add variables and functions which facilitates easier and efficient development. It also makes our code more organised and clean.
  * **Hierarchy**\
    With CSS preprocessors it is easy to group parent and child elements into modular blocks which allow us to manage code easily.
      `gist:codeclassifiers/997b349eab2bef60c46338902eac7e03#alert.scss`\
    The above code when compiled to CSS yields:\
       `gist:codeclassifiers/17096f0e86f012aba012fdd37384678e#alert.css`\
    As we can see in the original SCSS snippet it's easier to write styles for nested components using preprocessor and also the code becomes easier to maintain.  
  * **Easy to join multiple files**\
    CSS Preprocessors offers a special functionality of joining multiple stylesheets into one. We can create different files for each screen or pages and then import them all in the main CSS file.\
    After that, only the main file needs to be imported on the website and internal files will be read from the server.\
    A major advantage of this approach is that multiple calls to the server for CSS files are avoided.
* **Disadvantages of using CSS Preprocessors** 
  * **Compilation takes longer time**\
    Compilation times can be really slow, even when using the best tool mainly because SASS compiler run every time we make file minor file changes. We know that feeling when live reload takes a lot of time while developing website mainly because every SASS file needs to be converted into CSS before the output can be shown on the browser.
  * **They can produce very large CSS files**\
    Source files may be small, but the generated CSS could be huge which can increase time for the request to complete. 
  * **Extra Tooling and developer inconvenience**\
    CSS preprocessors require extra tooling and knowledge about using the preprocessor properly. This preprocessors to be understood and their corresponding libraries need to be maintained and upgraded from time to time.
* This completes the first part of the interview series questions. We will cover some more topics and questions in upcoming articles. You can connect with me on [LinkedIn](https://www.linkedin.com/in/saurabh-mhatre/) or [Twitter](https://twitter.com/saurabhnative) for getting guidance or solving doubts related to frontend development.
