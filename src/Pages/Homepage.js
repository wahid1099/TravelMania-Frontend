import React from 'react';
import Header from "../Components/Header/Header";
import TopBanner from "../Components/TopBanner/TopBanner";
import Slider from "../Components/Slider/Slider";
import Footer from "../Components/Footer/Footer";
import EmailSubscribe from "../Components/EmailSubscribe/EmailSubscribe";
import TopRatedSpots from "../Components/TopRatedSopts/TopRatedSpots";
import BlogsPost from "../Components/Blogs/BlogsPost";
import Trips from "../Components/Trips/Trips";
import UserExperinces from "../Components/UserExperince/UserExperinces";

const Homepage = () => {

    return (
        <div>
            <TopBanner/>
            <TopRatedSpots/>

            <Slider/>
            <Trips/>
            <BlogsPost/>
          <UserExperinces/>
            <EmailSubscribe/>
            <Footer/>
        </div>
    );
};

export default Homepage;