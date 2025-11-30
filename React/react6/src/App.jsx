import React from 'react'
import './App.css'
import Component1 from './components/Component1.jsx'

//Data Provider

import { DataProvider  } from './contexts/DataContext.jsx'
import { FormProvider } from './contexts/FormContext.jsx'
import Component2 from './components/Component2.jsx'
import Form1 from "./components/Form1.jsx"

function App() {
  return (
    <>
      <FormProvider>
       <Form1/>
      </FormProvider>
    </>
  )
}

export default App
