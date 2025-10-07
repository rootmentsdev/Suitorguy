
import suitor from '../assets/test1.png'
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
const Collection = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000, // Animation duration (1s)
            once: true, // Ensures animation runs only once
            offset: 300, // Trigger animation 100px before reaching viewport

        });
    }, []);
    return (
        <div className='mt-[200px] mb-[100px] mx-10 ' id='collection'>
            <div
                data-aos="fade-left"  >
                <h2 className='text-[#0427B9] text-xl md:text-2xl mb-5 BonaNova '>
                    Collection
                </h2>
                <p className=' text-5xl text-white mb-5'>Discover our <br />
                    Wedding <br />
                    Collections</p>
                <p className='text-white  hidden md:block BonaNova text-[15px]  mb-5'>
                    Explore a range of meticulously designed suits, from <br /> classic cuts to modern styles, all tailored to your exact <br /> measurements for a flawless fit
                </p>
                <p className='text-white text-[15px]  md:hidden BonaNova'>
                    Explore a range of meticulously designed suits, from  classic cuts to modern styles, all tailored to your exact measurements for a flawless fit
                </p>
            </div>

            <div className="w-full flex overflow-x-auto  hide-scrollbar whitespace-nowrap flex-nowrap snap-x snap-mandatory px-5 ml-0 md:ml-[200px]"
                data-aos="fade-right"
            >
                {[...Array(100)].map((_, index) => (
                    <div key={index} className='bg-[#171717] min-w-[290px] min-h-[300px] flex items-center flex-col justify-center text-white text-lg font-bold rounded-md snap-start p-5 overflow-hidden'>
                        {/* //171717 */}
                        <div className='w-[300px] flex justify-center overflow-hidden ml-[50px]'>
                            <img
                                src={suitor}
                                alt="Premium wedding suits and tuxedos collection - Suitor Guy Kerala"
                                loading="lazy"
                                className='w-[300px] lg:grayscale hover:grayscale-0 transition-all duration-[700ms]   hover:scale-110'
                            />
                        </div>
                        <div className='text-start text-[15px] flex flex-col ml-[-150px] mt-5 BonaNova'>
                            <p className='font-normal'>
                                Suits & Tuxedos
                            </p>
                            <p>
                                Starting at 2500
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Collection;

