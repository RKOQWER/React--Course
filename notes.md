# Props ke through event handling hota hain aur uska naam on start hota hain.

# onClick{function to do things}

#  I copied a react project in my desktop. How do I run it:-
npm install
npm start

# new Date(2021, 8, 10),
      // year month day

# Component ke andar component ko define nahi kiya jaa sakta par kisi function ko likha jaa sakta hai.

# State in react: Agar aapke project me koi data hai jisko aap change karna chahte hain aur usko UI me bhi reflect karna chahte hain to aapko state ka concept use karna padega.

# State chnage hoti hain percomponent instance basis par.



# React Hook: 

#   const [title, setTitle] =  useState(props.title); Why const here?

# Is the setTitle immediate or schedule? They are scheduled.

#  The handleClick event handler is updating a local variable, index. But two things prevent that change from being visible:

# Local variables don’t persist between renders. When React renders this component a second time, it renders it from scratch—it doesn’t consider any changes to the local variables.

# Changes to local variables won’t trigger renders. React doesn’t realize it needs to render the component again with the new data.

# To update a component with new data, two things need to happen:

# Retain the data between renders.
# Trigger React to render the component with new data (re-rendering).


# Adding a state variable 

To add a state variable, import useState from React at the top of the file:

import { useState } from 'react';
Then, replace this line:

let index = 0;
with

const [index, setIndex] = useState(0);

# Hooks—functions starting with use—can only be called at the top level of your components or your own Hooks. You can’t call Hooks inside conditions, loops, or other nested functions. Hooks are functions, but it’s helpful to think of them as unconditional declarations about your component’s needs. You “use” React features at the top of your component similar to how you “import” modules at the top of your file.

# React is all about components

# Component is reusable piece of code. It is a function at the end.

# Component used to create custom HTML element.(for understanding not in interview)

# React is Js library.

# Js is based on imperative approach (we need to do all things by us) and REACT based on declarative approach (only you tell the end state)

# SPA(Single Page Application):- Ek html file aap load karate ho aur baaki ssare changes usi HTML file me aap karte ho dynamically.

#  Set up react:-

1. Install node.js
2. install vs code
3. create a folder app
4. move to that folder
5. npx create-react-app appname
6. move to appname
7. npm start

# package json: package.json is mainly used to manage and describe the dependencies, scripts, and metadata of a Node.js project.

# In summary, npm is primarily used for package management and running scripts defined in your project's package.json, while npx is used for executing packages or package binaries, making it easier to run commands from packages that you haven't installed globally or locally.

# index.js is like main function in c++. It is the first file to be executed

# App is first component in react

# npx create-react-app my-app
# cd my-app
# npm start

# React wala code ko js engine browser friendly banata hai. Iss liye jab hum log inspect element karte hain to jo code humlog  nahi likhe hain wo hae dikhta hai.

# npm start command convert karti hain react ke code ko browser friendly code (html, css ,js ) me.

# First letter of Componet should be capital

# JSX( Javascript xml code): It is basically html code inside javascript.

# We dont use class in JSX because in javascript class is reserved word.

# To get what is wriiten inside the custom tag we use {props.children} 

