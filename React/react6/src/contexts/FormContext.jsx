//react/src//contexts/FormContext.jsx

import React, {useContext, createContext, useState} from 'react'

let FormContext = createContext()

const FormProvider = ({children}) => {

    let [input, setInput] = useState("Good")

    const updateInput = (newValue) => {
        setInput(newValue)
    }

    return (
       <FormContext.Provider value={{input,updateInput}}>
        {children}
       </FormContext.Provider>
    )
    
}

const useFormContext = () => {
    return useContext(FormContext);
}

export {FormProvider, useFormContext}