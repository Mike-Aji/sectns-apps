import React, { useState } from 'react';
import { MoveRight, ArrowRight } from 'lucide-react';

function Herosection() {
    return (

        <body className="bg-[url('/images/herobgpix.avif')] bg-cover bg-center w-full min-h-screen bg-no-repeat bg-fixed">
            <div>
                <div className='mt-7'>
                    <nav className='flex justify-center items-center gap-85'>
                        <div>
                            <a href=""><img src="/images/tailwindlogo3.png" alt="tailwindlogo3" className='h-6 w-auto object-contain ' /></a>
                        </div>

                        <ul className='text-white flex gap-10 font-medium'>
                            <a href="#product">Product</a>
                            <a href="#features">Features</a>
                            <a href="#marketplace">Marketplace</a>
                            <a href="#company">Company</a>
                        </ul>

                        <ul className='text-white font-medium flex gap-2'>
                            <a href="#">Login</a>
                            <a href="#"><ArrowRight/></a>
                        </ul>
                    </nav>
                </div>

                {/* <div className='text-white flex items-center justify-center h-12 border-4 border-indigo-600  '>
                    <p className=''>Announcing our next round of funding.Read More</p>
                    <ArrowRight />
                </div> */}

                <div className="flex items-center justify-center pt-50">
                    <div className="p-2 rounded-full border border-gray-800 shadow-lg flex gap-1 text-sm hover:border-gray-600 cursor-pointer">
                        <p className=" text-gray-400">Announcing our next round of funding. <span className='text-indigo-500 font-medium'> Read more</span></p>
                        <ArrowRight className='text-indigo-500 text w-5 h-5' />
                    </div>
                </div>

                <div className='text-white max-w-200 mx-auto text-center text-7xl font-bold pt-10'>
                    <h1>Data to enrich your online business</h1>
                </div>

                <div className='mt-7'>
                    <p className='text-gray-500 font-medium text-2xl max-w-200 mx-auto text-center'>Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.Elit sunt amet fugiat veniam occaecat.</p>
                </div>

                <div className='flex items-center justify-center gap-6 pt-10 pb-30'>
                    <button className='text-white  bg-indigo-500 p-2 w-30 rounded font-medium cursor-pointer hover:bg-indigo-400'>Get started</button>
                    <div className='flex items-center justify-center gap-1 cursor-pointer'>
                        <p className='text-white font-medium'> Learn more</p>
                        <ArrowRight className='text-white  w-4 h-4' />
                    </div>
                </div>


            </div>



        </body>




    );
}






export default Herosection;