import React, { Component } from 'react';
import Sponsor from './sponsor';
import '../styles/landing.scss';

class Sponsors extends Component {
    render() {
        return (
            <div className="sponsor-section">
                <a id="sponsors"/>
                <img src="./uni_logo_crop.png" alt="University of Tasmania logo with lion" className="utas-logo-sponsor" width="180px"/>
                
                <h1>UNIVERSITY FOOTBALL CLUB</h1>
                <h3>Home of the Uni Bees</h3>
                <h2>BEE IMAGE</h2>
                
                <div className="sponsors">
                <a href="https://goodsports.com.au/" className="good-sports" rel="noopener noreferrer" target="_blank">
                    <img src="./good-sports.png" width="150px" alt="We are a Good Sports club" className="good-sports-logo"/>
                </a>
                    <h2 className="sponsor-title">
                        Proudly Sponsored By:
                    </h2>
                    <div className="sponsor-container">
                        <Sponsor
                            logo="./allcare_logo.png"
                            alt="All Care Physiotherapy Logo"
                            link="https://allcarephysio.com.au/"
                        />
                        <Sponsor
                            logo="./morgans_logo.png"
                            alt="Morgans Financial Logo"
                            link="https://www.morgans.com.au/hobart"
                        />
                        <Sponsor
                            logo="./spyne_logo.png"
                            alt="Spyne Goalie Gear Logo"
                            link="https://spynegk.com.au/"
                        />
                    </div>
                </div>
                
            </div>
        );
    }
}

export default Sponsors;
