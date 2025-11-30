import React from  'react'
import {useData} from "../contexts/DataContext.jsx"

const Component1 = () => {
  let{count, increaseCount} = useData()

//   let[value, setValue] = useState(count)

  return(
    <>
     <h1>Component 1</h1>
     <div>
        {count}
     </div>
     <button onClick={() => {increaseCount()}}>Increase</button>
     
    </>
  )
}

export default Component1