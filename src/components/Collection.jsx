
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Coll1 from '../assets/Coll1.png';
import Coll2 from '../assets/Coll2.png';
import Coll3 from '../assets/Coll3.png';
import Coll4 from '../assets/Coll4.png';
import Coll5 from '../assets/Coll5.png';
import Coll6 from '../assets/Coll6.png';
import Coll7 from '../assets/Coll7.png';

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

const Collection = () => {
    const [activeFilter, setActiveFilter] = useState('Luxury');

    const filters = ['Classic', 'Luxury', 'Premium'];


    return (
        <div className="min-h-screen" style={{ backgroundColor: '#EFEFEF' }}>
            {/* Header Section */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={fadeInVariant}
                    className="mb-8 sm:mb-12"
                >
                    {/* Title */}
                    <div className="mb-6 sm:mb-8">
                        <h1 
                            className="text-2xl sm:text-3xl lg:text-4xl mb-2"
                            style={{
                                fontFamily: 'Helvetica Neue Condensed, Helvetica Compressed, Arial Narrow, Impact, sans-serif',
                                fontWeight: '910',
                                letterSpacing: '0',
                                color: '#3D3D3D',
                                lineHeight: '1.05',
                            }}
                        >
                            FIND YOUR NEAREST
                        </h1>
                        <h2 
                            className="text-2xl sm:text-3xl lg:text-4xl"
                            style={{
                                fontFamily: 'Helvetica Neue Condensed, Helvetica Compressed, Arial Narrow, Impact, sans-serif',
                                fontWeight: '910',
                                letterSpacing: '0',
                                color: '#0000FF',
                                lineHeight: '1.05',
                            }}
                        >
                            SUITOR GUY
                        </h2>
                    </div>

                    {/* Filter Buttons */}
                    <div className="flex flex-wrap gap-3 sm:gap-4">
                        {filters.map((filter) => (
                            <motion.button
                                key={filter}
                                onClick={() => setActiveFilter(filter)}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className={`px-6 py-3 font-semibold text-sm sm:text-base transition-all duration-200 ${
                                    activeFilter === filter
                                        ? 'bg-blue-600 text-white shadow-lg'
                                        : 'bg-white text-gray-700 border border-gray-300 hover:border-gray-400'
                                }`}
                                style={{ borderRadius: '20px' }}
                            >
                                {filter}
                            </motion.button>
                        ))}
                    </div>
                </motion.div>

                {/* Desktop Layout */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={fadeInVariant}
                    className="hidden md:block space-y-3"
                >
                    {/* Row 1: Large + Medium */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-3">
                        {/* Large Card */}
                        <motion.div
                            variants={fadeInVariant}
                            className="lg:col-span-2"
                            style={{ marginLeft: '225px' }}
                        >
                            <div 
                                className="bg-gray-200 overflow-hidden shadow-lg relative"
                                style={{
                                    width: '330px',
                                    height: '455px',
                                    borderRadius: '14px'
                                }}
                            >
                                <div className="relative h-full">
                                    <img 
                                        src={Coll1} 
                                        alt="Premium Indo Western Wedding Suit Collection - Classic Style for Grooms | Suitor Guy Kerala"
                                        className="w-full h-full object-cover"
                                    />
                                    
                                    {/* Text Overlay */}
                                    <div className="absolute top-6 left-6">
                                        <h3 
                                            className="uppercase mb-2"
                                            style={{
                                                fontFamily: 'Helvetica Neue Condensed, Helvetica Compressed, Arial Narrow, Impact, sans-serif',
                                                fontWeight: '910',
                                                fontSize: '18px',
                                                letterSpacing: '0',
                                                color: '#3D3D3D',
                                                lineHeight: '1.05',
                                            }}
                                        >
                                            INDO <br /> WESTERN
                                        </h3>
                                        <p 
                                            style={{
                                                fontFamily: 'Cabin, Arial, sans-serif',
                                                fontWeight: 400,
                                                fontSize: '12px',
                                                lineHeight: '18px',
                                                letterSpacing: '0',
                                                color: '#666666',
                                                marginBottom: '8px',
                                            }}
                                        >
                                            Starting from ₹4,999
                                        </p>
                                        {/* Black Underline */}
                                        <div
                                            style={{
                                                width: '120px',
                                                height: '2px',
                                                backgroundColor: '#000000',
                                                marginTop: '8px',
                                            }}
                                        ></div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Medium Card */}
                        <motion.div
                            variants={fadeInVariant}
                            className="lg:col-span-1"
                            style={{ marginLeft: '-255px' }}
                        >
                            <div 
                                className="bg-gray-800 overflow-hidden shadow-lg relative"
                                style={{
                                    width: '475px',
                                    height: '220px',
                                    borderRadius: '14px'
                                }}
                            >
                                <div className="relative h-full">
                                    <img 
                                        src={Coll2} 
                                        alt="Premium Indo Western Wedding Suit Collection - Classic Style for Grooms | Suitor Guy Kerala"
                                        className="w-full h-full object-cover"
                                    />
                                    
                                    {/* Text Overlay */}
                                    <div className="absolute top-6 left-6">
                                        <h3 
                                            className="uppercase mb-2"
                                            style={{
                                                fontFamily: 'Helvetica Neue Condensed, Helvetica Compressed, Arial Narrow, Impact, sans-serif',
                                                fontWeight: '910',
                                                fontSize: '16px',
                                                letterSpacing: '0',
                                                color: '#FFFFFF',
                                                lineHeight: '1.05',
                                            }}
                                        >
                                            INDO <br /> WESTERN
                                        </h3>
                                        <p 
                                            style={{
                                                fontFamily: 'Cabin, Arial, sans-serif',
                                                fontWeight: 400,
                                                fontSize: '11px',
                                                lineHeight: '16px',
                                                letterSpacing: '0',
                                                color: '#FFFFFF',
                                                marginBottom: '6px',
                                            }}
                                        >
                                            Starting from ₹4,999
                                        </p>
                                        {/* Black Underline */}
                                        <div
                                            style={{
                                                width: '100px',
                                                height: '2px',
                                                backgroundColor: '#FFFFFF',
                                                marginTop: '6px',
                                            }}
                                        ></div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Row 2: Medium + Medium */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {/* Medium Card */}
                        <motion.div
                            variants={fadeInVariant}
                            className="md:col-span-1"
                            style={{ marginLeft: '565px', marginTop: '-235px' }}
                        >
                            <div 
                                className="bg-blue-900 overflow-hidden shadow-lg relative"
                                style={{
                                    width: '231px',
                                    height: '223px',
                                    borderRadius: '14px'
                                }}
                            >
                                <div className="relative h-full">
                                    <img 
                                        src={Coll3} 
                                        alt="Premium Indo Western Wedding Suit Collection - Classic Style for Grooms | Suitor Guy Kerala"
                                        className="w-full h-full object-cover"
                                    />
                                    
                                    {/* Text Overlay */}
                                    <div className="absolute top-6 left-6">
                                        <h3 
                                            className="uppercase mb-2"
                                            style={{
                                                fontFamily: 'Helvetica Neue Condensed, Helvetica Compressed, Arial Narrow, Impact, sans-serif',
                                                fontWeight: '910',
                                                fontSize: '14px',
                                                letterSpacing: '0',
                                                color: '#FFFFFF',
                                                lineHeight: '1.05',
                                            }}
                                        >
                                            INDO <br /> WESTERN
                                        </h3>
                                        <p 
                                            style={{
                                                fontFamily: 'Cabin, Arial, sans-serif',
                                                fontWeight: 400,
                                                fontSize: '10px',
                                                lineHeight: '14px',
                                                letterSpacing: '0',
                                                color: '#FFFFFF',
                                                marginBottom: '4px',
                                            }}
                                        >
                                            Starting from ₹4,999
                                        </p>
                                        {/* Black Underline */}
                                        <div
                                            style={{
                                                width: '80px',
                                                height: '2px',
                                                backgroundColor: '#FFFFFF',
                                                marginTop: '4px',
                                            }}
                                        ></div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Medium Card */}
                        <motion.div
                            variants={fadeInVariant}
                            className="md:col-span-1"
                            style={{ marginLeft: '195px', marginTop: '-235px' }}
                        >
                            <div 
                                className="bg-gray-200 overflow-hidden shadow-lg relative"
                                style={{
                                    width: '231px',
                                    height: '223px',
                                    borderRadius: '14px'
                                }}
                            >
                                <div className="relative h-full">
                                    <img 
                                        src={Coll4} 
                                        alt="Premium Indo Western Wedding Suit Collection - Classic Style for Grooms | Suitor Guy Kerala"
                                        className="w-full h-full object-cover"
                                    />
                                    
                                    {/* Text Overlay */}
                                    <div className="absolute top-8 left-8">
                                        <h3 
                                            className="uppercase mb-2"
                                            style={{
                                                fontFamily: 'Helvetica Neue Condensed, Helvetica Compressed, Arial Narrow, Impact, sans-serif',
                                                fontWeight: '910',
                                                fontSize: '14px',
                                                letterSpacing: '0',
                                                color: '#3D3D3D',
                                                lineHeight: '1.05',
                                               
                                                marginLeft:"120px"
                                            }}
                                        >
                                            3<br/> PIECE SUIT
                                        </h3>
                                        <p 
                                            style={{
                                                fontFamily: 'Cabin, Arial, sans-serif',
                                                fontWeight: 400,
                                                fontSize: '10px',
                                                lineHeight: '14px',
                                                letterSpacing: '0',
                                                color: '#666666',
                                                marginBottom: '4px',
                                               
                                                marginLeft:"120px"
                                            }}
                                        >
                                            Starting from ₹4,999
                                        </p>
                                        {/* Black Underline */}
                                        <div
                                            style={{
                                                width: '80px',
                                                height: '2px',
                                                backgroundColor: '#000000',
                                                marginTop: '4px',
                                                 marginLeft:"120px"
                                            }}
                                        ></div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
            </div>

                    {/* Row 3: Medium + Medium */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {/* Medium Card */}
                        <motion.div
                            variants={fadeInVariant}
                            className="md:col-span-1"
                            style={{ marginLeft: '228px' , marginTop: '-16px' }}
                        >
                            <div 
                                className="bg-black overflow-hidden shadow-lg relative"
                                style={{
                                    width: '405px',
                                    height: '223px',
                                    borderRadius: '14px'
                                }}
                            >
                                <div className="relative h-full">
                                    <img 
                                        src={Coll5} 
                                        alt="Premium Indo Western Wedding Suit Collection - Classic Style for Grooms | Suitor Guy Kerala"
                                        className="w-full h-full object-cover"
                                    />
                                    
                                    {/* Text Overlay */}
                                    <div className="absolute top-8 left-8">
                                        <h3 
                                            className="uppercase mb-2"
                                            style={{
                                                fontFamily: 'Helvetica Neue Condensed, Helvetica Compressed, Arial Narrow, Impact, sans-serif',
                                                fontWeight: '910',
                                                fontSize: '16px',
                                                letterSpacing: '0',
                                                color: '#FFFFFF',
                                                lineHeight: '1.05',
                                            }}
                                        >
                                            INDO <br /> WESTERN
                                        </h3>
                                        <p 
                                            style={{
                                                fontFamily: 'Cabin, Arial, sans-serif',
                                                fontWeight: 400,
                                                fontSize: '11px',
                                                lineHeight: '16px',
                                                letterSpacing: '0',
                                                color: '#FFFFFF',
                                                marginBottom: '6px',
                                            }}
                                        >
                                            Starting from ₹4,999
                                        </p>
                                        {/* Black Underline */}
                                        <div
                                            style={{
                                                width: '100px',
                                                height: '2px',
                                                backgroundColor: '#FFFFFF',
                                                marginTop: '6px',
                                            }}
                                        ></div>
                                    </div>
                                </div>
                        </div>
                        </motion.div>

                        {/* Medium Card */}
                        <motion.div
                            variants={fadeInVariant}
                            className="md:col-span-1"
                            style={{ marginLeft: '28px', marginTop: '-16px' }}
                        >
                            <div 
                                className="bg-gray-800 overflow-hidden shadow-lg relative"
                                style={{
                                    width: '400px',
                                    height: '223px',
                                    borderRadius: '14px'
                                }}
                            >
                                <div className="relative h-full">
                                    <img 
                                        src={Coll6} 
                                        alt="Premium Indo Western Wedding Suit Collection - Classic Style for Grooms | Suitor Guy Kerala"
                                        className="w-full h-full object-cover"
                                    />
                                    
                                    {/* Text Overlay */}
                                    <div className="absolute top-6 left-6">
                                        <h3 
                                            className="uppercase mb-2"
                                            style={{
                                                fontFamily: 'Helvetica Neue Condensed, Helvetica Compressed, Arial Narrow, Impact, sans-serif',
                                                fontWeight: '910',
                                                fontSize: '20px',
                                                letterSpacing: '0',
                                                color: '#FFFFFF',
                                                lineHeight: '1.05',
                                                marginLeft:"170px"
                                            }}
                                        >
                                            BANDHGALA
                                        </h3>
                                        <p 
                                            style={{
                                                fontFamily: 'Cabin, Arial, sans-serif',
                                                fontWeight: 400,
                                                fontSize: '14px',
                                                lineHeight: '20px',
                                                letterSpacing: '0',
                                                color: '#FFFFFF',
                                                marginBottom: '6px',
                                                 marginLeft:"170px"
                                            }}
                                        >
                                            Starting from ₹4,999
                                        </p>
                                        {/* Black Underline */}
                                        <div
                                            style={{
                                                width: '100px',
                                                height: '2px',
                                                backgroundColor: '#FFFFFF',
                                                marginTop: '6px',
                                                 marginLeft:"170px"
                                            }}
                                        ></div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Row 4: Single Card */}
                    
                </motion.div>

                {/* Mobile Layout - Modern Card Design */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={fadeInVariant}
                    className="md:hidden space-y-6"
                >
                    {/* Coll1 */}
                    <motion.div
                        variants={fadeInVariant}
                        className="relative rounded-2xl overflow-hidden shadow-lg"
                        style={{ height: '280px' }}
                    >
                        <img 
                            src={Coll1} 
                            alt="Premium Indo Western Wedding Suit Collection - Classic Style for Grooms | Suitor Guy Kerala"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                        <div className="absolute bottom-0 left-0 right-0 p-6">
                            <h3 className="text-lg font-bold text-white mb-2">INDO WESTERN</h3>
                            <p className="text-xs text-white/90 mb-4">Starting from ₹4,999</p>
                            <button className="bg-white text-gray-900 px-6 py-2 text-sm font-semibold hover:bg-gray-100 transition-colors" style={{ borderRadius: '20px' }}>
                                View Collection
                            </button>
                        </div>
                    </motion.div>

                    {/* Coll2 */}
                    <motion.div
                        variants={fadeInVariant}
                        className="relative rounded-2xl overflow-hidden shadow-lg"
                        style={{ height: '280px' }}
                    >
                        <img 
                            src={Coll2} 
                            alt="Premium Indo Western Wedding Suit Collection - Classic Style for Grooms | Suitor Guy Kerala"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                        <div className="absolute bottom-0 left-0 right-0 p-6">
                            <h3 className="text-lg font-bold text-white mb-2">INDO WESTERN</h3>
                            <p className="text-xs text-white/90 mb-4">Starting from ₹4,999</p>
                            <button className="bg-white text-gray-900 px-6 py-2 text-sm font-semibold hover:bg-gray-100 transition-colors" style={{ borderRadius: '20px' }}>
                                View Collection
                            </button>
                        </div>
                    </motion.div>

                    {/* Coll3 */}
                    <motion.div
                        variants={fadeInVariant}
                        className="relative rounded-2xl overflow-hidden shadow-lg"
                        style={{ height: '280px' }}
                    >
                        <img 
                            src={Coll3} 
                            alt="Premium Indo Western Wedding Suit Collection - Classic Style for Grooms | Suitor Guy Kerala"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                        <div className="absolute bottom-0 left-0 right-0 p-6">
                            <h3 className="text-lg font-bold text-white mb-2">INDO WESTERN</h3>
                            <p className="text-xs text-white/90 mb-4">Starting from ₹4,999</p>
                            <button className="bg-white text-gray-900 px-6 py-2 text-sm font-semibold hover:bg-gray-100 transition-colors" style={{ borderRadius: '20px' }}>
                                View Collection
                            </button>
                        </div>
                    </motion.div>

                    {/* Coll4 */}
                    <motion.div
                        variants={fadeInVariant}
                        className="relative rounded-2xl overflow-hidden shadow-lg"
                        style={{ height: '280px' }}
                    >
                        <img 
                            src={Coll4} 
                            alt="Premium Indo Western Wedding Suit Collection - Classic Style for Grooms | Suitor Guy Kerala"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-transparent"></div>
                        <div className="absolute bottom-6 right-6">
                            <h3 className="text-xl font-black text-white mb-2">3 PIECE SUIT</h3>
                            <p className="text-sm font-semibold text-white/90 mb-4">Starting from ₹4,999</p>
                            <button className="bg-white text-gray-900 px-6 py-2 text-sm font-semibold hover:bg-gray-100 transition-colors" style={{ borderRadius: '20px' }}>
                                View Collection
                            </button>
                        </div>
                    </motion.div>

                    {/* Coll5 */}
                    <motion.div
                        variants={fadeInVariant}
                        className="relative rounded-2xl overflow-hidden shadow-lg"
                        style={{ height: '280px' }}
                    >
                        <img 
                            src={Coll5} 
                            alt="Premium Indo Western Wedding Suit Collection - Classic Style for Grooms | Suitor Guy Kerala"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                        <div className="absolute bottom-0 left-0 right-0 p-6">
                            <h3 className="text-lg font-bold text-white mb-2">INDO WESTERN</h3>
                            <p className="text-xs text-white/90 mb-4">Starting from ₹4,999</p>
                            <button className="bg-white text-gray-900 px-6 py-2 text-sm font-semibold hover:bg-gray-100 transition-colors" style={{ borderRadius: '20px' }}>
                                View Collection
                            </button>
                        </div>
                    </motion.div>

                    {/* Coll6 */}
                    <motion.div
                        variants={fadeInVariant}
                        className="relative rounded-2xl overflow-hidden shadow-lg"
                        style={{ height: '280px' }}
                    >
                        <img 
                            src={Coll6} 
                            alt="Premium Indo Western Wedding Suit Collection - Classic Style for Grooms | Suitor Guy Kerala"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-transparent"></div>
                        <div className="absolute bottom-6 right-6">
                            <h3 className="text-xl font-black text-white mb-2">BANDHGALA</h3>
                            <p className="text-sm font-semibold text-white/90 mb-4">Starting from ₹4,999</p>
                            <button className="bg-white text-gray-900 px-6 py-2 text-sm font-semibold hover:bg-gray-100 transition-colors" style={{ borderRadius: '20px' }}>
                                View Collection
                            </button>
                    </div>
                    </motion.div>

                   
                </motion.div>
            </div>
        </div>
    );
};

export default Collection;

