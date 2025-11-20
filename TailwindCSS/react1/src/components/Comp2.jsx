import React from 'react';

const Comp2 = () => {
    return (
        <>
        <div className="bg-sky-300 m-10">
            <div className="bg-stone-700  text-center text-blue-200 w-32 h-32 m-6 inline-block border-t-4 border-solid border-blue-600 "></div>
            <div className="bg-red-300  text-center text-fuchsia-600 w-32 h-32 m-6 inline-block  border-b-4 border-double border-black"></div>
            <div className="bg-yellow-700  text-center text-pink-200 w-32 h-32 m-6 inline-block border-l-4 border-dotted border-red-950 " ></div>

            <div className="bg-gray-500  text-center text-blue-200 w-32 h-32 m-6 inline-block  border-r-4 border-solid border-blue-600 "></div>
            <div className="bg-red-700  text-center text-fuchsia-600 w-32 h-32 m-6 inline-block  border-x-4  border-dashed border-black "></div>
            <div className="bg-orange-300  text-center text-pink-200 w-32 h-32 m-6 inline-block border-y-4  border-double border-gray-500 "></div>
        </div>

        <div className="divide-y-4 divide-blue-500 m-10">
            <div className="w-40 h-40 bg-slate-400 ">Item 1</div>
            <div className="w-40 h-40 bg-green-400 ">Item 2</div>
            <div className="w-40 h-40 bg-yellow-300 ">Item 3</div>
        </div>

        <div className="divide-x-4 divide-blue-500 m-10">
            <div className="w-40 h-40 bg-slate-400 inline-block">Item 1</div>
            <div className="w-40 h-40 bg-green-400 inline-block">Item 2</div>
            <div className="w-40 h-40 bg-yellow-300 inline-block">Item 3</div>
        </div>
        </>
    )
}

export default Comp2;