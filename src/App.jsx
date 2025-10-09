import { Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import Home from "./pages/Home";
import Loader from "./components/Loader"; // Import the Loader
import './App.css'
import HowitWorks from "./pages/HowitWorks";
import Locations from "./pages/Locations";
import ContactPage from "./pages/ContactPage";
import WhyRentPage from "./pages/WhyRentPage";
import CollectionPage from "./pages/CollectionPage";
import About from "./pages/About";
import BreadcrumbSchema from "./components/BreadcrumbSchema";
gsap.registerPlugin(ScrollToPlugin);

function App() {
  const [loading, setLoading] = useState(true); // Loader state

  useEffect(() => {
    if (!loading) {
      // Restore scroll position smoothly after the loader disappears
      const scrollPosition = sessionStorage.getItem("scrollPosition");
      if (scrollPosition) {
        gsap.to(window, { duration: 1, scrollTo: { y: parseInt(scrollPosition, 10), autoKill: false } });
      }
    }
  }, [loading]);

  useEffect(() => {
    const handleScroll = () => {
      sessionStorage.setItem("scrollPosition", window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen w-full overflow-hidden">
      {loading ? (
        <Loader setLoading={setLoading} />
      ) : (
        <>
          <BreadcrumbSchema />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/HowitWorks" element={<HowitWorks />} />
            <Route path="/Locations" element={<Locations />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/why-rent" element={<WhyRentPage />} />
            <Route path="/collection" element={<CollectionPage />} />
            <Route path="/about" element={<About />} />

            
          </Routes>
        </>
      )}
    </div>
  );
}

export default App;
