
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

    const products = [
        {
            id: 1,
            image: Coll1,
            title: 'INDO WESTERN',
            price: 'Starting from ₹4,999',
            bgColor: 'bg-gray-200',
            textColor: 'text-black'
        },
        {
            id: 2,
            image: Coll2,
            title: 'INDO WESTERN',
            price: 'Starting from ₹4,999',
            bgColor: 'bg-gray-800',
            textColor: 'text-white'
        },
        {
            id: 3,
            image: Coll3,
            title: 'INDO WESTERN',
            price: 'Starting from ₹4,999',
            bgColor: 'bg-blue-900',
            textColor: 'text-white'
        },
        {
            id: 4,
            image: Coll4,
            title: 'INDO WESTERN',
            price: 'Starting from ₹4,999',
            bgColor: 'bg-gray-200',
            textColor: 'text-black'
        },
        {
            id: 5,
            image: Coll5,
            title: 'INDO WESTERN',
            price: 'Starting from ₹4,999',
            bgColor: 'bg-black',
            textColor: 'text-white'
        },
        {
            id: 6,
            image: Coll6,
            title: 'INDO WESTERN',
            price: 'Starting from ₹4,999',
            bgColor: 'bg-gray-800',
            textColor: 'text-white'
        },
        {
            id: 7,
            image: Coll7,
            title: 'INDO WESTERN',
            price: 'Starting from ₹4,999',
            bgColor: 'bg-gray-200',
            textColor: 'text-black'
        }
    ];

    return (
        <div className="min-h-screen bg-white">
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
                        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-2">
                            FIND YOUR NEAREST
                        </h1>
                        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold" style={{ color: '#0033FF' }}>
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
                                className={`px-6 py-3 rounded-lg font-semibold text-sm sm:text-base transition-all duration-200 ${
                                    activeFilter === filter
                                        ? 'bg-blue-600 text-white shadow-lg'
                                        : 'bg-white text-gray-700 border border-gray-300 hover:border-gray-400'
                                }`}
                            >
                                {filter}
                            </motion.button>
                        ))}
                    </div>
                </motion.div>

                {/* Products Grid - Dynamic Layout from Image */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={fadeInVariant}
                    className="space-y-3"
                >
                    {/* Row 1: Large + Medium */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-3">
                        {/* Large Card */}
                        <motion.div
                            variants={fadeInVariant}
                            className="lg:col-span-2"
                            style={{ marginLeft: '300px' }}
                        >
                            <div 
                                className={`${products[0].bgColor} overflow-hidden shadow-lg relative`}
                                style={{
                                    width: '220px',
                                    height: '308px',
                                    borderRadius: '14px'
                                }}
                            >
                                <div className="relative h-full">
                                    <img 
                                        src={products[0].image} 
                                        alt="Indo Western Collection - Suitor Guy"
                                        className="w-full h-full object-cover"
                                    />
                                    
                                    {/* Text Overlay */}
                                    <div className="absolute top-6 left-6">
                                        <h3 className={`text-xl font-bold ${products[0].textColor} mb-2`}>
                                            {products[0].title}
                                        </h3>
                                        <p className={`text-base ${products[0].textColor} opacity-90`}>
                                            {products[0].price}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Medium Card */}
                        <motion.div
                            variants={fadeInVariant}
                            className="lg:col-span-1"
                            style={{ marginLeft: '-290px' }}
                        >
                            <div 
                                className={`${products[1].bgColor} overflow-hidden shadow-lg relative`}
                                style={{
                                    width: '320px',
                                    height: '149px',
                                    borderRadius: '14px'
                                }}
                            >
                                <div className="relative h-full">
                                    <img 
                                        src={products[1].image} 
                                        alt="Indo Western Collection - Suitor Guy"
                                        className="w-full h-full object-cover"
                                    />
                                    
                                    {/* Text Overlay */}
                                    <div className="absolute top-6 left-6">
                                        <h3 className={`text-lg font-bold ${products[1].textColor} mb-1`}>
                                            {products[1].title}
                                        </h3>
                                        <p className={`text-sm ${products[1].textColor} opacity-90`}>
                                            {products[1].price}
                                        </p>
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
                            style={{ marginLeft: '529px', marginTop: '-165px' }}
                        >
                            <div 
                                className={`${products[2].bgColor} overflow-hidden shadow-lg relative`}
                                style={{
                                    width: '154px',
                                    height: '149px',
                                    borderRadius: '14px'
                                }}
                            >
                                <div className="relative h-full">
                                    <img 
                                        src={products[2].image} 
                                        alt="Indo Western Collection - Suitor Guy"
                                        className="w-full h-full object-cover"
                                    />
                                    
                                    {/* Text Overlay */}
                                    <div className="absolute top-6 left-6">
                                        <h3 className={`text-lg font-bold ${products[2].textColor} mb-1`}>
                                            {products[2].title}
                                        </h3>
                                        <p className={`text-sm ${products[2].textColor} opacity-90`}>
                                            {products[2].price}
                </p>
            </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Medium Card */}
                        <motion.div
                            variants={fadeInVariant}
                            className="md:col-span-1"
                            style={{ marginLeft: '80px', marginTop: '-165px' }}
                        >
                            <div 
                                className={`${products[3].bgColor} overflow-hidden shadow-lg relative`}
                                style={{
                                    width: '154px',
                                    height: '149px',
                                    borderRadius: '14px'
                                }}
                            >
                                <div className="relative h-full">
                                    <img 
                                        src={products[3].image} 
                                        alt="Indo Western Collection - Suitor Guy"
                                        className="w-full h-full object-cover"
                                    />
                                    
                                    {/* Text Overlay */}
                                    <div className="absolute top-6 left-6">
                                        <h3 className={`text-lg font-bold ${products[3].textColor} mb-1`}>
                                            {products[3].title}
                                        </h3>
                                        <p className={`text-sm ${products[3].textColor} opacity-90`}>
                                            {products[3].price}
                                        </p>
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
                            style={{ marginLeft: '300px' , marginTop: '-14px' }}
                        >
                            <div 
                                className={`${products[4].bgColor} overflow-hidden shadow-lg relative`}
                                style={{
                                    width: '270px',
                                    height: '149px',
                                    borderRadius: '14px'
                                }}
                            >
                                <div className="relative h-full">
                                    <img 
                                        src={products[4].image} 
                                        alt="Indo Western Collection - Suitor Guy"
                                        className="w-full h-full object-cover"
                                    />
                                    
                                    {/* Text Overlay */}
                                    <div className="absolute top-6 left-6">
                                        <h3 className={`text-lg font-bold ${products[4].textColor} mb-1`}>
                                            {products[4].title}
                                        </h3>
                                        <p className={`text-sm ${products[4].textColor} opacity-90`}>
                                            {products[4].price}
                                        </p>
                                    </div>
                                </div>
                        </div>
                        </motion.div>

                        {/* Medium Card */}
                        <motion.div
                            variants={fadeInVariant}
                            className="md:col-span-1"
                            style={{ marginLeft: '-35px', marginTop: '-14px' }}
                        >
                            <div 
                                className={`${products[5].bgColor} overflow-hidden shadow-lg relative`}
                                style={{
                                    width: '270px',
                                    height: '149px',
                                    borderRadius: '14px'
                                }}
                            >
                                <div className="relative h-full">
                                    <img 
                                        src={products[5].image} 
                                        alt="Indo Western Collection - Suitor Guy"
                                        className="w-full h-full object-cover"
                                    />
                                    
                                    {/* Text Overlay */}
                                    <div className="absolute top-6 left-6">
                                        <h3 className={`text-lg font-bold ${products[5].textColor} mb-1`}>
                                            {products[5].title}
                                        </h3>
                                        <p className={`text-sm ${products[5].textColor} opacity-90`}>
                                            {products[5].price}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Row 4: Single Card */}
                    <div className="grid grid-cols-1">
                        <motion.div
                            variants={fadeInVariant}
                            className="mx-auto"
                            style={{ marginLeft: '300px' }}
                        >
                            <div 
                                className={`${products[6].bgColor} overflow-hidden shadow-lg relative`}
                                style={{
                                    width: '550px',
                                    height: '78px',
                                    borderRadius: '14px',
                                    opacity: 1
                                }}
                            >
                                <div className="relative h-full">
                                    <img 
                                        src={products[6].image} 
                                        alt="Indo Western Collection - Suitor Guy"
                                        className="w-full h-full object-cover"
                                    />
                                    
                                    {/* Text Overlay */}
                                    <div className="absolute top-6 left-6">
                                        <h3 className={`text-lg font-bold ${products[6].textColor} mb-1`}>
                                            {products[6].title}
                                        </h3>
                                        <p className={`text-sm ${products[6].textColor} opacity-90`}>
                                            {products[6].price}
                            </p>
                        </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Collection;

