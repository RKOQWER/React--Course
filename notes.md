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



