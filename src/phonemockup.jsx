import React, { useState } from 'react';
import { MoveRight, ArrowRight, ChevronRight } from 'lucide-react';

function Phonemockup() {
    return (

        <div>
            <div className='mt-7'>
                <nav className='flex justify-center items-center gap-85'>
                    <div>
                        <a href="#"><img src="/images/tailicon.png" alt="tailicon" className='h-6 w-auto object-contain' /></a>
                    </div>

                    <ul className='text-black flex gap-10 font-medium'>
                        <a href="#product">Product</a>
                        <a href="#features">Features</a>
                        <a href="#marketplace">Marketplace</a>
                        <a href="#company">Company</a>
                    </ul>

                    <ul className='text-black font-medium flex gap-2'>
                        <a href="#">Login</a>
                        <a href="#"><ArrowRight /></a>
                    </ul>
                </nav>
            </div>

            <div className='flex gap-4 mt-35 mb-30'>

                <div className='w-3/5 mt-40 p-7'>
                    <a
                        href="#careers"
                        className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full border border-gray-200 bg-white hover:bg-gray-50 transition-colors shadow-sm cursor-pointer">

                        <span className="text-indigo-600 font-medium text-sm"> {/* Blue / Purple Highlighted Text */}
                            We're hiring
                        </span>

                        <span className="h-4 w-1px bg-gray-200" aria-hidden="true" />    {/* Vertical Divider Line */}

                        <span className="inline-flex items-center gap-1 text-gray-700 text-sm font-normal"> {/* Secondary Action Text + Arrow Icon */}
                            See open positions
                            <ChevronRight className="w-4 h-4 text-gray-400" />
                        </span>
                    </a>

                    <h1 className='text-7xl font-bold mt-10 text-gray-900'>A better way to ship your projects</h1>
                    <p className='text-2xl font-medium mt-10 text-gray-500'>Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua. Anim aute id magna aliqua ad ad non deserunt sunt.</p>

                    <div className='flex gap-5 mt-10'>
                        <a href="#"><button className='bg-indigo-500 p-2 rounded font-medium text-white w-30 hover:bg-indigo-400'>Get started</button></a>
                        <a href="#" className='inline-flex items-center gap-1 whitespace-nowrap'>
                            <p className='font-medium'>Learn more</p>
                            <ArrowRight className='w-3 h-3 shrink-0'/></a>
                    </div>
                </div>

                <div className='w-2/5 p-7 mr-10'>
                    <img src="/images/mobilepix.png" alt="laptop" className='h-170 w-90 object-cover rounded-3xl' />
                </div>
            </div>

        </div>
    );
}




export default Phonemockup;