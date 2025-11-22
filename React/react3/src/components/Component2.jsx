import React, { useState } from "react";

const Component2 = () => {

    let [form, setForm] = useState({
        name: "",
        phone: "",
        email: "",
        address: "",
        password: ""
    })

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const nameRegex =  /^[A-Za-z]{3,}(?:\s+[A-Za-z]{3,})+$/;
    const phoneRegex = /^[6-9]\d{9}$/;
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/




    let [formEntries, setFormEntries] = useState([]);

    const handleInputChange = (event) => {
        let { name, value } = event.target
        setForm((prev) => {
            return { ...prev, [name]: value }
        })
    }


   

    const handleFormSubmit = (event) => {
        event.preventDefault();

        // Check if any field is empty
        if (!form.name || !form.phone || !form.email || !form.address) {
            alert("Please fill all the fields!");
            return;
        }


        setFormEntries(prev => {
            return [...prev, form]
        })

        console.log(formEntries);

        handleFormReset();

    }

    const displayFormData = (item, index) => {
        return (
            <tr key={index} className="bg-neutral-primary border-b border-default">
                <td className="px-6 py-4">{item.name}</td>
                <td className="px-6 py-4">{item.phone}</td>
                <td className="px-6 py-4">{item.email}</td>
                <td className="px-6 py-4">{item.address}</td>
            </tr>
        )
    }

    const handleFormReset = () => {
        setForm({
            name: "", phone: "", email: "", address: "", password: ""
        })
    }

    return (
        <div id="form" className="m-20">
            <form onSubmit={handleFormSubmit} className='w-1/2 flex flex-col gap-5'>
                <input onChange={handleInputChange} className="bg-gray-200 focus:outline-none focus:ring-3 ring-black-500 transition-all rounded p-4" type="text" placeholder="Enter your name." name="name" value={form.name} />
                {
                    form.name && !nameRegex.test(form.name) && (
                        <div className="text-red-600 text-sm bg-red-50 border border-red-300 p-2 rounded">
                            Name must contain only letters and be atleast 3 characters long.
                        </div>
                    )
                }
                <input onChange={handleInputChange} className="bg-gray-200 focus:outline-none focus:ring-3 ring-black-500 transition-all rounded p-4" type="tel" placeholder="Enter you phone number." name="phone" value={form.phone} />
                {
                    form.phone && !phoneRegex.test(form.phone) && (
                        <div className="text-red-600 text-sm bg-red-50 border border-red-300 p-2 rounded">
                            Please enter a valid 10-digit phone number starting with 6,7,8 or 9.
                        </div>
                    )
                }
                <input onChange={handleInputChange} className="bg-gray-200 focus:outline-none focus:ring-3 ring-black-500 transition-all rounded p-4" type="email" placeholder="Enter your email" name="email" value={form.email} />
                {
                    form.email && !emailRegex.test(form.email) && (
                        <div className="">
                            Please enter a valid email address (example: name@example.com).
                        </div>
                    )
                }
                <input onChange={handleInputChange} className="bg-gray-200 focus:outline-none focus:ring-3 ring-black-500 transition-all rounded p-4" type="password" placeholder="" name="password" value={form.password}/>
                {
                    form.password && !passwordRegex.test(form.password) && (
                        <div className="bg-red-50 text-red-700 border border-red-300 p-3 rounded text-sm">
                            <p className="font-semibold">Password must contain:</p>
                            <ul className="list-disc ml-5 mt-1">
                                <li>At least 8 characters</li>
                                <li>One uppercase letter</li>
                                <li>One lowercase letter</li>
                                <li>One number</li>
                            </ul>
                        </div>
                    )
                }
                <textarea onChange={handleInputChange} className="bg-gray-200 focus:outline-none focus:ring-3 ring-black-500 transition-all rounded p-4" type="text" placeholder="Enter Address" name="address" value={form.address} rows={10}></textarea>
                <button type="submit" className="bg-green-400 p-4 rounded hover:bg-green-500 font-bold transition">Submit</button>
                <button className='bg-blue-400 p-3 rounded hover:bg-blue-500 font-bold transition' onClick={handleFormReset}>Reset</button>
            </form>
            {
                (formEntries.length == 0) ? null :
                    <table className="w-full text-sm text-left rtl:text-right text-body my-20">
                        <thead className="text-sm text-body bg-neutral-secondary-soft border-b rounded-base border-default">
                            <tr className="bg-black text-white">
                                <th scope="col" className="px-6 py-3 font-medium">Name</th>
                                <th scope="col" className="px-6 py-3 font-medium">Phone</th>
                                <th scope="col" className="px-6 py-3 font-medium">Email</th>
                                <th scope="col" className="px-6 py-3 font-medium">Address</th>
                            </tr>
                        </thead>
                        <tbody>
                            {formEntries.map(displayFormData)}
                        </tbody>

                    </table>
            }
        </div>
    )
}

export default Component2


