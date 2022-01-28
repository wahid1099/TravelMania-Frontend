import React, {useEffect, useState} from 'react';
import Blogs from "./Blogs";
import Pagination from "./Pagination";
import {Container, Spinner} from "react-bootstrap";

const BlogsPost = () => {
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(10);


        useEffect(()=>{

            fetch('https://frozen-woodland-36161.herokuapp.com/allblogs')
                .then(res=>res.json())
                .then(data=>{
                    setBlogs(data)
                    setLoading(false)
                })
        },[blogs])



    // Get current posts
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = blogs.slice(indexOfFirstPost, indexOfLastPost);

    // Change page
    const paginate = pageNumber => setCurrentPage(pageNumber);

if(loading){
     return <Spinner animation="border"/>
}
    return (
        <div>
        <div data-aos="fade-up">
            <Container className="pt-5 pb-5">
            <h1 className='text-primary mb-3'>All Blog Post By our Customers</h1>
            <Blogs posts={currentPosts} loading={loading} ></Blogs>

            <Pagination  postsPerPage={postsPerPage}
                         totalPosts={blogs.length}
                         paginate={paginate}></Pagination>

            </Container>
        </div>
        </div>
    );
};

export default BlogsPost;