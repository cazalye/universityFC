
import React, { Component } from 'react';
import "../styles/featureSlider.scss";
import SliderContainer from "./sliderContainer";


interface SliderState {
    leftArrowClass: "disabled-arrow" | "";
    rightArrowClass: "disabled-arrow" | "";
}


class FeatureSlider extends Component<any, SliderState> {
    constructor(props: any) {
        super(props);
        this.state = {
            leftArrowClass: "disabled-arrow",
            rightArrowClass: ""
        };
    }
  
    /**
     * Scroll horizontally adding or decreasing specified number of pages (increment)
     *
     * @param {number} increment
     * @memberof FeatureSlider
     */
    scrollIncPage(increment: number) {
        const sliderContainer = document.getElementsByClassName("slider-container");
        if (sliderContainer.length) {
            const initPosition = sliderContainer[0].scrollLeft;
            const windowWidth = window.innerWidth;
            const page = Math.trunc(initPosition / windowWidth);
            let newPosition = (page + increment) * windowWidth;
            if (newPosition <= 0) {
                newPosition = 0;
            }
            sliderContainer[0].scrollTo(newPosition, 0);
        }
    }
    /**
     * check if the arrow should be hidden or not when the page is scrolled
     *
     * @memberof FeatureSlider
     */
    checkScrollArrowsVisibility() {
        const sliderContainer: any = document.getElementsByClassName("slider-container");
        if (sliderContainer.length) {
            const position = sliderContainer[0].scrollLeft;
            const positionRight = sliderContainer[0].scrollWidth - (sliderContainer[0].scrollLeft + sliderContainer[0].offsetWidth);
            const windowWidth = window.innerWidth;
            const page = Math.trunc(position / windowWidth);
            if (position <= 3) {
                this.setState({
                    leftArrowClass: "disabled-arrow"
                });
            } else if (position < 100) {
                this.setState({
                    leftArrowClass: ""
                });
            }
            if (positionRight <= 3) {
                this.setState({
                    rightArrowClass: "disabled-arrow"
                });
            } else if (positionRight < 100) {
                this.setState({
                    rightArrowClass: ""
                });
            }
        }
    }
    render() {       
        return (
            <div id="feature-slider">
                <div onClick={e => {this.scrollIncPage(1);}} className={`scroll-button-right ${this.state.rightArrowClass}`}>
                    <i className="fas fa-chevron-right"/>
                </div>
                <div onClick={e => {this.scrollIncPage(-1);}} className={`scroll-button-left ${this.state.leftArrowClass}`}>
                    <i className="fas fa-chevron-left"/>
                </div>
                <div onScroll={e => {this.checkScrollArrowsVisibility();}} className="slider-container">
                    <SliderContainer
                        image= "/huddle.jpg"
                        alt= "Pre-game huddle of WSL team"
                        link= "/fixtures"
                        title= "Fixtures"
                    />
                    <SliderContainer
                        image= "/clubCulture.jpg"
                        alt= "The Tadros sisters pre-game"
                        link= "/culture"
                        title= "Club Culture"
                    /> 
                    <SliderContainer
                        image= "/grounds.jpg"
                        alt= "Our grounds at Olinda Grove, 'the Hive'"
                        link= "/grounds"
                        title= "Grounds"
                    />
                          <SliderContainer
                       image= "/fixtures2.jpg"
                       alt= "A senior men's player in contest for the ball"
                        link= "https://footballfedtas.com.au/rules-forms/"
                        title= "Rules & Regulations"
                    /> 
                     <SliderContainer
                        image= "/rules.jpg"
                        alt= "Pre-game huddle of men's team"
                        link= "/teams"
                        title= "Teams"
                    />
                    <SliderContainer
                        image= "/soph.jpg"
                        alt= "A senior women's player running with the ball"
                        link= "https://footballfedtas.com.au/covid-19-info/"
                        title= "Covid-19 Info"
                    /> 
                    <SliderContainer
                        image= "/training.jpg"
                        alt= "Players training at Olinda Grove"
                        link= "/training"
                        title= "Training"
                    />
                </div>
            </div>
        );
    }
}

export default FeatureSlider;