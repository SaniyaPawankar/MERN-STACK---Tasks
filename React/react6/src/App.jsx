import React from 'react'
import './App.css'
import Component1 from './components/Component1.jsx'

//Data Provider

import { DataProvider  } from './contexts/DataContext.jsx'
import Component2 from './components/Component2.jsx'

function App() {
  return (
    <>
      <DataProvider>
       <Component1/>
       <Component2/>
      </DataProvider>
    </>
  )
}

export default App
