import React, { useState } from "react";

const Component1 = () => {
    let [ data, setData ] = useState("");

    let [error, setError] = useState({
        status: false,
        message: "some err"

    })

    const handleInputChange = (event) => {
        console.log(event.target.value);
        if (data.includes("hello")) {
            setError({
                status: true,
                message: ` "${data}" is invalid`
            })
        }
        setData(event.target.value);
    }


    return (
        <>
            <form className="flex flex-col gap-10 my-30 mx-20 mt-20 mb-20 p-20" action="">
                <input  onChange={handleInputChange}  className="bg-blue-100 focus:outline-none focus:ring-2 ring-black-500 transition-all " type="text" placeholder="enter the input" value={data}/>

                {
                    error.status ?
                    <div className='text-center font-bold error-message bg-red-300 p-4 rounded border-2 border-red-700'>{error.message}</div>
                    : null
                }
            </form>
        </>
    )

}




export default Component1;












