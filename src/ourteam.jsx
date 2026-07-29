import React, { useState } from 'react';
import { MoveRight, ArrowRight, ChevronRight } from 'lucide-react';


function Ourteam() {
    return (
        <section className='bg-slate-900 p-10 rounded-2xl'>
            <div className='flex bg-slate-800 p-10 rounded-2xl'>
                <div className='w-2/5'>
                    <img src="/images/ourteampic.avif" alt="ourteampic" className=' h-95 w-95 object-cover rounded-2xl' />
                </div>

                <div className='w-3/5 text-white'>
                    <h1 className='text-5xl font-bold mb-5'>Join our team</h1>
                    <p className='text-gray-400 text-xl leading-relaxed'>Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam voluptatum cupiditate veritatis in accusamus quisquam.</p>

                    <div className='flex gap-30 mt-15 text-gray-300'>
                        <div className=''>
                            <div className='flex gap-4'>
                                <img src="/images/circlecheckpic.png" alt="" className='w-4 h-4 rounded-full' />                                <p>Competitive salaries</p>
                            </div>
                            <div className='flex gap-4'>
                                <img src="/images/circlecheckpic.png" alt="" className='w-4 h-4 rounded-full' />                                <p>30 days of paid vacation</p>
                            </div>
                            <div className='flex gap-4'>
                                <img src="/images/circlecheckpic.png" alt="" className='w-4 h-4 rounded-full' />                                <p>Benefits for you and your family</p>
                            </div>
                        </div>

                        <div className=''>
                            <div className='flex gap-4'>
                                <img src="/images/circlecheckpic.png" alt="" className='w-4 h-4 rounded-full' />                                <p>Flexible work hours</p>
                            </div>

                            <div className='flex gap-4'>
                                <img src="/images/circlecheckpic.png" alt="" className='w-4 h-4 rounded-full' />                                <p>Annual team retreats</p>
                            </div>
                            <div className='flex gap-4'>
                                <img src="/images/circlecheckpic.png" alt="" className='w-4 h-4 rounded-full' />                                <p>A great work environment</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
}



export default Ourteam;