import Collection from "../components/Collection"
import Footer from "../components/Footer"
import Header from "../components/Header"

const CollectionPage = () => {
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