import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import '../styles/heroCarousel.scss';

class SocialCarousel extends Component {
    render() {
        return (
            <div className="social-carousel">
                <Carousel>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src="./social1.jpg"
                        alt=""
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src="./social2.jpg"
                        alt=""
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src="./social3.jpg"
                        alt=""
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src="./social4.jpg"
                        alt=""
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src="./social5.jpg"
                        alt=""
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src="./social6.jpg"
                        alt=""
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src="./social7.jpg"
                        alt=""
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src="./social8.jpg"
                        alt=""
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src="./social9.jpg"
                        alt=""
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src="./social10.jpg"
                        alt=""
                        />
                    </Carousel.Item>
                </Carousel>
            </div>
        );
    }
}

export default SocialCarousel;