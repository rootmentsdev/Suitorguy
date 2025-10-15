import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import GroupImage from "../assets/Group.png";

const CTASection = () => {
    const navigate = useNavigate();

    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
            offset: 300,
        });
    }, []);

    const handleContactUsClick = () => {
        console.log('Contact Us button clicked'); // Debug log
        
        // Navigate to contact page since CTASection and ContactUs are on different pages
        navigate('/contact');
    };

    const handleExploreCollectionClick = () => {
        navigate('/collection');
    };

    return (
        <div 
            className="relative w-full overflow-hidden flex flex-col md:flex-row items-stretch h-auto md:h-[550px] lg:h-[600px]" 
            id="cta" 
            data-aos="fade-up"
        >
            {/* Right Side - Group Image */}
            <div 
                className="relative order-1 md:order-2 md:flex-1 h-[350px] md:h-auto mb-0"
                data-aos="fade-left"
            >
                <img 
                    src={GroupImage} 
                    alt="Elegant wedding suits display - Premium rental collection at Suitor Guy" 
                    loading="lazy"
                    className="w-full h-full object-cover object-top md:object-center"
                />
            </div>

            {/* Left Side - Grey Box with Text Content */}
            <div 
                className="relative order-2 md:order-1 w-full md:flex-1 flex items-center justify-center px-4 py-8 sm:px-6 md:px-12 lg:px-20 xl:px-[100px] mt-0 md:mt-[300px] md:self-center md:h-[610px]"
                style={{ 
                    backgroundColor: 'rgba(33, 33, 33, 1)'
                }}
                data-aos="fade-right"
            >
                <div className="max-w-full sm:max-w-xl md:max-w-2xl">
                    <h2 
                        className="text-[28px] leading-tight sm:text-3xl md:text-4xl lg:text-[40px] md:leading-[110%] uppercase mb-4 sm:mb-6 font-extrabold"
                        style={{
                            fontFamily: 'Helvetica Neue Condensed, Helvetica Compressed, Arial Narrow, Impact, sans-serif',
                            fontWeight: '820',
                            letterSpacing: '1%'
                        }}
                    >
                        <span className="text-white block">GET THE SUIT OF YOUR</span>
                        <span className="text-[#0427B9] block">DREAMS TODAY</span>
                    </h2>
                    
                    <div className="w-20 sm:w-24 md:w-32 h-1 bg-white mb-4 sm:mb-6 md:mb-8"></div>
                    
                    <p 
                        className="text-[13px] sm:text-sm md:text-base mb-6 sm:mb-8 text-white max-w-[280px] sm:max-w-none"
                        style={{
                            fontFamily: 'Cabin',
                            fontWeight: 400,
                            lineHeight: '150%',
                            letterSpacing: '0%'
                        }}
                    >
                        Explore our collection and book your fitting today to find the suit of your dreams
                    </p>

                    {/* Buttons */}
                    <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
                        <button 
                            onClick={handleContactUsClick}
                            className="bg-[#0427B9] text-white py-3 px-6 sm:px-8 hover:bg-blue-700 transition-colors w-full sm:w-auto text-center"
                            style={{
                                fontFamily: 'Cabin',
                                fontWeight: 600,
                                fontSize: '14px',
                                lineHeight: '100%',
                                letterSpacing: '0%',
                                borderRadius: '20px'
                            }}
                        >
                            Contact Us
                        </button>
                        <button 
                            onClick={handleExploreCollectionClick}
                            className="bg-gray-700 text-white py-3 px-6 sm:px-8 hover:bg-gray-600 transition-colors w-full sm:w-auto text-center"
                            style={{
                                fontFamily: 'Cabin',
                                fontWeight: 600,
                                fontSize: '14px',
                                lineHeight: '100%',
                                letterSpacing: '0%',
                                borderRadius: '20px'
                            }}
                        >
                            Explore Our Collection
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CTASection;
