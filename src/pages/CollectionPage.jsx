import Collection from "../components/Collection"
import Footer from "../components/Footer"
import Header from "../components/Header"
import { useSEO } from "../hooks/useSEO"

const CollectionPage = () => {
    useSEO(
        "Premium Wedding Suit Collections - Classic, Luxury & Premium | Suitor Guy Kerala",
        "Explore our premium wedding suit collections across Kerala. Classic, Luxury & Premium suits starting from ₹4,999. Expert fitting services, perfect styles for grooms & groomsmen. Book your fitting today!",
        "wedding suit collection Kerala, classic suits, luxury suits, premium suits, groom collection, wedding dress rental, suit fitting Kerala, Suitor Guy collections"
    );
    return (
        <div className="bg-white">
            <Header />
            <div className='mt-[100px]'>
                <Collection />
                <Footer />
            </div>
        </div>
    )
}

export default CollectionPage