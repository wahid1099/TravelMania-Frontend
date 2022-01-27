import React, {useEffect, useState} from 'react';
import {Alert, Button, Spinner, Table} from "react-bootstrap";

const ManageExperince = () => {
    const [allexperince,setAllexperience]=useState([]);
    const[isLoading,setLoading]=useState(true);
    const [success, setSuccess] = useState(false);
    useEffect(()=>{
        fetch(`https://frozen-woodland-36161.herokuapp.com/allexperince`)
            .then(res=>res.json())
            .then(data=>{
                setAllexperience(data)
                setLoading(false)
            })
    },[allexperince]);
    console.log(allexperince);
    const handleDelete = (id) => {


        fetch(`https://frozen-woodland-36161.herokuapp.com/deletexperince/${id}`, {
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
                        <th>Blog Id</th>
                        <th>User Name</th>
                        <th>User Email</th>

                        <th>Experince Description</th>
                        <th>Trip place</th>
                        <th>Action</th>



                    </tr>
                    </thead>
                    <tbody>
                    {
                        allexperince.map(allexp=>(  <tr className="bg-white" key={allexp._id}>


                                <td>{allexp._id}</td>
                                <td>{allexp.username}</td>
                                <td>{allexp.useremail}</td>

                                <td>{allexp.description}</td>

                                <td>{allexp.place}</td>

                                <td><Button variant="outline-danger" type="submit" onClick={()=>handleDelete(allexp._id)}>Delete</Button></td>

                            </tr>
                        ))
                    }


                    </tbody>
                </Table>
            </div>
        </div>
    );
};

export default ManageExperince;