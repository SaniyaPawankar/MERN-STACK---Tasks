import React from 'react';

const Comp2 = () => {
    return (
        <div className='bg-gray-700 w-full min-h-screen py-3'>
            <div className="navbar flex flex-row justify-between items-center text-white mx-5 ">
                <div className="logo">
                    <img src="../images/start-up.png" />
                    <h2 className='text-2xl font-bold'>Startup</h2>
                </div>
                <div className="nav-links flex flex-row items-center justify-around gap-6">
                    <a href="">Home</a>
                    <a href="">About</a>
                    <a href="">Pricing</a>
                    <a href="">Support</a>
                    <select name="" id="" className='text-white bg-gray-700'>
                        <option value="">Pages</option>
                        <option value="">1</option>
                        <option value="">2</option>
                        <option value="">3</option>
                    </select>
                </div>
                <div className="login flex flex-row items-center justify-around gap-3">
                    <a href="">Sign in</a>
                    <div className="bg-blue-500 text-white font-semibold rounded px-4 py-2">
                        <a href="">Sign Up</a>
                    </div>
                    <div className="dark-mode">
                        <i></i>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Comp2;
