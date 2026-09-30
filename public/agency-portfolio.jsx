import React, { useState } from 'react';

function Agencyportfolio() {
    return (
        <div>
            <div className='text-center pt-40 sm:text-base'>
                <p className='text-xl font-light text-red-300 uppercase'>portfolio</p>
                <h1 className='text-6xl font-bold pt-3'>We are nominated to<br />Agency of Year</h1>
            </div>
            <div className='grid grid-cols-1 gap-5 p-15 md:grid-cols-2 md:p-10 lg:grid-cols-3'>
                <div className=''>
                    <a href="#"><img src="/images/agency/image1.jpg" alt="" className='w-110 h-100 object-cover'/></a>
                </div>
                <div className=''>
                    <a href="#"><img src="/images/agency/image2.jpg" alt="" className='w-110 h-100 object-cover'/></a>
                </div>
                <div className=''>
                    <a href="#"><img src="/images/agency/image3.jpg" alt="" className='w-110 h-100 object-cover' /></a>
                </div>
                <div className=''>
                    <a href="#"><img src="/images/agency/image4.jpg" alt="" className='w-110 h-100 object-cover'/></a>
                </div>
                <div className=''>
                    <a href="#"><img src="/images/agency/image5.jpg" alt="" className='w-110 h-100 object-cover'/></a>
                </div>
                <div className=''>
                    <a href="#"><img src="/images/agency/image6.jpg" alt="" className='w-110 h-100 object-cover' /></a>
                </div>
            </div>
            <footer className='bg-gray-700 '>
                <p className='text-center text-white p-20'>Sample footer text</p>
                <div className='flex justify-center items-center gap-1 text-sm h-20'>
                    <a href="#" className='text-amber-300 underline underline-offset-2 hover:no-underline'>Website Templates</a>
                    <p className='text-white'>created with</p>
                    <a href="#" className='text-amber-300 underline underline-offset-2 hover:no-underline'>Cordor Builder Software</a>
                </div>
            </footer>
        </div>

    );
}


export default Agencyportfolio;