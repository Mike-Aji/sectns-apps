import React, { useState } from 'react';
import { MoveRight, ArrowRight, ChevronRight, Check } from 'lucide-react';


function Pricingsections() {
    return (

        <section>
            <div className='mt-20 mb-30'>
                <div className='flex flex-col items-center justify-center gap-4'>
                    <p className='text-indigo-600 font-medium'>Pricing</p>
                    <h1 className='text-6xl font-semibold text-center'>Choose the right plan for you</h1>
                    <p className='text-xl font-medium max-w-2xl text-gray-600'>Choose an affordable plan that’s packed with the best features for engaging your audience, creating customer loyalty, and driving sales.</p>
                </div>

                <div className='flex mt-30 items-start'>

                    <div className='w-1/2 border border-gray-200 rounded-l-3xl p-15 ml-20'>
                        <p className='text-indigo-600 font-bold'>Hobby</p>
                        <p className='text-5xl pt-4'>
                            <span>$29</span>
                            <span className='text-xl'> /month</span>
                        </p>
                        <p className='pt-6'>The perfect plan if you're just getting started with our product.</p>

                        <div className='pt-'>
                            <div className="flex items-center gap-2 px-4 py-2  text-black rounded-lg">
                                <Check className="w-5 h-5 text-indigo-600 e-[2.5]" />
                                <span>25 products</span>
                            </div>

                            <div className="flex items-center gap-2 px-4 py-2  text-black rounded-lg">
                                <Check className="w-5 h-5 text-indigo-600  stroke-[2.5]" />
                                <span>Up to 10,000 subscribers</span>
                            </div>

                            <div className="flex items-center gap-2 px-4 py-2  text-black rounded-lg">
                                <Check className="w-5 h-5 text-indigo-600 -[2.5]" />
                                <span>Advanced analytics</span>
                            </div>

                            <div className="flex items-center gap-2 px-4 py-2  text-black rounded-lg">
                                <Check className="w-5 h-5 text-indigo-600 stroke-[2.5]" />
                                <span>24-hour support response time</span>
                            </div>


                        </div>

                        <button className='mt-10 border border-indigo-300 p-2 w-98 rounded font-medium text-indigo-600'>
                            Get started today
                        </button>
                    </div>



                    <div className='w-1/2 border border-gray-200 rounded-l-3xl p-15 bg-slate-900 text-white mr-25 h-150'>
                        <p className='text-indigo-600 font-bold pb-3'>Enterprise</p>
                        <p className='text-5xl pt-4'>
                            <span>$99</span>
                            <span className='text-xl'> /month</span>
                        </p>
                        <p className='pt-5'>Dedicated support and infrastructure for your company.</p>

                        <div>
                            <div className="flex items-center gap-2 px-4 py-2  text-white rounded-lg">
                                <Check className="w-5 h-5 text-indigo-600 e-[2.5]" />
                                <span>Unlimited products</span>
                            </div>

                            <div className="flex items-center gap-2 px-4 py-2  text-white rounded-lg">
                                <Check className="w-5 h-5 text-indigo-600  stroke-[2.5]" />
                                <span>Unlimited subscribers</span>
                            </div>

                            <div className="flex items-center gap-2 px-4 py-2  text-white rounded-lg">
                                <Check className="w-5 h-5 text-indigo-600 -[2.5]" />
                                <span>Advanced analytics</span>
                            </div>

                            <div className="flex items-center gap-2 px-4 py-2  text-white rounded-lg">
                                <Check className="w-5 h-5 text-indigo-600 stroke-[2.5]" />
                                <span>Dedicated support representative</span>
                            </div>

                            <div className="flex items-center gap-2 px-4 py-2  text-white rounded-lg">
                                <Check className="w-5 h-5 text-indigo-600 stroke-[2.5]" />
                                <span>Marketing automations</span>
                            </div>

                            <div className="flex items-center gap-2 px-4 py-2  text-white rounded-lg">
                                <Check className="w-5 h-5 text-indigo-600 stroke-[2.5]" />
                                <span>Custom integrations</span>
                            </div>
                        </div>

                        <button className='p-2 w-98 mt-4 rounded font-medium text-white bg-indigo-500 hover:bg-indigo-400'>
                            Get started today
                        </button>
                    </div>
                </div>
            </div>

        </section>

    );
}


export default Pricingsections;