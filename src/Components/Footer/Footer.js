import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import {Link} from "react-router-dom";

const Footer = () => {
    return (
        <div>


            <Container>
                <Row className="pt-5 pb-5">

                    <Col md={5} sm={6}>
                        <h4 className="text-start">Travel Mania</h4>
                        <p className="text-start pt-2">
                            Travel is the main thing you purchase that makes you more extravagant”. We, at ‘Organization Name’, swear by this and put stock in satisfying travel dreams that make you perpetually rich constantly
                        </p>
                    </Col>
                    <Col md={2} sm={6} className="text-start ps-2">
                        <h4>Links</h4>
                        <Link to="/" className="text-decoration-none text-black pt-2">Home</Link><br/>
                        <Link to="/" className="text-decoration-none text-black">About</Link><br/>
                        <Link to="/" className="text-decoration-none text-black">Contact</Link><br/>
                        <Link to="/" className="text-decoration-none text-black">Experince</Link><br/>
                        <Link to="/" className="text-decoration-none text-black">Best Sites</Link><br/>
                        <Link to="/" className="text-decoration-none text-black">Blog</Link><br/>
                    </Col>
                    <Col md={2} sm={6} className="text-start ps-2">
                        <h4>Support</h4>
                        <Link to="/" className="text-decoration-none text-black pt-2">Reporting</Link><br/>
                        <Link to="/" className="text-decoration-none text-black">FAQ</Link><br/>
                        <Link to="/" className="text-decoration-none text-black">Features</Link><br/>
                        <Link to="/" className="text-decoration-none text-black">Experince</Link><br/>
                        <Link to="/" className="text-decoration-none text-black">Biman BD Airline</Link><br/>
                        <Link to="/" className="text-decoration-none text-black">Best Offers</Link><br/>

                    </Col>
                    <Col md={2} sm={6} className="text-start">
                        <h4>Contact Us</h4>
                        <p>+923431279488<br/>
                            travelManiad@gmail.com</p>
                    </Col>
                </Row>
                <hr/>
                <div className="d-flex">
                    <div>
                        <p>Copyright & Design by Wahid</p>
                    </div>

                    <div className="ms-auto d-flex">
                        <p className="pe-5">Terms of use</p>
                        <p>Privacy Policy</p>

                    </div>

                </div>
            </Container>
            
        </div>
    );
};

export default Footer;