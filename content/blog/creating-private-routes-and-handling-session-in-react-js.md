---
path: reactjsprivateroutes
date: 2020-08-12T15:42:36.457Z
title: Creating private routes and handling session in react.js
description: >-
  Learn how store access tokens, build private routes and handle session in
  react.js
---
## **Introduction**

In the previous tutorial we covered how to create basic login and registration forms using react.js

In today's tutorial we are going to cover how to protect internal app pages from unauthorised access using client side session token.

We can set-up backend using this excellent and simple article on dev.to: Backend Setup and make changes as shown in the final API route as shown in this file: Github

Now if you observe the response for login/registration APIs in the article you can find that there is an access-token returned in response:

```javascript
 res.status(200).json({
                        token
                    });
```
We need to save this token on client side for managing user session. So after receiving response from registration API we need to make the below change
`gist:codeclassifiers/907575c5bb21ba54019b7a08cda7a590#inputsubmission.js`
