import Footer from "../components/Footer"
import Header from "../components/Header"
import WhyRent from "../components/WhyRent"
import { useSEO } from "../hooks/useSEO"

const WhyRentPage = () => {
    useSEO(
        "Why Rent Wedding Suits Instead of Buying? | Suitor Guy Kerala",
        "Discover why renting wedding suits is better than buying. Save money, get premium quality, perfect fit guarantee, and hassle-free service. Suitor Guy offers the best wedding suit rental experience in Kerala.",
        "why rent wedding suits, rent vs buy suits, wedding suit rental benefits, save money, premium quality, perfect fit guarantee, hassle-free service"
    );
    return (
        <div className="text-white md:mx-32 mx-5 ">
            <Header />
            <div className='mt-[80px]'>
                <div>
                    <WhyRent />
                </div>

                <div className='-mx-32 md:mt-10 mt-32 '>
                    <Footer />
                </div>
            </div>
        </div>
    )
}

export default WhyRentPage