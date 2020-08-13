---
path: reactjsprivateroutes
date: 2020-08-12T15:42:36.457Z
title: Creating private routes and handling session in react.js
description: >-
  Learn how store access tokens, build private routes and handle session in
  react.js
---
- In the previous tutorial, we covered how to create basic login and registration forms using react.js

- In today's tutorial, we are going to cover how to protect internal app pages from unauthorised access using client-side session token.

- We can set-up backend using this excellent and simple article on dev.to: Backend Setup and make changes as shown in the final API route as shown in this file: Github

- Now if you observe the response for login/registration APIs in the article you can find that there is an access-token returned in response:

```javascript {numberLines}
 res.status(200).json({
                        token
                    });
```

- We need to save this token on client-side for managing the user session. So after receiving the response from registration API we need to make the below change as shown below on line 6 in the \`RegistrationForm.js\` file:-

`gist:codeclassifiers/85c61cfd3887d3a5963ef11c09cf022c#responsestore.js`

- `localStorage.setItem` is used to store the token received from backend API to browser's local storage.
Similar change needs to be made in Login API in Login.js file after receiving the response from server as shown on line 34 here: [Login.js](https://github.com/codeclassifiers/loginforms/blob/develop-authenticated/src/components/LoginForm/LoginForm.js)   
- Next create a utils folder and file called PrivateRoute.js as shown below:

![Private Route](https://res.cloudinary.com/dk22rcdch/image/upload/v1597167097/Blogimages/PrivateRoute_sv6ejk.png "Private Route")   

- The code for Private Route is pretty straighforward:
`gist:codeclassifiers/f4de94ce0f4d5c9ce9c047b414121555#privateroute.js`

- We import the `Route` component from `react-router-dom` on line 2. On line 9 there is a condition to check where access-token is present in the browser's local storage. If a token is present then access to requested Component/Route is granted else user is redirected to the login page.

- Next, we make the Home Component in our application private by making below changes in the App.js file:
`gist:codeclassifiers/ff2dbb92c5cd6b7f1f44298c3cd4ea3f#privateroute2.js`

- By using `PrivateRoute` on line 7 above we make sure that the homepage is only accessible when a token is present on client-side.
- After this, we need to make sure that the access token has not expired in future API calls with private routes. For example, let's say any API written to fetch data within the homepage should send `token` in headers to check it's validity. If the token is invalid then the user should be redirected to the login page.  
- A sample API could be written in Home.js file as shown below:-
`gist:codeclassifiers/a014ce20ca6b1d3deff7341e51ce0210#fetchCall.js`
- Here we send the 'token' in headers section for checking its validity. The `auth` middleware written in out backend APIs takes care of checking token validity:-
`gist:codeclassifiers/82b05f37db71fc8028c8902ec2c6d3dd#auth.js`
- The last thing to do is to add a logout button in our application to the end-user session and redirect the user back to the login page. We can add a logout button in our app as shown below:-
`gist:codeclassifiers/324a38d9135fbff7eff304c46f1904bf#headerupdated.js`
- We have defined a `renderLogout` method on line 3 which displays a logout button in the header section if the user is on the home page. The `handleLogout` function on line 12 takes care of destroying session token on the client-side and redirecting user to the login page.
- This completes a short tutorial on creating private routes and handling authentication on client-side using react.js. 
The complete source code for till this section can be found here: [Github](https://github.com/codeclassifiers/loginforms/tree/develop-authenticated)
If you would like to see how to use this complete setup on a sample app then you can check out the quiz app which I created in this repo: [Github](https://github.com/codeclassifiers/quiz-app-frontend)
- If you have any doubts in this tutorial then reach out to me on [LinkedIn](https://www.linkedin.com/in/saurabh-mhatre/) or [Twitter](https://twitter.com/saurabhnative)
 
