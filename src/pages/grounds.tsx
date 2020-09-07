import React, { Component } from 'react';
import '../styles/pages.scss';
import SolsticeCredit from '../components/solsticeCredit';
import Layout from '../components/layout';

export default class Grounds extends Component {
    render() {
        return (
            <Layout>
            <div className="page-container">
            <a id="grounds"/>
            <div className="page-header">
                <img src="./img/uni_logo_crop.png" alt="University of Tasmania logo with lion" className="utas-logo" width="180px"/>
                <h1 className="page-title">Grounds</h1>
            </div>
            <div className="page-banner">
                <img className="banner-image" src="./img/olinda.jpg" alt="One of our senior men taking a throw in at our home ground Olinda Grove" />
                <SolsticeCredit/>
            </div>
            <div className="page-content">
                <h2>Olinda Grove - The Hive</h2>
                <p className="page-description">Our home grounds located in Olinda Grove Mount Nelson are fondly dubbed 'The Hive' as the home of the Uni Bees. Here, we have three grounds where we train on Tuesdays and Thursdays. <hr/>We have clubrooms with showers and an upstairs indoor/outdoor bar and kiosk area- a great spot to watch our home games.</p>
            </div>
        </div>
        </Layout>
        )
    }
}
