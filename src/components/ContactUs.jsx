import React, { useState } from 'react';
import { motion } from 'framer-motion';

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

const ContactUs = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        message: ''
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus(null);

        try {
            // Google Apps Script Web App URL - Replace with your deployed URL
            const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbybYZ6Ps3TFpnKNeXOnWREXck2Jb07slS_h8CFdvPLs20Rl5qdEI52oi_jEc87O6s4wTg/exec';
            
            const response = await fetch(GOOGLE_SCRIPT_URL, {
                method: 'POST',
                mode: 'no-cors', // Required for Google Apps Script
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData)
            });
            
            // Since we're using no-cors mode, we can't read the response
            // But we can assume success if no error is thrown
            console.log('Form submitted to Google Sheets:', formData);
            
            setSubmitStatus('success');
            setFormData({
                fullName: '',
                email: '',
                phone: '',
                message: ''
            });
        } catch (error) {
            console.error('Error submitting form:', error);
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div id="contact-us" className="w-full py-8 sm:py-12 lg:py-20 xl:py-24">
            <div className="max-w-9xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={fadeInVariant}
                    className="w-full flex justify-center"
                >
                    {/* Main Contact Card */}
                    <div 
                        className="bg-gray-900 shadow-2xl overflow-hidden flex flex-col lg:flex-row w-full max-w-[1100px] h-auto lg:h-[450px] p-6 sm:p-8 lg:p-12 border-4 border-gray-800"
                        style={{ 
                            backgroundColor: '#000000',
                            justifyContent: 'space-between',
                            opacity: 1,
                            borderRadius: '32px',
                            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.8), 0 0 0 1px rgba(0, 0, 0, 0.1)'
                        }}
                    >
                            {/* Left Section - Promotional Text */}
                            <div className="lg:w-1/2 flex flex-col justify-center">
                                <motion.div
                                    variants={fadeInVariant}
                                    className="space-y-5"
                                >
                                    {/* Main Heading */}
                                    <div>
                                        <h2 
                                            className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold uppercase leading-tight text-white"
                                            style={{
                                                fontFamily: 'Helvetica Neue Condensed, Helvetica Compressed, Arial Narrow, Impact, sans-serif',
                                                fontWeight: '820',
                                                letterSpacing: '0.02em',
                                            }}
                                        >
                                            LOOKING FOR THE PERFECT SUIT FOR YOUR
                                        </h2>
                                        <h2 
                                            className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold uppercase leading-tight mt-2"
                                            style={{
                                                fontFamily: 'Helvetica Neue Condensed, Helvetica Compressed, Arial Narrow, Impact, sans-serif',
                                                fontWeight: '820',
                                                letterSpacing: '0.02em',
                                                color: '#0033FF'
                                            }}
                                        >
                                            SPECIAL OCCASION?
                                        </h2>
                                    </div>

                                    {/* Separator Line */}
                                    <div className="w-14 h-0.5 bg-white"></div>

                                    {/* Body Text */}
                                    <p 
                                        className="text-gray-300 text-base sm:text-lg leading-relaxed max-w-md"
                                        style={{
                                            fontFamily: 'Cabin, Arial, sans-serif',
                                            color: '#CCCCCC'
                                        }}
                                    >
                                        We're here to help you choose the right fit, style, and package from our premium collection.
                                    </p>
                                </motion.div>
                            </div>

                            {/* Right Section - Contact Form */}
                            <div className="lg:w-1/2 flex flex-col justify-center">
                                <motion.form
                                    variants={fadeInVariant}
                                    onSubmit={handleSubmit}
                                    className="space-y-5"
                                >
                                    {/* Full Name Field */}
                                    <div>
                                        <input
                                            type="text"
                                            name="fullName"
                                            value={formData.fullName}
                                            onChange={handleInputChange}
                                            placeholder="Full Name"
                                            required
                                            className="w-full px-3 py-2 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
                                            style={{
                                                backgroundColor: '#333333',
                                                fontFamily: 'Cabin, Arial, sans-serif'
                                            }}
                                        />
                                    </div>

                                    {/* Email Field */}
                                    <div>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            placeholder="Email Address"
                                            required
                                            className="w-full px-3 py-2 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
                                            style={{
                                                backgroundColor: '#333333',
                                                fontFamily: 'Cabin, Arial, sans-serif'
                                            }}
                                        />
                                    </div>

                                    {/* Phone Field */}
                                    <div>
                                        <input
                                            type="tel"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleInputChange}
                                            placeholder="Phone Number"
                                            required
                                            className="w-full px-3 py-2 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
                                            style={{
                                                backgroundColor: '#333333',
                                                fontFamily: 'Cabin, Arial, sans-serif'
                                            }}
                                        />
                                    </div>

                                    {/* Message Field */}
                                    <div>
                                        <textarea
                                            name="message"
                                            value={formData.message}
                                            onChange={handleInputChange}
                                            placeholder="Message"
                                            rows={3}
                                            required
                                            className="w-full px-3 py-2 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200 resize-none"
                                            style={{
                                                backgroundColor: '#333333',
                                                fontFamily: 'Cabin, Arial, sans-serif'
                                            }}
                                        />
                                    </div>

                                    {/* Submit Button */}
                                    <div className="pt-2">
                                        <motion.button
                                            type="submit"
                                            disabled={isSubmitting}
                                            whileHover={{ scale: 1.02 }}
                                            whileTap={{ scale: 0.98 }}
                                            className="w-full py-2 px-4 rounded-lg font-bold text-white transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                                            style={{
                                                backgroundColor: '#0033FF',
                                                fontFamily: 'Cabin, Arial, sans-serif'
                                            }}
                                        >
                                            {isSubmitting ? 'Submitting...' : 'Enquire Now'}
                                        </motion.button>
                                    </div>

                                    {/* Status Messages */}
                                    {submitStatus === 'success' && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            className="text-green-400 text-sm text-center"
                                        >
                                            Thank you! Your enquiry has been submitted successfully.
                                        </motion.div>
                                    )}

                                    {submitStatus === 'error' && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            className="text-red-400 text-sm text-center"
                                        >
                                            Something went wrong. Please try again.
                                        </motion.div>
                                    )}
                                </motion.form>
                            </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default ContactUs;
