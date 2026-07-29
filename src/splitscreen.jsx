import React, { useState } from 'react';


function Splitscreen() {

    return (
        <div className="flex h-full items-center justify-center bg-white border-gray-100 border-2 rounded-sm  md:">
            <div className="w-full max-w-md rounded-lg bg-white p-6 ml-15">
                <div>
                    <img src="/images/tailicon.png" alt="tailwindlogo" width={40} height={90} className='place-content-start pb-3' />
                    <h2 className="mb-6 text-2xl font-bold text-gray-800">Sign in to your account</h2>
                </div>

                <div className=' text-sm flex  gap-1 mb-10'>
                    <p className='font-medium text-gray-700'>Not a member?</p>
                    <a className='font-bold text-indigo-700 hover:text-indigo-500' href="">Start a 14-day free trial</a>
                </div>

                <form className="space-y-4">
                    {/* Email Input */}
                    <div className='mb-6'>
                        <label for="email" className='font-medium'>Email address</label>
                        <input type="email" id="email" name="email" required
                            className="w-full rounded-md border border-gray-300 p-2 mt-2 text-gray-900 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                        />
                    </div>

                    {/* Password Input */}
                    <div className='mb-6'>
                        <label for="password" className='font-medium'>Password</label>
                        <input type="password" id="name" required
                            className="w-full rounded-md border border-gray-300 p-2 mt-2 text-gray-900 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-purple-500"
                        />
                    </div>

                    <div className='flex items-center justify-between mb-5'>
                        <div className='flex gap-3'>
                            <input type="checkbox" name="" id="rememberme" name="rememberme" value="remember" />
                            <label for="rememberme" className='font-medium text-gray-700'>Remember me</label>
                        </div>
                        <div className='font-bold text-indigo-600 hover:text-indigo-500'>
                            <a href="#">Forgot password?</a>
                        </div>
                    </div>

                    {/* Sign In Button */}
                    <button
                        type="submit" className="w-full rounded-md bg-indigo-700 px-4 py-2 font-semibold text-white shadow-sm hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 transition-colors">
                        Sign in
                    </button>

                    <div>
                        <div className="flex items-center my-6">
                            <div className="grow border-t border-gray-300"></div>  {/* Left Line */}
                            <span className="mx-4 shrink text-gray-700 font-medium">  {/* Center Text */}
                                Or continue with
                            </span>
                            <div className="grow border-t border-gray-300"></div>  {/* Right Line */}
                        </div>

                        <div className='flex place-content-between'>
                            <div className='border border-gray-300 rounded-md cursor-pointer flex w-48 items-center justify-center p-1 gap-3 hover:bg-gray-50'>
                                <img src="/images/googleicon.png" alt="googleicon" width={20} height={25} />
                                <p className='text-gray-800 font-medium'>Google</p>
                            </div>
                            <div className='border border-gray-300 rounded-md cursor-pointer flex w-48 items-center justify-center p-1 gap-3 hover:bg-gray-50'>
                                <img src="/images/githublogo.png" alt="githubicon" width={20} height={25} />
                                <p className='text-gray-800 font-medium'>GitHub</p>
                            </div>
                        </div>
                    </div>

                </form>
            </div>

            {/* sideimage */}
            <div className='m-12'>
                <img src="/images/laptopimage.avif" alt="laptopimage" className='h-full'/>
            </div>


        </div>

    );
}


export default Splitscreen;



// sm:mx-auto sm:w-full sm:max-w-sm