import React, { Component } from 'react';
import Sponsor from './sponsor';
import '../styles/landing.scss';

class Sponsors extends Component {
    render() {
        return (
            <div className="sponsor-section">
                <a id="sponsors"/>
                <div className="uni-title">
                    <img src="./uni_logo_crop.png" alt="University of Tasmania logo with lion" className="utas-logo-sponsor" width="180px"/>
                    <h1>University of Tasmania Football (Soccer) Club</h1>
                </div>
                {/* <h4>Home of the Uni Bees</h4> */}
                {/* <img className="uni-bee" src="./bee.jpg" alt="bee" width="20%"/> */}

                <div className="sponsors">
                    <div className="sponsor-container">
                        <a href="https://goodsports.com.au/" className="good-sports" rel="noopener noreferrer" target="_blank">
                            <img src="./good-sports.png" width="220px" alt="We are a Good Sports club" className="good-sports-logo"/>
                        </a>
                        <div className="tas-gov-logo">
                            <img src="./tasgovlogo.jpg" alt="Supported by Tasmanian Government" width="220px"/>
                        </div>
                    
                        {/* <h2 className="sponsor-title">
                            Proudly Sponsored By:
                        </h2> */}
                    </div>

                    <div className="sponsor-container">
                        <div className="sponsor-logo-container">
                            <a href="https://allcarephysio.com.au/" className="" rel="noopener noreferrer" target="_blank">
                                <img src="./allcare_logo.png" alt="All Care Physiotherapy Logo" className="" width="220px" />
                            </a>
                        </div>
                        <div className="sponsor-logo-container">
                            <a href="https://www.morgans.com.au/hobart" className="" rel="noopener noreferrer" target="_blank">
                                <img src="./morgans_logo.png" alt="Morgans Financial Logo" className="" width="220px" />
                            </a>
                        </div>
                        <div className="sponsor-logo-container">
                            <a href="https://spynegk.com.au/" className="" rel="noopener noreferrer" target="_blank">
                                <img src="./spyne_logo.png" alt="Spyne Goalie Gear Logo" className="" width="220px" />
                            </a>
                        </div>



                        {/* <Sponsor
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
                        /> */}
                    </div>
                </div>
                
            </div>
        );
    }
}

export default Sponsors;
