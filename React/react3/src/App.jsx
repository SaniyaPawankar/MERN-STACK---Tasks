// import React, { useState} from 'react';
import Component1 from './components/Component1.jsx';
import Component2 from './components/Component2';
import ProductTab from './components/ProductTab.jsx';
import ProductTab1 from './components/ProductTab1.jsx';

function App() {
  
  // let [showData,setShowData] = useState(false);

  // const handleClick = () => {
  //   setShowData((prev) => {
  //     return !prev
  //   })
  // }

  return (
    <>
    <ProductTab/>
    <ProductTab1/>
     {/* <Component1/> */}
     {/* <Component2/> */}
      {/* {
        showData ? <div class="bg-green-300 p-30 w-40 h-20 text-center inline absolute start-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">Good Morning</div> : null
      }
      <button  className="bg-black px-3 py-2 font-bold text-white" onClick={handleClick}>Click Me!</button> */}
    </>
  )
}

export default App
