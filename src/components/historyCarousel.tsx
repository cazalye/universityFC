import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';

class HistoryCarousel extends Component {
    render() {
        return (
            <div className="social-carousel">
                <h6 className="carousel-subtitle">University through the ages</h6>
                <Carousel>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src="./history1.jpg"
                        alt="1900 Trinity Team"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src="./history2.jpg"
                        alt="1950 First Team"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src="./history3.jpg"
                        alt="1969 First Team"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src="./history4.jpg"
                        alt="1975 First Team"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src="./history5.jpg"
                        alt="1978 Pre Season"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src="./history6.jpg"
                        alt="1982 First Team"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src="./history7.jpg"
                        alt="1990 First Team"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src="./history8.jpg"
                        alt="1990 Women Div2"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src="./history9.jpg"
                        alt="1992 Firsts"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src="./history10.jpg"
                        alt="1993 Uni Yellow"
                        />
                    </Carousel.Item>
                </Carousel>
            </div>
        );
    }
}

export default HistoryCarousel;