import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { RiArrowRightDoubleLine } from "react-icons/ri";
import { RiArrowLeftDoubleLine } from "react-icons/ri";

console.log(motion);

const images = [
    {
        src: "https://tse3.mm.bing.net/th?id=OIP.MCLzVoExgXPyNi_V5gb1AwHaE7&pid=Api&P=0&h=180",
        title: "Sustainability",
        description: "Get the suit you’ve always dreamed of for your wedding day—premium options available for rent. Experience the same quality and fit without the commitment."
    },
    {
        src: "https://tse4.mm.bing.net/th?id=OIP.rvSWtRd_oPRTwDoTCmkP5gHaE8&pid=Api&P=0&h=180",
        title: "Affordability",
        description: "Look your best without the hefty price tag. Renting gives you access to high-end designer outfits at a fraction of the cost, saving you from expensive one-time purchases and maintenance."
    },
    {
        src: "https://tse3.mm.bing.net/th?id=OIP.QVBY30VqTi-tlYt_BaoGqAHaEo&pid=Api&P=0&h=180",
        title: "Seamless Experience",
        description: "No more storage worries or costly dry cleaning. Our seamless rental process ensures you can simply wear, enjoy, and return—making elegance effortless."
    },
    {
        src: "https://tse1.mm.bing.net/th?id=OIP.VYJtv8o26pl7QqP_3x6megHaDk&pid=Api&P=0&h=180",
        title: "Effortless Style",
        description: "Stay sharp with minimal effort. Our carefully curated selection ensures you always have access to the latest trends, tailored for a perfect fit. Look confident and stylish for any occasion without the hassle of ownership."
    }
];

const WhyRent = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000, // Animation duration (1s)
            once: true, // Ensures animation runs only once
            offset: 400, // Trigger animation 100px before reaching viewport
        });
    }, []);
    const [index, setIndex] = useState(0);
    const [radius, setRadius] = useState(250);

    useEffect(() => {
        const updateRadius = () => {
            setRadius(window.innerWidth < 768 ? 130 : 270);
        };
        updateRadius();
        window.addEventListener("resize", updateRadius);
        return () => window.removeEventListener("resize", updateRadius);
    }, []);

    const handleNext = () => setIndex((prev) => (prev + 1) % images.length);
    const handlePrev = () => setIndex((prev) => (prev - 1 + images.length) % images.length);
    useEffect(() => {
        const timer = setTimeout(() => {
            handleNext();
        }, 5000);

        return () => clearTimeout(timer);

    }, [index]);


    
    return (
        <div className="md:mt-40 -mb-[250px]" id="why-rent">
            <div className="mx-[50px] md:mb-[150px]"
                data-aos="fade-left"

            >
                <h2 className="text-[#0427B9] text-xl md:text-2xl BonaNova mb-5">Why Rent?</h2>
                <h2 className="text-white text-5xl mb-5">

                    Luxury within <br />
                    Reach
                </h2>
                <p className="text-white BonaNova mb-5">Get the suit you’ve always dreamed of for your wedding day -premium <br /> options available for rent. Experience the same quality and fit without <br />
                    the commitment.</p>
            </div>
            <div className=" md:hidden lg:mb-[300px]  hidden BonaNova relative lg:flex flex-col items-center justify-center lg:h-[300px] h-screen bg-[#171717]"
                data-aos="fade-right"
            >
                <div className=" h-[350px] mt-[-200px] rounded-[100px] w-full max-w-5xl mx-auto relative flex items-center justify-center">
                    <div className="relative w-[300px] h-[300px] flex items-center justify-center top-[50px]">
                        {images.map((img, i) => {
                            const angle = (i - index) * (360 / images.length);
                            return (
                                <motion.div
                                    key={i}
                                    className="absolute w-28 h-28"
                                    animate={{
                                        x: Math.cos(angle * (Math.PI / 180)) * radius,
                                        y: Math.sin(angle * (Math.PI / 180)) * radius,
                                    }}
                                    transition={{ duration: 0.5 }}
                                >
                                    {/* <img src={img.src} className="w-24 h-24  rounded-tl-[20px] rounded-br-[20px] shadow-lg border-2 border-white" /> */}
                                </motion.div>
                            );
                        })}
                        <motion.div
                            key={index}
                            className="absolute text-white text-center lg:w-[400px] mb-[30px] px-4 py-2  bg-opacity-50  rounded-lg"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.5 }}
                        >
                            <h2 className="text-lg md:text-xl">{images[index].title}</h2>
                            {images[index].description}
                        </motion.div>
                    </div>

                    <div className="absolute bottom-32 flex w-full justify-between px-10">
                        <button onClick={handlePrev} className="p-2 bg-gray-800 text-white" style={{ borderRadius: '20px' }}> <RiArrowLeftDoubleLine className="text-2xl" /></button>
                        <button onClick={handleNext} className="p-2 bg-gray-800 text-white" style={{ borderRadius: '20px' }}><RiArrowRightDoubleLine className="text-2xl" /></button>
                    </div>


                </div>

            </div>
            <div className="lg:hidden mx-auto mt-5 md:mb-[300px] mb-[450px] text-white BonaNova flex flex-col items-center">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-4xl px-6">
                    {/* Sustainability */}
                    <div className="w-full text-center sm:text-left bg-[#212121] p-1 rounded-md"
                        data-aos="fade-right"

                    >
                        <h2 className="text-lg md:text-xl font-semibold mb-2">Sustainability</h2>
                        <p className="text-sm">
                            Get the suit you've always dreamed of for your wedding day—premium options available for rent. Experience the same quality and fit without the commitment.
                        </p>
                    </div>

                    {/* Affordability */}
                    <div className="w-full text-center sm:text-left bg-[#212121] p-1 rounded-md"
                        data-aos="fade-left"
                    >
                        <h2 className="text-lg md:text-xl font-semibold mb-2">Affordability</h2>
                        <p className="text-sm">
                            Look your best without the hefty price tag. Renting gives you access to high-end designer outfits at a fraction of the cost, saving you from expensive one-time purchases and maintenance.
                        </p>
                    </div>

                    {/* Seamless Experience */}
                    <div className="w-full text-center sm:text-left bg-[#212121] p-1 rounded-md"
                        data-aos="fade-right"
                    >
                        <h2 className="text-lg md:text-xl font-semibold mb-2">Seamless Experience</h2>
                        <p className="text-sm">
                            No more storage worries or costly dry cleaning. Our seamless rental process ensures you can simply wear, enjoy, and return—making elegance effortless.
                        </p>
                    </div>

                    {/* Effortless Style */}
                    <div className="w-full text-center sm:text-left bg-[#212121] p-1 rounded-md"
                        data-aos="fade-left"
                    >
                        <h2 className="text-lg md:text-xl font-semibold mb-2">Effortless Style</h2>
                        <p className="text-sm">
                            Stay sharp with minimal effort. Our carefully curated selection ensures you always have access to the latest trends, tailored for a perfect fit. Look confident and stylish for any occasion without the hassle of ownership.
                        </p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default WhyRent;