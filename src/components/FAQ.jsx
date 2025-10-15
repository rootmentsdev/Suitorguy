import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(null);

    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
            offset: 300,
        });
    }, []);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const faqs = [
        {
            question: "What makes Suitor Guy different from other rental stores?",
            answer: "Suitor Guy focuses on premium quality, fit, and customer experience, ensuring every groom feels confident on his big day."
        },
        {
            question: "Can I customize my outfit?",
            answer: "Yes! We provide tailoring and fitting services so that your outfit feels as if it was made just for you."
        },
        {
            question: "Do you offer trial fittings before the wedding?",
            answer: "Absolutely. You can book a trial fitting at your nearest store to ensure everything is perfect."
        },
        {
            question: "What if I need last-minute changes?",
            answer: "Our team is trained to handle urgent requests whenever possible. We'll do our best to accommodate you."
        },
        {
            question: "Do you provide accessories along with the outfit?",
            answer: "Yes, we offer complete styling including shoes, turbans, pocket squares, and jewelry to match your attire."
        },
        {
            question: "Where are Suitor Guy stores located?",
            answer: "We have 19+ stores across Kerala, making it easy to find a branch near you."
        }
    ];

    return (
        <div className="py-16 px-8" id="faq">
            {/* FAQ Schema Markup */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "FAQPage",
                        "mainEntity": faqs.map(faq => ({
                            "@type": "Question",
                            "name": faq.question,
                            "acceptedAnswer": {
                                "@type": "Answer",
                                "text": faq.answer
                            }
                        }))
                    })
                }}
            />
            <div className="max-w-6xl mx-auto">
                {/* Left side - Heading */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-32">
                    <div className="lg:col-span-1 text-left" data-aos="fade-right">
                        <h2 className="text-2xl md:text-[35px] md:ml-[-2px]" style={{
                            fontFamily: 'Helvetica Neue Condensed, Helvetica Compressed, Arial Narrow, Impact, sans-serif',
                            fontWeight: '820',
                            lineHeight: '100%',
                            letterSpacing: '1%',
                            textTransform: 'uppercase'
                        }}>
                            <span className="text-black">FREQUENTLY ASKED</span>
                            <br />
                            <span className="text-[#0427B9]">QUESTIONS</span>
                        </h2>
                        <div className="w-24 h-1 bg-gray-800 mt-4"></div>
                    </div>

                    {/* Right side - FAQ Items */}
                    <div className="lg:col-span-2" data-aos="fade-left">
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                            {faqs.map((faq, index) => (
                                <div 
                                    key={index} 
                                    className="border-b border-gray-300 pb-4"
                                >
                                    <button
                                        onClick={() => toggleFAQ(index)}
                                        className="w-full flex justify-between items-center text-left py-4 hover:text-[#0427B9] transition-colors"
                                    >
                                        <span className="text-gray-800 text-lg font-medium pr-4" style={{
                                            fontFamily: 'Cabin',
                                            fontWeight: 500
                                        }}>
                                            {faq.question}
                                        </span>
                                        <span className="text-2xl text-gray-800 flex-shrink-0">
                                            {openIndex === index ? '−' : '+'}
                                        </span>
                                    </button>
                                    <div 
                                        className={`overflow-hidden transition-all duration-500 ease-in-out ${
                                            openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                                        }`}
                                    >
                                        <div className="pt-2 pb-4 text-gray-600 text-base leading-relaxed" style={{
                                            fontFamily: 'Cabin',
                                            fontWeight: 400,
                                            lineHeight: '24px'
                                        }}>
                                            {faq.answer}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FAQ;
