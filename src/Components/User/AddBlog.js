import React, {useState} from 'react';
import UseAuth from "../../Hooks/UseAuth";
import {Alert, Button, Form, Spinner} from "react-bootstrap";

const AddBlog = () => {

    const {user}=UseAuth();
    const [addingReview,setReviewadded]=useState(false);
    const[userdetails,setUserdetails]=useState('');
    const[success,setSucess]=useState(false);


    const useremail=user.email;
    const username=user.displayName;
    const description=userdetails.description;
    const rating=userdetails.rating;
    const location=userdetails.location;
    const img=userdetails.img;
    const date=userdetails.date;
    const time=userdetails.time;
    const expenses=userdetails.expenses;
   // const place=userdetails.place;



    const handleOnBlur=e=>{
        const field=e.target.name;
        const value=e.target.value;
        const newuserdata={...userdetails};
        newuserdata[field]=value;
        setUserdetails(newuserdata);

    }
    const addBlog={useremail,username,description,rating,img,location,date,time,expenses};
    console.log(addBlog);


    const handleAddReview = e => {
        //booking a apartment
        setSucess(false);
        setReviewadded(true);
        fetch('https://murmuring-tor-75574.herokuapp.com/addReview', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(addBlog)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    setSucess(true);
                    setReviewadded(false);
                    e.target.reset();
                }
            })


        e.preventDefault();
    }

    return (
        <div>
            <div data-aos="zoom-in-up">
                <hr/>
                <h2 className="mt-2 mb-5">Share your Experince with us</h2>
                <Form onSubmit={handleAddReview}>
                    <Form.Group className="mb-3 w-50 ms-2" >
                        <Form.Control type="text" placeholder="Enter Name" className="p-2" defaultValue={username}/>
                    </Form.Group>

                    <Form.Group className="mb-3 w-50 ms-2" >
                        <Form.Control type="text" placeholder="Enter Image Link" className="p-2" name="img"
                                      onBlur={handleOnBlur}/>
                    </Form.Group>

                    <Form.Group className="mb-3 w-50 ms-2" >
                        <Form.Control type="number" placeholder="Your Rating" className="p-2" name="rating"
                                      onBlur={handleOnBlur}/>
                    </Form.Group>

                    <Form.Group className="mb-3 w-50 ms-2" >
                        <Form.Control type="text" placeholder="Trip Location" className="p-2" name="location"
                                      onBlur={handleOnBlur}/>
                    </Form.Group>
                    <Form.Group className="mb-3 w-50 ms-2" >
                        <Form.Control type="text" placeholder="Trip Expense" className="p-2" name="expenses"
                                      onBlur={handleOnBlur}/>
                    </Form.Group>
                    <Form.Group className="mb-3 w-50 ms-2" >
                        <Form.Control type="date" placeholder="Enter Trip Date" className="p-2" name="date"
                                      onBlur={handleOnBlur}/>
                    </Form.Group>

                    <Form.Group className="mb-3 w-50 ms-2" >
                        <Form.Control type="time" placeholder="Enter Trip Time" className="p-2" name="time"
                                      onBlur={handleOnBlur}/>
                    </Form.Group>

                    <Form.Group className="mb-3 w-50 ms-2" >
                        <Form.Control as="textarea" placeholder="Trip Description" rows={4} name="description"
                                      onBlur={handleOnBlur}/>
                    </Form.Group>
                    {addingReview  && <Spinner animation="border" />}
                    {success && <Alert variant="success">Review Added Succesfully</Alert>}
                    <div className="mt-2 ps-2 pb-5 text-start">
                        <Button  variant="danger" type="submit" >
                            Add Experince
                        </Button>
                    </div>
                </Form>

            </div>
            
        </div>
    );
};

export default AddBlog;