//react6/src/components/Form1.jsx
import React from 'react'
import { useFormContext } from '../contexts/FormContext.jsx'

const Form1 = () => {

 let {input, updateInput} = useFormContext()

  return (
    <div>
      <h2>Form Data</h2>
      <input 
        type="text" 
        name="name" 
        value={input} 
        onChange={(e) => updateInput(e.target.value)}
      />
      <h3>{input}</h3>
    </div>
  )
}

export default Form1
