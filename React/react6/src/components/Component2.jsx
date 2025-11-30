import React from 'react'
import { useData } from '../contexts/DataContext'

const Component2 = () => {
   
    let{count,decreaseCount} = useData();

    return (
        <>
        <h1>Component2</h1>
        <div>
            {count}
        </div>
        <button onClick={() => {decreaseCount()}}>Decrease</button>
        </>
    )
}

export default Component2