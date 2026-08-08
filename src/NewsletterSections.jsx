import React, { useState } from 'react';
import { MoveRight, ArrowRight, ChevronRight, CalendarDays, HandIcon, } from 'lucide-react';


function Newslettersections() {
    return (
        <body className="bg-[url('/images/backgdnewletter.png')] bg-cover bg-center bg-no-repeat h-96">
            <div class="flex gap 4 pt-10">
                <div className="flex-1  text-white">
                    <h1 className='text-3xl font-bold'>Subscribe to our newsletter</h1>
                    <p>Nostrud amet eu ullamco nisi aute in ad minim nostrud adipisicing velit quis. Duis tempor incididunt dolore.</p>
                    <div>
                        <input type="text" placeholder='Enter your email' id='email' name='email' required />
                        <button>Subscribe</button>
                    </div>
                </div>
                <div className=" w-1/4 text-white">
                    <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-white/5 border border-white/10 shadow-inner">
                        <CalendarDays className="w-6 h-6 text-white" />
                    </div>
                    <p className='font-bold'>Weekly articles</p>
                    <p className='text-gray-400'>Non laboris consequat cupidatat laborum magna. Eiusmod non irure cupidatat duis commodo amet.</p>
                </div>
                <div className=" w-1/4 text-white">
                    <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-white/5 border border-white/10 shadow-inner">
                        <HandIcon className="w-6 h-6 text-white" />
                    </div>
                    <p className='font-bold'>No spam</p>
                    <p className='text-gray-400'>Officia excepteur ullamco ut sint duis proident non adipisicing. Voluptate incididunt anim.</p>
                </div>
            </div>
        </body>
    );
}


export default Newslettersections;