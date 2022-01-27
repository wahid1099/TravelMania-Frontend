import React, {useEffect, useState} from 'react';
import {Alert, Button, Spinner, Table} from "react-bootstrap";

const ManageBLogs = () => {
    const [allblogs,setAllBLogs]=useState([]);
    const[isLoading,setLoading]=useState(true);
    const [success, setSuccess] = useState(false);
    useEffect(()=>{
        fetch(`https://frozen-woodland-36161.herokuapp.com/allblogs`)
            .then(res=>res.json())
            .then(data=>{
                setAllBLogs(data)
                setLoading(false)
            })
    },[allblogs]);
    console.log(allblogs);
    const handleDelete = (id) => {


        fetch(`https://frozen-woodland-36161.herokuapp.com/deleteblog/${id}`, {
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
                {success && <Alert variant="success" >Blog delete!</Alert>}
                <Table  bordered className="bg-white">
                    <thead>
                    <tr className="bg-white-50">
                        <th>Blog Id</th>
                        <th>User Name</th>
                        <th>User Rating</th>
                        <th>Date & Time</th>
                        <th>BLog Image</th>
                        <th>Blog Description</th>
                        <th>Trip Expense</th>
                        <th>Action</th>



                    </tr>
                    </thead>
                    <tbody>
                    {
                        allblogs.map(allblog=>(  <tr className="bg-white" key={allblog._id}>


                                <td>{allblog._id}</td>
                                <td>{allblog.username}</td>
                                <td>{allblog.rating}</td>
                                <td>{allblog.date} / {allblog.time}</td>
                                <td><img src={allblog.img} style={{height:'36px',width:'36px'}}/></td>

                                <td>{allblog.description}</td>

                                <td>${allblog.expenses}</td>

                                <td><Button variant="outline-danger" type="submit" onClick={()=>handleDelete(allblog._id)}>Delete</Button></td>

                            </tr>
                        ))
                    }


                    </tbody>
                </Table>
            </div>
        </div>
    );
};

export default ManageBLogs;