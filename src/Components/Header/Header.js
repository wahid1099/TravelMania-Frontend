import React from 'react';
import {Button, Container, Nav, Navbar} from "react-bootstrap";
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <div>
           <Container>
               <Navbar  expand="lg">
                   <Container fluid>
                       <Navbar.Brand className="text-black-50">

                           <Link to="/" className="text-black-50 text-decoration-none pt-2 pe-3">
                           Travel Mania
                           </Link></Navbar.Brand>
                       <Navbar.Toggle aria-controls="navbarScroll" />
                       <Navbar.Collapse id="navbarScroll">
                           <Nav className="ms-auto text-white">
                               <Link to="/" className="text-black-50 text-decoration-none pt-2 pe-3">Home</Link>
                               <Link to="/" className="text-black-50 text-decoration-none pt-2 pe-3">About</Link>
                               <Link to="/" className="text-black-50 text-decoration-none pt-2 pe-3">Contact</Link>
                               <Link to="/" className="text-black-50 text-decoration-none pt-2 pe-3">Experince</Link>



                               <Link to="/login" className="text-decoration-none text-white"><Button variant="outline-danger" className="btn-sm mt-2">Login</Button></Link>
                           </Nav>

                       </Navbar.Collapse>
                   </Container>
               </Navbar>
           </Container>
        </div>
    );
};

export default Header;