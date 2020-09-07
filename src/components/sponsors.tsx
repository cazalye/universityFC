import React, { Component } from 'react';
import Sponsor from './sponsor';
import '../styles/landing.scss';

class Sponsors extends Component {
    render() {
        return (
            <div className="sponsor-section">
                <a id="sponsors"/>
                <img src="./img/uni_logo_crop.png" alt="University of Tasmania logo with lion" className="utas-logo-sponsor" width="180px"/>
                <h1>SOCCER CLUB</h1>
                <a href="https://goodsports.com.au/" className="good-sports" rel="noopener noreferrer" target="_blank">
                    <img src="./img/good-sports.png" width="250px" alt="We are a Good Sports club" className="good-sports-logo"/>
                </a>
                <div className="sponsors">
                    <h2 className="sponsor-title">
                        Proudly Sponsored By
                    </h2>
                    <div className="sponsor-container">
                        <Sponsor
                            logo="./img/allcare_logo.png"
                            alt="All Care Physiotherapy Logo"
                            link="https://allcarephysio.com.au/"
                        />
                        <Sponsor
                            logo="./img/morgans_logo.png"
                            alt="Morgans Financial Logo"
                            link="https://www.morgans.com.au/hobart"
                        />
                        <Sponsor
                            logo="./img/spyne_logo.png"
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
