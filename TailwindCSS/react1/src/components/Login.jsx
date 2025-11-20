import React from "react";


const Login = () => {
    return (
        <div className="bg-gray-100 flex items-center justify-center m-10 p-10">
            <div className="bg-white w-96 p-9 rounded-xl shadow-xl border border-gray-300">
                <h3 className="text-3xl font-bold text-center text-gray-600" >Login</h3>
                <form>
                    <label className="text-gray-700 font-medium">Email</label>
                    <input type="email" className="w-full p-3 my-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue" placeholder="Enter your email" />
                    <label className="text-gray-700 font-medium ">Password</label>
                    <input type="password" className="w-full p-3 my-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue" placeholder="" />
                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-3 my-3 rounded-lg shadow-md hover:bg-blue-700 transition"
                    >
                        Login
                    </button>
                    <p className="text-center text-gray-600 text-sm mt-5">
                        Don't have an account?{" "}
                        <a href="#" className="text-blue-600 font-medium">
                            Sign Up
                        </a>
                    </p>
                </form>
            </div>

        </div>
    )
}

export default Login;
