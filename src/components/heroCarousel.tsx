import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import '../styles/heroCarousel.scss';

class HeroCarousel extends Component {
    render() {
        return (
            <div className="carousel-container">
                <Carousel>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src="./img/hero1.jpg"
                        alt="Women's team celebrating the end of 2019 season"
                        />
                        <Carousel.Caption>
                        <h3>Senior women celebrating the 2019 season</h3>
                        <p>Images courtesy of 
                            <a href="https://photos.solsticedigital.com.au" rel="noopener noreferrer" target="_blank">
                                <strong>Solstice Digital.</strong>
                            </a>
                            For more action shots of University players 
                            <a href="https://photos.solsticedigital.com.au/gallery/UTASSoccer/" rel="noopener noreferrer" target="_blank"> <strong> click here.</strong>
                            </a>
                        </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src="./img/hero2.jpg"
                        alt="Men's team in action"
                        />
                        <Carousel.Caption>
                        <h3>Senior men in action</h3>
                        <p>Images courtesy of 
                            <a href="https://photos.solsticedigital.com.au" rel="noopener noreferrer" target="_blank">
                                <strong>Solstice Digital.</strong>
                            </a>
                            For more action shots of University players 
                            <a href="https://photos.solsticedigital.com.au/gallery/UTASSoccer/" rel="noopener noreferrer" target="_blank"> <strong>click here.</strong>
                            </a>
                        </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src="./img/hero3.jpg"
                        alt="Our senior women's team in action"
                        />

                        <Carousel.Caption>
                        <h3>Senior women in action</h3>
                        <p>Images courtesy of 
                            <a href="https://photos.solsticedigital.com.au" rel="noopener noreferrer" target="_blank">
                                <strong>Solstice Digital.</strong>
                            </a>
                            For more action shots of University players 
                            <a href="https://photos.solsticedigital.com.au/gallery/UTASSoccer/" rel="noopener noreferrer" target="_blank"> <strong>click here.</strong>
                            </a>
                        </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src="./img/hero4.jpg"
                        alt="Our senior men's team in action"
                        />
                        <Carousel.Caption>
                        <h3>Senior men in action</h3>
                        <p>Images courtesy of 
                            <a href="https://photos.solsticedigital.com.au" rel="noopener noreferrer" target="_blank">
                                <strong>Solstice Digital.</strong>
                            </a>
                            For more action shots of University players 
                            <a href="https://photos.solsticedigital.com.au/gallery/UTASSoccer/" rel="noopener noreferrer" target="_blank"> <strong>click here.</strong>
                            </a>
                        </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
        );
    }
}

export default HeroCarousel;