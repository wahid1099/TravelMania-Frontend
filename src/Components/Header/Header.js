import React from 'react';
import {Button, Container, Dropdown, Nav, Navbar} from "react-bootstrap";
import {Link} from "react-router-dom";
import UseAuth from "../../Hooks/UseAuth";

import { BsFillPersonFill } from "react-icons/bs";

const Header = () => {
    const { user, logout ,admin} = UseAuth();
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




                               {user.accessToken ?
                                   <Dropdown>
                                       <Dropdown.Toggle variant="success" id="dropdown-basic" className="mt-2">
<BsFillPersonFill className="ms-2 me-2"/>
                                       </Dropdown.Toggle>

                                       <Dropdown.Menu >
                                           {user?.accessToken  &&  <span className="text-primary ms-3"><strong>Hello {user.displayName } </strong> </span>  }

                                           {user?.accessToken  &&     <Dropdown.Item as={Link} to="/dashboard">DashBoard</Dropdown.Item>}

                                           <Nav.Link href="#deets"  className="text-black" as={Link} to="/login"><Button variant="danger" onClick={logout}> Log Out</Button></Nav.Link>
                                       </Dropdown.Menu>

                                   </Dropdown> :

                                   <Link to="/login" className="text-decoration-none text-white"><Button variant="outline-danger" className="btn-sm mt-2">Login</Button></Link>

                               }
                           </Nav>

                       </Navbar.Collapse>
                   </Container>
               </Navbar>
           </Container>
        </div>
    );
};

export default Header;