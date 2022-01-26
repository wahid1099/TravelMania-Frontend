import React from 'react';
import {Col, Container, Nav, Row,Tab} from "react-bootstrap";

const TopRatedSpots = () => {
    return (
        <div>
            <h2>Top Rated Spots</h2>
            <Container>
                <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                    <Row>
                        <Col sm={3}>
                            <Nav variant="pills" className="flex-column">
                                <Nav.Item>
                                    <Nav.Link eventKey="first">Tab 1</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">Tab 2</Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Col>
                        <Col sm={9}>
                            <Tab.Content>
                                <Tab.Pane eventKey="first">
                                    <h1>One</h1>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
                                    <h1>two</h1>

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