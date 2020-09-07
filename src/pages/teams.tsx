import React, { Component } from 'react';
import Team from '../components/team';
import '../styles/pages.scss';
import SolsticeCredit from '../components/solsticeCredit';
import Layout from '../components/layout';

export default class Teams extends Component {
    render() {
        return (
            <Layout>
            <div className="page-container">
                <a id="teams"/>
                <div className="page-header">
                    <img src="./img/uni_logo_crop.png" alt="University of Tasmania logo with lion" className="utas-logo" width="180px"/>
                    <h1 className="page-title">Teams</h1>
                </div>
                <div className="page-banner">
                    <img className="banner-image" src="./img/teams.jpg" alt="Our women's team celebrating their 2019 victory"/>
                    <SolsticeCredit/>
                </div>
                <div className="team-container">
                    <Team
                    image="./img/wsl.jpg"
                    alt="Women's Super League"
                    teamName="Women's Super League"
                    description="Senior women's team"
                    />
                    <Team
                    image="./img/ressies.jpg"
                    alt="Women's Championship team"
                    teamName="Women's Championship"
                    description="Senior women's reserve team"
                    />
                    <Team
                    image="./img/soccerball.png"
                    alt=""
                    teamName="Women's Championship 2"
                    description="Social women's team"
                    />
                    <Team
                    image="./img/soccerball.png"
                    alt=""
                    teamName="Mens Championship"
                    description="Senior men's team"
                    />
                    <Team
                    image="./img/soccerball.png"
                    alt=""
                    teamName="Mens Championship 1"
                    description="Senior men's reserve team"
                    />
                    <Team
                    image="./img/soccerball.png"
                    alt=""
                    teamName="Social: University Dynamo"
                    description="One of our three men's social teams, competing in Championship 3"
                    />
                    <Team
                    image="./img/soccerball.png"
                    alt=""
                    teamName="Social: University Bees"
                    description="One of our three men's social teams, competing in Championship 4"
                    />
                    <Team
                    image="./img/soccerball.png"
                    alt=""
                    teamName="Social: University Wanderers"
                    description="One of our three men's social teams, competing in Championship 5"
                    />
                </div>
            </div>
        </Layout>
        )
    }
}
