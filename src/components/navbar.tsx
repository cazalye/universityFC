import "../styles/navbar.scss";
import React, { Component } from 'react';
import {Layout, Header, Navigation, Drawer} from 'react-mdl';
// import { Link } from 'gatsby';
import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';




class Navbar extends Component <any, any> {
    hideToggle() {
        const selectorId = document.querySelector('.mdl-layout') as any;
        if (selectorId) {
            selectorId.MaterialLayout.toggleDrawer();
        }
    }
    render() {
        return (
            <Layout>
                <div className="logo-nav">
                    <a href="/">
                        <img className="logo" alt="Uni soccer club logo" src="/uni_soccer_logo.png" width="170px"/> 
                    </a>
                </div>
                <Header transparent title="">
                    <Navigation >
                        <a href="/">Home</a> 
                        <a href="/news">News</a> 
                        <a href="/fixtures/">Fixtures</a> 
                        <a href="/teams/">Teams</a> 
                        <a href="/grounds/">Grounds</a>
                        <a href="/training/">Training</a>
                        <a href="/culture/">Club Culture</a>
                        <a href="/history/">Club History</a>
                        <a href="/contact/">Contact</a>
                        <a href="https://footballfedtas.com.au/" rel="noopener noreferrer" target="_blank">FFT</a> 
                    </Navigation>
                </Header>
                <Drawer title={<a onClick={() => this.hideToggle()} href="/" className="header-title">University of Tasmania Football (Soccer) Club</a> as any}>
                    <Navigation className="drawer-nav" >
                        <a onClick={() => this.hideToggle()} href="/">Home</a> 
                        <a onClick={() => this.hideToggle()} href="/news/">News</a> 
                        <a onClick={() => this.hideToggle()} href="/fixtures/">Fixtures</a> 
                        <a onClick={() => this.hideToggle()} href="/teams/">Teams</a> 
                        <a onClick={() => this.hideToggle()} href="/grounds/">Grounds</a>
                        <a onClick={() => this.hideToggle()} href="/training/">Training</a>
                        <a onClick={() => this.hideToggle()} href="/culture/">Club Culture</a>
                        <a onClick={() => this.hideToggle()} href="/history/">Club History</a>
                        <a onClick={() => this.hideToggle()} href="/contact/">Contact</a>
                        <a onClick={() => this.hideToggle()} href="https://footballfedtas.com.au/" rel="noopener noreferrer" target="_blank">FFT</a> 
                    </Navigation>
                </Drawer>
            </Layout>
        );
    }
}

export default Navbar;
