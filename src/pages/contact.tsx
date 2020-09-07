import React, { Component } from 'react';
import SolsticeCredit from '../components/solsticeCredit';
import Layout from '../components/layout';

class Contact extends Component {
    render() {
        return (
            <Layout>
            <div className="page-container">
                <a id="contact"/>
            <div className="page-header">
                <img src="./img/uni_logo_crop.png" alt="University of Tasmania logo with lion" className="utas-logo" width="180px"/>
                <h1 className="page-title">Contact</h1>
            </div>
            <div className="page-banner">
                <img className="banner-image" src="./img/contact.jpg" alt="Our club secretary Toby" />
                <SolsticeCredit/>
            </div>
            <div className="page-content">
                <h2>Contact Us</h2>
                <h4 className="contact-name"><strong>Rowan Dix</strong> – Chairperson 
                    <a href="mailto: utassc.chairperson@gmail.com" target="_blank" rel="noopener noreferrer"> utassc.chairperson@gmail.com </a>
                </h4>
                <h4 className="contact-name"><strong>Ben Sanderson </strong>– Vice-Chairperson
                    <a href="mailto: utassc.vicechair@gmail.com" target="_blank" rel="noopener noreferrer"> utassc.vicechair@gmail.com </a>
                </h4>
                <h4 className="contact-name"><strong>Toby MacGregor</strong> – Secretary
                    <a href="mailto: utassc.secretary@gmail.com" target="_blank" rel="noopener noreferrer"> utassc.secretary@gmail.com </a>
                </h4>
                <h4  className="contact-name"><strong>General Information</strong>
                    <a href="mailto: utas.soccer@gmail.com" target="_blank" rel="noopener noreferrer"> utas.soccer@gmail.com</a>
                </h4>
            </div>
        </div>
        </Layout>
        );
    }
}

export default Contact;