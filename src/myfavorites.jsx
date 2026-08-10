import React, { useState } from 'react';
import { Heart, MapPin, MoveRight, Star, Menu, X } from 'lucide-react';


function Myfavorites() {
    return (
        <section className='m-8 '>
            <div className='space-y-6 p-3 m-4'>
                <nav className='flex justify-between items-center'>
                    <div className='flex'>
                        <svg
                            className="w-6 h-6 text-blue-600 fill-current shrink-0"
                            viewBox="0 0 24 24"
                        >
                            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5z" />
                        </svg>
                        <a href="#">LocalSpot</a>
                    </div>

                    <div>
                        <a href="#">Home</a>
                    </div>

                    <div className='flex gap-2'>
                        <Heart className='text-red-500 fill-current' />
                        <a href="#">Favorites</a>
                    </div>
                </nav>

                <div>
                    <h1 className='text-2xl font-medium'>My Favorites</h1>
                    <span className='text-sm'>Places you've saved</span>
                </div>
            </div>

            <div class="flex flex-wrap -m-2 max-w-6xl mx-auto ">
                <div class="w-full sm:w-1/2 md:w-1/3 p-2 rounded">
                    <a href="#"><img src="/images/roompix.png" alt="roompix" /></a>


                    <div className='p-2 flex flex-col gap-y-2 bg-gray-100 rounded-b-xl'>
                        <div className='flex justify-between items-center'>
                            <a href="#"><button className='bg-black text-white p-1 w-20 rounded-md cursor-pointer'>Hotel</button></a>
                            x
                        </div>
                        <h1 className='text-base'>The Hotel Presidential</h1>

                        <div className='flex gap-6 text-xs'>
                            <div className='flex'>
                                <Star className='w-4 h-4 ' />
                                <p className='font-semibold'>4.6</p>
                                <span>(120 reviews)</span>
                            </div>

                            <div className='flex gap-1'>
                                <MapPin className='w-4 h-4' />
                                <p>0.8km</p>
                            </div>
                        </div>

                        <div className='text-xs flex gap-7 font-semibold mb-1'>
                            <a href="#"><button className='bg-gray-200 p-1 rounded-md w-23 cursor-pointer'>Free Wifi</button></a>
                            <a href="#"><button className='bg-gray-200 p-1 rounded-md w-15 cursor-pointer'>Pool</button></a>
                            <a href="#"><button className='bg-gray-200 p-1 rounded-md w-23 cursor-pointer'>Resturant</button></a>
                        </div>
                    </div>
                </div>



                <div class="w-full sm:w-1/2 md:w-1/3 p-2 rounded">
                    <a href="#"><img src="/images/roompix.png" alt="roompix" /></a>


                    <div className='p-2 flex flex-col gap-y-2 bg-gray-100 rounded-b-xl'>
                        <div className='flex justify-between items-center'>
                            <a href="#"><button className='bg-black text-white p-1 w-20 rounded-md cursor-pointer'>Hotel</button></a>
                            x
                        </div>
                        <h1 className='text-base'>The Hotel Presidential</h1>

                        <div className='flex gap-6 text-xs'>
                            <div className='flex'>
                                <Star className='w-4 h-4 ' />
                                <p className='font-semibold'>4.6</p>
                                <span>(120 reviews)</span>
                            </div>

                            <div className='flex gap-1'>
                                <MapPin className='w-4 h-4' />
                                <p>0.8km</p>
                            </div>
                        </div>

                        <div className='text-xs flex gap-7 font-semibold mb-1'>
                            <a href="#"><button className='bg-gray-200 p-1 rounded-md w-23 cursor-pointer'>Free Wifi</button></a>
                            <a href="#"><button className='bg-gray-200 p-1 rounded-md w-15 cursor-pointer'>Pool</button></a>
                            <a href="#"><button className='bg-gray-200 p-1 rounded-md w-23 cursor-pointer'>Resturant</button></a>
                        </div>
                    </div>
                </div>

                <div class="w-full sm:w-1/2 md:w-1/3 p-2 rounded">
                    <a href="#"><img src="/images/roompix.png" alt="roompix" /></a>


                    <div className='p-2 flex flex-col gap-y-2 bg-gray-100 rounded-b-xl'>
                        <div className='flex justify-between items-center'>
                            <a href="#"><button className='bg-black text-white p-1 w-20 rounded-md cursor-pointer'>Hotel</button></a>
                            x
                        </div>
                        <h1 className='text-base'>The Hotel Presidential</h1>

                        <div className='flex gap-6 text-xs'>
                            <div className='flex'>
                                <Star className='w-4 h-4 ' />
                                <p className='font-semibold'>4.6</p>
                                <span>(120 reviews)</span>
                            </div>

                            <div className='flex gap-1'>
                                <MapPin className='w-4 h-4' />
                                <p>0.8km</p>
                            </div>
                        </div>

                        <div className='text-xs flex gap-7 font-semibold mb-1'>
                            <a href="#"><button className='bg-gray-200 p-1 rounded-md w-23 cursor-pointer'>Free Wifi</button></a>
                            <a href="#"><button className='bg-gray-200 p-1 rounded-md w-15 cursor-pointer'>Pool</button></a>
                            <a href="#"><button className='bg-gray-200 p-1 rounded-md w-23 cursor-pointer'>Resturant</button></a>
                        </div>
                    </div>
                </div>
                <div class="w-full sm:w-1/2 md:w-1/3 p-2 rounded">
                    <a href="#"><img src="/images/roompix.png" alt="roompix" /></a>


                    <div className='p-2 flex flex-col gap-y-2 bg-gray-100 rounded-b-xl'>
                        <div className='flex justify-between items-center'>
                            <a href="#"><button className='bg-black text-white p-1 w-20 rounded-md cursor-pointer'>Hotel</button></a>
                            x
                        </div>
                        <h1 className='text-base'>The Hotel Presidential</h1>

                        <div className='flex gap-6 text-xs'>
                            <div className='flex'>
                                <Star className='w-4 h-4 ' />
                                <p className='font-semibold'>4.6</p>
                                <span>(120 reviews)</span>
                            </div>

                            <div className='flex gap-1'>
                                <MapPin className='w-4 h-4' />
                                <p>0.8km</p>
                            </div>
                        </div>

                        <div className='text-xs flex gap-7 font-semibold mb-1'>
                            <a href="#"><button className='bg-gray-200 p-1 rounded-md w-23 cursor-pointer'>Free Wifi</button></a>
                            <a href="#"><button className='bg-gray-200 p-1 rounded-md w-15 cursor-pointer'>Pool</button></a>
                            <a href="#"><button className='bg-gray-200 p-1 rounded-md w-23 cursor-pointer'>Resturant</button></a>
                        </div>
                    </div>
                </div>
                <div class="w-full sm:w-1/2 md:w-1/3 p-2 rounded">
                    <a href="#"><img src="/images/roompix.png" alt="roompix" /></a>


                    <div className='p-2 flex flex-col gap-y-2 bg-gray-100 rounded-b-xl'>
                        <div className='flex justify-between items-center'>
                            <a href="#"><button className='bg-black text-white p-1 w-20 rounded-md cursor-pointer'>Hotel</button></a>
                            x
                        </div>
                        <h1 className='text-base'>The Hotel Presidential</h1>

                        <div className='flex gap-6 text-xs'>
                            <div className='flex'>
                                <Star className='w-4 h-4 ' />
                                <p className='font-semibold'>4.6</p>
                                <span>(120 reviews)</span>
                            </div>

                            <div className='flex gap-1'>
                                <MapPin className='w-4 h-4' />
                                <p>0.8km</p>
                            </div>
                        </div>

                        <div className='text-xs flex gap-7 font-semibold mb-1'>
                            <a href="#"><button className='bg-gray-200 p-1 rounded-md w-23 cursor-pointer'>Free Wifi</button></a>
                            <a href="#"><button className='bg-gray-200 p-1 rounded-md w-15 cursor-pointer'>Pool</button></a>
                            <a href="#"><button className='bg-gray-200 p-1 rounded-md w-23 cursor-pointer'>Resturant</button></a>
                        </div>
                    </div>
                </div>
                <div class="w-full sm:w-1/2 md:w-1/3 p-2 rounded">
                    <a href="#"><img src="/images/roompix.png" alt="roompix" /></a>


                    <div className='p-2 flex flex-col gap-y-2 bg-gray-100 rounded-b-xl'>
                        <div className='flex justify-between items-center'>
                            <a href="#"><button className='bg-black text-white p-1 w-20 rounded-md cursor-pointer'>Hotel</button></a>
                            x
                        </div>
                        <h1 className='text-base'>The Hotel Presidential</h1>

                        <div className='flex gap-6 text-xs'>
                            <div className='flex'>
                                <Star className='w-4 h-4 ' />
                                <p className='font-semibold'>4.6</p>
                                <span>(120 reviews)</span>
                            </div>

                            <div className='flex gap-1'>
                                <MapPin className='w-4 h-4' />
                                <p>0.8km</p>
                            </div>
                        </div>

                        <div className='text-xs flex gap-7 font-semibold mb-1'>
                            <a href="#"><button className='bg-gray-200 p-1 rounded-md w-23 cursor-pointer'>Free Wifi</button></a>
                            <a href="#"><button className='bg-gray-200 p-1 rounded-md w-15 cursor-pointer'>Pool</button></a>
                            <a href="#"><button className='bg-gray-200 p-1 rounded-md w-23 cursor-pointer'>Resturant</button></a>
                        </div>
                    </div>
                </div>
                <div class="w-full sm:w-1/2 md:w-1/3 p-2 rounded">
                    <a href="#"><img src="/images/roompix.png" alt="roompix" /></a>


                    <div className='p-2 flex flex-col gap-y-2 bg-gray-100 rounded-b-xl'>
                        <div className='flex justify-between items-center'>
                            <a href="#"><button className='bg-black text-white p-1 w-20 rounded-md cursor-pointer'>Hotel</button></a>
                            x
                        </div>
                        <h1 className='text-base'>The Hotel Presidential</h1>

                        <div className='flex gap-6 text-xs'>
                            <div className='flex'>
                                <Star className='w-4 h-4 ' />
                                <p className='font-semibold'>4.6</p>
                                <span>(120 reviews)</span>
                            </div>

                            <div className='flex gap-1'>
                                <MapPin className='w-4 h-4' />
                                <p>0.8km</p>
                            </div>
                        </div>

                        <div className='text-xs flex gap-7 font-semibold mb-1'>
                            <a href="#"><button className='bg-gray-200 p-1 rounded-md w-23 cursor-pointer'>Free Wifi</button></a>
                            <a href="#"><button className='bg-gray-200 p-1 rounded-md w-15 cursor-pointer'>Pool</button></a>
                            <a href="#"><button className='bg-gray-200 p-1 rounded-md w-23 cursor-pointer'>Resturant</button></a>
                        </div>
                    </div>
                </div>
                <div class="w-full sm:w-1/2 md:w-1/3 p-2 rounded">
                    <a href="#"><img src="/images/roompix.png" alt="roompix" /></a>


                    <div className='p-2 flex flex-col gap-y-2 bg-gray-100 rounded-b-xl'>
                        <div className='flex justify-between items-center'>
                            <a href="#"><button className='bg-black text-white p-1 w-20 rounded-md cursor-pointer'>Hotel</button></a>
                            x
                        </div>
                        <h1 className='text-base'>The Hotel Presidential</h1>

                        <div className='flex gap-6 text-xs'>
                            <div className='flex'>
                                <Star className='w-4 h-4 ' />
                                <p className='font-semibold'>4.6</p>
                                <span>(120 reviews)</span>
                            </div>

                            <div className='flex gap-1'>
                                <MapPin className='w-4 h-4' />
                                <p>0.8km</p>
                            </div>
                        </div>

                        <div className='text-xs flex gap-7 font-semibold mb-1'>
                            <a href="#"><button className='bg-gray-200 p-1 rounded-md w-23 cursor-pointer'>Free Wifi</button></a>
                            <a href="#"><button className='bg-gray-200 p-1 rounded-md w-15 cursor-pointer'>Pool</button></a>
                            <a href="#"><button className='bg-gray-200 p-1 rounded-md w-23 cursor-pointer'>Resturant</button></a>
                        </div>
                    </div>
                </div>

                <div class="w-full sm:w-1/2 md:w-1/3 p-2 rounded">
                    <a href="#"><img src="/images/roompix.png" alt="roompix" /></a>


                    <div className='p-2 flex flex-col gap-y-2 bg-gray-100 rounded-b-xl'>
                        <div className='flex justify-between items-center'>
                            <a href="#"><button className='bg-black text-white p-1 w-20 rounded-md cursor-pointer'>Hotel</button></a>
                            x
                        </div>
                        <h1 className='text-base'>The Hotel Presidential</h1>

                        <div className='flex gap-6 text-xs'>
                            <div className='flex'>
                                <Star className='w-4 h-4 ' />
                                <p className='font-semibold'>4.6</p>
                                <span>(120 reviews)</span>
                            </div>

                            <div className='flex gap-1'>
                                <MapPin className='w-4 h-4' />
                                <p>0.8km</p>
                            </div>
                        </div>

                        <div className='text-xs flex gap-7 font-semibold mb-1'>
                            <a href="#"><button className='bg-gray-200 p-1 rounded-md w-23 cursor-pointer'>Free Wifi</button></a>
                            <a href="#"><button className='bg-gray-200 p-1 rounded-md w-15 cursor-pointer'>Pool</button></a>
                            <a href="#"><button className='bg-gray-200 p-1 rounded-md w-23 cursor-pointer'>Resturant</button></a>
                        </div>
                    </div>
                </div>
            </div>

            <div className='flex justify-between items-center m-7'>
                <div className='flex'>
                    <svg
                        className="w-6 h-6 text-blue-600 fill-current shrink-0"
                        viewBox="0 0 24 24"
                    >
                        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5z" />
                    </svg>
                    <a href="#">LocalSpot</a>
                </div>

                <div className='flex gap-9'>
                    <a href="#"><p>Home</p></a>
                    <a href="#"><p>Categories</p></a>
                    <a href="#"><p>Favorites</p></a>
                </div>

                <div className='flex gap-3'>
                    <a href="#"><img width="20" height="20" src="https://img.icons8.com/ios/50/facebook-f.png" alt="facebook-f" /></a>
                    <a href="#"><img width="20" height="20" src="https://img.icons8.com/ios/50/instagram-new--v1.png" alt="instagram-new--v1" /></a>
                    <a href="#"><img width="20" height="20" src="https://img.icons8.com/ios/50/twitterx--v2.png" alt="twitterx--v2" /></a>
                    <a href=""><img width="20" height="20" src="https://img.icons8.com/ios/50/instagram-new--v1.png" alt="instagram-new--v1"/></a>

                </div>
            </div>
        </section>




    );
}


export default Myfavorites;

// flex-col md:flex-row justify-between gap-4 md:gap-0 items-center