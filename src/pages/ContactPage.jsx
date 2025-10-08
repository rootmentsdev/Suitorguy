import Footer from "../components/Footer"
import Header from "../components/Header"
import Contact from "../components/Contact"
import ContactUs from "../components/ContactUs"

const ContactPage = () => {
    return (
        <div className="text-white md:mx-32 mx-5 ">
            <Header />
            <div className='mt-[100px]'>
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