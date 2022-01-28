import React, {useEffect, useState} from 'react';
import {Card, Col, Container, Image, Row, Spinner} from "react-bootstrap";
import Rating from "react-rating";

const Trips = () => {
    const [alltrips,setAlltrips]=useState([]);
    const[loading,setLoaded]=useState(true);

    useEffect(()=>{
        fetch('https://frozen-woodland-36161.herokuapp.com/alltours')
            .then(res=>res.json())
            .then(data=>{
                setAlltrips(data)
                setLoaded(false)
            })
    },[alltrips])
    if(loading){
        return <Spinner animation="border"/>
    }

    return (
        <div>
            <Container>
                <h2 className="mt-5">Our Trips</h2>
            <Row xs={1} md={3} className="g-4 pt-5 pb-5">

                {
                    alltrips.map(alltrip=>(<Col key={alltrip._id}>
                            <Card>
                                <Image variant="top" src={alltrip.img} style={{height:200}} className="img-fluid" />
                                <Card.Body>
                                    <Card.Title>{alltrip.tourname}</Card.Title>
                                    <Card.Text>
                                       <div className="d-flex">
                                           <p>Category: {alltrip.category}</p>
                                           <p className="ms-auto">Location: {alltrip.location}</p>

                                       </div>
                                        <div className="d-flex">
                                            <p className="text-start">Cost:${alltrip.expenses}</p>
                                            <h6 className="ms-auto">Rating: <Rating initialRating={alltrip.rating}
                                                               emptySymbol="far fa-star" fullSymbol="fas fa-star" readonly
                                            ></Rating>
                                            </h6>
                                        </div>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))
                }

            </Row>
            </Container>
            
        </div>
    );
};

export default Trips;