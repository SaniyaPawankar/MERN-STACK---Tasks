import React, { useState } from "react";



const Component2 = () => {

    let [form, setForm] = useState({
        name: "",
        phone: "",
        email: "",
        address: ""
    })


    const handleInputChange = (event) => {
        let { name, value } = event.target
        setForm((prev) => {
            return { ...prev, [name]: value }
        })
    }

    const handleFormSubmit = (event) => {
        event.preventDefault();
        handleFormReset();
    }

    const handleFormReset = () => {
        setForm({
            name: "", phone: "", email: "", address: ""
        })
    }

    return (
        <div id="form" className="m-20">
            <form onSubmit={handleFormSubmit} className='w-1/2 flex flex-col gap-5'>
                <input onChange={handleInputChange} className="bg-gray-200 focus:outline-none focus:ring-3 ring-black-500 transition-all rounded p-4" type="text" placeholder="Enter your name." name="name" value={form.name} />
                <input onChange={handleInputChange} className="bg-gray-200 focus:outline-none focus:ring-3 ring-black-500 transition-all rounded p-4" type="tel" placeholder="Enter you phone number." name="phone" value={form.phone} />
                <input onChange={handleInputChange} className="bg-gray-200 focus:outline-none focus:ring-3 ring-black-500 transition-all rounded p-4" type="email" placeholder="Enter your email" name="email" value={form.email} />
                <textarea onChange={handleInputChange} className="bg-gray-200 focus:outline-none focus:ring-3 ring-black-500 transition-all rounded p-4" type="text" placeholder="Enter Address" name="address" value={form.address} rows={10}></textarea>
                <button type="submit" className="bg-green-400 p-4 rounded hover:bg-green-500 font-bold transition">Submit</button>
                <button className='bg-blue-400 p-3 rounded hover:bg-blue-500 font-bold transition' onClick={handleFormReset}>Reset</button>
            </form>
        </div>
    )
}

export default Component2
