import React, { Component } from 'react';
import '../styles/pages.scss';
import SolsticeCredit from '../components/solsticeCredit';
import {Grid, Cell} from 'react-mdl';
import Layout from '../components/layout';


export default class Fixtures extends Component {
    render() {
        return (
            <Layout>
            <div className="page-container">
                <a id="fixtures"/>
                <div className="page-header">
                    <img src="./img/uni_logo_crop.png" alt="University of Tasmania logo with lion" className="utas-logo" width="180px"/>
                    <h1 className="page-title">Fixtures</h1>
                </div>
                <div className="page-banner">
                    <img className="banner-image" src="./img/fixtures.jpg" alt="Our senior men's player Toby going in for a tackle" />
                    <SolsticeCredit/>
                </div>
                <Grid className="page-content">
                    {/* <h2>The latest on rosters, results and ladders from FFT</h2> */}
                    <Cell col={6} className="left-col">
                        <h3 className="fixtures-subtitle">Men</h3>
                        <hr className="training-hr"/>
                        <h4 className="team-title">Men's Championship</h4>
                        <div className="fft-links">
                            <a href="https://websites.sportstg.com/comp_info.cgi?a=FIXTURE&compID=565044&c=1-8296-0-0-0" className="" rel="noopener noreferrer" target="_blank">Roster</a>
                            <a href="https://websites.sportstg.com/comp_info.cgi?a=ROUND&compID=565044&c=1-8296-0-0-0" className="" rel="noopener noreferrer" target="_blank">Results</a>
                            <a href="https://websites.sportstg.com/comp_info.cgi?a=LADDER&compID=565044&c=1-8296-0-0-0" className="" rel="noopener noreferrer" target="_blank">Ladder</a>
                        </div>
                     
                        <h4 className="team-title">Men's Championship 1</h4>
                        <div className="fft-links">
                        <a href="https://websites.sportstg.com/comp_info.cgi?a=FIXTURE&compID=566349&c=1-8296-0-0-0" className="" rel="noopener noreferrer" target="_blank">Roster</a>
                        <a href="https://websites.sportstg.com/comp_info.cgi?a=ROUND&compID=566349&c=1-8296-0-0-0" className="" rel="noopener noreferrer" target="_blank">Results</a>
                        <a href="https://websites.sportstg.com/comp_info.cgi?c=1-8296-0-566349-0&pool=1&a=LADDER" className="" rel="noopener noreferrer" target="_blank">Ladder</a>
                        </div>
                        
                        <h4 className="team-title">Men's Social: University Dynamo</h4>
                        <div className="fft-links">
                        <a href="https://websites.sportstg.com/comp_info.cgi?a=FIXTURE&compID=566481&c=1-8296-0-0-0" className="" rel="noopener noreferrer" target="_blank">Roster</a>
                        <a href="https://websites.sportstg.com/comp_info.cgi?c=1-8296-0-566481-0&pool=1&round=0&a=ROUND" className="" rel="noopener noreferrer" target="_blank">Results</a>
                        <a href="https://websites.sportstg.com/comp_info.cgi?c=1-8296-0-566481-0&a=LADDER" className="" rel="noopener noreferrer" target="_blank">Ladder</a>
                        </div>

                        <h4 className="team-title">Men's Social: University Bees</h4>
                        <div className="fft-links">
                        <a href="https://websites.sportstg.com/comp_info.cgi?a=FIXTURE&compID=566483&c=1-8296-0-0-0" className="" rel="noopener noreferrer" target="_blank">Roster</a>
                        <a href="https://websites.sportstg.com/comp_info.cgi?c=1-8296-0-566483-0&a=ROUND" className="" rel="noopener noreferrer" target="_blank">Results</a>
                        <a href="https://websites.sportstg.com/comp_info.cgi?c=1-8296-0-566483-0&pool=1&a=LADDER" className="" rel="noopener noreferrer" target="_blank">Ladder</a>
                        </div>

                        <h4 className="team-title">Men's Social: University Wanderers</h4>
                        <div className="fft-links">
                        <a href="https://websites.sportstg.com/comp_info.cgi?a=FIXTURE&compID=566485&c=1-8296-0-0-0" className="" rel="noopener noreferrer" target="_blank">Roster</a>
                        <a href="https://websites.sportstg.com/comp_info.cgi?c=1-8296-0-566485-0&pool=1&round=0&a=ROUND" className="" rel="noopener noreferrer" target="_blank">Results</a>
                        <a href="https://websites.sportstg.com/comp_info.cgi?c=1-8296-0-566485-0&a=LADDER" className="" rel="noopener noreferrer" target="_blank">Ladder</a>
                        </div>    
                    </Cell>
                    <Cell col={6} className="right-col">
                        <h3 className="fixtures-subtitle">Women</h3>
                        <hr className="training-hr"/>
                        <h4 className="team-title">Women's Super League</h4>
                        <div className="fft-links">
                        <a href="https://websites.sportstg.com/comp_info.cgi?a=FIXTURE&compID=564212&c=1-8296-0-0-0" className="" rel="noopener noreferrer" target="_blank">Roster</a>
                        <a href="https://websites.sportstg.com/comp_info.cgi?c=1-8296-0-564212-0&a=ROUND" className="" rel="noopener noreferrer" target="_blank">Results</a>
                        <a href="https://websites.sportstg.com/comp_info.cgi?c=1-8296-0-564212-0&pool=1&a=LADDER" className="" rel="noopener noreferrer" target="_blank">Ladder</a>
                        </div>

                        <h4 className="team-title">Women's Championship</h4>
                        <div className="fft-links">
                        <a href="https://websites.sportstg.com/comp_info.cgi?a=FIXTURE&compID=564211&c=1-8296-0-0-0" className="" rel="noopener noreferrer" target="_blank">Roster</a>
                        <a href="https://websites.sportstg.com/comp_info.cgi?c=1-8296-0-564211-0&pool=1&round=0&a=ROUND" className="" rel="noopener noreferrer" target="_blank">Results</a>
                        <a href="https://websites.sportstg.com/comp_info.cgi?c=1-8296-0-564211-0&a=LADDER" className="" rel="noopener noreferrer" target="_blank">Ladder</a>
                        </div>

                        <h4 className="team-title">Women's Championship 2</h4>
                        <div className="fft-links">
                        <a href="https://websites.sportstg.com/comp_info.cgi?a=FIXTURE&compID=559084&c=1-8296-0-0-0" className="" rel="noopener noreferrer" target="_blank">Roster</a>
                        <a href="https://websites.sportstg.com/comp_info.cgi?c=1-8296-0-559084-0&a=ROUND" className="" rel="noopener noreferrer" target="_blank">Results</a>
                        <a href="https://websites.sportstg.com/comp_info.cgi?c=1-8296-0-559084-0&pool=1&a=LADDER" className="" rel="noopener noreferrer" target="_blank">Ladder</a>
                        </div>
                    </Cell>
                </Grid>
            </div>
            </Layout>
        )
    }
}
