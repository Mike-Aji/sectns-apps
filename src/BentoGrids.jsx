import React, { useState } from 'react';
import { MoveRight, ArrowRight, ChevronRight } from 'lucide-react';



function Bentogrids() {
    return (
        <section>
            <div>
                <div className='flex flex-col items-center justify-center gap-4 h-64 max-w-md mx-auto'>
                    <p className='text-indigo-500 font-semibold'>Deploy faster</p>
                    <h1 className='text-5xl font-semibold text-center'>Everything you need to deploy your app</h1>
                </div>

                <div className='flex gap-4'>
                    <div className='w-1/3 p-10 border border-gray-200 rounded-2xl ml-5'>
                        <h2 className='text-lg'>Mobile friendly</h2>
                        <p className='text-sm pt-4 border-gray-200 text-gray-600'>Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.</p>
                        <img src="/images/bentomobile.png" alt="bentomobile" className='w-[90%] h-auto rounded-lg object-cover pt-10' />
                    </div>

                    <div className='w-1/3 '>
                        <div className='flex flex-col gap-5 '>
                            <div className='p-10 h-80 border border-gray-200 rounded-2xl'>
                                <h2 className='text-lg'>Performance</h2>
                                <p className='text-sm pt-5 text-gray-600'>Lorem ipsum, dolor sit amet consectetur adipisicing elit maiores impedit.</p>
                                <img src="/images/bentoperformance.png" alt="" className='mt-6' />
                            </div>
                            <div className='p-10 h-80 border border-gray-200 rounded-2xl'>
                                <h2 className='text-lg'>Security</h2>
                                <p className='text-sm pt-5 text-gray-600'>Morbi viverra dui mi arcu sed. Tellus semper adipiscing suspendisse semper morbi.</p>
                                <img src="/images/bentosecurity.png" alt="" className='mt-6' />
                            </div>
                        </div>
                    </div>


                    <div className='w-1/3 border border-gray-200 rounded-2xl pl-6 mr-5'>
                        <h2 className='text-lg pt-10'>Powerful APIs</h2>
                        <p className='text-sm pt-5 text-gray-600'>Sit quis amet rutrum tellus ullamcorper ultricies libero dolor eget sem sodales gravida.</p>
                        <img src="/images/codepix.png" alt="" className='w-3/4  h-3/4 rounded-lg object-cover mt-5' />
                    </div>

                </div>
            </div>
        </section>
    );
}


export default Bentogrids;