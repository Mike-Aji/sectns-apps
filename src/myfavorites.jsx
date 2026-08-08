import React, { useState } from 'react';
import { Heart, MapPin, MoveRight, Star, } from 'lucide-react';

function Myfavorites() {
    return (
        <section>
            <div className='space-y-6'>
                <nav className='flex justify-between items-center'>
                    <div className='flex gap-2'>
                        <MapPin className='text-blue-500' />
                        <a href="#">LocalSpot</a>
                    </div>

                    <div>
                        <a href="#">Home</a>
                    </div>

                    <div className='flex gap-2'>
                        <Heart className='text-red-500' />
                        <a href="#">Favorites</a>
                    </div>
                </nav>

                <div>
                    <h1 className='text-2xl font-medium'>My Favorites</h1>
                    <span className='text-sm'>Places you've saved</span>
                </div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div class="p-4 bg-gray-100 rounded">
                    <a href="#"><img src="/images/roompix.png" alt="roompix" /></a>


                    <div className='p-2 flex flex-col gap-y-2'>
                        <div className='flex justify-between items-center'>
                            <button className='bg-black text-white p-1 w-20 rounded-md cursor-pointer'>Hotel</button>
                            x
                        </div>
                        <h1 className='text-base'>The Hotel Presidential</h1>

                        <div className='flex gap-6 text-xs'>
                            <div className='flex'>
                                <Star className='w-4 h-4 ' />
                                <p className='font-medium'>4.6</p>
                                <span>(120 reviews)</span>
                            </div>

                            <div className='flex gap-1'>
                                <MapPin className='w-4 h-4' />
                                <p>0.8km</p>
                            </div>
                        </div>

                        <div className='text-xs flex gap-7 font-medium '>
                            <button className='bg-gray-200 p-1 rounded-md w-23 cursor-pointer'>Free Wifi</button>
                            <button className='bg-gray-200 p-1 rounded-md w-15 cursor-pointer'>Pool</button>
                            <button className='bg-gray-200 p-1 rounded-md w-23 cursor-pointer'>Resturant</button>
                        </div>
                    </div>
                </div>



                <div class="p-4 bg-gray-100 rounded">
                    <a href="#"><img src="/images/roompix.png" alt="roompix" /></a>


                    <div className='p-2 flex flex-col gap-y-2'>
                        <div className='flex justify-between items-center'>
                            <button className='bg-black text-white p-1 w-20 rounded-md cursor-pointer'>Hotel</button>
                            x
                        </div>
                        <h1 className='text-base'>The Hotel Presidential</h1>

                        <div className='flex gap-6 text-xs'>
                            <div className='flex'>
                                <Star className='w-4 h-4 ' />
                                <p className='font-medium'>4.6</p>
                                <span>(120 reviews)</span>
                            </div>

                            <div className='flex gap-1'>
                                <MapPin className='w-4 h-4' />
                                <p>0.8km</p>
                            </div>
                        </div>

                        <div className='text-xs flex gap-7 font-medium '>
                            <button className='bg-gray-200 p-1 rounded-md w-23 cursor-pointer'>Free Wifi</button>
                            <button className='bg-gray-200 p-1 rounded-md w-15 cursor-pointer'>Pool</button>
                            <button className='bg-gray-200 p-1 rounded-md w-23 cursor-pointer'>Resturant</button>
                        </div>
                    </div>
                </div>

                <div class="p-4 bg-gray-100 rounded">
                    <a href="#"><img src="/images/roompix.png" alt="roompix" /></a>


                    <div className='p-2 flex flex-col gap-y-2'>
                        <div className='flex justify-between items-center'>
                            <button className='bg-black text-white p-1 w-20 rounded-md cursor-pointer'>Hotel</button>
                            x
                        </div>
                        <h1 className='text-base'>The Hotel Presidential</h1>

                        <div className='flex gap-6 text-xs'>
                            <div className='flex'>
                                <Star className='w-4 h-4 ' />
                                <p className='font-medium'>4.6</p>
                                <span>(120 reviews)</span>
                            </div>

                            <div className='flex gap-1'>
                                <MapPin className='w-4 h-4' />
                                <p>0.8km</p>
                            </div>
                        </div>

                        <div className='text-xs flex gap-7 font-medium '>
                            <button className='bg-gray-200 p-1 rounded-md w-23 cursor-pointer'>Free Wifi</button>
                            <button className='bg-gray-200 p-1 rounded-md w-15 cursor-pointer'>Pool</button>
                            <button className='bg-gray-200 p-1 rounded-md w-23 cursor-pointer'>Resturant</button>
                        </div>
                    </div>
                </div>
                <div class="p-4 bg-gray-100 rounded">
                    <a href="#"><img src="/images/roompix.png" alt="roompix" /></a>


                    <div className='p-2 flex flex-col gap-y-2'>
                        <div className='flex justify-between items-center'>
                            <button className='bg-black text-white p-1 w-20 rounded-md cursor-pointer'>Hotel</button>
                            x
                        </div>
                        <h1 className='text-base'>The Hotel Presidential</h1>

                        <div className='flex gap-6 text-xs'>
                            <div className='flex'>
                                <Star className='w-4 h-4 ' />
                                <p className='font-medium'>4.6</p>
                                <span>(120 reviews)</span>
                            </div>

                            <div className='flex gap-1'>
                                <MapPin className='w-4 h-4' />
                                <p>0.8km</p>
                            </div>
                        </div>

                        <div className='text-xs flex gap-7 font-medium '>
                            <button className='bg-gray-200 p-1 rounded-md w-23 cursor-pointer'>Free Wifi</button>
                            <button className='bg-gray-200 p-1 rounded-md w-15 cursor-pointer'>Pool</button>
                            <button className='bg-gray-200 p-1 rounded-md w-23 cursor-pointer'>Resturant</button>
                        </div>
                    </div>
                </div>
                <div class="p-4 bg-gray-100 rounded">
                    <a href="#"><img src="/images/roompix.png" alt="roompix" /></a>


                    <div className='p-2 flex flex-col gap-y-2'>
                        <div className='flex justify-between items-center'>
                            <button className='bg-black text-white p-1 w-20 rounded-md cursor-pointer'>Hotel</button>
                            x
                        </div>
                        <h1 className='text-base'>The Hotel Presidential</h1>

                        <div className='flex gap-6 text-xs'>
                            <div className='flex'>
                                <Star className='w-4 h-4 ' />
                                <p className='font-medium'>4.6</p>
                                <span>(120 reviews)</span>
                            </div>

                            <div className='flex gap-1'>
                                <MapPin className='w-4 h-4' />
                                <p>0.8km</p>
                            </div>
                        </div>

                        <div className='text-xs flex gap-7 font-medium '>
                            <button className='bg-gray-200 p-1 rounded-md w-23 cursor-pointer'>Free Wifi</button>
                            <button className='bg-gray-200 p-1 rounded-md w-15 cursor-pointer'>Pool</button>
                            <button className='bg-gray-200 p-1 rounded-md w-23 cursor-pointer'>Resturant</button>
                        </div>
                    </div>
                </div>
                <div class="p-4 bg-gray-100 rounded">
                    <a href="#"><img src="/images/roompix.png" alt="roompix" /></a>


                    <div className='p-2 flex flex-col gap-y-2'>
                        <div className='flex justify-between items-center'>
                            <button className='bg-black text-white p-1 w-20 rounded-md cursor-pointer'>Hotel</button>
                            x
                        </div>
                        <h1 className='text-base'>The Hotel Presidential</h1>

                        <div className='flex gap-6 text-xs'>
                            <div className='flex'>
                                <Star className='w-4 h-4 ' />
                                <p className='font-medium'>4.6</p>
                                <span>(120 reviews)</span>
                            </div>

                            <div className='flex gap-1'>
                                <MapPin className='w-4 h-4' />
                                <p>0.8km</p>
                            </div>
                        </div>

                        <div className='text-xs flex gap-7 font-medium '>
                            <button className='bg-gray-200 p-1 rounded-md w-23 cursor-pointer'>Free Wifi</button>
                            <button className='bg-gray-200 p-1 rounded-md w-15 cursor-pointer'>Pool</button>
                            <button className='bg-gray-200 p-1 rounded-md w-23 cursor-pointer'>Resturant</button>
                        </div>
                    </div>
                </div>
                <div class="p-4 bg-gray-100 rounded">
                    <a href="#"><img src="/images/roompix.png" alt="roompix" /></a>


                    <div className='p-2 flex flex-col gap-y-2'>
                        <div className='flex justify-between items-center'>
                            <button className='bg-black text-white p-1 w-20 rounded-md cursor-pointer'>Hotel</button>
                            x
                        </div>
                        <h1 className='text-base'>The Hotel Presidential</h1>

                        <div className='flex gap-6 text-xs'>
                            <div className='flex'>
                                <Star className='w-4 h-4 ' />
                                <p className='font-medium'>4.6</p>
                                <span>(120 reviews)</span>
                            </div>

                            <div className='flex gap-1'>
                                <MapPin className='w-4 h-4' />
                                <p>0.8km</p>
                            </div>
                        </div>

                        <div className='text-xs flex gap-7 font-medium '>
                            <button className='bg-gray-200 p-1 rounded-md w-23 cursor-pointer'>Free Wifi</button>
                            <button className='bg-gray-200 p-1 rounded-md w-15 cursor-pointer'>Pool</button>
                            <button className='bg-gray-200 p-1 rounded-md w-23 cursor-pointer'>Resturant</button>
                        </div>
                    </div>
                </div>
                <div class="p-4 bg-gray-100 rounded">
                    <a href="#"><img src="/images/roompix.png" alt="roompix" /></a>


                    <div className='p-2 flex flex-col gap-y-2'>
                        <div className='flex justify-between items-center'>
                            <button className='bg-black text-white p-1 w-20 rounded-md cursor-pointer'>Hotel</button>
                            x
                        </div>
                        <h1 className='text-base'>The Hotel Presidential</h1>

                        <div className='flex gap-6 text-xs'>
                            <div className='flex'>
                                <Star className='w-4 h-4 ' />
                                <p className='font-medium'>4.6</p>
                                <span>(120 reviews)</span>
                            </div>

                            <div className='flex gap-1'>
                                <MapPin className='w-4 h-4' />
                                <p>0.8km</p>
                            </div>
                        </div>

                        <div className='text-xs flex gap-7 font-medium '>
                            <button className='bg-gray-200 p-1 rounded-md w-23 cursor-pointer'>Free Wifi</button>
                            <button className='bg-gray-200 p-1 rounded-md w-15 cursor-pointer'>Pool</button>
                            <button className='bg-gray-200 p-1 rounded-md w-23 cursor-pointer'>Resturant</button>
                        </div>
                    </div>
                </div>
                <div class="p-4 bg-gray-100 rounded">
                    <a href="#"><img src="/images/roompix.png" alt="roompix" /></a>


                    <div className='p-2 flex flex-col gap-y-2'>
                        <div className='flex justify-between items-center'>
                            <button className='bg-black text-white p-1 w-20 rounded-md cursor-pointer'>Hotel</button>
                            x
                        </div>
                        <h1 className='text-base'>The Hotel Presidential</h1>

                        <div className='flex gap-6 text-xs'>
                            <div className='flex'>
                                <Star className='w-4 h-4 ' />
                                <p className='font-medium'>4.6</p>
                                <span>(120 reviews)</span>
                            </div>

                            <div className='flex gap-1'>
                                <MapPin className='w-4 h-4' />
                                <p>0.8km</p>
                            </div>
                        </div>

                        <div className='text-xs flex gap-7 font-medium '>
                            <button className='bg-gray-200 p-1 rounded-md w-23 cursor-pointer'>Free Wifi</button>
                            <button className='bg-gray-200 p-1 rounded-md w-15 cursor-pointer'>Pool</button>
                            <button className='bg-gray-200 p-1 rounded-md w-23 cursor-pointer'>Resturant</button>
                        </div>
                    </div>
                </div>
            </div>


        </section>




    );
}


export default Myfavorites;

// flex-col md:flex-row justify-between gap-4 md:gap-0 items-center