import { Button, Col, Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Logo from "../assets/Logo.png";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div
      className="min-vh-100 d-flex align-items-center"
      style={{ backgroundColor: "#EFEFEF" }}
    >
      <Container>
        <Row className="gy-4 align-items-center">
          <Col md={6} className="text-center text-md-start">
            <p
              className="text-primary text-uppercase fw-semibold small mb-2"
              style={{
                fontFamily:
                  "Helvetica Neue, Arial Narrow, Arial, sans-serif",
                letterSpacing: "0.08em",
              }}
            >
              Page not found
            </p>
            <h1
              className="display-5 fw-bold mb-3"
              style={{
                fontFamily:
                  "Helvetica Neue, Arial Narrow, Arial, sans-serif",
                letterSpacing: "0.01em",
              }}
            >
              404
            </h1>
            <p
              className="mb-4 text-secondary"
              style={{
                fontFamily: "Cabin, Arial, sans-serif",
                fontSize: "16px",
                lineHeight: "24px",
              }}
            >
              The page you are looking for doesn’t exist or may have moved.
              Let’s get you back to the right place.
            </p>
            <div className="d-flex flex-wrap gap-3 justify-content-center justify-content-md-start">
              <Button
                variant="primary"
                className="px-4 py-2"
                style={{ borderRadius: "20px" }}
                onClick={() => navigate("/")}
              >
                Go to Home
              </Button>
              <Button
                variant="outline-primary"
                className="px-4 py-2"
                style={{ borderRadius: "20px" }}
                onClick={() => navigate(-1)}
              >
                Go Back
              </Button>
            </div>
          </Col>
          <Col md={6} className="text-center">
            <div className="d-inline-flex align-items-center justify-content-center rounded-4 bg-white shadow-sm p-4">
              <img
                src={Logo}
                alt="Suitor Guy Logo"
                style={{ height: "110px", width: "auto" }}
              />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default NotFound;

