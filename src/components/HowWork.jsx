import React from "react";

const HowWork = () => {
    return (
        <section 
            id="how-it-works"
            className="bg-black mt-16 py-12 lg:py-[60px] full-width-section" 
            style={{ 
                minHeight: '399px'
            }}
        >
            <div className="content-container text-left flex flex-col gap-6 lg:gap-8">
                {/* Single H1 Heading - SEO Optimized */}
                <h2 
                    className="uppercase mb-0 text-2xl md:text-[35px] mobile-bold"
                    style={{
                        fontFamily: 'Helvetica Neue Condensed, Helvetica Compressed, Arial Narrow, Impact, sans-serif',
                        fontWeight: '820',
                        letterSpacing: '1%',
                        color: '#FFFFFF',
                        lineHeight: '100%',
                        marginLeft:"45px"
                    }}
                >
                    THE SUITOR GUY EXPERIENCE - <span style={{ color: '#0427B9' }}>HOW IT WORKS</span>
                </h2>
                
                {/* Blue Underline - Matching HomeMain.jsx */}
                <div
                    style={{
                        width: '140px',
                        height: '3px',
                        backgroundColor: '#0000FF',
                        marginTop: '15px',
                         marginLeft:"45px"
                    }}
                ></div>

        

                {/* Steps */}
                <div className="flex flex-col lg:flex-row justify-start lg:justify-center items-start lg:items-center gap-6 lg:gap-[130px] mt-8">
                    {/* Step 1 */}
                    <article className="flex items-start gap-4 w-full lg:w-auto">
                        <div className="w-12 h-12 lg:w-16 lg:h-16 bg-gray-700 rounded-lg flex items-center justify-center flex-shrink-0">
                            <svg className="w-6 h-6 lg:w-8 lg:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-label="Visit store icon">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                            </svg>
                        </div>
                        <div className="flex flex-col text-left">
                            <h3 
                                className="uppercase text-base md:text-lg mb-2"
                                style={{
                                    fontFamily: 'Helvetica Neue Condensed, Helvetica Compressed, Arial Narrow, Impact, sans-serif',
                                    fontWeight: '820',
                                    letterSpacing: '1%',
                                    color: '#0000FF'
                                }}
                            >
                                STEP 01
                            </h3>
                            <p 
                                className="text-white text-base md:text-lg"
                                style={{
                                    fontFamily: 'Cabin, Arial, sans-serif',
                                    fontWeight: 400,
                                    lineHeight: '24px'
                                }}
                            >
                                Visit Us or Book a Free Fitting
                            </p>
                        </div>
                    </article>

                    {/* Step 2 */}
                    <article className="flex items-start gap-4 w-full lg:w-auto">
                        <div className="w-12 h-12 lg:w-16 lg:h-16 bg-gray-700 rounded-lg flex items-center justify-center flex-shrink-0">
                            <svg className="w-6 h-6 lg:w-8 lg:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-label="Get fitted icon">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                            </svg>
                        </div>
                        <div className="flex flex-col text-left">
                            <h3 
                                className="uppercase text-base md:text-lg mb-2"
                                style={{
                                    fontFamily: 'Helvetica Neue Condensed, Helvetica Compressed, Arial Narrow, Impact, sans-serif',
                                    fontWeight: '820',
                                    letterSpacing: '1%',
                                    color: '#0000FF'
                                }}
                            >
                                STEP 02
                            </h3>
                            <p 
                                className="text-white text-base md:text-lg"
                                style={{
                                    fontFamily: 'Cabin, Arial, sans-serif',
                                    fontWeight: 400,
                                    lineHeight: '24px'
                                }}
                            >
                                Get Fitted
                            </p>
                        </div>
                    </article>

                    {/* Step 3 */}
                    <article className="flex items-start gap-4 w-full lg:w-auto">
                        <div className="w-12 h-12 lg:w-16 lg:h-16 bg-gray-700 rounded-lg flex items-center justify-center flex-shrink-0">
                            <svg className="w-6 h-6 lg:w-8 lg:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-label="Complete process icon">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                        <div className="flex flex-col text-left">
                            <h3 
                                className="uppercase text-base md:text-lg mb-2"
                                style={{
                                    fontFamily: 'Helvetica Neue Condensed, Helvetica Compressed, Arial Narrow, Impact, sans-serif',
                                    fontWeight: '820',
                                    letterSpacing: '1%',
                                    color: '#0000FF'
                                }}
                            >
                                STEP 03
                            </h3>
                            <p 
                                className="text-white text-base md:text-lg"
                                style={{
                                    fontFamily: 'Cabin, Arial, sans-serif',
                                    fontWeight: 400,
                                    lineHeight: '24px'
                                }}
                            >
                                Walk Out in Style
                            </p>
                        </div>
                    </article>
                </div>
            </div>
        </section>
    );
};

export default HowWork;
