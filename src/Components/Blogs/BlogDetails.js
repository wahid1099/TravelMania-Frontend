import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import {Container, Spinner} from "react-bootstrap";
import Rating from "react-rating";

const BlogDetails = () => {
    const [blogdetals,setBLogdetails]=useState({ });
    const [isLoading,setLoading]=useState(true);
    const {blogId}=useParams();
    useEffect(()=>{
        fetch(`https://frozen-woodland-36161.herokuapp.com/blogdetails/${blogId}`)
            .then(res=>res.json())
            .then(data=>{
                setBLogdetails(data)
                setLoading(false)
            })
    },[blogdetals]);
    if(isLoading){
        return <Spinner animation="border"/>
    }
    return (
        <div >
            <Header/>
            <div data-aos="zoom-in">
            <h2 className="pt-4 pb-4">Blog Details</h2>
            <Container>
                <img src={blogdetals.img} className="w-100 img-fluid" style={{height:350}}/>
                <h5 className="pb-3 pt-4">Author Name : {blogdetals.username}</h5>
                <h6>Rating:<Rating initialRating={blogdetals.rating}
                emptySymbol="far fa-star" fullSymbol="fas fa-star" readonly
                ></Rating>
                </h6>
                <p>Article : {blogdetals.description}</p>
                <h6>Total Cost: ${blogdetals.expenses}</h6>
                <h5>Location:{blogdetals.location}</h5>
                <h6>Date : {blogdetals.date} & Time : {blogdetals.time}</h6>

            </Container>
            </div>

            <Footer/>
            
        </div>
    );
};

export default BlogDetails;