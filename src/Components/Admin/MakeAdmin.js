import React, {useState} from 'react';
import UseAuth from "../../Hooks/UseAuth";
import {Alert, Button, Form, Spinner} from "react-bootstrap";

const MakeAdmin = () => {
    const makeadminbg={
        background:'#fff',
        paddingBottom:'250px',
        borderRadius:'10px'
    }
    const[isLoading,setLoading]=useState(false);
    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState(false);
    const { token } = UseAuth();

    const handleOnBlur = e => {
        setEmail(e.target.value);

    }

    const handleAdminSubmit = e => {
        const user = { email };
        setLoading(true);

        fetch('https://frozen-woodland-36161.herokuapp.com/users/admin', {
            method: 'PUT',
            headers: {
                'authorization': `Bearer ${token}`,
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    console.log(data);
                    setLoading(false);
                    setSuccess(true);
                }
            })

        e.preventDefault()
    }


    return (
        <div data-aos="fade-left">
            <h2>Make Admin</h2>
            <div className="bg-white pt-2 " style={makeadminbg} >
                <Form onSubmit={handleAdminSubmit}>
                    <Form.Group className="mb-3 w-50 ps-3 pt-2" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email"  onBlur={handleOnBlur}/>

                    </Form.Group>
                    {success && <Alert variant="success">Made Admin successfully!</Alert>}
                    {isLoading && <Spinner animation="border"/>}
                    <div className="text-start pt-1 ps-3">
                        <Button variant='success' type='submit' >Make Admin</Button>

                    </div>

                </Form>
            </div>
        </div>
    );
};

export default MakeAdmin;