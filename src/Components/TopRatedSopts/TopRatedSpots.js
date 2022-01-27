import React from 'react';
import {Col, Container, Nav, Row,Tab} from "react-bootstrap";
import { FcLike } from "react-icons/fc";
import { IoIosPeople } from "react-icons/io";
const TopRatedSpots = () => {
    return (
        <div className="pt-5 pb-5">
            <h2 className="pb-5">Top Rated Spots</h2>
            <Container>
                <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                    <Row>
                        <Col sm={3}>
                            <Nav variant="pills" className="flex-column">
                                <Nav.Item>
                                    <Nav.Link eventKey="first">Site 1</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">Site 2</Nav.Link>
                                </Nav.Item>

                                <Nav.Item>
                                    <Nav.Link eventKey="three">Site 3</Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Col>
                        <Col sm={9}>
                            <Tab.Content>
                                <Tab.Pane eventKey="first">
                                    <div className="d-flex ">
                                        <div><img src="https://i.ibb.co/sQ0zzLy/cox.jpg" className="img-fluid w-50 ms-auto"/></div>
                                        <div className="text-start ">
                                            <h3>Cox bazar</h3>
                                            <p>Cox's Bazar is a city, fishing port, tourism centre, and district headquarters in southeastern Bangladesh. It is famous mostly for its long natural sandy beach. It is located 150 km south of the city …</p>
                                            <p>4.5 <FcLike/>  <IoIosPeople/>1500 people visited</p>
                                        </div>
                                    </div>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
                                    <div className="d-flex ">
                                        <div><img src="https://i.ibb.co/NNnnJ6c/DCIM-100-GOPRO-GOPR1833-JPG.jpg" className="img-fluid w-50 ms-auto"/></div>
                                        <div className="text-start ">
                                            <h3>Sajek</h3>
                                            <p>Sajek Valley is an emerging tourist spot in Bangladesh situated among the hills of the Kasalong range of mountains in Sajek union, Baghaichhari Upazila in the Rangamati District. The valley is 1,476 feet (450 m) above sea level. Sajek valley is known as the Queen of Hills & Roof of Rangamati.Sajek is located in the verdant hills of Kasalong.
                                            </p>
                                            <p>4.7 <FcLike/>  <IoIosPeople/>1200 people visited</p>
                                        </div>
                                    </div>

                                </Tab.Pane>

                                <Tab.Pane eventKey="three">
                                    <div className="d-flex ">
                                        <div><img src="https://i.ibb.co/yqXmjjD/nilachol.jpg" className="img-fluid w-50 ms-auto"/></div>
                                        <div className="text-start ">
                                            <h3>Nilachol</h3>
                                            <p>Nilachol Nilambori Resort is luxury and deluxe resort located in Nilachol parjaton, Bandarban. It is 3.5 kilometers away from Bandarban city on Dhaka –Bandarban road. This resort offers a friendly, welcoming and relaxing atmosphere for their guest.
                                                 …</p>
                                            <p>4.7 <FcLike/>  <IoIosPeople/>900 people visited</p>
                                        </div>
                                    </div>

                                </Tab.Pane>
                            </Tab.Content>
                        </Col>
                    </Row>
                </Tab.Container>
            </Container>

        </div>
    );
};

export default TopRatedSpots;