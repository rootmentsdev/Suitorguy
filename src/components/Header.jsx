import { useEffect, useState } from "react";
import { scroller } from "react-scroll";
import { useLocation, useNavigate } from "react-router-dom";
import { Button, Nav, Navbar } from "react-bootstrap";
import Logo from "../assets/Logo.png";

const Header = () => {
  const [expanded, setExpanded] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === "/";

  const navLinks = [
    { label: "Home", scrollId: "home", path: "/" },
    { label: "Why Rent?", scrollId: "legacy", path: "/why-rent" },
    { label: "About", scrollId: "about-us", path: "/about" },
    { label: "Collections", path: "/collection" },
    { label: "How it Works?", scrollId: "how-it-works", path: "/how-it-works" },
    { label: "Locations", path: "/Locations" },
  ];

  useEffect(() => {
    setExpanded(false);
  }, [location.pathname]);

  const scrollToId = (targetId) => {
    scroller.scrollTo(targetId, {
      smooth: true,
      duration: 500,
      offset: -80,
    });
  };

  const handleNavClick = (link) => {
    if (link.scrollId) {
      if (isHome) {
        scrollToId(link.scrollId);
      } else {
        navigate("/");
        setTimeout(() => scrollToId(link.scrollId), 320);
      }
    } else if (link.path) {
      navigate(link.path);
    }
    setExpanded(false);
  };

  const handleContactClick = () => {
    if (isHome) {
      scrollToId("contact-us");
    } else {
      navigate("/");
      setTimeout(() => scrollToId("contact-us"), 320);
    }
    setExpanded(false);
  };

  const isActive = (link) => {
    if (link.path && location.pathname === link.path) return true;
    if (isHome && link.scrollId && !link.path) return true;
    return false;
  };

  const baseLinkStyle = {
    fontFamily: "Cabin, Arial, sans-serif",
    fontSize: "15px",
    fontWeight: 500,
    color: "#2f3a4a",
    paddingInline: "10px",
  };

  return (
    <Navbar
      expand="lg"
      fixed="top"
      bg="light"
      expanded={expanded}
      className="shadow-sm px-0 header-navbar"
      style={{ backgroundColor: "#EFEFEF", paddingInline: 0 }}
    >
      <div className="content-container d-flex align-items-center w-100 py-2 header-inner" style={{ marginInline: "auto" }}>
        <Navbar.Brand
          role="button"
          onClick={() => handleNavClick({ path: "/" })}
          className="d-flex align-items-center me-lg-4"
        >
          <img
            src={Logo}
            alt="Suitor Guy Logo - Premium Wedding Suit Rentals"
            style={{ height: "46px", width: "auto" }}
          />
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="main-navigation"
          onClick={() => setExpanded((prev) => !prev)}
          className="ms-auto"
        />
        <Navbar.Collapse
          id="main-navigation"
          className="pt-3 pt-lg-0 justify-content-center flex-lg-grow-1"
        >
          <Nav className="align-items-start align-items-lg-center gap-2 gap-lg-4">
            {navLinks.map((link) => (
              <Nav.Link
                key={link.label}
                active={isActive(link)}
                onClick={() => handleNavClick(link)}
                style={{
                  ...baseLinkStyle,
                  color: isActive(link) ? "#0000FF" : baseLinkStyle.color,
                }}
              >
                {link.label}
              </Nav.Link>
            ))}
          </Nav>
          <div className="ms-lg-4 mt-3 mt-lg-0">
            <Button
              variant="primary"
              className="px-4 py-2"
              style={{
                borderRadius: "20px",
                fontFamily: "Cabin, Arial, sans-serif",
                fontSize: "15px",
                fontWeight: 600,
                backgroundColor: "#0000FF",
                borderColor: "#0000FF",
              }}
              onClick={handleContactClick}
            >
              Contact Us
            </Button>
          </div>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
};

export default Header;