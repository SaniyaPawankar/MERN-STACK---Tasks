import React, {createContext, useContext, useState} from 'react'

let DataContext = createContext()

const DataProvider = ({children}) => {

    let [count, setCount] = useState(0);

    const increaseCount = () => {
        setCount(prev => {
            return prev + 1;
        })
    }

    const decreaseCount = () => {
        setCount(prev => {
            return prev - 1;
        })
    }

    return(
        <DataContext.Provider value={{count,increaseCount,decreaseCount}}>
            {children}
        </DataContext.Provider>
    )
}


const useData = () => {
    return useContext(DataContext);
}


export {useData, DataProvider}