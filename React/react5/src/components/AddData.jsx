
import React, {  useState } from 'react'

const AddData = (props) => {

    const [form, setForm] = useState({
        name: "",
        difficulty: "",
        duration: 0,
        scope: "",
    });

    const handleChange = (e) => {
        let {name, value} = e.target;

        setForm(prev => {
            return{
                ...prev, [name]:value
            }
        })
    }

    
    const handleSubmit = (e) => {
        e.preventDefault();
        let language = form;
        language.duration = language.duration + " months";
        language.scope = language.scope.split(",")
        props.setLanguagesArray((prev) => {
            return [...prev, language]
        })

        setForm({
            name: "",
            difficulty: "",
            duration: 0,
            scope: ""
        })
    }


    return (
        <div className='bg-slate-200 min-h-screen w-full p-10'>
            <h2 className='text-4xl  font-bold text-blue-800 text-center mb-3'>Languages Form</h2>
            <form className='bg-slate-100 py-3' onSubmit={handleSubmit}>
                <div className='flex flex-col items-center'>
                    <div className='flex flex-col gap-2 w-1/2 my-2'>
                        <label htmlFor='language' className='font-thin text-xl'>Language : </label>
                        <input onChange={handleChange}  type="text" placeholder="Enter the name of language" className='p-2 grow rounded' name="name" value={form.name} required />
                    </div>
                    <div className='flex flex-col gap-2 w-1/2 my-2'>
                        <label htmlFor='language' className='font-thin text-xl'>Select the difficulty level : </label>
                        <select onChange={handleChange}  name="difficulty" value={form.difficulty} className='p-2 grow rounded focus:ring-2 outline-none' required>
                            <option value="">Select difficulty</option>
                            <option value="Easy">Easy</option>
                            <option value="Medium">Medium</option>
                            <option value="Hard">Hard</option>
                        </select>
                    </div>
                    <div className='flex flex-col gap-2 w-1/2 my-2'>
                        <label htmlFor='language' className='font-thin text-xl'>Select Months(1 to 12) : </label>
                        <input  onChange={handleChange}  type="range" max={12} step={1} name="duration" value={form.duration} className="p-2 grow rounded outline-none"  required/>
                    </div>
                    <div className='flex flex-col gap-2 w-1/2 my-2'>
                        <label htmlFor="scope">Scope (comma separated) : </label>
                        <input type="text" onChange={handleChange} placeholder='eg, web development, mobile development' name="scope" value={form.scope} className='p-2 grow rounded focus:ring-2 outline-none' required />
                    </div>

                    <div className='flex flex-row gap-3 justify-center items-center'>
                        <button type="submit" className="bg-green-400 font-bold rounded px-3 py-2" >Submit</button>
                        <button type="reset" className='bg-red-500 px-4 py-2 font-bold rounded'>Reset</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default AddData
