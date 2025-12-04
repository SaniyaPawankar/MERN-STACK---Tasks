import Login from "./components/Login.jsx"
import Home from "./components/Home.jsx"
import About from "./components/About.jsx"
import Contact from "./components/Contact.jsx"

import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import CounterComp from "./components/CounterComp.jsx"


function App() {


  return (
    <>
      {/* <FormComp1/> */}
      {/* <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router> */}

      <CounterComp/>

    </>
  )
}

export default App
