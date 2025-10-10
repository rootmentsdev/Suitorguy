import React, { useEffect, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Model1 from "../assets/Model1.png";
import Model2 from "../assets/Model2.png";

const Legacy = () => {
    const legacyRef = useRef(null);

    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
            offset: 400,
        });

        // Scroll to section if URL has "#legacy"
        if (window.location.hash === "#legacy" && legacyRef.current) {
            legacyRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    }, []);

    return (
        <div className="pt-4 pb-16 w-full" ref={legacyRef} id="legacy">
            {/* Top Section - WHY RENT FROM SUITOR GUY */}
            <div className="mb-4 ">
                <div className="flex flex-col lg:flex-row items-center gap-12 px-8">
                    {/* Text Section - Left */}
                    <div className="flex-1" data-aos="fade-right">
                        <h2 className="mb-4 text-2xl md:text-[35px]" style={{
                            fontFamily: 'Helvetica Neue Condensed, Helvetica Compressed, Arial Narrow, Impact, sans-serif',
                            fontWeight: '850',
                            lineHeight: '100%',
                            letterSpacing: '1%',
                            textTransform: 'uppercase',
                          
                            
                        }}>
                            <span className="text-gray-700">WHY RENT FROM</span>
                            <br />
                            <span className="text-[#0427B9]">SUITOR GUY</span>
                        </h2>
                        <div className="w-20 h-1 bg-gray-700 mb-6"></div>
                        <p style={{
                            fontFamily: 'Cabin',
                            fontWeight: 400,
                            fontStyle: 'normal',
                            fontSize: '14px',
                            lineHeight: '24px',
                            letterSpacing: '0%',
                            textAlign: 'justify'
                        }} 
                        
                        className="text-gray-600">
                            At Suitor Guy, we focus on giving you more than just a suit we offer superior quality, 
                            great value, and a tailored fit guarantee. With a wide range of styles to choose from 
                            and a seamless rental process, finding the perfect look has never been easier.
                        </p>
            </div>

                    {/* Image Section - Right */}
                    <div className="flex-1 relative" data-aos="fade-left">
                        <div className="relative">
                            <img
                                src={Model1}
                                alt="Groom wearing elegant premium wedding suit - Suitor Guy Kerala"
                                loading="lazy"
                                className="w-full max-w-md mx-auto object-contain"
                            />
                        </div>
                    </div>
                </div>
                </div>

            {/* Bottom Section - LOCATIONS */}
            <div>
                <div className="flex flex-col lg:flex-row-reverse items-center gap-12 px-8">
                    {/* Text Section - Right */}
                    <div className="flex-1" data-aos="fade-left">
                        <h2 className="mb-4 text-2xl md:text-[33px]" style={{
                            fontFamily: 'Helvetica Neue Condensed, Helvetica Compressed, Arial Narrow, Impact, sans-serif',
                            fontWeight: '840',
                            lineHeight: '100%',
                            letterSpacing: '1%',
                            textTransform: 'uppercase'
                        }}>
                            <span className="text-gray-700"><span  className="text-[#0427B9]">SUITOR GUY </span> SERVING YOU</span>
                            <br />
                            <span className="text-gray-700">ON YOUR BIG DAY </span>
                        </h2>
                        <div className="w-20 h-1 bg-gray-700 mb-6"></div>
                        <p
                        style={{
                            fontFamily: 'Cabin',
                            fontWeight: 400,
                            fontStyle: 'normal',
                            fontSize: '14px',
                            lineHeight: '24px',
                            letterSpacing: '0%',
                            textAlign: 'justify'
                        }} 
                        
                        className="text-gray-600 text-lg leading-relaxed">
                            With 15 locations across Kerala, including our flagship showroom in Edappally, 
                            Suitor Guy is always within reach. We proudly serve Trivandrum, Thrissur, Calicut, 
                            and many more cities, making it easy to experience premium style wherever you are.
                        </p>
                    </div>
                    
                    {/* Image Section - Left */}
                    <div className="flex-1 relative" data-aos="fade-right">
                        <div className="relative">
                            <img
                                src={Model2}
                                alt="Model wearing traditional bandhgala wedding suit - Suitor Guy collection"
                                loading="lazy"
                                className="w-full max-w-md mx-auto object-contain"
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* How It Works Section */}
            
        </div>
    );
};

export default Legacy;
