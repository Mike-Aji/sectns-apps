import React, { useState } from 'react';

function Latestnews() {
    return (

        
        <main className='min-h-screen w-full bg-[rgb(84,101,70)]'>
            <div>
                <h1 className='text-7xl font-bold text-center pt-12 text-white'>Latest Our News</h1>
            </div>

            <div className='grid grid-cols-1 gap-6 p-17 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                <div className='bg-white p-6 text-center'>
                    <a href="#"><img src="/images/latest/post6-pix" alt="post6pix" className='mt-5'/></a>
                    <p className='mt-5 mb-5 text-gray-300'>Sep 14, 2022</p>
                    <h2 className='font-bold text-2xl'>Post 6 Headline </h2>
                </div>
                <div className='bg-white p-6 text-center'>
                    <a href="#"><img src="/images/latest/post22-pix" alt="post5pix" className='mt-5'/></a>
                    <p className='mt-5 mb-5 text-gray-300'>Sep 14, 2022</p>
                    <h2 className='font-bold text-2xl'>Post 5 Headline </h2>
                </div>
                <div className='bg-white p-6 text-center'>
                    <a href="#"><img src="/images/latest/post4-pix" alt="post4pix" className='mt-5'/></a>
                    <p className='mt-5 mb-5 text-gray-300'>Sep 14, 2022</p>
                    <h2 className='font-bold text-2xl'>Post 4 Headline </h2>
                </div>
                <div className='bg-white p-6 text-center'>
                    <a href="#"><img src="/images/latest/post3-pix" alt="post3pix" className='mt-5'/></a>
                    <p className='mt-5 mb-5 text-gray-300'>Sep 14, 2022</p>
                    <h2 className='font-bold text-2xl'>Post 3 Headline </h2>
                </div>
                <div className='bg-white p-6 text-center'>
                    <a href="#"><img src="/images/latest/post222-pix.jpg" alt="post2pix" /></a>
                    <p className='mt-5 mb-5 text-gray-300'>Sep 14, 2022</p>
                    <h2 className='font-bold text-2xl'>Post 2 Headline </h2>
                </div>
                <div className='bg-white p-6 text-center'>
                    <a href="#"><img src="/images/latest/post6-pix" alt="1" className='mt-5'/></a>
                    <p className='mt-5 mb-5 text-gray-300'>Sep 14, 2022</p>
                    <h2 className='font-bold text-2xl'>Post 1 Headline </h2>
                </div>
              </div>  

            <div className='text-center text-lg italic text-white'>
                <p>Images from <a href="#" className='underline'>Freepik</a></p>
            </div>

            <footer className='text-center text-white text-sm p-10 bg-[rgb(64,63,63)]'>
                <p>This site was created by <a href="#" className='underline'>CordorInovations</a></p>
            </footer>
        </main>

    );
}

export default Latestnews;
