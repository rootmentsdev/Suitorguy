import Header from '../components/Header.jsx'
import LocationsGrid from '../components/LocationsGrid.jsx'
import CTASection from '../components/CTASection.jsx'
import Footer from '../components/Footer.jsx'
import { useSEO } from '../hooks/useSEO'

const Locations = () => {
    useSEO(
        "Find Suitor Guy Stores Across Kerala - 15+ Locations | Book Your Fitting",
        "Find your nearest Suitor Guy store across Kerala. 15+ locations in Trivandrum, Kochi, Thrissur, Kottayam & more. Expert fitting services, premium suits starting ₹4,999. Book your appointment today!",
        "Suitor Guy locations Kerala, wedding suit store Trivandrum, suit rental Kochi, Thrissur, Kottayam, Palakkad, Malappuram, Kozhikode, Kannur, Wayanad, book fitting appointment"
    );
    
    return (
        <div className="bg-[#EFEFEF] min-h-screen">
            <Header />
            <div className='mt-[80px] max-w-7xl mx-auto px-6 lg:px-8 xl:px-12'>
                <LocationsGrid />
            </div>
            <div >
                <CTASection />
            </div>
            <div>
                <Footer />
            </div>
        </div>
    )
}

export default Locations;