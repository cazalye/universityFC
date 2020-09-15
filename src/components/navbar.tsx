import "../styles/navbar.scss";
import React, { Component } from 'react';
import {Layout, Header, Navigation, Drawer} from 'react-mdl';
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
                        <Link to="/fixtures">Fixtures</Link> 
                        <Link to="/teams">Teams</Link> 
                        <Link to="/grounds">Grounds</Link>
                        <Link to="/training">Training</Link>
                        <Link to="/culture">Club Culture</Link>
                        <Link to="/history">Club History</Link>
                        <Link to="/#sponsors">Sponsors</Link>
                        <Link to="/contact">Contact</Link>
                        <a href="https://footballfedtas.com.au/" rel="noopener noreferrer" target="_blank">FFT</a> 
                    </Navigation>
                </Header>
                <Drawer title={<Link onClick={() => this.hideToggle()} to="/" className="header-title">University Football Club</Link> as any}>
                    <Navigation className="drawer-nav" >
                        <Link onClick={() => this.hideToggle()} to="/#home">Home</Link> 
                        <Link onClick={() => this.hideToggle()} to="/fixtures">Fixtures</Link> 
                        <Link onClick={() => this.hideToggle()} to="/teams">Teams</Link> 
                        <Link onClick={() => this.hideToggle()} to="/grounds">Grounds</Link>
                        <Link onClick={() => this.hideToggle()} to="/training">Training</Link>
                        <Link onClick={() => this.hideToggle()} to="/culture">Club Culture</Link>
                        <Link onClick={() => this.hideToggle()} to="/history">Club History</Link>
                        <Link onClick={() => this.hideToggle()} to="/#sponsors">Sponsors</Link>
                        <Link onClick={() => this.hideToggle()} to="/contact">Contact</Link>
                        <a onClick={() => this.hideToggle()} href="https://footballfedtas.com.au/" rel="noopener noreferrer" target="_blank">FFT</a> 
                    </Navigation>
                </Drawer>
            </Layout>
        );
    }
}

export default Navbar;