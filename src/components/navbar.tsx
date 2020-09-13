import "../styles/navbar.scss";
import React, { Component } from 'react';
import {Layout, Header, Navigation, Drawer} from 'react-mdl';
// import { HashLink as Link } from 'react-router-hash-link';
import { Link } from 'gatsby';

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
                    <Link to="/#home">
                        <img className="logo" alt="Uni soccer club logo" src="./uni_soccer_logo.png" width="170px"/> 
                    </Link>
                </div>
                <Header transparent title="">
                    <Navigation >
                        <Link to="/#home">Home</Link> 
                        <Link to="/fixtures#fixtures">Fixtures</Link> 
                        <Link to="/teams#teams">Teams</Link> 
                        <Link to="/grounds#grounds">Grounds</Link>
                        <Link to="/training#training">Training</Link>
                        <Link to="/culture#culture">Club Culture</Link>
                        <Link to="/#sponsors">Sponsors</Link>
                        <Link to="/contact#contact">Contact</Link>
                        <a href="https://footballfedtas.com.au/" rel="noopener noreferrer" target="_blank">FFT</a> 
                    </Navigation>
                </Header>
                <Drawer title={<Link onClick={() => this.hideToggle()} to="/" className="header-title">University Football Club</Link> as any}>
                    <Navigation className="drawer-nav" >
                        <Link onClick={() => this.hideToggle()} to="/#home">Home</Link> 
                        <Link onClick={() => this.hideToggle()} to="/fixtures#fixtures">Fixtures</Link> 
                        <Link onClick={() => this.hideToggle()} to="/teams#teams">Teams</Link> 
                        <Link onClick={() => this.hideToggle()} to="/grounds#grounds">Grounds</Link>
                        <Link onClick={() => this.hideToggle()} to="/training#training">Training</Link>
                        <Link onClick={() => this.hideToggle()} to="/culture#culture">Club Culture</Link>
                        <Link onClick={() => this.hideToggle()} to="/#sponsors">Sponsors</Link>
                        <Link onClick={() => this.hideToggle()} to="/contact#contact">Contact</Link>
                        <a onClick={() => this.hideToggle()} href="https://footballfedtas.com.au/" rel="noopener noreferrer" target="_blank">FFT</a> 
                    </Navigation>
                </Drawer>
            </Layout>
        );
    }
}

export default Navbar;