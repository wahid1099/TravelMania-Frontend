import React, {useState} from 'react';
import UseAuth from "../../Hooks/UseAuth";
import {Alert, Button, Form, Spinner} from "react-bootstrap";

const AddTripSite = () => {
    const {user}=UseAuth();
    const [addingReview,setReviewadded]=useState(false);
    const[userdetails,setUserdetails]=useState('');
    const[success,setSucess]=useState(false);



    const tourname=userdetails.tourname;
    const description=userdetails.description;
    const rating=userdetails.rating;
    const location=userdetails.location;
    const img=userdetails.img;
    const category=userdetails.category;
    const expenses=userdetails.expenses;
// const place=userdetails.place;



    const handleOnBlur=e=>{
        const field=e.target.name;
        const value=e.target.value;
        const newuserdata={...userdetails};
        newuserdata[field]=value;
        setUserdetails(newuserdata);

    }
    const addtrip={tourname,description,rating,img,location,category,expenses};
    console.log(addtrip);


    const handleAddReview = e => {
        //booking a apartment
        setSucess(false);
        setReviewadded(true);
        fetch('https://frozen-woodland-36161.herokuapp.com/addtour', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(addtrip)
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
                <h2 className="mt-2 mb-5">Add Trip sites</h2>
                <Form onSubmit={handleAddReview}>
                    <Form.Group className="mb-3 w-50 ms-2" >
                        <Form.Control type="text" placeholder="Enter Tour Site Name" className="p-2" name="tourname"  onBlur={handleOnBlur}/>
                    </Form.Group>

                    <Form.Group className="mb-3 w-50 ms-2" >
                        <Form.Control type="text" placeholder="Enter Image Link" className="p-2" name="img"
                                      onBlur={handleOnBlur}/>
                    </Form.Group>

                    <Form.Group className="mb-3 w-50 ms-2" >
                        <Form.Control type="number" placeholder="Tour Rating" className="p-2" name="rating"
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
                        <Form.Control type="text" placeholder="Trip Category" className="p-2" name="category"
                                      onBlur={handleOnBlur}/>
                    </Form.Group>


                    <Form.Group className="mb-3 w-50 ms-2" >
                        <Form.Control as="textarea" placeholder="Trip Description" rows={4} name="description"
                                      onBlur={handleOnBlur}/>
                    </Form.Group>
                    {addingReview  && <Spinner animation="border" />}
                    {success && <Alert variant="success">Trip Added Succesfully</Alert>}
                    <div className="mt-2 ps-2 pb-5 text-start">
                        <Button  variant="danger" type="submit" >
                            Add Tour
                        </Button>
                    </div>
                </Form>

            </div>
        </div>
    );
};

export default AddTripSite;