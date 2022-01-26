import React from 'react';
import { HiFolderAdd,HiUserAdd,HiShoppingCart,HiOutlineAdjustments } from "react-icons/hi";
import UseAuth from "../Hooks/UseAuth";
import {Col, Container, Nav, Navbar, Row} from "react-bootstrap";
import {Link,Outlet} from "react-router-dom";
import { BsFillCartCheckFill ,BsBookmarkCheckFill} from "react-icons/bs";
// import { FaMoneyBill } from "react-icons/fa";
import { BiLike } from "react-icons/bi";



const Dahsboard = () => {

    const dashboardbg={
        background:'#F4F7FC',
        height:'100%',
        width:'100%',
        paddingBottom:'500px'
    }
    const {user,admin}=UseAuth();
    return (
        <div>
            <Row>
                <Col md={3} className="text-start ps-4 mt-4">

                   <h2>Travel Mania</h2>

                    {
                        admin ?
                            <Nav  className="flex-column mt-3">
                                <Link to="/dashboard/manageorder" className="text-decoration-none text-black ps-3 pt-2"><BsFillCartCheckFill/> Manage Orders</Link>
                                <Link to="/dashboard/makeadmin" className="text-decoration-none text-black ps-3 pt-2"><HiUserAdd/> Make Admin</Link>
                                <Link to="/dashboard/addservice" className="text-decoration-none text-black ps-3 pt-2"><HiFolderAdd/> Add Service</Link>
                                <Link to="/dashboard/manageservice" className="text-decoration-none text-black ps-3 pt-2"><HiOutlineAdjustments/> Manage Service</Link>



                            </Nav>

                            :
                            <Nav  className="flex-column mt-3">
                                <Link to="/dashboard/addexperince" className="text-decoration-none text-black ps-3 pt-2"><BiLike/> Add Experience </Link>
                                <Link to="/dashboard/addblog" className="text-decoration-none text-black ps-3 pt-2"><BsBookmarkCheckFill/> Add Blog</Link>




                            </Nav>
                    }

                </Col>
                <Col md={9} >
                    <Navbar>
                        <Container >
                            <h5 className="text-start">Hello {user.displayName}</h5>
                            <Navbar.Toggle />
                            <Navbar.Collapse className="justify-content-end">
                                <Navbar.Text>
                                    <Link to="/" className="text-decoration-none text-black-50">Go back to Home</Link>
                                </Navbar.Text>
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>
                    <Row style={dashboardbg}>
                        <Col md={12}>
                            <h2> Welcome to Dashboard</h2>
                            <Outlet></Outlet>

                        </Col>
                    </Row>


                </Col>
            </Row>
        </div>
    );
};

export default Dahsboard;