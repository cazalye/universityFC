import React, { Component } from 'react';


interface Props{
    logo: string;
    alt: string;
    link: string;
}
class Sponsor extends Component <Props, Props> {
    render() {
        return (
                <div className="sponsor-logo-container">
                <a href={this.props.link} className="sponsor-link" rel="noopener noreferrer" target="_blank">
                    <img src={this.props.logo} alt={this.props.alt} className="sponsor-logo" width="70%" />
                </a>
                </div>
        );
    }
}

export default Sponsor;