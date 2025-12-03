import React from 'react'
import { useNavigate } from 'react-router-dom'

const About = () => {

    let navigate = useNavigate();

    return (
        <div className="w-screen h-screen flex flex-row justify-center items-center gap-6 bg-gray-100">
            <button className="px-8 py-3 bg-blue-600 text-white rounded-sm shadow  text-lg font-semibold" onClick={() => navigate("/")}>Home</button>
            <button className="px-8 py-3 bg-green-600 text-white rounded-sm shadow  text-lg font-semibold" onClick={() => navigate("/login")}>Login</button>
            <button className="px-8 py-3 bg-purple-600 text-white rounded-sm shadow text-lg font-semibold" onClick={() => navigate("/contact")}>Contact</button>
        </div>
    )
}

export default About
