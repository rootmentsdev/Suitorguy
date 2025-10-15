import Footer from "../components/Footer"
import Header from "../components/Header"
import Contact from "../components/Contact"
import ContactUs from "../components/ContactUs"
import { useSEO } from "../hooks/useSEO"

const ContactPage = () => {
    useSEO(
        "Contact Suitor Guy - Book Your Wedding Suit Fitting | Kerala Locations",
        "Contact Suitor Guy to book your wedding suit fitting. Call +91 7902766667 or visit our 15+ locations across Kerala. Expert fitting services, premium suits starting ₹4,999. Get directions to nearest store.",
        "contact Suitor Guy, book fitting appointment, wedding suit fitting Kerala, phone number, store locations, directions, expert fitting services"
    );
    return (
        <div className="text-white md:mx-32 mx-5 ">
            <Header />
            <div className='mt-[80px]'>
                <div>
                    <Contact />
                </div>
                
                <div className='-mx-5 md:-mx-32'>
                    <ContactUs />
                </div>

                <div className='-mx-32'>
                    <Footer />
                </div>
            </div>
        </div>
    )
}

export default ContactPage