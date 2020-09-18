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
                        src="/social1.jpg"
                        alt="Celebrating awards night"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src="/social2.jpg"
                        alt="Celebrating awards night"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src="/social3.jpg"
                        alt="Pregame huddle"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src="/social4.jpg"
                        alt="Bus trip to Ulverstone"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src="/social5.jpg"
                        alt="Celebrating the season win"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src="/social6.jpg"
                        alt="A muddy night game"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src="/social7.jpg"
                        alt="Bus trip to Ulverstone"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src="/social8.jpg"
                        alt="Festival Pub Crawl"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src="/social9.jpg"
                        alt="Celebrating a win"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src="/social10.jpg"
                        alt="A successful season"
                        />
                    </Carousel.Item>
                </Carousel>
            </div>
        );
    }
}

export default SocialCarousel;