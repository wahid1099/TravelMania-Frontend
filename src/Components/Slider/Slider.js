import React from 'react';
import {Carousel, Container} from "react-bootstrap";

const Slider = () => {
    return (
        <div>

            <Carousel fade>
                <Carousel.Item>
                    <img
                        className=" w-100 img-fluid"
                        src="https://i.ibb.co/BzSNPcB/px-beach-daylight-fun-1430675-image.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption>

                        <p>Visit sea beaches and spend your weekends.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>



                    <img
                        className="img-fluid w-100"
                        src="https://i.ibb.co/mCYNmsY/landscape1344620.jpg"
                        alt="Second slide"
                    />

                    <Carousel.Caption>

                        <p>Travel and explore the nautre beuty</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="img-fluid w-100"
                        src="https://i.ibb.co/7n4S3jt/032.jpg"
                        alt="Third slide"
                    />

                    <Carousel.Caption>

                        <p>Mountains climb wolrd longest mountains</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

        </div>
    );
};

export default Slider;