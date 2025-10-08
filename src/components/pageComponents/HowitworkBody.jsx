import Aos from 'aos'
import howitworks1 from '../../assets/howitworks1.png'
import howitworks2 from '../../assets/howitworks2.png'
import howitworks3 from '../../assets/howitworks3.png'
import Footer from '../Footer'
import { useEffect } from 'react'


const HowitworkBody = () => {
    useEffect(() => {
        Aos.init({
            duration: 1000,
            once: true,
            offset: 450,
        });
    }, []);
    return (
        <div className='mb-10'>
            {/* Page Header - Single SEO H2 */}
            <div className="flex flex-col gap-6 mb-12">
                {/* Single H2 Heading - SEO Optimized */}
                <h2
                    className="uppercase mb-0 text-[28px] leading-tight sm:text-[32px] lg:text-[42px]"
                    style={{
                        fontFamily: 'Arial Black, Arial, Helvetica, sans-serif',
                        fontWeight: 900,
                        letterSpacing: '0',
                        color: '#3D3D3D',
                        lineHeight: '1.05'
                    }}
                >
                    <span style={{ display: 'block' }}>HOW WEDDING SUIT RENTAL</span>
                    <span style={{ display: 'block', color: '#0000FF', lineHeight: '1.15' }}>WORKS - SUITOR GUY</span>
                </h2>
                
                {/* Blue Underline */}
                <div
                    style={{
                        width: '140px',
                        height: '3px',
                        backgroundColor: '#0000FF',
                        marginTop: '15px',
                    }}
                ></div>

                {/* Subtitle - SEO optimized */}
                <h2 
                    className="text-xl md:text-2xl mt-4"
                    style={{
                        fontFamily: 'Arial Black, Arial, Helvetica, sans-serif',
                        fontWeight: 700,
                        color: '#3D3D3D'
                    }}
                >
                    Effortless Elegance in Three Simple Steps Across Kerala
                </h2>

                {/* Description */}
                <p 
                    className="text-sm md:text-base md:w-[600px]"
                    style={{
                        fontFamily: 'Cabin, Arial, sans-serif',
                        fontWeight: 400,
                        lineHeight: '24px',
                        color: '#666666'
                    }}
                >
                    Visit our store and let us handle everything—from professional fitting to perfect finish. Experience our premium collection starting from ₹4,999, tailored to your occasion, without the hassle.
                </p>

                <button 
                    className="hover:bg-blue-700 transition-colors duration-300 w-[250px]"
                    style={{
                        backgroundColor: '#0000FF',
                        color: 'white',
                        fontFamily: 'Cabin, Arial, sans-serif',
                        fontWeight: 600,
                        fontSize: '15px',
                        padding: '14px 32px',
                        borderRadius: '50px',
                        border: 'none',
                        cursor: 'pointer',
                    }}
                >
                    Explore Our Collection
                </button>
            </div>
            {/* Step 1: Rent */}
            <div className='mt-20 flex md:flex-row flex-col-reverse justify-between items-center'>
                <div className="flex flex-col items-center text-center md:items-start md:text-left md:w-full w-[400px] gap-6"
                    data-aos="fade-left"
                >
                    <h3 
                        className="text-2xl md:text-4xl"
                        style={{
                            fontFamily: 'Arial Black, Arial, Helvetica, sans-serif',
                            fontWeight: 900,
                            color: '#0000FF'
                        }}
                    >
                        STEP 1: RENT
                    </h3>
                    <p 
                        className="text-base md:text-lg md:w-[600px]"
                        style={{
                            fontFamily: 'Cabin, Arial, sans-serif',
                            fontWeight: 400,
                            lineHeight: '28px',
                            color: '#666666'
                        }}
                    >
                        Pick your perfect style from our collection of designer outfits and accessories beyond any limitation.
                    </p>
                </div>

                <img src={howitworks1} className='md:w-[445px]' alt="Step 1 - Rent your perfect wedding suit style from Suitor Guy collection"
                    loading="lazy"
                    data-aos="zoom-in-down" />
            </div>
            {/* Step 2: Flaunt */}
            <div className="mt-20 flex flex-col md:flex-row justify-between items-center gap-32 md:gap-20">
                <img src={howitworks2} className="md:w-[445px] w-[400px] object-cover" alt="Step 2 - Flaunt your perfect wedding look with confidence"
                    loading="lazy"
                    data-aos="zoom-in-down" />

                <div className="flex flex-col items-center text-center md:items-start md:text-left md:w-full w-[400px] gap-6 md:ml-[200px]"
                    data-aos="fade-left"
                >
                    <h3 
                        className="text-2xl md:text-4xl"
                        style={{
                            fontFamily: 'Arial Black, Arial, Helvetica, sans-serif',
                            fontWeight: 900,
                            color: '#0000FF'
                        }}
                    >
                        STEP 2: FLAUNT
                    </h3>
                    <p 
                        className="text-base md:text-lg md:w-[600px]"
                        style={{
                            fontFamily: 'Cabin, Arial, sans-serif',
                            fontWeight: 400,
                            lineHeight: '28px',
                            color: '#666666'
                        }}
                    >
                        Flaunt your look with that perfect outfit chosen by you and enjoy the compliments.
                    </p>
                </div>
            </div>

            {/* Step 3: Return */}
            <div className='mt-20 flex md:flex-row flex-col-reverse justify-between items-center'>
                <div className="flex flex-col items-center text-center md:items-start md:text-left md:w-full w-[400px] gap-6"
                    data-aos="fade-left"
                >
                    <h3 
                        className="text-2xl md:text-4xl"
                        style={{
                            fontFamily: 'Arial Black, Arial, Helvetica, sans-serif',
                            fontWeight: 900,
                            color: '#0000FF'
                        }}
                    >
                        STEP 3: RETURN
                    </h3>
                    <p 
                        className="text-base md:text-lg md:w-[600px]"
                        style={{
                            fontFamily: 'Cabin, Arial, sans-serif',
                            fontWeight: 400,
                            lineHeight: '28px',
                            color: '#666666'
                        }}
                    >
                        Pack the outfit and we'll pick it up a day after your occasion or the dates chosen by you.
                    </p>
                </div>

                <img src={howitworks3} className='md:w-[445px]' alt="Step 3 - Return your rented wedding suit easily after your occasion"
                    loading="lazy"
                    data-aos="zoom-in-down"
                />
            </div>

            <div className='-mx-32 -mb-10 mt-10'>
                <Footer />
            </div>

        </div>
    )
}

export default HowitworkBody