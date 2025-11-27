import React, {useState} from 'react'
import './App.css'
import AddData from './components/AddData.jsx'
import DisplayData from './components/DisplayData.jsx'

function App() {
  
  let [languagesArray, setLanguagesArray] = useState([]);

  return (
    <>
      <AddData setLanguagesArray={setLanguagesArray}/>
      <DisplayData languagesArray={languagesArray}/>
    </>
  )
}

export default App
