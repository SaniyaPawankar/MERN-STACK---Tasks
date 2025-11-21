import React, { useState } from "react";

const Component2 = () => {

    let [form, setForm] = useState({
        name: "",
        phone: "",
        email: "",
        address: ""
    })

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;



    let [formEntries, setFormEntries] = useState([]);

    const handleInputChange = (event) => {
        let { name, value } = event.target
        setForm((prev) => {
            return { ...prev, [name]: value }
        })
    }


    // const checkFormData = (formEntries) => {
    //     if()
    // }

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
            name: "", phone: "", email: "", address: ""
        })
    }

    return (
        <div id="form" className="m-20">
            <form onSubmit={handleFormSubmit} className='w-1/2 flex flex-col gap-5'>
                <input onChange={handleInputChange} className="bg-gray-200 focus:outline-none focus:ring-3 ring-black-500 transition-all rounded p-4" type="text" placeholder="Enter your name." name="name" value={form.name} />
                <input onChange={handleInputChange} className="bg-gray-200 focus:outline-none focus:ring-3 ring-black-500 transition-all rounded p-4" type="tel" placeholder="Enter you phone number." name="phone" value={form.phone} />
                <input onChange={handleInputChange} className="bg-gray-200 focus:outline-none focus:ring-3 ring-black-500 transition-all rounded p-4" type="email" placeholder="Enter your email" name="email" value={form.email} />
                {
                    form.email && !emailRegex.test(form.email) && (
                        <span className="text-red-500 text-sm">Invalid email format</span>
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
