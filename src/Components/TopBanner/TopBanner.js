import React from 'react';
import Header from "../Header/Header";
import {Button} from "react-bootstrap";

const TopBanner = () => {
    const topbannerbg={
        background:"url('https://i.ibb.co/MnJLdN2/Rectangle-1.png')",
        backgroundSize:"cover",
        paddingBottom:"300px",
        color:"#fff"
    }

    return (
        <div style={topbannerbg}>
            <Header/>
            <div data-aos="zoom-in-up">
            <h1  style={{paddingTop:150,fontSize:44}}>Travel to any corner of <br/>the world</h1>
            <h6 className="pt-2">Feeling cool like your favourite place</h6>

            <Button variant="warning" className="mt-3 text-white">Explore World </Button>
            </div>
        </div>
    );
};

export default TopBanner;