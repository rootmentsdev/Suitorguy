import Header from "../components/Header"
import HowitworkBody from "../components/pageComponents/HowitworkBody"
import { useSEO } from "../hooks/useSEO"

const HowitWorks = () => {
    useSEO(
        "How Wedding Suit Rental Works - Suitor Guy Kerala",
        "Learn how Suitor Guy's wedding suit rental process works. Simple 3-step process: Book fitting, Choose suit, Pick up & return. Expert fitting services, quality guarantee, and hassle-free experience across Kerala.",
        "how wedding suit rental works, suit rental process, book fitting, choose suit, pick up return, expert fitting, quality guarantee, hassle-free"
    );

    return (
        <div className="bg-[#EFEFEF] min-h-screen">
            <Header />
            <div className="md:mx-32 mx-5 mt-[120px]">
                <HowitworkBody />
            </div>
        </div>
    )
}

export default HowitWorks