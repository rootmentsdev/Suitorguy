import { IoSearchSharp } from "react-icons/io5";
import { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import img from '../assets/placeholder.png'
import "leaflet/dist/leaflet.css";
import L from "leaflet";
const customIcon1 = L.icon({
    iconUrl: img, // Replace with the actual icon URL
    iconSize: [32, 32], // Adjust size as needed
    iconAnchor: [16, 32],
    popupAnchor: [0, -32],
});

const locations = [
    { lat: 9.60976836421169, lng: 76.53303214751051, title: "Nedumgattu Chambers, Chavittuvary, S.H. Mount, P O, Kumaranalloor, Kottayam, Kerala 686006" },
    { lat: 10.023928401303749, lng: 76.30717435359297, title: "Valiyara building Near edappaly flyover, metro piller no. 411, Edappally, Ernakulam, Kerala 682024 : Ph 8606503807" },
    { lat: 10.116765558474144, lng: 76.47666196471887, title: "Oushady, junction, SH 1, Perumbavoor, Kerala 683542" },
    { lat: 10.53717598328902, lng: 76.19844733030988, title: "Thrissur kunamkulam Road, near Akshaya hotel, opp. Jawa, Puzhakkal, Punkunnam, Thrissur, Kerala 680002" },
    { lat: 10.766991389142559, lng: 76.65978690050873, title: "P&G tower, Stadium Bypass Rd, Sultanpet, Palakkad, Kerala 678001" },
    { lat: 10.590406712132433, lng: 76.02611773773388, title: " SH50, Ovungal, Friend Ship Nagar, Chavakkad, Kerala 680101" },
    { lat: 10.816685133264667, lng: 76.0173782819164, title: "Edappal - Kuttippuram Rd, Edappal, Kerala 679576" },
    { lat: 11.600760814950238, lng: 75.59270938820502, title: "JH2V+834, Nut Street, Vatakara, Kerala 673104" },
    { lat: 10.987037293442802, lng: 76.22588641151617, title: "Gundlupet Highway, Valiyangadi, Coimbatore, Perinthalmanna, Kerala 679322" },
    { lat: 11.10130698766507, lng: 76.12046562283246, title: "Malappuram - Manjeri Rd, Muttipalam Upper, Manjeri, Kerala 676121" },
    { lat: 11.000038303965866, lng: 75.99328501174092, title: "kottakkal, Changuvetty, Kerala 676501" },
    { lat: 11.252509766846655, lng: 75.82897846514223, title: " BYE PASS ROAD, OPP IT PARK Near Hi- lite mall, service road, Kozhikode, Kerala 673016" },
    { lat: 11.871737502448557, lng: 75.39615548619636, title: "V9CW+MCW, Elayavoor, Kerala 670005" },
    { lat: 11.630609339870338, lng: 76.08880775124241, title: " J3JQ+4JW, Civil Station, Madathumpadi, Kalpetta, Kerala 673122" },

    { lat: 8.469705003805748, lng: 76.9814399343759, title: "CTO Colony, Pappanamcode Signal, Thiruvananthapuram, Kerala 69501" },


];

const customIcon = new L.Icon({
    iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
    iconSize: [20, 31],
    iconAnchor: [12, 41],
});
const LocationMap = () => {
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
        <div className="mt-[30px] z-[300] mb-[200px]" id="map">
            <div className="text-white mb-[50px] flex flex-col gap-6">
                <h4 className="BonaNova text-[#0427B9]">Our Locations</h4>
                <h2 className="text-2xl md:text-5xl">Find your Nearest <br /> Store Location</h2>
                <div className="w-[300px] relative">
                    <input type="text" className="w-full p-1 BonaNova text-white bg-[#212121] " placeholder="Search Location...." />
                    <div className="w-[40px] h-full flex justify-center items-center absolute top-0 right-0 text-2xl bg-[#0427B9]">
                        <IoSearchSharp />
                    </div>

                </div>
            </div>

            <div className="">
                <MapContainer
                    center={userLocation || [10.0279, 76.3077]}
                    zoom={10}
                    style={{ height: "500px", width: "100%" }}
                >
                    <TileLayer
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />

                    {locations.map((loc, index) => (
                        <Marker key={index} position={[loc.lat, loc.lng]} icon={customIcon}>
                            <Popup>{loc.title}</Popup>
                        </Marker>
                    ))}
                </MapContainer>

            </div>
        </div>
    );
};

export default LocationMap;
