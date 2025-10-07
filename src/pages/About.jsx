import Footer from "../components/Footer"
import Legacy from "../components/Legacy"
import Header from "../components/Header"

const About = () => {
    return (
        <div className="text-white md:mx-32 mx-5 ">
            <Header />
            <div className='mt-[100px]'>
                <div>
                    <Legacy />
                </div>

                <div className='-mx-32 md:mt-10 mt-14'>
                    <Footer />
                </div>
            </div>
        </div>
    )
}

export default About