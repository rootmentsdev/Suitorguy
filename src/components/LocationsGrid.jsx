import { useState } from "react";
import { CiLocationOn, CiSearch } from "react-icons/ci";
import { FiPhone, FiClock } from "react-icons/fi";

const locations = [
    {
        store: "SUITOR GUY TRIVANDRUM",
        address: "CTO Colony, Pappanamcode Signal, Thiruvananthapuram, Kerala 695018",
        hours: "Mon - Sun | 10:00 am - 08:30 pm",
        phone: "+91 759 38 38700",
        directions_link: "https://maps.app.goo.gl/ZqdgMVVZSvH4HsZ37"
    },
    {
        store: "SUITORGUY KOTTAYAM",
        address: "Nedumgattu Chambers, Chavittuvary, S.H. Mount, P O, Kumaranalloor, Kottayam, Kerala 686006",
        hours: "Mon - Sun | 10:00 am - 08:00 pm",
        phone: "+91 759 38 38701",
        directions_link: "https://maps.app.goo.gl/yW3xzTPbdYW7tHqWA"
    },
    {
        store: "SUITOR GUY EDAPPALLY",
        address: "Valiyara building Near edappaly flyover, metro piller no. 411, Edappally, Ernakulam, Kerala 682024",
        hours: "Mon - Sun | 10:00 am - 08:30 pm",
        phone: "+91 759 38 38702",
        directions_link: "https://maps.app.goo.gl/LMahuH6wmRwBpy5W6"
    },
    {
        store: "SUITORGUY PERUMBAVOOR",
        address: "Oushady, junction, SH 1, Perumbavoor, Kerala 683542",
        hours: "Mon - Sun | 10:00 am - 08:30 pm",
        phone: "+91 759 38 38703",
        directions_link: "https://maps.app.goo.gl/KzwB9sCUfy4Wewhb9"
    },
    {
        store: "SUITOR GUY THRISSUR",
        address: "Thrissur kunamkulam Road, near Akshaya hotel, opp. Jawa, Puzhakkal, Punkunnam, Thrissur, Kerala 680002",
        hours: "Mon - Sun | 10:00 am - 08:30 pm",
        phone: "+91 759 38 38704",
        directions_link: "https://maps.app.goo.gl/i2qtTheJN7ybdKHT9"
    },
    {
        store: "SUITOR GUY PALAKKAD",
        address: "P&G tower, Stadium Bypass Rd, Sultanpet, Palakkad, Kerala 678001",
        hours: "Mon - Sun | 10:00 am - 08:30 pm",
        phone: "+91 759 38 38705",
        directions_link: "https://maps.app.goo.gl/Eiaaga4VjExtKyp48"
    },
    {
        store: "SUITORGUY CHAVAKKAD",
        address: "SH50, Ovungal, Friend Ship Nagar, Chavakkad, Kerala 680101",
        hours: "Mon - Sun | 10:00 am - 08:30 pm",
        phone: "+91 759 38 38706",
        directions_link: "https://maps.app.goo.gl/NsJ7aKknfYYu5Rfb6"
    },
    {
        store: "SUITOR GUY EDAPPAL",
        address: "Edappal - Kuttippuram Rd, Edappal, Kerala 679576",
        hours: "Mon - Sun | 10:00 am - 08:30 pm",
        phone: "+91 759 38 38707",
        directions_link: "https://maps.app.goo.gl/GxoQvzwbmy8JZZp99"
    },
    {
        store: "SUITORGUY PERINTHALMANNA",
        address: "Gundlupet Highway, Valiyangadi, Coimbatore, Perinthalmanna, Kerala 679322",
        hours: "Mon - Sun | 10:00 am - 08:30 pm",
        phone: "+91 759 38 38709",
        directions_link: "https://maps.app.goo.gl/E8433o81PSkDA6M36"
    },
    {
        store: "SUITOR GUY MANJERI",
        address: "Malappuram - Manjeri Rd, Muttipalam Upper, Manjeri, Kerala 676121",
        hours: "Mon - Sun | 10:00 am - 08:00 pm",
        phone: "+91 759 38 38710",
        directions_link: "https://maps.app.goo.gl/uqz7cZhdAFy97B9S8"
    },
    {
        store: "SUITOR GUY KOTTAKKAL",
        address: "kottakkal, Changuvetty, Kerala 676501",
        hours: "Mon - Sun | 10:00 am - 08:30 pm",
        phone: "+91 759 38 38711",
        directions_link: "https://maps.app.goo.gl/9uRDQTwVfeXPqRQJ7"
    },
    {
        store: "SUITORGUY KOZHIKODE",
        address: "BYE PASS ROAD, OPP IT PARK Near Hi- lite mall, service road, Kozhikode, Kerala 673016",
        hours: "Mon - Sun | 10:00 am - 08:00 pm",
        phone: "+91 759 38 38712",
        directions_link: "https://maps.app.goo.gl/sssD5HfoXFZvca2K9"
    },
    {
        store: "SUITOR GUY VATAKARA",
        address: "JH2V+834, Nut Street, Vatakara, Kerala 673104",
        hours: "Mon - Sun | 10:00 am - 08:30 pm",
        phone: "+91 759 38 38708",
        directions_link: "https://maps.app.goo.gl/8XQ1n78eYjv77ZMSA"
    },
    {
        store: "SUITOR GUY KANNUR",
        address: "V9CW+MCW, Elayavoor, Kerala 670005",
        hours: "Mon - Sun | 10:00 am - 08:00 pm",
        phone: "+91 759 38 38716",
        directions_link: "https://maps.app.goo.gl/CZHm9tiaoghmCqCp8"
    },
    {
        store: "SUITOR GUY KALPETTA",
        address: "J3JQ+4JW, Civil Station, Madathumpadi, Kalpetta, Kerala 673122",
        hours: "Mon - Sun | 10:00 am - 08:00 pm",
        phone: "+91 759 38 38717",
        directions_link: "https://maps.app.goo.gl/Dt75vgxQ5B8CqdHk9"
    }
];

const LocationsGrid = () => {
    const [searchQuery, setSearchQuery] = useState("");

    const filteredLocations = locations.filter(location =>
        location.store.toLowerCase().includes(searchQuery.toLowerCase()) ||
        location.address.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="w-full">
            {/* Main Heading - SEO h1 matching HomeMain style */}
            <div className="max-w-7xl mx-auto mb-12">
                <div className="mb-6">
                    <h1 
                        className="uppercase mb-0 text-[28px] leading-tight sm:text-[32px] lg:text-[42px] lg:leading-[1.05]"
                        style={{
                            fontFamily: 'Arial Black, Arial, Helvetica, sans-serif',
                            fontWeight: 900,
                            letterSpacing: '0',
                            color: '#3D3D3D'
                        }}
                    >
                        FIND YOUR NEAREST
                    </h1>
                    <h1 
                        className="uppercase mb-0 text-[28px] leading-tight sm:text-[32px] lg:text-[42px] lg:leading-[1.15]"
                        style={{
                            fontFamily: 'Arial Black, Arial, Helvetica, sans-serif',
                            fontWeight: 900,
                            letterSpacing: '0',
                            color: '#0000FF'
                        }}
                    >
                        SUITOR GUY
                    </h1>
                    
                    {/* Blue Underline */}
                    <div
                        className="mt-4"
                        style={{
                            width: '140px',
                            height: '3px',
                            backgroundColor: '#0000FF',
                        }}
                    ></div>
                </div>

                {/* Search Bar */}
                <div className="relative max-w-md mt-6">
                    <input
                        type="text"
                        placeholder="Search by location..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full py-3 pl-4 pr-12 border border-gray-300 rounded-md text-gray-800 focus:outline-none focus:border-[#0427B9]"
                        style={{
                            fontFamily: 'Cabin, Arial, sans-serif'
                        }}
                    />
                    <CiSearch className="absolute right-4 top-1/2 transform -translate-y-1/2 text-2xl text-gray-400" />
                </div>
            </div>

            {/* Locations Grid */}
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredLocations.map((location, index) => (
                    <div
                        key={index}
                        className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col h-full"
                    >
                        {/* Content wrapper with flex-grow */}
                        <div className="flex-grow">
                            {/* Store Name - h2 for SEO */}
                            <h2
                                className="text-base md:text-lg font-bold uppercase mb-4"
                                style={{
                                    fontFamily: 'Arial Black, Arial, Helvetica, sans-serif',
                                    color: '#000',
                                    letterSpacing: '0.3px'
                                }}
                            >
                                {location.store}
                            </h2>

                            {/* Address */}
                            <div className="flex items-start gap-3 mb-4">
                                <CiLocationOn className="text-xl text-gray-600 flex-shrink-0 mt-1" />
                                <p
                                    className="text-sm text-gray-600 leading-relaxed"
                                    style={{
                                        fontFamily: 'Cabin, Arial, sans-serif'
                                    }}
                                >
                                    {location.address}
                                </p>
                            </div>

                            {/* Hours */}
                            <div className="flex items-center gap-3 mb-4">
                                <FiClock className="text-lg text-gray-600 flex-shrink-0" />
                                <p
                                    className="text-sm text-gray-600"
                                    style={{
                                        fontFamily: 'Cabin, Arial, sans-serif'
                                    }}
                                >
                                    {location.hours}
                                </p>
                            </div>

                            {/* Phone */}
                            <div className="flex items-center gap-3 mb-6">
                                <FiPhone className="text-lg text-gray-600 flex-shrink-0" />
                                <p
                                    className="text-sm text-gray-600"
                                    style={{
                                        fontFamily: 'Cabin, Arial, sans-serif'
                                    }}
                                >
                                    {location.phone}
                                </p>
                            </div>
                        </div>

                        {/* Get Direction Button - Always at bottom */}
                        <a
                            href={location.directions_link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block w-full text-center bg-[#0427B9] text-white py-3 px-6 rounded-full hover:bg-blue-700 transition-colors font-semibold text-sm mt-auto"
                            style={{
                                fontFamily: 'Cabin, Arial, sans-serif'
                            }}
                        >
                            Get Direction
                        </a>
                    </div>
                ))}
            </div>

            {/* No Results Message */}
            {filteredLocations.length === 0 && (
                <div className="max-w-7xl mx-auto text-center py-12">
                    <p className="text-gray-600 text-lg">
                        No locations found matching "{searchQuery}"
                    </p>
                </div>
            )}
        </div>
    );
};

export default LocationsGrid;

