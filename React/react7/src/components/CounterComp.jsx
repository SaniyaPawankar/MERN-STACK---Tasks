/*----------------------------useEffect()--------------------------------------------------*/

// The Effect Hook lets you perform side effects in function components
// Data fetching, setting up a subscription, and manually changing the DOM in React
// components are all examples of side effects.

import React, { useState, useEffect } from 'react'

const CounterComp = () => {

    // Two separate state variables
    let [countx, setCountx] = useState(0);
    let [county, setCounty] = useState(0);

    // Increase countx
    let increseCountx = () => {
        setCountx((prev) => prev + 1);
    }

    // Decrease county
    let decreseCounty = () => {
        setCounty((prev) => prev - 1);
    }

    /* useEffect with [countx]
       This effect runs:
       - On the first render
       - Whenever countx changes
    */
    useEffect(function printSomething() {
        console.log("Side Effect triggered because countx changed");
    }, [countx]);

    return (
        <div>
            <h2>CountX: {countx}</h2>
            <button onClick={increseCountx}>+1</button>

            <h2>CountY: {county}</h2>
            <button onClick={decreseCounty}>-1</button>
        </div>
    )
}

export default CounterComp;



// useEffect runs after the component renders and its behavior depends on the dependency array:

// useEffect(callback, [])
// Runs only once when the component mounts.
// Use for: initial API calls, initial setup, running code once.

// useEffect(callback, [value])
// Runs when the specified value changes.
// Use for: reacting to state/prop changes.

// useEffect(callback, [a, b, c])
// Runs when any value in the array changes.
// Use for: handling updates from multiple states.

// useEffect(callback)
// Runs after every render.
// Use only when necessary, usually avoided.

// In general, useEffect is used for performing tasks that should happen outside the normal UI rendering process, such as data fetching, logging, subscriptions, and updating external systems.