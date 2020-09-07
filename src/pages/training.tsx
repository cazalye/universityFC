import React, { Component } from 'react';
import {Grid, Cell} from 'react-mdl';
import '../styles/pages.scss';
import SolsticeCredit from '../components/solsticeCredit';
import Layout from '../components/layout';

export default class Training extends Component {
    render() {
        return (
            <Layout>
            <div className="page-container">
            <a id="training"/>
            <div className="page-header">
                <img src="./img/uni_logo_crop.png" alt="University of Tasmania logo with lion" className="utas-logo" width="180px"/>
                <h1 className="page-title">Training</h1>
            </div>

            <div className="page-banner">
                <img className="banner-image" src="./img/train.jpg" alt="Our uni women's keeper showing her skills from training" />
                <SolsticeCredit/>
            </div>
            <Grid className="page-content">
                <h2 className="page-subtitle">We train at Olinda Grove (The Hive ) in Mt. Nelson</h2>
                <h3 className="social-subtitle"> Come and join us for a kick!</h3>
                <Cell col={6} offsetTablet={1} className="left-col">
                    <h4 className="team-name">Women's Training</h4>
                    {/* <hr className="training-hr"/> */}
                    <p className="training-time">6.15-8pm Tuesdays & Thursdays <br/> Olinda Grove 3 (bottom field)</p>
                    <img src="./img/womensCap.jpg" alt="Our senior women's captain" className="left-img"/>
                    <p className="captain-img-caption">Olivia Young, our senior women's captain</p>
                </Cell>
                <Cell col={6} offsetTablet={1} className="right-col">
                    <h4 className="team-name">Men's Training</h4>
                    {/* <hr className="training-hr"/> */}
                    <p className="training-time">6.30-8pm Tuesdays & Thursdays <br/> Olinda Grove 1 (top field)</p>
                    <img src="./img/mensCap.jpg" alt="Our senior men's captain" className="right-img"/>
                    <p className="captain-img-caption">Toby MacGregor, our senior men's captain</p>

                </Cell>
            </Grid>
            
        </div>
        </Layout>
        )
    }
}
