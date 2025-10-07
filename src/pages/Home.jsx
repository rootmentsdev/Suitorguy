import OurCategories from "../components/OurCategories";
import Footer from "../components/Footer";
import Header from "../components/Header";
import HomeMain from "../components/HomeMain";
import Legacy from "../components/Legacy";
import FAQ from "../components/FAQ";
import CTASection from "../components/CTASection";
import HowWork from "../components/HowWork";

const Home = () => {
    return (
        <div>
            <Header />
            <div className='lg:mx-32'>
                <div className='w-full'>
                    <HomeMain />
                </div>
                <div className="md:mt-0 sm:mt-[-100px] tiny:mt-[100px] ">
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
                    <CTASection />
                </div>
                <div className="lg:-mx-32">
                    <Footer />
                </div>
            </div>
        </div>
    );
};

export default Home;
