import React, { useState } from 'react';
import { MoveRight, ArrowRight, ChevronRight } from 'lucide-react';


function Ctasections() {
    return (
        <section className='bg-indigo-100'>
            <div className='flex border border-gray-300 pb-30 mt-10 pt-20 rounded-2xl'>
                <h2 className="w-4/5 text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 tracking-tight leading-none mt-20 ml-10">
                    <span className="block">Ready to dive in?</span>
                    <span className="block text-slate-900">Start your free trial today.</span>
                </h2>

                <div className='w-1/5 mt-25 mr-8'>
                    <div className='flex gap-5'>
                        <a href="#"><button className='bg-indigo-500 p-1.5 rounded font-medium text-white w-25 hover:bg-indigo-400'>Get started</button></a>
                        <a href="#" className='inline-flex items-center gap-1 whitespace-nowrap'>
                            <p className='font-medium'>Learn more</p>
                            <ArrowRight className='w-3 h-3 shrink-0' /></a>
                    </div>
                </div>

            </div>
        </section>
    );
}


export default Ctasections;