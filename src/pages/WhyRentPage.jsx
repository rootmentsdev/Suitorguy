import Footer from "../components/Footer"
import Header from "../components/Header"
import WhyRent from "../components/WhyRent"


const WhyRentPage = () => {
    return (
        <div className="text-white md:mx-32 mx-5 ">
            <Header />
            <div className='mt-[100px]'>
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