import React, { Component } from 'react';
import "../styles/footer.scss";
import {Footer, FooterSection, FooterDropDownSection, FooterLinkList} from 'react-mdl';
// import { HashLink as Link } from 'react-router-hash-link';
// import AnchorLink from "gatsby-plugin-anchor-links";
// import scrollTo from 'gatsby-plugin-smoothscroll';
import GoogleMap from './map'; 
import { Link } from 'gatsby';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"


class FooterDetail extends Component{
    render() {
        return (
            
            <Footer size="mega" className="footer">
            <GoogleMap/>
            <FooterSection type="bottom">
                <div className="drop-down-container">
                <FooterDropDownSection title="About University Soccer Club">
                    <FooterLinkList>
                        <Link to="/culture#culture">Our Culture</Link>
                        <Link to="/grounds#grounds">Our Home Ground- the Hive</Link>
                        <Link to="/teams#teams">Our Teams</Link>
                        <Link to="/training#training">Training</Link>
                        <Link to="/fixtures#fixtures">Games</Link>
                    </FooterLinkList>
                </FooterDropDownSection>
                <FooterDropDownSection title="FFT Links">
                    <FooterLinkList>
                    <a href="https://footballfedtas.com.au/" rel="noopener noreferrer" target="_blank">Football Federation Tasmania</a>
                        <a href="https://footballfedtas.com.au/rules-forms/" rel="noopener noreferrer" target="_blank">Rules & Regulations</a>
                        <a href="https://websites.sportstg.com/assoc_page.cgi?c=1-8296-0-0-0&a=COMPS&seasonID=5990983" rel="noopener noreferrer" target="_blank">Fixtures</a>
                        <a href="https://footballfedtas.com.au/covid-19-info/" rel="noopener noreferrer" target="_blank">Covid-19 Info</a>
                    </FooterLinkList>
                </FooterDropDownSection>
                <FooterDropDownSection title="Contact Us">
                    <FooterLinkList>
                        <a href="mailto: utas.soccer@gmail.com" target="_blank" rel="noopener noreferrer">Email: utas.soccer@gmail.com </a>
                        <Link to="/contact#contact">Committee Member Contacts</Link>
                        <a href="https://www.facebook.com/TasmanianUniversitySoccerClub/" target="_blank" rel="noopener noreferrer">Facebook</a>
                        <a href="https://www.instagram.com/utas_soccer/" target="_blank" rel="noopener noreferrer">Instagram</a>
                    </FooterLinkList>
                </FooterDropDownSection>
                </div>
            </FooterSection>
            <FooterSection type="bottom">
                <FooterLinkList className="footer-links">
                        <a href="mailto: utas.soccer@gmail.com" rel="noopener noreferrer" target="_blank">
                            {/* <i className="fa fa-envelope" aria-hidden="true" /> */}
                            <FontAwesomeIcon icon={["fas", "envelope"]} style={{color:"red"}} />
                        </a>
                        <a href="https://www.facebook.com/TasmanianUniversitySoccerClub/" rel="noopener noreferrer" target="_blank">
                            {/* <i className="fa fa-facebook" aria-hidden="true" /> */}
                            <FontAwesomeIcon icon={["fab", "facebook-f"]} style={{color:"red"}} />
                        </a>
                        <a href="https://www.instagram.com/utas_soccer/" rel="noopener noreferrer" target="_blank">
                            {/* <i className="fa fa-instagram" aria-hidden="true" /> */}
                            <FontAwesomeIcon icon={["fab", "instagram"]} style={{color:"red"}} />
                        </a>
                </FooterLinkList>
            </FooterSection>
            <div className="copyright">
                    <p> &copy; Copyright University Soccer Club. All rights reserved. Designed by <a href="https://portfolio.cazalye.com"  rel="noopener noreferrer" target="_blank"> cazalye</a></p>
            </div>
        </Footer>
         )
    }
}

export default FooterDetail;
