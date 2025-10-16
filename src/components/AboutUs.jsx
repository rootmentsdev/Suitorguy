import React from 'react';
import { motion } from 'framer-motion';
import AboutImage from '../assets/About.png';

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

const AboutUs = () => {
    return (
        <div id="about-us" className="relative w-full bg-transparent py-8 sm:py-12 lg:py-20 xl:py-24 overflow-hidden">
            <div className="content-container">
                {/* Mobile Layout - Stacked */}
                <div className="block lg:hidden">
                    <div className="flex flex-col items-center space-y-6">
                        {/* Image */}
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.3 }}
                            variants={slideInLeft}
                            className="w-full flex justify-center"
                        >
                            <img
                                src={AboutImage}
                                alt="Professional man in elegant suit - Suitor Guy premium menswear"
                                className="shadow-lg w-full max-w-[320px] sm:max-w-[380px] h-auto object-cover rounded-3xl"
                                style={{ opacity: 1 }}
                                loading="lazy"
                            />
                        </motion.div>

                        {/* Text Box */}
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.3 }}
                            variants={slideInRight}
                            className="w-full flex justify-center"
                        >
                            <div className="bg-white w-full max-w-[320px] sm:max-w-[400px] rounded-3xl flex flex-col p-6 sm:p-8" style={{ opacity: 1, gap: '20px' }}>
                            
                                {/* Heading */}
                                <motion.div
                                    variants={fadeInVariant}
                                    className="mb-4"
                                >
                                    <h2 className="text-xl sm:text-2xl font-bold uppercase leading-tight">
                                        <span 
                                            className="block text-black"
                                            style={{
                                                fontFamily: 'Helvetica Neue Condensed, Helvetica Compressed, Arial Narrow, Impact, sans-serif',
                                                fontWeight: '850',
                                                letterSpacing: '0.02em',
                                            }}
                                        >
                                            ABOUT
                                        </span>
                                        <span 
                                            className="block text-blue-600 mt-1"
                                            style={{
                                                fontFamily: 'Helvetica Neue Condensed, Helvetica Compressed, Arial Narrow, Impact, sans-serif',
                                                fontWeight: '850',
                                                letterSpacing: '0.02em',
                                            }}
                                        >
                                            SUITOR GUY
                                        </span>
                                    </h2>
                                    
                                    {/* Decorative Line */}
                                    <div className="w-12 sm:w-16 h-0.5 bg-gray-700 mt-3 sm:mt-4"></div>
                                </motion.div>

                                {/* Body Text */}
                                <motion.div
                                    variants={fadeInVariant}
                                    className="space-y-3 text-black"
                                    style={{
                                        fontFamily: 'Cabin, Arial, sans-serif',
                                        fontSize: '14px',
                                        lineHeight: '24px',
                                        letterSpacing: '0',
                                        textAlign: 'justify'
                                    }}
                                >
                                    <p>
                                        We know that style isn't just about clothes it's about confidence, personality, and the way you present yourself. At Suitor Guy, we've carefully curated a collection of premium men's wear that helps you express who you are. With locations across Kerala, our mission is to make sure every man can access the elegance he deserves, no matter the occasion.
                                    </p>
                                    
                                    <p>
                                        What makes us special? It's our commitment to quality, style, and making luxury accessible for everyone. We're here to help you find that perfect outfit that not only fits well but feels right.
                                    </p>
                                </motion.div>
                            </div>
                        </motion.div>
                    </div>
                </div>

                {/* Desktop Layout - Overlapping */}
                <div className="hidden lg:block">
                    <div className="relative flex items-center justify-center min-h-[600px] px-4">
                        {/* Left Section - Image */}
                        <motion.div
                            className="relative z-10 flex-shrink-0"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.3 }}
                            variants={slideInLeft}
                        >
                            <div className="relative" style={{ marginLeft: '10px' }}>
                                <img
                                    src={AboutImage}
                                    alt="Professional man in elegant suit - Suitor Guy premium menswear"
                                    style={{
                                        width: '420px',
                                        height: '440px',
                                        opacity: 1,
                                        borderRadius: '24px',
                                        objectFit: 'cover'
                                    }}
                                    loading="lazy"
                                />
                            </div>
                        </motion.div>

                        {/* Right Section - Text Box (Overlapping) */}
                        <motion.div
                            className="relative z-20 flex-shrink-0 -ml-16 xl:-ml-20"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.3 }}
                            variants={slideInRight}
                        >
                            <div 
                                className="bg-white flex flex-col"
                                style={{
                                    width: '770px',
                                    height: '400px',
                                    opacity: 1,
                                    borderRadius: '24px',
                                    paddingTop: '30px',
                                    paddingRight: '40px',
                                    paddingBottom: '30px',
                                    paddingLeft: '40px',
                                    gap: '40px',
                                }}
                            >
                                {/* Heading */}
                                <motion.div
                                    variants={fadeInVariant}
                                    className="mb-6"
                                >
                                    <h2 className="text-3xl xl:text-4xl font-bold uppercase leading-tight">
                                        <span 
                                            className="block text-black"
                                            style={{
                                                fontFamily: 'Helvetica Neue Condensed, Helvetica Compressed, Arial Narrow, Impact, sans-serif',
                                                fontWeight: '850',
                                                letterSpacing: '0.02em',
                                            }}
                                        >
                                            ABOUT
                                        </span>
                                        <span 
                                            className="block text-blue-600 mt-1"
                                            style={{
                                                fontFamily: 'Helvetica Neue Condensed, Helvetica Compressed, Arial Narrow, Impact, sans-serif',
                                                fontWeight: '850',
                                                letterSpacing: '0.02em',
                                            }}
                                        >
                                            SUITOR GUY
                                        </span>
                                    </h2>
                                    
                                    {/* Decorative Line */}
                                    <div className="w-16 h-0.5 bg-gray-700 mt-4"></div>
                                </motion.div>

                                {/* Body Text */}
                                <motion.div
                                    variants={fadeInVariant}
                                    className="space-y-4 text-black"
                                    style={{
                                        fontFamily: 'Cabin, Arial, sans-serif',
                                        fontSize: '14px',
                                        lineHeight: '24px',
                                        letterSpacing: '0',
                                    }}
                                >
                                    <p>
                                        We know that style isn't just about clothes it's about confidence, personality, and the way you present yourself. At Suitor Guy, we've carefully curated a collection of premium men's wear that helps you express who you are. With locations across Kerala, our mission is to make sure every man can access the elegance he deserves, no matter the occasion.
                                    </p>
                                    
                                    <p>
                                        What makes us special? It's our commitment to quality, style, and making luxury accessible for everyone. We're here to help you find that perfect outfit that not only fits well but feels right.
                                    </p>
                                </motion.div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
