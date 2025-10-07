import Header from '../components/Header.jsx'
import LocationsGrid from '../components/LocationsGrid.jsx'
import CTASection from '../components/CTASection.jsx'
import Footer from '../components/Footer.jsx'
import { useEffect } from 'react'

const Locations = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    
    return (
        <div className="bg-[#EFEFEF] min-h-screen">
            <Header />
            <div className='mt-[160px] md:mx-32 mx-5'>
                <LocationsGrid />
            </div>
            <div >
                <CTASection />
            </div>
            <div className='md:-mx-32 -mx-5'>
                <Footer />
            </div>
        </div>
    )
}

export default Locations;