import React from 'react';

const Banner = () => {
    return (
        <div>
            <div style={{ background: `radial-gradient(circle, rgba(112,196,206,1) 0%, rgba(17,47,109,1) 100%)` }}
                className="w-full text-white  lg:w-3/4 lg:rounded-3xl  lg:px-10  p-10 lg:p-0   ">

                <div className='gap-5 flex flex-col'>
                    <div className="  bg-[#70c4ce]/10 backdrop-blur-md border mt-10 border-white/20 rounded-lg p-6 space-y-10">
                        <div className='flex justify-center items-center gap-2'>
                            <img className='pt-1 lg:pt-2  w-2/4 lg:h-2/4' src='https://i.ibb.co.com/pjjnDkR/SGE-Logo-V-2-removebg-preview.png' alt="" />
                            <img className='pt-1 lg:pt-2  w-1/3 lg:h-1/3' src='https://i.ibb.co.com/3SV27h0/icef.png' alt="" />

                        </div>
                        <p className='text-start font-normal  text-base lg:text-md'>Shabuj Global Education is proud to join the ICEF Higher Education network! <br /> Ready to connect, innovate, and shape the future of global education. Lets make waves together.</p>
                    </div>

                    <div className="  bg-[#70c4ce]/10 backdrop-blur-md border border-white/20 rounded-lg p-6 space-y-10">
                        <div className='flex justify-center'>
                            <img className='pt-1 lg:pt-2  w-1/2' src='https://i.ibb.co.com/3SV27h0/icef.png' alt="" />

                        </div>
                        <p className='text-start font-normal  text-base lg:text-md'>At the heart of the international education industry, we facilitate access to the right relationships, insight, and training to drive growth for the sector’s educational institutions, student recruitment agents, and connected service providers.</p>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default Banner;