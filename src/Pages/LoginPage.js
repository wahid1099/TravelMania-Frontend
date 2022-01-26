import React, {useState} from 'react';
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import {Button, Form, Container, Alert, Spinner} from "react-bootstrap";
import {Link, useLocation,useNavigate} from "react-router-dom";

import { FcGoogle } from "react-icons/fc";
import UseAuth from "../Hooks/UseAuth";

const LoginPage = () => {
    const bgcolor={
        background:"#F5F5F5"
    }

    const [logindata,setLogindata]=useState({});
    const {user, isLoading, autherror, registerUser, loginUser, signInwithGoogle, logout}=UseAuth();
    const location=useLocation();
    let navigate = useNavigate();
    console.log(navigate);






    const handleOnChange=(e)=>{
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = {...logindata};
        newLoginData[field] = value;
        console.log(field,value,newLoginData);
        setLogindata(newLoginData);
    }
    const  handleLoginSubmit=(e)=>{
        loginUser(logindata.email,logindata.password,location,navigate);
        e.preventDefault();
    }

    const handleGoogleSignIn=()=>{
        signInwithGoogle(location,navigate);
    }

    return (
        <div className="text-black">
            <Header />

          <div style={bgcolor} className="p-4">
            <h2 className="mt-5 mb-5">Log in To your Account</h2>

            {/* eslint-disable-next-line react/jsx-no-undef */}
            <Container className="mb-5" >

                <Form onSubmit={handleLoginSubmit} className="mx-auto">
                    <Form.Group className="mb-3 w-50 mx-auto" controlId="formBasicEmail">
                        <h5 className="text-start"> Email address</h5>
                        <Form.Control type="email" placeholder="Enter email" name="email" onChange={handleOnChange} />

                    </Form.Group>

                    <Form.Group className="mb-3 w-50 mx-auto" controlId="formBasicPassword">
                        <h5 className="text-start">Password</h5>
                        <Form.Control type="password" placeholder="Password" name="password" onChange={handleOnChange} />
                    </Form.Group>
                    {autherror && <Alert variant="danger">{autherror}</Alert>}
                    <Button variant="dark" type="submit" className="w-50">
                        LogIn
                    </Button>
                    {isLoading && <Spinner animation="border" />}
                </Form>
                <Button variant="outline-dark" className="mt-4 mb-3 w-50" onClick={handleGoogleSignIn}><FcGoogle/> Continue with Google</Button>
                <h5>Don’t have an account?  <Link to="/singup">Create an account </Link></h5>
            </Container>
            <br/><br/>


</div>
            <Footer/>
        </div>
    );
};

export default LoginPage;