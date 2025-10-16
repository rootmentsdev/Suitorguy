import Footer from "../components/Footer"
import Legacy from "../components/Legacy"
import Header from "../components/Header"
import { useSEO } from "../hooks/useSEO"

const About = () => {
    useSEO(
        "About Suitor Guy - Premium Wedding Suit Rental Service in Kerala",
        "Learn about Suitor Guy's premium wedding suit rental service in Kerala. Expert tailoring, perfect fits, and exceptional service for grooms. 15+ locations across Kerala with quality guarantee.",
        "about Suitor Guy, wedding suit rental service Kerala, premium tailoring, groom services, quality guarantee, expert fitting, wedding suit rental company"
    );
    return (
        <div className="text-white max-w-7xl mx-auto px-6 lg:px-8 xl:px-12">
            <Header />
            <div className='mt-[80px]'>
                <div>
                    <Legacy />
                </div>

                <div className='md:mt-10 mt-14'>
                    <Footer />
                </div>
            </div>
        </div>
    )
}

export default About