// Forms in React 

/* The standard way with Forms is to use Controlled Components. So we make React state to be the "single source of truth".*/

/* In HTML, form elements such as <input>, <textarea>, and <select> typically maintain their own state and update it based on user input.
   In React, mutable state is typically kept in the state property of components, and only updated with setState().
   
   We can combine the two by making the React state be the "single source of truth." Then the react component that renders a form also controls what happens in that form on
   subsequent user input. An input form element whose value is controlled by react in this way is called a "controlled component".
*/

import React, {useState} from 'react'

const FormComp1 = () => {

  let [fullName, setFullName] = useState("saniya");

  let handleNameChange = (event) => {
    event.preventDefault();
    setFullName(event.target.value);
  }
  return (
    <div>
      <form>
        <input placeholder='Enter your full name' onChange={handleNameChange} value={fullName} type="text"/>
        <button >Submit</button>
      </form>
    </div>
  )
}

export default FormComp1
