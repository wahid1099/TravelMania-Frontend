import React from 'react';
import {Button, Card, Col, Image, Row} from "react-bootstrap";
import {Link} from "react-router-dom";

const Blogs = ({ posts, loading }) => {
    return (
        <div >

                <Row xs={1} md={4} className="g-4 pt-4 pb-5">



                {posts.map(post => (

                    <Col key={post._id}>
                        <Card>
                            <Image variant="top" src={post.img} className="img-fluid " style={{height:180}} />
                            <Card.Body>
                                <Card.Title>Blog Author: {post.username }</Card.Title>
                                <p className="text-sm ">Date : {post.date}</p>
                                <Card.Text>
                    <Link to={`/blog/${post._id}`} className="text-decoration-none"><Button variant="primary">View BLog</Button></Link>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>


                ))}


                </Row>
        </div>
    );
};

export default Blogs;