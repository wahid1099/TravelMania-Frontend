import React, {useState} from 'react';
import UseAuth from "../../Hooks/UseAuth";
import {Alert, Button, Form, Spinner} from "react-bootstrap";

const AddExperince = () => {
    const {user}=UseAuth();
    const [addingReview,setReviewadded]=useState(false);
    const[userdetails,setUserdetails]=useState('');
    const[success,setSucess]=useState(false);


    const useremail=user.email;
    const username=user.displayName;
    const description=userdetails.description;
    const place=userdetails.place;



    const handleOnBlur=e=>{
        const field=e.target.name;
        const value=e.target.value;
        const newuserdata={...userdetails};
        newuserdata[field]=value;
        setUserdetails(newuserdata);

    }
    const addReview={useremail,username,description,place};
    console.log(addReview);


    const handleAddReview = e => {
        //booking a apartment
        setSucess(false);
        setReviewadded(true);
        fetch('https://frozen-woodland-36161.herokuapp.com/addexperince', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(addReview)
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

                        <Form.Control type="text" placeholder="Enter your experinced place name" className="p-2" name="place"
                                      onBlur={handleOnBlur}/>

                    </Form.Group>
                    <Form.Group className="mb-3 w-50 ms-2" >

                        <Form.Control as="textarea" placeholder="Describe your Experience with us" rows={4} name="description"
                                      onBlur={handleOnBlur}/>
                    </Form.Group>
                    {addingReview  && <Spinner animation="border" />}
                    {success && <Alert variant="success">Experence Added Succesfully</Alert>}
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

export default AddExperince;