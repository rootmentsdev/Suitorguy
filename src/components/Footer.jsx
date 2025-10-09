import { FiPhone } from "react-icons/fi";
import { MdOutlineMail } from "react-icons/md";
import { GrLocation } from "react-icons/gr";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import { Link as RouterLink, useLocation, useNavigate } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import Logo from "../assets/Logo.png";


const Footer = () => {
    const [Information, setInformation] = useState(false)
    const [Link, setLink] = useState(false)
    const location = useLocation()
    const navigate = useNavigate()

    const handleScrollNavigation = (sectionId) => {
        if (location.pathname === "/") {
            // If on home page, just scroll
            const element = document.getElementById(sectionId);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        } else {
            // Navigate to home then scroll
            navigate("/");
            setTimeout(() => {
                const element = document.getElementById(sectionId);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            }, 300);
        }
    }

    return (
        <div className="w-full z-50 bg-black text-white py-10 px-6 sm:px-10 lg:px-32" style={{
            fontFamily: 'Cabin',
            fontWeight: 400,
            fontSize: '14px',
            lineHeight: '100%',
            letterSpacing: '0%'
        }}>
            <div className="container mx-auto flex flex-col lg:flex-row flex-wrap justify-between text-center lg:text-left">

                {/* Logo and Contact Section */}
                <div className="mb-6 tiny:mr-[40px] ml-6 lg:ml-10">
                    {/* Company Logo */}
                    <div className="mb-6 flex justify-center lg:justify-start">
                        <img 
                            src={Logo} 
                            alt="Suitor Guy Logo - Premium Wedding Suit Rentals in Kerala" 
                            loading="lazy"
                            className="h-12 w-auto"
                        />
                    </div>

                    {/* Business Contact Information */}
                    <div className="mb-6 text-gray-300 text-center lg:text-left">
                        <div className="flex items-center justify-center lg:justify-start mb-2">
                            <FiPhone className="mr-2 text-blue-500" />
                            <a href="tel:+917902766667" className="hover:text-white transition-colors">
                                +91 7902766667
                            </a>
                        </div>
                        <div className="flex items-center justify-center lg:justify-start mb-2">
                            <GrLocation className="mr-2 text-blue-500" />
                            <span>Ernakulam , Kerala 695018</span>
                        </div>
                        <div className="flex items-center justify-center lg:justify-start mb-4">
                            <MdOutlineMail className="mr-2 text-blue-500" />
                            <a href="mailto:info@suitorguy.com" className="hover:text-white transition-colors">
                                groomsweddinghub@gmail.com
                            </a>
                        </div>
                    </div>

                    {/* Social Icons */}
                    <div className="flex justify-center lg:justify-start space-x-4">
                        <a href="https://www.facebook.com/suitorguy" target="_blank" rel="noopener noreferrer">
                            <div className="w-10 h-10 rounded-full flex justify-center items-center bg-blue-500 cursor-pointer">
                                <FaFacebookF className="text-black text-xl hover:text-white transition-all duration-300" />
                            </div>
                        </a>
                        <a
                            href="https://wa.me/919946366655"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <div className="w-10 h-10 rounded-full flex justify-center items-center bg-blue-500 cursor-pointer">
                                <FaWhatsapp className="text-black text-xl hover:text-green-500 transition-all duration-300" />
                            </div>
                        </a>
                        <a href="https://www.instagram.com/suitorguy_/" target="_blank" rel="noopener noreferrer">
                            <div className="w-10 h-10 rounded-full flex justify-center items-center bg-blue-500 cursor-pointer">
                                <FaInstagram className="text-black text-xl hover:text-rose-500 transition-all duration-300" />
                            </div>
                        </a>
                    </div>
                </div>

                {/* Information & Links Section */}
                <div className="md:flex flex-col hidden   sm:flex-row sm:justify-center lg:flex-row gap-10 lg:gap-[100px] text-center lg:text-left">
                    <div className="">
                        <h3 className="text-lg mb-4" style={{
                            fontFamily: 'Cabin',
                            fontWeight: 600,
                            fontSize: '16px',
                            lineHeight: '100%',
                            letterSpacing: '0%'
                        }}>Information</h3>
                        <ul className="space-y-2 text-gray-300">
                            <li>
                                <RouterLink to="/Locations" className="hover:text-white transition-colors">
                                    Locations
                                </RouterLink>
                            </li>
                            <li>
                                <button 
                                    onClick={() => handleScrollNavigation('faq')} 
                                    className="hover:text-white transition-colors text-left"
                                >
                                    FAQ
                                </button>
                            </li>
                            <li>
                                <a href="#" className="hover:text-white transition-colors">
                                    Privacy Policy
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-white transition-colors">
                                    Terms & Conditions
                                </a>
                            </li>
                            <li>
                                <button 
                                    onClick={() => handleScrollNavigation('contact-us')} 
                                    className="hover:text-white transition-colors text-left"
                                >
                                    Contact
                                </button>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-lg mb-4" style={{
                            fontFamily: 'Cabin',
                            fontWeight: 600,
                            fontSize: '16px',
                            lineHeight: '100%',
                            letterSpacing: '0%'
                        }}>Links</h3>
                        <ul className="space-y-2 text-gray-300">
                            <li>
                                <RouterLink to="/" className="hover:text-white transition-colors">
                                    Home
                                </RouterLink>
                            </li>
                            <li>
                                <button 
                                    onClick={() => handleScrollNavigation('about-us')} 
                                    className="hover:text-white transition-colors text-left"
                                >
                                    About Us
                                </button>
                            </li>
                            <li>
                                <RouterLink to="/collection" className="hover:text-white transition-colors">
                                    Collections
                                </RouterLink>
                            </li>
                            <li>
                                <button 
                                    onClick={() => handleScrollNavigation('legacy')} 
                                    className="hover:text-white transition-colors text-left"
                                >
                                    Why Rent?
                                </button>
                            </li>
                            <li>
                                <button 
                                    onClick={() => handleScrollNavigation('how-it-works')} 
                                    className="hover:text-white transition-colors text-left"
                                >
                                    How it Works?
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Mobile - Collapsible Sections */}
                <div className="md:hidden flex flex-col w-full space-y-4">
                    {/* Information Dropdown */}
                    <div className="w-full border-b border-gray-700 pb-4">
                        <button 
                            className="flex justify-between items-center w-full text-left" 
                            onClick={() => { setInformation(prev => !prev) }}
                        >
                            <h3 className="text-base" style={{
                                fontFamily: 'Cabin',
                                fontWeight: 600,
                                fontSize: '16px',
                                lineHeight: '100%',
                                letterSpacing: '0%'
                            }}>
                                Information
                            </h3>
                            {!Information ? <IoIosArrowForward /> : <IoIosArrowDown />}
                        </button>

                        <div className={`overflow-hidden transition-all duration-500 ease-in-out ${
                            Information ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'
                        }`}>
                            <ul className="space-y-3 text-gray-300 text-left">
                                <li>
                                    <RouterLink to="/Locations" className="hover:text-white transition-colors">
                                        Locations
                                    </RouterLink>
                                </li>
                                <li>
                                    <button 
                                        onClick={() => {
                                            setInformation(false);
                                            handleScrollNavigation('faq');
                                        }} 
                                        className="hover:text-white transition-colors text-left"
                                    >
                                        FAQs
                                    </button>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-white transition-colors">
                                        Privacy Policy
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-white transition-colors">
                                        Terms & Conditions
                                    </a>
                                </li>
                                <li>
                                    <button 
                                        onClick={() => {
                                            setInformation(false);
                                            handleScrollNavigation('contact-us');
                                        }} 
                                        className="hover:text-white transition-colors text-left"
                                    >
                                        Contact
                                    </button>
                                </li>
                                <li>
                                    <button 
                                        onClick={() => {
                                            setInformation(false);
                                            handleScrollNavigation('about-us');
                                        }} 
                                        className="hover:text-white transition-colors text-left"
                                    >
                                        About Us
                                    </button>
                                </li>
                                <li>
                                    <RouterLink to="/collection" className="hover:text-white transition-colors">
                                        Collections
                                    </RouterLink>
                                </li>
                                <li>
                                    <button 
                                        onClick={() => {
                                            setInformation(false);
                                            handleScrollNavigation('legacy');
                                        }} 
                                        className="hover:text-white transition-colors text-left"
                                    >
                                        Why Rent
                                    </button>
                                </li>
                                <li>
                                    <button 
                                        onClick={() => {
                                            setInformation(false);
                                            handleScrollNavigation('how-it-works');
                                        }} 
                                        className="hover:text-white transition-colors text-left"
                                    >
                                        How it Works
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Links Dropdown */}
                    <div className="w-full border-b border-gray-700 pb-4">
                        <button 
                            className="flex justify-between items-center w-full text-left" 
                            onClick={() => { setLink(prev => !prev) }}
                        >
                            <h3 className="text-base" style={{
                                fontFamily: 'Cabin',
                                fontWeight: 600,
                                fontSize: '16px',
                                lineHeight: '100%',
                                letterSpacing: '0%'
                            }}>
                                Links
                            </h3>
                            {!Link ? <IoIosArrowForward /> : <IoIosArrowDown />}
                        </button>

                        <div className={`overflow-hidden transition-all duration-500 ease-in-out ${
                            Link ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'
                        }`}>
                            <ul className="space-y-3 text-gray-300 text-left">
                                <li>
                                    <a 
                                        href="https://wa.me/919946366655" 
                                        target="_blank" 
                                        rel="noopener noreferrer" 
                                        className="hover:text-white transition-colors"
                                    >
                                        WhatsApp
                                    </a>
                                </li>
                                <li>
                                    <a 
                                        href="https://www.facebook.com/suitorguy" 
                                        target="_blank" 
                                        rel="noopener noreferrer" 
                                        className="hover:text-white transition-colors"
                                    >
                                        Facebook
                                    </a>
                                </li>
                                <li>
                                    <a 
                                        href="https://www.instagram.com/suitorguy_/" 
                                        target="_blank" 
                                        rel="noopener noreferrer" 
                                        className="hover:text-white transition-colors"
                                    >
                                        Instagram
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>

            {/* Bottom Section */}
            <hr className="text-white hidden md:block mx-auto w-10/12 my-6" />

            <div className="text-center text-gray-400 text-sm md:mt-0 mt-10">
                <p>Terms & Condition | Privacy & Policy</p>
                <p>©2024 Suiterguy. All rights reserved</p>
            </div>
        </div>
    );
};

export default Footer;
