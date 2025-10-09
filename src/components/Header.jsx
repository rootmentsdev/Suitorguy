import { useState } from "react";
import { useLocation, Link as RouterLink } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import Logo from "../assets/Logo.png";
import {
    Dialog,
    DialogPanel,
    Transition,
    TransitionChild,
} from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const Header = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const location = useLocation();

    return (
        <header className="absolute top-0 left-0 right-0 z-50 bg-[#EFEFEF]">
            {/* Desktop Navigation */}
            <nav className="flex max-w-7xl mx-auto items-center justify-center lg:justify-between px-6 py-4 lg:px-12 relative">
                {/* Logo - Centered on Mobile */}
                <div className="flex items-center justify-center lg:justify-start flex-1 lg:flex-initial">
                    <RouterLink to="/" className="flex items-center" title="Suitor Guy - Premium Wedding Suit Rentals in Kerala">
                        <img alt="Suitor Guy Logo - Premium Wedding Suit Rentals" src={Logo} className="h-10 lg:h-11 w-auto" />
                    </RouterLink>
                </div>

                {/* Mobile Menu Button - Positioned Absolutely on Mobile */}
                <div className="flex lg:hidden absolute right-6 top-1/2 -translate-y-1/2">
                    <button
                        type="button"
                        onClick={() => setMobileMenuOpen(true)}
                        className="inline-flex items-center justify-center rounded-md p-2.5"
                    >
                        <span className="sr-only">Open main menu</span>
                        <Bars3Icon aria-hidden="true" className="h-6 w-6 text-gray-700" />
                    </button>
                </div>

                {/* Desktop Links */}
                <div className="hidden lg:flex lg:gap-x-8 items-center">
                    <NavLinks location={location} setMobileMenuOpen={setMobileMenuOpen} isMobile={false} />
                    {location.pathname === "/" ? (
                        <ScrollLink
                            to="contact-us"
                            smooth={true}
                            duration={500}
                            className="bg-[#0000FF] text-white px-6 py-2.5 rounded-md font-cabin text-[14px] font-normal hover:bg-blue-700 transition-colors cursor-pointer"
                            title="Contact Suitor Guy - Book Your Wedding Suit Fitting"
                        >
                            Contact Us
                        </ScrollLink>
                    ) : (
                        <RouterLink
                            to="/"
                            onClick={() => {
                                setTimeout(() => {
                                    const contactSection = document.getElementById('contact-us');
                                    if (contactSection) {
                                        contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                                    }
                                }, 300);
                            }}
                            className="bg-[#0000FF] text-white px-6 py-2.5 rounded-md font-cabin text-[14px] font-normal hover:bg-blue-700 transition-colors"
                            title="Contact Suitor Guy - Book Your Wedding Suit Fitting"
                        >
                            Contact Us
                        </RouterLink>
                    )}
                </div>
            </nav>

            {/* Mobile Navigation Menu */}
            <Transition show={mobileMenuOpen}>
                <Dialog onClose={setMobileMenuOpen} className="lg:hidden">
                    {/* Backdrop */}
                    <TransitionChild
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black/30 z-40" />
                    </TransitionChild>

                    {/* Slide-in Panel */}
                    <TransitionChild
                        enter="transform transition ease-in-out duration-300"
                        enterFrom="translate-x-full"
                        enterTo="translate-x-0"
                        leave="transform transition ease-in-out duration-200"
                        leaveFrom="translate-x-0"
                        leaveTo="translate-x-full"
                    >
                        <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                            <div className="flex items-center justify-between">
                                {/* Mobile Logo */}
                                <RouterLink to="/" className="flex items-center" onClick={() => setMobileMenuOpen(false)} title="Suitor Guy - Premium Wedding Suit Rentals in Kerala">
                                    <img alt="Suitor Guy Logo - Premium Wedding Suit Rentals" src={Logo} className="h-8 w-auto" />
                                </RouterLink>

                                {/* Close Button */}
                                <button
                                    type="button"
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="rounded-md p-2.5 text-gray-700 hover:bg-gray-100 transition-colors"
                                >
                                    <span className="sr-only">Close menu</span>
                                    <XMarkIcon aria-hidden="true" className="h-6 w-6" />
                                </button>
                            </div>

                            {/* Mobile Links */}
                            <div className="mt-6 flow-root">
                                <div className="-my-6 divide-y divide-gray-500/10">
                                    <div className="space-y-2 py-6">
                                        <NavLinks location={location} setMobileMenuOpen={setMobileMenuOpen} isMobile />
                                        {/* Contact Us Button for Mobile */}
                                        <div className="pt-4">
                                            {location.pathname === "/" ? (
                                                <ScrollLink
                                                    to="contact-us"
                                                    smooth={true}
                                                    duration={500}
                                                    onClick={() => setMobileMenuOpen(false)}
                                                    className="block w-full bg-[#0000FF] text-white px-6 py-2.5 rounded-md font-cabin text-[14px] font-normal hover:bg-blue-700 transition-colors text-center cursor-pointer"
                                                    title="Contact Suitor Guy - Book Your Wedding Suit Fitting"
                                                >
                                                    Contact Us
                                                </ScrollLink>
                                            ) : (
                                                <RouterLink
                                                    to="/"
                                                    onClick={() => {
                                                        setMobileMenuOpen(false);
                                                        setTimeout(() => {
                                                            const contactSection = document.getElementById('contact-us');
                                                            if (contactSection) {
                                                                contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                                                            }
                                                        }, 300);
                                                    }}
                                                    className="block w-full bg-[#0000FF] text-white px-6 py-2.5 rounded-md font-cabin text-[14px] font-normal hover:bg-blue-700 transition-colors text-center"
                                                    title="Contact Suitor Guy - Book Your Wedding Suit Fitting"
                                                >
                                                    Contact Us
                                                </RouterLink>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </DialogPanel>
                    </TransitionChild>
                </Dialog>
            </Transition>
        </header>
    );
};

// Reusable Navigation Links Component
const NavLinks = ({ location, setMobileMenuOpen, isMobile }) => {
    const [activeLink, setActiveLink] = useState(location.pathname);

    const handleClick = (path) => {
        setActiveLink(path);
        if (isMobile) setMobileMenuOpen(false);
    };

    const linkClass = (path) => `
        font-cabin text-[14px] font-normal cursor-pointer transition-colors
        ${isMobile ? 'block px-3 py-2 text-base text-gray-700' : 'text-gray-700 hover:text-[#0000FF]'}
        ${activeLink === path ? 'text-[#0000FF] font-medium' : ''}
    `;

    return (
        <>
            {/* Home */}
            {location.pathname === "/" ? (
                <ScrollLink
                    to="home"
                    smooth={true}
                    duration={500}
                    onClick={() => handleClick("/")}
                    className={linkClass("/")}
                    title="Home - Premium Wedding Suit Rentals"
                >
                    Home
                </ScrollLink>
            ) : (
                <RouterLink
                    to="/"
                    onClick={() => handleClick("/")}
                    className={linkClass("/")}
                    title="Home - Premium Wedding Suit Rentals"
                >
                    Home
                </RouterLink>
            )}

            {/* Why Rent? */}
            {location.pathname === "/" ? (
                <ScrollLink
                    to="legacy"
                    smooth={true}
                    duration={500}
                    onClick={() => handleClick("/why-rent")}
                    className={linkClass("/why-rent")}
                    title="Why Rent Wedding Suits - Benefits and Savings"
                >
                    Why Rent?
                </ScrollLink>
            ) : (
                <RouterLink
                    to="/#legacy"
                    onClick={() => handleClick("/why-rent")}
                    className={linkClass("/why-rent")}
                    title="Why Rent Wedding Suits - Benefits and Savings"
                >
                    Why Rent?
                </RouterLink>
            )}

            {/* About */}
            {location.pathname === "/" ? (
                <ScrollLink
                    to="about-us"
                    smooth={true}
                    duration={500}
                    onClick={() => handleClick("/about")}
                    className={linkClass("/about")}
                    title="About Suitor Guy - Kerala's Premium Suit Rental Service"
                >
                    About
                </ScrollLink>
            ) : (
                <RouterLink
                    to="/"
                    onClick={() => {
                        handleClick("/about");
                        // Scroll to about-us section after navigation
                        setTimeout(() => {
                            const aboutUsSection = document.getElementById('about-us');
                            if (aboutUsSection) {
                                aboutUsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                            }
                        }, 300);
                    }}
                    className={linkClass("/about")}
                    title="About Suitor Guy - Kerala's Premium Suit Rental Service"
                >
                    About
                </RouterLink>
            )}

            {/* Collections */}
            <RouterLink
                to="/collection"
                onClick={() => handleClick("/collection")}
                className={linkClass("/collection")}
                title="Wedding Suit Collections in Kerala - Classic, Premium & Luxury"
            >
                Collections
            </RouterLink>

            {/* How it Works? */}
            {location.pathname === "/" ? (
                <ScrollLink
                    to="how-it-works"
                    smooth={true}
                    duration={500}
                    onClick={() => handleClick("/how-it-works")}
                    className={linkClass("/how-it-works")}
                    title="How Wedding Suit Rental Works - Simple Process"
                >
                    How it Works?
                </ScrollLink>
            ) : (
                <RouterLink
                    to="/"
                    onClick={() => {
                        handleClick("/how-it-works");
                        // Scroll to how-it-works section after navigation
                        setTimeout(() => {
                            const howItWorksSection = document.getElementById('how-it-works');
                            if (howItWorksSection) {
                                howItWorksSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                            }
                        }, 300);
                    }}
                    className={linkClass("/how-it-works")}
                    title="How Wedding Suit Rental Works - Simple Process"
                >
                    How it Works?
                </RouterLink>
            )}

            {/* Locations */}
            <RouterLink
                to="/Locations"
                onClick={() => handleClick("/Locations")}
                className={linkClass("/Locations")}
                title="Suitor Guy Locations Across Kerala - 15+ Stores"
            >
                Locations
            </RouterLink>
        </>
    );
};

export default Header;