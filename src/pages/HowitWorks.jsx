import { useEffect } from "react";
import Header from "../components/Header"
import HowitworkBody from "../components/pageComponents/HowitworkBody"

const HowitWorks = () => {
    useEffect(() => {
        // Set page title for SEO
        document.title = "How Wedding Suit Rental Works - Suitor Guy Kerala";
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="bg-[#EFEFEF] min-h-screen">
            <Header />
            <div className="md:mx-32 mx-5 mt-[120px]">
                <HowitworkBody />
            </div>
        </div>
    )
}

export default HowitWorks