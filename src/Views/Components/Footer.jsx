import { Col, Container, Row } from "react-bootstrap";
import { MdFacebook } from "react-icons/md";
import { Link } from "react-router-dom";
import {
  AiFillInstagram,
  AiFillLinkedin,
  AiFillTwitterCircle,
} from "react-icons/ai";
import { IoLogoPinterest } from "react-icons/io";
import google from "../../Assets/Images/google.png";
import app from "../../Assets/Images/app.png";
import apple from "../../Assets/Images/ApplePay.png";
import googlep from "../../Assets/Images/GooglePay.png";
import stripe from "../../Assets/Images/Stripe.png";
import bitcoin from "../../Assets/Images/Bitcoin.png";
import paypal from "../../Assets/Images/PayPal.png";
import visa from "../../Assets/Images/Visa.png";

const Footer = () => {
  return (
    <>
      <footer className="p-5">
        <Container>
          <Row>
            <Col>
              <h5>Know Your Jewellery</h5>
              <ul>
                <li>DIAMOND GUIDE</li>
                <li>JEWELLERY GUIDE</li>
                <li>GEMSTONES GUIDE</li>
                <li>GOLD RATE</li>
                <li>DIGITAL GOLD</li>
                <li>EAR PIERCING</li>
              </ul>
            </Col>
            <Col>
              <h5>SONA Advantage</h5>
              <ul>
                <li>15-DAY RETURNS</li>
                <li>FREE SHIPPING</li>
                <li>FINANCING OPTIONS</li>
                <li>Old Gold Exchange</li>
              </ul>
            </Col>
            <Col>
              <h5>Customer Service</h5>
              <ul>
                <li>RETURN POLICY</li>
                <li>ORDER STATUS</li>
              </ul>
            </Col>
            <Col>
              <h5>About Us</h5>
              <ul>
                <li>OUR STORY</li>
                <li>PRESS</li>
                <li>BLOG</li>
                <li>CAREERS</li>
              </ul>
            </Col>
            <Col>
              <h5>Contact Us</h5>
              <ul>
                <li>
                  <span></span>
                  <span></span>
                  <span></span>
                </li>
                <li>24X7 Enquiry Support ( ALL Days )</li>
                <li>
                  Contact : <Link>contact@gmail.com</Link>
                </li>
                <li>
                  Grievance : <Link>Click Here</Link>
                </li>
                <li className="mt-3">
                  <button className="bdr-btn">FIND A STORE</button>
                </li>
              </ul>
            </Col>
          </Row>
          <Row className="mt-5">
            <Col>
              <Row>
                <ul className="d-flex">
                  <li className="me-3">
                    <MdFacebook size={"24px"} color="rgb(136, 99, 251)" />
                  </li>
                  <li className="me-3">
                    <AiFillInstagram size={"24px"} color="rgb(136, 99, 251)" />
                  </li>
                  <li className="me-3">
                    <AiFillLinkedin size={"24px"} color="rgb(136, 99, 251)" />
                  </li>
                  <li className="me-3">
                    <AiFillTwitterCircle
                      size={"24px"}
                      color="rgb(136, 99, 251)"
                    />
                  </li>
                  <li className="me-3">
                    <IoLogoPinterest size={"24px"} color="rgb(136, 99, 251)" />
                  </li>
                </ul>
              </Row>
              <Row>
                <ul>
                  <li>Download SONA app</li>
                </ul>
              </Row>
              <Row>
                <ul className="d-flex">
                  <li className="me-3">
                    <span>
                      <img src={google} alt="google" />
                    </span>
                    Google Play
                  </li>
                  <li>
                    <span>
                      <img src={app} alt="apple" />
                    </span>
                    App Store
                  </li>
                </ul>
              </Row>
            </Col>
            <Col className="d-flex align-items-center justify-content-end">
              <ul className="d-flex flex-wrap payment justify-content-center">
                <li className="me-3">
                  <img src={apple} alt="" />
                </li>
                <li className="me-3">
                  <img src={googlep} alt="" />
                </li>
                <li className="me-3">
                  <img src={visa} alt="" />
                </li>
                <li className="me-3">
                  <img src={paypal} alt="" />
                </li>
                <li className="me-3">
                  <img src={bitcoin} alt="" />
                </li>
                <li className="me-3">
                  <img src={stripe} alt="" />
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  );
};

export default Footer;
