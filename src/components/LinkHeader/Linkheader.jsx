// Developed by Jishnu M
import { useState } from "react";
import { useLocation, Link as Link } from "react-router-dom";
import img1 from "../../assets/image.png";
import {
    Dialog,
    DialogPanel,
    Popover,
    PopoverGroup,
    Transition,
    TransitionChild,
} from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const Linkheader = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const location = useLocation();

    return (
        <header className="text-white">
            {/* Desktop Navigation */}
            <nav className="flex max-w-7xl items-center justify-between p-6 lg:px-8 lg:ml-20">
                {/* Logo */}
                <div className="flex lg:flex-1">
                    <a href="#" className="-m-1.5 p-1.5">
                        <span className="sr-only">Your Company</span>
                        <img alt="Logo" src={img1} className="lg:h-16 h-10 w-auto mr-[100px]" />
                    </a>
                </div>

                {/* Mobile Menu Button */}
                <div className="flex lg:hidden">
                    <button
                        type="button"
                        onClick={() => setMobileMenuOpen(true)}
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                    >
                        <span className="sr-only">Open main menu</span>
                        <Bars3Icon aria-hidden="true" className="size-6 text-white" />
                    </button>
                </div>

                {/* Desktop Links */}
                <PopoverGroup className="hidden w-[900px] lg:flex lg:gap-x-10 lg:mr-[50px] text-xl">
                    <NavLinks location={location} setMobileMenuOpen={setMobileMenuOpen} isMobile={false} />
                </PopoverGroup>
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
                        <div className="fixed inset-0 bg-black/50 z-10" />
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
                        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-10 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                            <div className="flex items-center justify-between">
                                {/* Mobile Logo */}
                                <a href="#" className="-m-1.5 p-1.5">
                                    <span className="sr-only">Your Company</span>
                                    <img alt="Logo" src={img1} className="h-8 w-auto" />
                                </a>

                                {/* Close Button */}
                                <button
                                    type="button"
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="-m-2.5 rounded-md p-2.5 text-gray-700 hover:bg-white/20 transition-colors"
                                >
                                    <span className="sr-only">Close menu</span>
                                    <XMarkIcon aria-hidden="true" className="size-8 text-white" />
                                </button>
                            </div>

                            {/* Mobile Links */}
                            <div className="mt-6">
                                <div className="-my-6 divide-y divide-gray-500/10">
                                    <div className="space-y-2 py-6">
                                        <NavLinks location={location} setMobileMenuOpen={setMobileMenuOpen} isMobile />
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

    return (
        <nav className="flex flex-col md:flex-row gap-4">
            {/* Home */}
            {location.pathname === "/" ? (
                <Link
                    to="home"
                    smooth={true}
                    duration={500}
                    onClick={() => handleClick("/")}
                    className={`text-[15px] BonaNova cursor-pointer ${activeLink === "/" ? "text-blue-500" : "text-white"} hover:text-blue-400 m-2 p-2 block`}
                >
                    Home
                </Link>
            ) : (
                <Link
                    to="/"
                    onClick={() => handleClick("/")}
                    className={`text-[15px] BonaNova ${activeLink === "/" ? "text-blue-500" : "text-white"} hover:text-blue-400 m-2 p-2 block`}
                >
                    Home
                </Link>
            )}

            {/* About */}
            {location.pathname === "/" ? (
                <Link
                    to="legacy"
                    smooth={true}
                    duration={500}
                    onClick={() => handleClick("/about")}
                    className={`text-[15px] BonaNova cursor-pointer ${activeLink === "/about" ? "text-blue-500" : "text-white"} hover:text-blue-400 m-2 p-2 block`}
                >
                    About
                </Link>
            ) : (
                <Link
                    to="/about"
                    onClick={() => handleClick("/about")}
                    className={`text-[15px] BonaNova ${activeLink === "/about" ? "text-blue-500" : "text-white"} hover:text-blue-400 m-2 p-2 block`}
                >
                    About
                </Link>
            )}

            {/* Collection */}
            {location.pathname === "/" ? (
                <Link
                    to="collection"
                    smooth={true}
                    duration={500}
                    onClick={() => handleClick("/collection")}
                    className={`text-[15px] BonaNova cursor-pointer ${activeLink === "/collection" ? "text-blue-500" : "text-white"} hover:text-blue-400 m-2 p-2 block`}
                >
                    Collection
                </Link>
            ) : (
                <Link
                    to="/collection"
                    onClick={() => handleClick("/collection")}
                    className={`text-[15px] BonaNova ${activeLink === "/collection" ? "text-blue-500" : "text-white"} hover:text-blue-400 m-2 p-2 block`}
                >
                    Collection
                </Link>
            )}

            {/* Why Rent? */}
            {location.pathname === "/" ? (
                <Link
                    to="why-rent"
                    smooth={true}
                    duration={500}
                    onClick={() => handleClick("/why-rent")}
                    className={`text-[15px] BonaNova cursor-pointer ${activeLink === "/why-rent" ? "text-blue-500" : "text-white"} hover:text-blue-400 m-2 p-2 block`}
                >
                    Why Rent?
                </Link>
            ) : (
                <Link
                    to="/why-rent"
                    onClick={() => handleClick("/why-rent")}
                    className={`text-[15px] BonaNova ${activeLink === "/why-rent" ? "text-blue-500" : "text-white"} hover:text-blue-400 m-2 p-2 block`}
                >
                    Why Rent?
                </Link>
            )}

            {/* How it Works? */}
            {location.pathname === "/" ? (
                <Link
                    to="/HowitWorks"
                    smooth={true}
                    duration={500}
                    onClick={() => handleClick("/how-it-works")}
                    className={`text-[15px] BonaNova cursor-pointer ${activeLink === "/how-it-works" ? "text-blue-500" : "text-white"} hover:text-blue-400 m-2 p-2 block`}
                >
                    How it Works?
                </Link>
            ) : (
                <Link
                    to="/HowitWorks"
                    onClick={() => handleClick("/how-it-works")}
                    className={`text-[15px] BonaNova ${activeLink === "/how-it-works" ? "text-blue-500" : "text-white"} hover:text-blue-400 m-2 p-2 block`}
                >
                    How it Works?
                </Link>
            )}

            {/* Locations */}
            <Link
                to="/Locations"
                onClick={() => handleClick("/Locations")}
                className={`text-[15px] BonaNova ${activeLink === "/Locations" ? "text-blue-500" : "text-white"} hover:text-blue-400 m-2 p-2 block`}
            >
                Locations
            </Link>

            {/* Contact */}
            {location.pathname === "/" ? (
                <Link
                    to="get-in-touch"
                    smooth={true}
                    duration={500}
                    onClick={() => handleClick("/contact")}
                    className={`text-[15px] BonaNova cursor-pointer ${activeLink === "/contact" ? "text-blue-500" : "text-white"} hover:text-blue-400 m-2 p-2 block`}
                >
                    Contact
                </Link>
            ) : (
                <Link
                    to="/contact"
                    onClick={() => handleClick("/contact")}
                    className={`text-[15px] BonaNova ${activeLink === "/contact" ? "text-blue-500" : "text-white"} hover:text-blue-400 m-2 p-2 block`}
                >
                    Contact
                </Link>
            )}
        </nav>
    );
};


export default Linkheader;
