import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Model3 from "../assets/Model3.png";
import Model4 from "../assets/Model4.png";
import Model5 from "../assets/Model5.png";

const OurCategories = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
            offset: 300,
        });
    }, []);

    return (
        <div className="py-16" id="categories">
            {/* Heading */}
            <div className="content-container mb-12 text-left" style={{ marginLeft: '-5px' }}>
                <h2 className="text-2xl md:text-[35px] mt-12 md:ml-[-2px]" style={{
                    fontFamily: 'Helvetica Neue Condensed, Helvetica Compressed, Arial Narrow, Impact, sans-serif',
                    fontWeight: '820',
                    lineHeight: '100%',
                    letterSpacing: '1%',
                    textTransform: 'uppercase'
                }}>
                    <span className="text-black">OUR</span>
                    <br />
                    <span className="text-[#0427B9]">CATEGORIES</span>
                </h2>
                <div className="w-24 h-1 bg-gray-800 mt-4"></div>
            </div>

            {/* Collection Cards */}
            <div className="content-container flex flex-col lg:flex-row justify-center items-end gap-12 lg:gap-24" style={{ marginLeft: '-5px' }}>
                {/* Classic Collection - Left */}
                <div className="rounded-lg overflow-hidden w-full lg:w-80" data-aos="fade-up" data-aos-delay="100">
                    <div className="relative">
                        <img
                            src={Model3}
                            alt="Classic Collection wedding suits for rent - Starting from ₹1,499 - Suitor Guy Kerala"
                            loading="lazy"
                            className="w-full h-auto object-contain"
                        />
                    </div>
                    <div className="p-6 bg-white rounded-b-lg">
                        <h3 className="text-gray-800 font-bold text-2xl mb-2 uppercase" style={{
                            fontFamily: 'Helvetica Neue Condensed, Helvetica Compressed, Arial Narrow, Impact, sans-serif',
                            fontWeight: '820',
                          
                          
                          
                         
                        }}>
                            CLASSIC
                            <br />
                            COLLECTION
                        </h3>
                        <p className="text-black text-base mb-6">Starting from ₹499</p>
                        <button className="w-full bg-black text-white py-3 px-6 hover:bg-gray-800 transition-colors" style={{
                            fontFamily: 'Cabin',
                            fontWeight: 600,
                            fontStyle: 'normal',
                            fontSize: '14px',
                            lineHeight: '100%',
                            letterSpacing: '0%',
                            borderRadius: '20px'
                        }}>
                            Browse Classic
                        </button>
                    </div>
                </div>

                {/* Ultra Luxury Collection - Center (Larger) */}
                <div className="rounded-lg overflow-hidden w-full lg:w-96 lg:-mt-12" data-aos="fade-up" data-aos-delay="200">
                    <div className="relative">
                        <img
                            src={Model5}
                            alt="Ultra Luxury Collection designer wedding suits - Starting from ₹2,999 - Suitor Guy Kerala"
                            loading="lazy"
                            className="w-full h-auto object-contain"
                        />
                    </div>
                    <div className="p-6 bg-white rounded-b-lg">
                        <h3 className="text-gray-800 font-bold text-2xl mb-2 uppercase" style={{
                            fontFamily: 'Helvetica Neue Condensed, Helvetica Compressed, Arial Narrow, Impact, sans-serif',
                            fontWeight: '820',
                        }}>
                            ULTRA LUXURY
                            <br />
                            COLLECTION
                        </h3>
                        <p className="text-black text-base mb-6">Starting from ₹3,999</p>
                        <button className="w-full bg-[#0427B9] text-white py-3 px-6 hover:bg-blue-700 transition-colors" style={{
                            borderRadius: '20px',
                            fontFamily: 'Cabin',
                            fontWeight: 600,
                            fontStyle: 'normal',
                            fontSize: '14px',
                            lineHeight: '100%',
                            letterSpacing: '0%'
                        }}>
                            Discover Luxury
                        </button>
                    </div>
                </div>

                {/* Premium Collection - Right */}
                <div className="rounded-lg overflow-hidden w-full lg:w-80" data-aos="fade-up" data-aos-delay="300">
                    <div className="relative" >
                        <img
                            src={Model4}
                            alt="Premium Collection luxury wedding suits and tuxedos - Starting from ₹5,999 - Suitor Guy Kerala"
                            loading="lazy"
                            className="w-full h-auto object-contain"
                        />
                    </div>
                    <div className="p-6 bg-white rounded-b-lg">
                        <h3 className="text-gray-800 font-bold text-2xl mb-2 uppercase" style={{
                            fontFamily: 'Helvetica Neue Condensed, Helvetica Compressed, Arial Narrow, Impact, sans-serif',
                            fontWeight: '820',
                        }}>
                            PREMIUM
                            <br />
                            COLLECTION
                        </h3>
                        <p className="text-black text-base mb-6">Starting from ₹2,499</p>
                        <button className="w-full bg-black text-white py-3 px-6 hover:bg-gray-800 transition-colors" style={{
                            fontFamily: 'Cabin',
                            fontWeight: 600,
                            fontStyle: 'normal',
                            fontSize: '14px',
                            lineHeight: '100%',
                            letterSpacing: '0%',
                            borderRadius: '20px'
                        }}>
                            Explore Premium
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurCategories;
