import React, {useEffect, useState} from 'react';
import {Card, Col, Container, Image, Row, Spinner} from "react-bootstrap";

import { BsFillPersonFill } from "react-icons/bs";

const UserExperinces = () => {
    const [userexperince,setuserExp]=useState([]);
    const[loading,setLoaded]=useState(true);

    useEffect(()=>{
        fetch('https://frozen-woodland-36161.herokuapp.com/allexperince')
            .then(res=>res.json())
            .then(data=>{
                setuserExp(data)
                setLoaded(false)
            })
    },[userexperince])
    if(loading){
        return <Spinner animation="border"/>
    }


    return (
        <div>
            <Container className="pt-5 pb-5">
              <h2>User Experinces</h2>
                <Row xs={1} md={3} className="g-4 pt-5 pb-5">
                    {userexperince.map(exp=>(<Col key={exp._id}>
                            <Card>

                                <Card.Body>
                                    <BsFillPersonFill style={{height:50,width:50}}/>
                                    <Card.Title>Customer: {exp.username}</Card.Title>
                                    <Card.Text>
                                        <div >
                                            <p><b>Experince:</b> {exp.description.slice(0,150)}</p>
                                            <p>Location: {exp.place}</p>

                                        </div>

                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>

                    ))}
                </Row>
            </Container>

        </div>
    );
};

export default UserExperinces;