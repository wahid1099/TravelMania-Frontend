import React, {useEffect, useState} from 'react';
import {Alert, Button, Spinner, Table} from "react-bootstrap";

const ManageAlltripssites = () => {
    const [alltourssite,setAlltoursite]=useState([]);
    const[isLoading,setLoading]=useState(true);
    const [success, setSuccess] = useState(false);
    useEffect(()=>{
        fetch(`https://frozen-woodland-36161.herokuapp.com/alltours`)
            .then(res=>res.json())
            .then(data=>{
                setAlltoursite(data)
                setLoading(false)
            })
    },[alltourssite]);
    console.log(alltourssite);
    const handleDelete = (id) => {


        fetch(`https://frozen-woodland-36161.herokuapp.com/deletetour/${id}`, {
            method: "DELETE",
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.deletedCount) {

                    setSuccess(true);
                }
            });

    };
    if(isLoading){
        return <Spinner animation="border"/>
    }
    return (
        <div>
            <div data-aos="zoom-in">
                <h2>Manage Services</h2>
                {success && <Alert variant="success" >Experince deleted!</Alert>}
                <Table  bordered className="bg-white">
                    <thead>
                    <tr className="bg-white-50">
                        <th>Trip Id</th>
                        <th>Trip Name</th>
                        <th>Trip Rating</th>


                        <th>Trip Description</th>
                        <th>Trip Location</th>
                        <th>Trip Category</th>
                        <th>Trip Expense</th>
                        <th>Action</th>



                    </tr>
                    </thead>
                    <tbody>
                    {
                        alltourssite.map(alltours=>(  <tr className="bg-white" key={alltours._id}>


                                <td>{alltours._id}</td>
                                <td>{alltours.tourname}</td>
                                <td>{alltours.rating}</td>

                                <td>{alltours.description}</td>

                                <td>{alltours.location}</td>
                                <td>{alltours.category}</td>
                                <td>{alltours.expenses}</td>

                                <td><Button variant="outline-danger" type="submit" onClick={()=>handleDelete(alltours._id)}>Delete</Button></td>

                            </tr>
                        ))
                    }


                    </tbody>
                </Table>
            </div>
            
        </div>
    );
};

export default ManageAlltripssites;