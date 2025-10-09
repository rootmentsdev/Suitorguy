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
        <div className="text-white md:mx-32 mx-5 ">
            <Header />
            <div className='mt-[100px]'>
                <div>
                    <Legacy />
                </div>

                <div className='-mx-32 md:mt-10 mt-14'>
                    <Footer />
                </div>
            </div>
        </div>
    )
}

export default About