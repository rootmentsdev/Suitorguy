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
    const [errors, setErrors] = useState({});

    const validateEmail = (email) => {
        const emailRegex = /^[a-zA-Z0-9._%+-]+@(gmail|yahoo|outlook|hotmail|icloud|protonmail|aol|live|msn|rediffmail|zoho|yandex|mail)\.(com|co\.uk|org|net|edu|gov|in|co\.in)$/i;
        return emailRegex.test(email);
    };

    const validatePhone = (phone) => {
        const phoneRegex = /^[0-9]{10}$/;
        return phoneRegex.test(phone);
    };

    const validateForm = () => {
        const newErrors = {};

        // Full Name validation
        if (!formData.fullName.trim()) {
            newErrors.fullName = 'Full name is required';
        } else if (formData.fullName.trim().length < 2) {
            newErrors.fullName = 'Full name must be at least 2 characters';
        }

        // Email validation
        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!validateEmail(formData.email)) {
            newErrors.email = 'Please enter a valid email (gmail, yahoo, outlook, etc.)';
        }

        // Phone validation
        if (!formData.phone.trim()) {
            newErrors.phone = 'Phone number is required';
        } else if (!validatePhone(formData.phone)) {
            newErrors.phone = 'Phone number must be exactly 10 digits';
        }

        // Message validation
        if (!formData.message.trim()) {
            newErrors.message = 'Message is required';
        } else if (formData.message.trim().length < 10) {
            newErrors.message = 'Message must be at least 10 characters';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        
        // Clear error for this field when user starts typing
        if (errors[name]) {
            setErrors(prev => ({
                ...prev,
                [name]: ''
            }));
        }

        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        // Validate form before submission
        if (!validateForm()) {
            return;
        }

        setIsSubmitting(true);
        setSubmitStatus(null);

        try {
            // Google Apps Script Web App URL - Replace with your deployed URL
            const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbybYZ6Ps3TFpnKNeXOnWREXck2Jb07slS_h8CFdvPLs20Rl5qdEI52oi_jEc87O6s4wTg/exec';
            
            // Optimized fetch with timeout and faster submission
            const controller = new AbortController();
            const timeoutId = setTimeout(() => controller.abort(), 10000); // 10 second timeout
            
            const response = await fetch(GOOGLE_SCRIPT_URL, {
                method: 'POST',
                mode: 'no-cors', // Required for Google Apps Script
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
                signal: controller.signal
            });
            
            clearTimeout(timeoutId);
            
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
        <div id="contact-us" className="w-full py-0 sm:py-0 lg:py-0 xl:py-0 mb-8 sm:mb-12 lg:mb-16 xl:mb-20">
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
                                            className={`w-full px-3 py-2 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 transition-all duration-200 ${
                                                errors.fullName ? 'focus:ring-red-500 border border-red-500' : 'focus:ring-blue-500'
                                            }`}
                                            style={{
                                                backgroundColor: '#333333',
                                                fontFamily: 'Cabin, Arial, sans-serif',
                                                fontSize: '16px'
                                            }}
                                        />
                                        {errors.fullName && (
                                            <p className="text-red-400 text-sm mt-1">{errors.fullName}</p>
                                        )}
                                    </div>

                                    {/* Email Field */}
                                    <div>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            placeholder="Email Address"
                                            className={`w-full px-3 py-2 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 transition-all duration-200 ${
                                                errors.email ? 'focus:ring-red-500 border border-red-500' : 'focus:ring-blue-500'
                                            }`}
                                            style={{
                                                backgroundColor: '#333333',
                                                fontFamily: 'Cabin, Arial, sans-serif',
                                                fontSize: '16px'
                                            }}
                                        />
                                        {errors.email && (
                                            <p className="text-red-400 text-sm mt-1">{errors.email}</p>
                                        )}
                                    </div>

                                    {/* Phone Field */}
                                    <div>
                                        <input
                                            type="tel"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleInputChange}
                                            placeholder="Phone Number (10 digits)"
                                            maxLength="10"
                                            className={`w-full px-3 py-2 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 transition-all duration-200 ${
                                                errors.phone ? 'focus:ring-red-500 border border-red-500' : 'focus:ring-blue-500'
                                            }`}
                                            style={{
                                                backgroundColor: '#333333',
                                                fontFamily: 'Cabin, Arial, sans-serif',
                                                fontSize: '16px'
                                            }}
                                        />
                                        {errors.phone && (
                                            <p className="text-red-400 text-sm mt-1">{errors.phone}</p>
                                        )}
                                    </div>

                                    {/* Message Field */}
                                    <div>
                                        <textarea
                                            name="message"
                                            value={formData.message}
                                            onChange={handleInputChange}
                                            placeholder="Message (minimum 10 characters)"
                                            rows={3}
                                            className={`w-full px-3 py-2 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 transition-all duration-200 resize-none ${
                                                errors.message ? 'focus:ring-red-500 border border-red-500' : 'focus:ring-blue-500'
                                            }`}
                                            style={{
                                                backgroundColor: '#333333',
                                                fontFamily: 'Cabin, Arial, sans-serif',
                                                fontSize: '16px'
                                            }}
                                        />
                                        {errors.message && (
                                            <p className="text-red-400 text-sm mt-1">{errors.message}</p>
                                        )}
                                    </div>

                                    {/* Submit Button */}
                                    <div className="pt-2">
                                        <motion.button
                                            type="submit"
                                            disabled={isSubmitting}
                                            whileHover={{ scale: 1.02 }}
                                            whileTap={{ scale: 0.98 }}
                                            className="w-full py-3 px-6 font-bold text-white transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                                            style={{
                                                backgroundColor: '#0033FF',
                                                fontFamily: 'Cabin, Arial, sans-serif',
                                                borderRadius: '20px',
                                                fontSize: '14px'
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
