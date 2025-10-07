import { useEffect } from "react";
import gsap from "gsap";
import Image from "../../public/image.png"; // Main foreground image
import image1 from "../assets/image1.png"; // Background image

const Loader = ({ setLoading }) => {
    useEffect(() => {
        // Show background image quickly
        gsap.fromTo(
            ".background-image",
            { opacity: 0, scale: 1.2 },
            { opacity: 1, scale: 1, duration: 0.6, delay: 0.3, ease: "power2.out" }
        );

        // Animate the loader image
        gsap.fromTo(
            ".loader-image",
            { opacity: 1, scale: 1.1, zIndex: 50 },
            { opacity: 0, scale: 1, duration: 0.4, delay: 1, ease: "power2.out" }
        );

        // Hide the entire loader after the animation
        gsap.to(".loader", {
            opacity: 0,
            duration: 0.4,
            delay: 1.3,
            ease: "power2.out",
            onComplete: () => setLoading(false),
        });
    }, [setLoading]);

    return (
        <div>
            <div className="loader fixed top-0 left-0 w-full h-screen bg-gray-50 flex justify-center items-center overflow-hidden">
                {/* Background image (appears after 1s) */}
                <img
                    src={image1}
                    alt="Suitor Guy premium wedding suits background"
                    className="background-image absolute h-[400px] object-cover opacity-0"
                />

                {/* Foreground image (appears first, then fades out) */}

            </div>
            <div>
                <img
                    src={Image}
                    alt="Suitor Guy logo - Premium wedding suit rentals in Kerala"
                    className="loader-image z-50 mt-5 ml-10 relative h-[40px]"
                />
            </div>
        </div>
    );
};

export default Loader;
