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
* ```javascript {numberLines: true}
  npx create-react-app loginforms
  cd loginforms
  npm start
  ```
* If everything goes well you should get the below screen:-
  ![launch app image](https://res.cloudinary.com/dk22rcdch/image/upload/v1597504249/Blogimages/1_fS_ANudeXp3j18tHYv3JdA_b2on9i.png "App Launch image")
* Now open the loginforms folder in vscode and you will find mainly two folders viz src and public. Open index.html in the public folder and make the following edits:-
   First, change the text within title and meta tags as per your requirements:-
  `gist:codeclassifiers/5c7dca7de4f329460357776753609e55#index.html`
* We are going to use bootstrap 4 in our project so head over to there official docs page here and add CSS and js links from the page to index.html as follows:-
  `gist:codeclassifiers/ac9a32e6a0361ce7f0419dcfef332bcc#index.html`
* The complete file after all these changes will look like the one below:
  [Github File Link](https://github.com/codeclassifiers/loginforms/blob/master/public/index.html)
* Now let’s create a basic folder structure for our project so that all files are organized properly:-\
  ![files structure image](https://res.cloudinary.com/dk22rcdch/image/upload/v1597504688/Blogimages/1_Wzx62ntOX7_75f58AA1Zgg_cfprvx.png "File Structure image")
* We are adding a `components` and `constants` folders within src folder. The components folder will contain all the related components of the project. First, let us add a header component at the top of the page.
    For that create a folder named `Header` in components folder and then create a file called Header.js within that folder\
  ![header structure image](https://res.cloudinary.com/dk22rcdch/image/upload/v1597504810/Blogimages/1_WxoZDD0zWDocRIvf-oCxug_aqdlhj.png "Header Structure image")
* We are to going use bootstrap’s navbar component for creating our header. The code for the header component is as follows:- 
  `gist:codeclassifiers/00618f8a8bd17a6de89f94ea7b2fbf0d#Header.js`
* Now let’s import the Header component in App.js file and modify App.js as follows:
    `gist:codeclassifiers/79210006f116a0461f99f270a0b9de8d#App.js`
* If the code changes are correct you will be able to see the header in the webpage as shown below:- 
  ![Register app image](https://res.cloudinary.com/dk22rcdch/image/upload/v1597505075/Blogimages/1_WezyWkBnv84UDfko3oo9aw_ekbd5l.png "Register App image")  
* Next, let us add the registration form for the users. Create a RegistrationForm folder in components and add the below code to create user inputs with labels:-
  `gist:codeclassifiers/6cf04ff6d7ce54cb1e4a729aa8ad81cd#RegistrationForm.js`  
* We have added input for email on line no 8 and password inputs on 18 and 26. This will show inputs on-screen however we haven’t added a way to manage and store the value of text entered by user or action on submit button click so next let’s see how we can do that…
* So if you haven’t used hooks before here’s a brief introduction to react.js `useState` hook:-
  “State variables are variables whose values can be dynamically updated in react.js `context` and we can use them to update various UI elements. `useState` hook provides a way to declare and update state variables in various react.js functional components.”
* Let’s see an example of how the `useState` hook can be used to handle values entered by the user in email and password input:-
  `gist:codeclassifiers/83659bb2a05234e81161aaa2f8339fa8#
  useStateExample.js`
* useState hook typically returns two parameters viz the state variables and a function to update the state variables
* In the above example, we initialized email and password state values using useState hook on line no 3. The state object will contain the email and password values while the setState method is responsible for updating these values. 
* We passed this state variable values in the value field of inputs in line no 22 and 30 and the responsibility for updating the values lies with the `handleChange` function. We can make similar changes to `confirmPassword` input field
* Next, we need to send these details to the backend server. This will be handled in on click on submit button so let’s add a click event handler to register button for sending a request to backend:-
  `gist:codeclassifiers/28e3caccf26bd060edb1810a3f64a121#handleClick.js`  
* So we first define handleSubmitClick function where we check if the password inputs match and call sendDetailsToServer function to make a backend API request else we will show an error to user that passwords do not match.
* axios is an npm module that is used to make API requests to the backend. You can find more information about it [here](https://www.npmjs.com/package/axios). Let’s add it to our project before proceeding further. 
* First go back to terminal/cmd and make sure in the project directory. Run the below command to add axios npm module:-  
* ```javascript {numberLines: true}
   npm install --save axios
  ```
* Now let’s go back to defining our sendDetailsToServer function:-
    You will need to create and set up a backend server for handling API requests. You can check out an excellent article on creating them using Node.js and MongoDB here:- [Backend set up article](https://dev.to/dipakkr/implementing-authentication-in-nodejs-with-express-and-jwt-codelab-1-j5i). Just keep one thing in mind that we are not using `username` field in frontend so if you are following above tutorial then do take care to remove the same. You can find a repo related to these changes here: [Github](https://github.com/codeclassifiers/quiz-app-backend/blob/master/routes/users.js).
  `gist:codeclassifiers/d37c85766183b7b651f6e701ed758d8e#sendDetailsToserver.js`
* We are making a post request to the server where `API_BASE_URL` is defined in the constants file.
  The complete code of RegistrationForm.js file can be found here:-\
  [Github Article](https://github.com/codeclassifiers/loginforms/blob/master/src/components/RegistrationForm/RegistrationForm.js)
* Next we will set-up [react-router](https://reacttraining.com/react-router/web/guides/quick-start) for displaying login and register pages at two different address paths. First, install react-router-dom npm module by entering the below command in cmd/terminal:-
  `npm install react-router-dom`
* Next set up react-router in App.js file of the project:-
  `gist:codeclassifiers/4d0b7e82811909cdad6536af183df441#App.js`
* Now if we run npm start command, then we should see the registration form in the home page route.
* Next, we create a login form by following almost a similar procedure and we can add a redirect link below both the forms to switch between login and registration. Finally, on receiving a success response from the server we can redirect the user to the home page.
* All these different routes need to be added in `App.js` file. We have also included a small AlertComponent to show errors while handling user inputs:-\
  `gist:codeclassifiers/606759228c831cbaaa2438c01712b3e8#AlertComponent.js`
* If you look at line no 3 you will find a props parameter passed in the component. props are values passed from the parent component to the child component. We can make use of props to update the component state based on changes in the parent component.
* Here we have made use of another react.js hook called useEffect on line no 12. It is useful for updating component level state variables based on changes in props received from the parent component. Basically it listens for changes in prop values and then executes code written within it based on those changes.
* You can find the complete source code for this project till this point on the Github repo:-
  [Codeclasifiers loginforms](https://github.com/codeclassifiers/loginforms/tree/develop-basic-code)  
* Feel free to check it out for reference, fork it and submit your own modifications via PRs anytime.
* Now I haven’t covered storing session cookie/token from the backend or created private authentication based routes in this tutorial mainly because I wanted to focus on UI and concept of react.js hooks. This means the homepage route is accessible even without login which defeats the purpose of having user authentication.
* In the second part, we will see how to store access token received from backend APIs locally and how to make the home route private. Check out the article here:\
  [Part 2: Creating private routes and handling session in react.js](https://coderwhodreams.com/blog/creating-private-routes-and-handling-session-in-react-js/)
* Bonus tips:-\
  **Input Icons**\
  You can add icons before input forms to make UI of the forms more appealing to the user.\
  **Session Management**\
  You need to manage client level sessions for the user in case of showing private routes. Do research about it a bit on the react-router site and try to create some of your own or check out the second article in this series to learn more: Article on the private routes.  
* **Parting Notes**\
  Thank you for reading. I hope I could teach you something new today. You can follow me on [Twitter](https://twitter.com/saurabhnative) or [LinkedIn](https://www.linkedin.com/in/saurabh-mhatre/) in case you need any guidance or have any doubts related to frontend development.
