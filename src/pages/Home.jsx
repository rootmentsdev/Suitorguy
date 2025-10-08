import OurCategories from "../components/OurCategories";
import Footer from "../components/Footer";
import Header from "../components/Header";
import HomeMain from "../components/HomeMain";
import AboutUs from "../components/AboutUs";
import Legacy from "../components/Legacy";
import FAQ from "../components/FAQ";
import HowWork from "../components/HowWork";
import ContactUs from "../components/ContactUs";

const Home = () => {
    return (
        <div>
            <Header />
            <div className='lg:mx-32'>
                <div className='w-full'>
                    <HomeMain />
                </div>
                <div className="w-full">
                    <AboutUs />
                </div>
                <div className="md:mt-0 sm:mt-[-80px] tiny:mt-[20px] ">
                    <Legacy />
                </div>
                <div className="lg:-mx-32">
                    <HowWork />
                </div>
                <div>
                    <OurCategories />
                </div>
                <div>
                    <FAQ />
                </div>
                <div className="lg:-mx-32">
                    <ContactUs />
                </div>
                <div className="lg:-mx-32">
                    <Footer />
                </div>
            </div>
        </div>
    );
};

export default Home;
