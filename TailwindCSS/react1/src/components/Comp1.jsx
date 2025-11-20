import React from 'react';

const Comp1 = () => {
    return(
        <>
        <div className="bg-stone-700  text-center text-blue-200 w-60 h-60 m-6 inline-block border-2 border-solid border-blue-600 ">Box1</div>
        <div className="bg-red-300  text-center text-fuchsia-600 w-60 h-60 m-6 inline-block border-4 border-double border-black" >Box2</div>
        <div className="bg-yellow-700  text-center text-pink-200 w-60 h-60 m-6 inline-block border-8 border-dotted border-red-950" >Box3</div>

        <div className="bg-gray-500  text-center text-blue-200 w-60 h-60 m-6 inline-block border-2 border-solid border-blue-600 ">Box4</div>
        <div className="bg-red-700  text-center text-fuchsia-600 w-60 h-60 m-6 inline-block border-4 border-dashed border-black" >Box2</div>
        <div className="bg-orange-300  text-center text-pink-200 w-60 h-60 m-6 inline-block border-8 border-double border-gray-500" >Box3</div>
        </>
    )
}

export default Comp1;