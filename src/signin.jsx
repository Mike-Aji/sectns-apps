import React, { useState } from 'react';


function Signin() {

    return (
        <div className="flex min-h-screen items-center justify-center bg-white p-4">
            <div className="w-full max-w-md rounded-lg bg-white p-6">
                <div className='sm:mx-auto sm:w-full sm:max-w-sm'>
                    <img src="/images/tailwindlogo.png" alt="tailwindlogo" width={150} height={100} className='mx-auto h-20 w-auto' />
                    <h2 className="mb-6 text-2xl font-bold text-gray-800 px-12 py-4">Sign in to your account</h2>
                </div>

                <form className="space-y-4">
                    {/* Email Input */}
                    <div>
                        <input type="email" id="email" name="email" placeholder="Email address" required
                            className="w-full rounded-md border border-gray-300 p-2 text-gray-900 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                        />
                    </div>

                    {/* Password Input */}
                    <div>
                        <input type="password" id="name" placeholder="Password" required
                            className="w-full rounded-md border border-gray-300 p-2 text-gray-900 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                        />
                    </div>

                    <div className='flex items-center justify-between mt-4'>
                        <div className='flex gap-3'>
                            <input type="checkbox" name="" id="rememberme" name="rememberme" value="remember" />
                            <label for="rememberme">Remember me</label>
                        </div>
                        <div className='font-bold text-indigo-600 hover:text-indigo-500'>
                            <a href="#">Forgot password?</a>
                        </div>
                    </div>

                    {/* Sign In Button */}
                    <button
                        type="submit" className="w-full rounded-md bg-indigo-600 px-4 py-2 font-semibold text-white shadow-sm hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-colors mt-4">
                        Sign in
                    </button>

                    <footer className=' text-sm flex items-center justify-center gap-1 mt-5'>
                        <p>Not a member?</p>
                         <a className='font-bold text-indigo-700 hover:text-indigo-500' href="">Start a 14-day free trial</a>
                    </footer>
                </form>
            </div>
        </div>
    );
}


export default Signin;