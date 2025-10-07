import { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import img from '../assets/placeholder.png'
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { Link } from "react-router-dom";
const customIcon1 = L.icon({
    iconUrl: img, // Replace with the actual icon URL
    iconSize: [32, 32], // Adjust size as needed
    iconAnchor: [16, 32],
    popupAnchor: [0, -32],
});
const locations = [
    { lat: 9.60976836421169, lng: 76.53303214751051, title: "Nedumgattu Chambers, Chavittuvary, S.H. Mount, P O, Kumaranalloor, Kottayam, Kerala 686006", directions_link: "https://maps.app.goo.gl/yW3xzTPbdYW7tHqWA" },
    { lat: 10.023928401303749, lng: 76.30717435359297, title: "Valiyara building Near edappaly flyover, metro piller no. 411, Edappally, Ernakulam, Kerala 682024 : Ph 8606503807", directions_link: "https://maps.app.goo.gl/x4KCXHeHsJ6Qt6SX7" },
    { lat: 10.116765558474144, lng: 76.47666196471887, title: "Oushady, junction, SH 1, Perumbavoor, Kerala 683542", directions_link: "https://maps.app.goo.gl/KzwB9sCUfy4Wewhb9" },
    { lat: 10.53717598328902, lng: 76.19844733030988, title: "Thrissur kunamkulam Road, near Akshaya hotel, opp. Jawa, Puzhakkal, Punkunnam, Thrissur, Kerala 680002", directions_link: "https://maps.app.goo.gl/i2qtTheJN7ybdKHT9" },
    { lat: 10.766991389142559, lng: 76.65978690050873, title: "P&G tower, Stadium Bypass Rd, Sultanpet, Palakkad, Kerala 678001", directions_link: "https://maps.app.goo.gl/Eiaaga4VjExtKyp48" },
    { lat: 10.590406712132433, lng: 76.02611773773388, title: "SH50, Ovungal, Friend Ship Nagar, Chavakkad, Kerala 680101", directions_link: "https://maps.app.goo.gl/NsJ7aKknfYYu5Rfb6" },
    { lat: 10.816685133264667, lng: 76.0173782819164, title: "Edappal - Kuttippuram Rd, Edappal, Kerala 679576", directions_link: "https://maps.app.goo.gl/GxoQvzwbmy8JZZp99" },
    { lat: 11.600760814950238, lng: 75.59270938820502, title: "JH2V+834, Nut Street, Vatakara, Kerala 673104", directions_link: "https://maps.app.goo.gl/8XQ1n78eYjv77ZMSA" },
    { lat: 10.987037293442802, lng: 76.22588641151617, title: "Gundlupet Highway, Valiyangadi, Coimbatore, Perinthalmanna, Kerala 679322", directions_link: "https://maps.app.goo.gl/E8433o81PSkDA6M36" },
    { lat: 11.10130698766507, lng: 76.12046562283246, title: "Malappuram - Manjeri Rd, Muttipalam Upper, Manjeri, Kerala 676121", directions_link: "https://maps.app.goo.gl/uqz7cZhdAFy97B9S8" },
    { lat: 11.000038303965866, lng: 75.99328501174092, title: "kottakkal, Changuvetty, Kerala 676501", directions_link: "https://maps.app.goo.gl/9uRDQTwVfeXPqRQJ7" },
    { lat: 11.252509766846655, lng: 75.82897846514223, title: "BYE PASS ROAD, OPP IT PARK Near Hi- lite mall, service road, Kozhikode, Kerala 673016", directions_link: "https://maps.app.goo.gl/sssD5HfoXFZvca2K9" },
    { lat: 11.871737502448557, lng: 75.39615548619636, title: "V9CW+MCW, Elayavoor, Kerala 670005", directions_link: "https://maps.app.goo.gl/CZHm9tiaoghmCqCp8" },
    { lat: 11.630609339870338, lng: 76.08880775124241, title: "J3JQ+4JW, Civil Station, Madathumpadi, Kalpetta, Kerala 673122", directions_link: "https://maps.app.goo.gl/Dt75vgxQ5B8CqdHk9" },
    { lat: 8.469705003805748, lng: 76.9814399343759, title: "CTO Colony, Pappanamcode Signal, Thiruvananthapuram, Kerala 69501", directions_link: "https://maps.app.goo.gl/ZqdgMVVZSvH4HsZ37" }
];


const customIcon = new L.Icon({
    iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
    iconSize: [20, 31],
    iconAnchor: [12, 41],
});

const Map = () => {
    const [userLocation, setUserLocation] = useState(null);
    const [nearestPoint, setNearestPoint] = useState(null);

    const getDistance = (pos1, pos2) => {
        const R = 6371; // Radius of Earth in km
        const dLat = (pos2.lat - pos1.lat) * (Math.PI / 180);
        const dLng = (pos2.lng - pos1.lng) * (Math.PI / 180);
        const a =
            Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.cos(pos1.lat * (Math.PI / 180)) *
            Math.cos(pos2.lat * (Math.PI / 180)) *
            Math.sin(dLng / 2) * Math.sin(dLng / 2);
        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        return R * c; // Distance in km
    };
    const [locationDenied, setLocationDenied] = useState(false);

    const TakeUSer = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const userPos = {
                        lat: position.coords.latitude,
                        lng: position.coords.longitude,
                    };
                    // alert(userPos.lat)
                    // alert(userPos.lng)
                    console.log(userPos);

                    setUserLocation(userPos);
                    setLocationDenied(false); // Reset denial state if permission is granted

                    let minDistance = Number.MAX_VALUE;
                    let nearest = null;
                    locations.forEach((point) => {
                        const distance = getDistance(userPos, point);
                        if (distance < minDistance) {
                            minDistance = distance;
                            nearest = point;
                        }
                    });
                    setNearestPoint(nearest);
                },
                (error) => {
                    if (error.code === error.PERMISSION_DENIED) {
                        console.error("Location access denied. Please enable location in browser settings.");
                        setLocationDenied(true);
                    }
                },
                { enableHighAccuracy: true }
            );
        }
    };


    useEffect(() => {

        TakeUSer()
    }, []);

    return (
        <div className="mt-6 md:mx-0 mx-5 mb-[150px]">

            <div className="mt-[30px] z-[300] mb-[200px]" id="map">
                <div className="text-white mb-[50px] flex flex-col justify-center items-center text-center">
                    <h4 className="BonaNova">Location</h4>
                    <h2 className="text-2xl md:text-5xl">Visit us for your <br /> Perfect Fit</h2>
                    <p className="BonaNova">
                        Our Store in Kochi offers personalized fittings and expert guidance to <br />
                        help you find the perfect suit for your special day.
                    </p>
                    <div className="flex gap-10 mt-4">
                        <button className="bg-[#0427B9] p-2 px-3 rounded-sm BonaNova" onClick={TakeUSer}>Locate your nearest Store</button>
                        <Link to={'/Locations'}>
                            <button className="bg-[#0427B9] p-2 px-10 rounded-sm BonaNova">View All Locations</button>
                        </Link>


                    </div>

                    {locationDenied && (
                        <div className="text-center mt-4">
                            <p className="text-red-500 text-xl BonaNova">Location access is denied. Please enable it in your browser settings.</p>

                        </div>
                    )}
                </div>

                {/* Map */}

            </div>
            <div className="-mt-[150px]">
                <MapContainer
                    center={userLocation || [10.0279, 76.3077]}
                    zoom={10}
                    className="md:h-[500px] h-[200px]"
                    style={{ width: "100%" }}
                >
                    <TileLayer
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    {userLocation && (
                        <Marker className='text-red-600' position={[userLocation.lat, userLocation.lng]} icon={customIcon1}>
                            <Popup>You are here</Popup>
                        </Marker>
                    )}
                    {locations.map((loc, index) => (
                        <Marker key={index} position={[loc.lat, loc.lng]} icon={customIcon}>
                            <Popup>{loc.title}</Popup>
                        </Marker>
                    ))}
                </MapContainer>
                {nearestPoint && (
                    <div className="text-center font-sans bg-[#212121] text-[19px] text-white p-3 mt-3">
                        <strong className="BonaNova">Nearest Location:</strong> {nearestPoint.title} <span> <a href={nearestPoint.directions_link} target="_blank" rel="noopener noreferrer"
                            className="bg-gray-700 hover:bg-gray-600 text-white font-normal py-1 px-4 font-sans rounded transition">
                            Location
                        </a></span>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Map;
