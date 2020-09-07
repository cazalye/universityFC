import React, { Component } from 'react';
interface Props{
    image: string;
    alt: string;
    link: string;
    title: string;
}
class SliderContainer extends Component <Props, Props> {
    render() {

        return (
        <div  className="post-container">
            <a className="slider-link" href={this.props.link} rel="noopener noreferrer"> 
                <img src={this.props.image} alt={this.props.alt} className="post-image"/>
                <div className="text-container">
                    <h1 className="slider-title">{this.props.title}</h1>
                </div>
            </a>
        </div>
        );
    }
}

export default SliderContainer;
