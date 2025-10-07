import Collection from "../components/Collection"
import Footer from "../components/Footer"
import Header from "../components/Header"

const CollectionPage = () => {
    return (
        <div className="text-white md:mx-32 mx-5 ">
            <Header />
            <div className='mt-[100px]'>
                <div>
                    <Collection />
                </div>

                <div className='-mx-32'>
                    <Footer />
                </div>
            </div>
        </div>
    )
}

export default CollectionPage