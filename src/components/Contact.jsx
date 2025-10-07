import { FaWhatsapp } from "react-icons/fa";

const Contact = () => {
    return (
        <div className="text-white BonaNova w-full h-[80vh] flex justify-center items-center" id="get-in-touch">
            <div>
                <div className="ml-6">
                    <h2 className="text-xl md:text-3xl mb-5">Or Reach Us Directly</h2>
                </div>
                <div className="flex flex-col justify-center items-center gap-5">
                    <p>Phone : +91 9946366655</p>
                    {/* <p>Email : info@suitorguy.com</p> */}
                    <a
                        href="https://wa.me/919946366655"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="border text-md w-[300px] hover:text-green-500 cursor-pointer border-white flex justify-center items-center gap-5 h-[40px] mx-5"
                    >
                        <FaWhatsapp className="text-xl" /> Chat with Us on WhatsApp
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Contact;
