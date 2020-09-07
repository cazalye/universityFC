import React, { Component } from 'react';

interface Props{
    image: string;
    alt: string;
    teamName: string;
    description: string;

    // GALLERY LINKS to SOLSTICE
}
class Team extends Component <Props, Props> {
    render() {
        return (
            <div className="page-content-teams">
                <h4 className="team-name">{this.props.teamName}</h4>
                <p>{this.props.description}</p>
                <img src={this.props.image} alt={this.props.alt} className="team-image" width="80%"/>
            </div>
        );
    }
}

export default Team;