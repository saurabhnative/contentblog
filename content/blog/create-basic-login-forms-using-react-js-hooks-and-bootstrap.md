---
path: loginformsusingreacthooks
date: 2020-08-15T15:00:16.251Z
title: Create basic login forms using react.js hooks and bootstrap
description: Create login pages using react.js
---
* So today I would like to cover how you can create login forms in react.js using hooks and bootstrap from scratch. In the end, you will have a UI like this one below:

![featured image](https://res.cloudinary.com/dk22rcdch/image/upload/v1597338639/Blogimages/1_screen3_pahzhf.png "Featured image")

* So let’s begin the journey…
* Some prerequisites for the project are that you need to have [node.js](https://nodejs.org/en/) and an editor like [Vscode](https://code.visualstudio.com/) installed on your system. Optionally you can also install the [yarn](https://classic.yarnpkg.com/en/docs/install) package manager. Now the first thing we need to do set up a new react.js project, so open up your cmd/terminal and run the below commands to create a new project using the [create-react-app](https://github.com/facebook/create-react-app) module and start your project:-
* ```javascript {numberedLines}
  npx create-react-app loginforms
  cd loginforms
  npm start
  ```
* If everything goes well you should get the below screen:-
  ![launch app image](https://res.cloudinary.com/dk22rcdch/image/upload/v1597504249/Blogimages/1_fS_ANudeXp3j18tHYv3JdA_b2on9i.png "App Launch image")
* Now open the loginforms folder in vscode and you will find mainly two folders viz src and public. Open index.html in the public folder and make the following edits:-\
   First, change the text within title and meta tags as per your requirements:-
  `gist:codeclassifiers/5c7dca7de4f329460357776753609e55#index.html`
* We are going to use bootstrap 4 in our project so head over to there official docs page here and add CSS and js links from the page to index.html as follows:-\
  `gist:codeclassifiers/ac9a32e6a0361ce7f0419dcfef332bcc#index.html`
* The complete file after all these changes will look like the one below:
  [Github File Link](https://github.com/codeclassifiers/loginforms/blob/master/public/index.html)
* Now let’s create a basic folder structure for our project so that all files are organized properly:-\
  ![files structure image](https://res.cloudinary.com/dk22rcdch/image/upload/v1597504688/Blogimages/1_Wzx62ntOX7_75f58AA1Zgg_cfprvx.png "File Structure image")
* We are adding a `components` and `constants` folders within src folder. The components folder will contain all the related components of the project. First, let us add a header component at the top of the page.
    For that create a folder named `Header` in components folder and then create a file called Header.js within that folder\
  ![header structure image](https://res.cloudinary.com/dk22rcdch/image/upload/v1597504810/Blogimages/1_WxoZDD0zWDocRIvf-oCxug_aqdlhj.png "Header Structure image")
* We are to going use bootstrap’s navbar component for creating our header. The code for the header component is as follows:-\
  `gist:codeclassifiers/00618f8a8bd17a6de89f94ea7b2fbf0d#Header.js`
* Now let’s import the Header component in App.js file and modify App.js as follows:
    `gist:codeclassifiers/79210006f116a0461f99f270a0b9de8d#App.js`
* If the code changes are correct you will be able to see the header in the webpage as shown below:-\
  ![Register app image](https://res.cloudinary.com/dk22rcdch/image/upload/v1597505075/Blogimages/1_WezyWkBnv84UDfko3oo9aw_ekbd5l.png "Register App image")  
* Next, let us add the registration form for the users. Create a RegistrationForm folder in components and add the below code to create user inputs with labels:-
  `gist:codeclassifiers/6cf04ff6d7ce54cb1e4a729aa8ad81cd#RegistrationForm.js`  
* We have added input for email on line no 8 and password inputs on 18 and 26. This will show inputs on-screen however we haven’t added a way to manage and store the value of text entered by user or action on submit button click so next let’s see how we can do that…
* So if you haven’t used hooks before here’s a brief introduction to react.js `useState` hook:-\
  “State variables are variables whose values can be dynamically updated in react.js `context` and we can use them to update various UI elements. `useState` hook provides a way to declare and update state variables in various react.js functional components.”
* Let’s see an example of how the `useState` hook can be used to handle values entered by the user in email and password input:-\
  `gist:codeclassifiers/83659bb2a05234e81161aaa2f8339fa8#
  useStateExample.js`
* useState hook typically returns two parameters viz the state variables and a function to update the state variables
* In the above example, we initialized email and password state values using useState hook on line no 3. The state object will contain the email and password values while the setState method is responsible for updating these values.\
  We passed this state variable values in the value field of inputs in line no 22 and 30 and the responsibility for updating the values lies with the `handleChange` function. We can make similar changes to `confirmPassword` input field
  Next, we need to send these details to the backend server. This will be handled in on click on submit button so let’s add a click event handler to register button for sending a request to backend:-
