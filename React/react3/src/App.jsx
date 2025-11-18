import React, { useState} from 'react';

function App() {
  
  let [showData,setShowData] = useState(false);

  const handleClick = () => {
    setShowData((prev) => {
      return !prev
    })
  }

  return (
    <>
      {
        showData ? <div class="bg-green-300 p-30 w-40 h-20 text-center inline absolute start-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">Good Morning</div> : null
      }
      <button  class="bg-black px-3 py-2 font-bold text-white" onClick={handleClick}>Click Me!</button>
    </>
  )
}

export default App
