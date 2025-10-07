import { FiPhone } from "react-icons/fi";
import { MdOutlineMail } from "react-icons/md";
import { GrLocation } from "react-icons/gr";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import { Link as Links } from "react-router-dom";
import Logo from "../assets/Logo.png";


const Footer = () => {
    const [Information, setInformation] = useState(false)
    const [Link, setLink] = useState(false)

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
                <div className="mb-6 tiny:mr-[100px]">
                    {/* Company Logo */}
                    <div className="mb-6 flex justify-center lg:justify-start">
                        <img 
                            src={Logo} 
                            alt="Suitor Guy Logo - Premium Wedding Suit Rentals in Kerala" 
                            loading="lazy"
                            className="h-12 w-auto"
                        />
                    </div>

                    {/* Social Icons */}
                    <div className="flex justify-center lg:justify-start space-x-4">
                        <div className="w-10 h-10 rounded-full flex justify-center items-center bg-blue-500 cursor-pointer">
                            <FaFacebookF className="text-black text-xl hover:text-white transition-all duration-300" />
                        </div>
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
                            <li><a href="#" className="hover:text-white">Location</a></li>
                            <li><a href="#" className="hover:text-white">FAQ</a></li>
                            <li><a href="#" className="hover:text-white">Privacy & Policy</a></li>
                            <li><a href="#" className="hover:text-white">Terms & Condition</a></li>
                            <li><a href="#" className="hover:text-white">Contact</a></li>
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
                            <li>  <Links to={'/'} className="hover:text-white">Home</Links></li>

                            <li>  <Links to={'/about'} className="hover:text-white">About Us</Links></li>
                            <li>  <Links to={'/collection'} className="hover:text-white">Collections</Links></li>
                            <li>  <Links to={'/why-rent'} className="hover:text-white">Why rent?</Links></li>
                            <li>  <Links to={'/HowitWorks'} className="hover:text-white">How it works?</Links></li>

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
                                <li><Links to="/Locations" className="hover:text-white">Locations</Links></li>
                                <li><a href="#faq" className="hover:text-white">FAQs</a></li>
                                <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
                                <li><a href="#" className="hover:text-white">Terms & Conditions</a></li>
                                <li><Links to="/contact" className="hover:text-white">Contact</Links></li>
                                <li><Links to="/about" className="hover:text-white">About Us</Links></li>
                                <li><Links to="/collection" className="hover:text-white">Collections</Links></li>
                                <li><Links to="/why-rent" className="hover:text-white">Why Rent</Links></li>
                                <li><Links to="/HowitWorks" className="hover:text-white">How it Works</Links></li>
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
                                <li><a href="#" className="hover:text-white">Whatsapp</a></li>
                                <li><a href="#" className="hover:text-white">Facebook</a></li>
                                <li><a href="#" className="hover:text-white">Instagram</a></li>
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
