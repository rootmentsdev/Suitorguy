import { motion } from "framer-motion";
import HeroImage from '../assets/hero-image.png';

const fadeInVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.8,
            ease: "easeOut",
        },
    },
};

const slideInLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.8,
            ease: "easeOut",
        },
    },
};

const slideInRight = {
    hidden: { opacity: 0, x: 50 },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.8,
            delay: 0.2,
            ease: "easeOut",
        },
    },
};

const HomeMain = () => {
    return (
        <div className="relative min-h-0 lg:min-h-screen bg-[#EFEFEF] overflow-hidden">

            {/* Large Background Watermark Text */}
            <div className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none z-0">
                <span
                    className="select-none hidden lg:block"
                    style={{
                        fontFamily: 'Helvetica Compressed, Helvetica Neue, Arial Narrow, Arial, sans-serif',
                        fontWeight: 820,
                        fontSize: '160px',
                        lineHeight: '80px',
                        letterSpacing: '0.01em',
                        textTransform: 'uppercase',
                        color: '#D5D5D5',
                        opacity: 0.6,
                        whiteSpace: 'nowrap',
                        marginTop: '400px',
                        marginBottom:"-5px",
                        marginLeft:"50px"
                    }}
                >
                    SUITOR GUY
                </span>
            </div>

            {/* Main Content Container */}
            <div className="relative z-10 w-full px-6 lg:px-16 xl:px-20 pt-20 pb-0 lg:pb-0 lg:pt-12">
                <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-start gap-6 lg:gap-12">

                    {/* Left Content - Combined Hero Image */}
                    <motion.div
                        className="flex items-center justify-center lg:justify-start order-1 lg:order-1 w-full lg:w-auto"
                        initial="hidden"
                        animate="visible"
                        variants={slideInLeft}
                        style={{ flex: '0 0 auto' }}
                    >
                        {/* Combined Hero Image with mannequin and blue background */}
                        <div className="relative z-20">
                            <img
                                src={HeroImage}
                                alt="Premium wedding suit rental in Kerala - Suitor Guy. Elegant groom suit with perfect fit for your special day"
                                className="drop-shadow-2xl w-[380px] h-auto sm:w-[450px] lg:w-[530px] lg:h-[590px] -ml-6 sm:-ml-4 lg:-ml-8"
                                style={{
                                    opacity: 1,
                                }}
                                loading="eager"
                                decoding="async"
                                fetchpriority="high"
                            />
                        </div>
                    </motion.div>

                    {/* Right Content - Text Section */}
                    <motion.div
                        className="flex flex-col justify-center items-start text-left space-y-2 lg:space-y-4 order-2 lg:order-2 relative z-20 w-full lg:w-auto lg:-ml-20"
                        initial="hidden"
                        animate="visible"
                        variants={slideInRight}
                        style={{ flex: '1 1 auto', maxWidth: '600px' }}
                        
                    >
                        {/* Main Heading - SEO optimized with single H1 */}
                        <div className="space-y-0 w-full">
                            <motion.h1
                                className="uppercase mb-0 text-[28px] leading-tight sm:text-[32px] lg:text-[42px]"
                                variants={fadeInVariant}
                                style={{
                                    fontFamily: 'Helvetica Neue Condensed, Helvetica Compressed, Arial Narrow, Impact, sans-serif',
                                    fontWeight: '910',
                                    letterSpacing: '0',
                                    color: '#3D3D3D',
                                    lineHeight: '1.05',
                                }}
                            >
                                <span style={{ display: 'block', whiteSpace: 'nowrap' }}>PREMIUM WEDDING SUIT</span>
                                <span style={{ display: 'block', whiteSpace: 'nowrap', lineHeight: '1.15' }}>RENTALS ACROSS KERALA</span>
                                <span style={{ display: 'block', whiteSpace: 'nowrap', color: '#0000FF', lineHeight: '1.15' }}>SUITOR GUY</span>
                            </motion.h1>

                            {/* Black Underline */}
                            <motion.div
                                className="mt-6"
                                variants={fadeInVariant}
                                style={{
                                    width: '140px',
                                    height: '3px',
                                    backgroundColor: '#000000',
                                    marginTop: '15px',
                                }}
                            ></motion.div>
                        </div>

                        {/* Description Text - SEO optimized with keywords */}
                        <motion.p
                            variants={fadeInVariant}
                            className="text-sm sm:text-base lg:text-[14px]"
                            style={{
                                maxWidth: '100%',
                                fontFamily: 'Cabin, Arial, sans-serif',
                                fontWeight: 400,
                                lineHeight: '22px',
                                letterSpacing: '0',
                                color: '#666666',
                                marginTop: '15px',
                            }}
                        >
                            Experience premium wedding suit collections across Kerala with expert fitting services. Designed to make you look your best on the most important day of your life with bespoke tailoring that fits your style perfectly.
                        </motion.p>

                        {/* CTA Button */}
                        <motion.div variants={fadeInVariant} className="pt-1 w-full lg:w-auto">
                            <button
                                className="hover:bg-blue-700 transition-colors duration-300 w-full lg:w-auto"
                                style={{
                                    backgroundColor: '#0000FF',
                                    color: 'white',
                                    fontFamily: 'Cabin, Arial, sans-serif',
                                    fontWeight: 600,
                                    fontSize: '15px',
                                    padding: '14px 32px',
                                    borderRadius: '50px',
                                    border: 'none',
                                    cursor: 'pointer',
                                    marginBottom: '10px',
                                }}
                            >
                                Explore Now
                            </button>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default HomeMain;