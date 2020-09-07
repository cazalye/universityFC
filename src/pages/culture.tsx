import React, { Component } from 'react';
import SolsticeCredit from '../components/solsticeCredit';
import Layout from '../components/layout';


class Culture extends Component {
    render() {
        return (
            <Layout>
            <div className="page-container">
                <a id="culture"/>
                <div className="page-header">
                    <img src="./img/uni_logo_crop.png" alt="University of Tasmania logo with lion" className="utas-logo" width="180px"/>
                    <h1 className="page-title">Club Culture</h1>
                </div>
                <div className="page-banner">
                    <img className="banner-image" src="./img/culture.jpg" alt="We have fun at uni and support each other" />
                    <SolsticeCredit/>
                </div>

                <div className="page-content">
                    <h2 className="social-title">We're a friendly, fun-loving club</h2>
                    <h3 className="social-subtitle"> Come and join us for a kick!</h3>
                    <p className="page-description">While we're a competitive club and love a good win on the weekend, we're also all about having fun, being good sports and fostering inclusivity- on and off the field. Some of our social activities:
                        <ul>
                            <li>Summer Twilight Competition</li>
                            <li>Our famous annual Festival (aka ugly knit pub crawl)</li>
                            <li>Amey's annual curry night</li>
                            <li>Soup nights at training</li>
                            <li>Social Teams</li>
                        </ul>
                    </p>
                       
                </div>
            </div>
            </Layout>
        );
    }
}

export default Culture;