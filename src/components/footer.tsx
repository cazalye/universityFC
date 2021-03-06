import React, { Component } from 'react';
import "../styles/footer.scss";
import {Footer, FooterSection, FooterDropDownSection, FooterLinkList} from 'react-mdl';
import Map from './Map';
// import { Link } from 'gatsby';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"


class FooterDetail extends Component{
    render() {
        return (
            
            <Footer size="mega" className="footer">
            <Map/>
            <FooterSection type="bottom">
                <div className="drop-down-container">
                <FooterDropDownSection title="About our Club">
                    <FooterLinkList>
                        <a href="/culture/">Our Culture</a>
                        <a href="/grounds/">Our Home Ground- the Hive</a>
                        <a href="/teams/">Our Teams</a>
                        <a href="/training/">Training</a>
                        <a href="/fixtures/">Games</a>
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
                        <a href="/contact/">Committee Member Contacts</a>
                        <a href="https://www.facebook.com/TasmanianUniversitySoccerClub/" target="_blank" rel="noopener noreferrer">Facebook</a>
                        <a href="https://www.instagram.com/utas_soccer/" target="_blank" rel="noopener noreferrer">Instagram</a>
                    </FooterLinkList>
                </FooterDropDownSection>
                </div>
            </FooterSection>
            <FooterSection type="bottom">
                <FooterLinkList className="footer-links">
                        <a href="mailto: utas.soccer@gmail.com" rel="noopener noreferrer" target="_blank">
                            <FontAwesomeIcon icon={["fas", "envelope"]} style={{color:"red"}} />
                        </a>
                        <a href="https://www.facebook.com/TasmanianUniversitySoccerClub/" rel="noopener noreferrer" target="_blank">
                            <FontAwesomeIcon icon={["fab", "facebook-f"]} style={{color:"red"}} />
                        </a>
                        <a href="https://www.instagram.com/utas_soccer/" rel="noopener noreferrer" target="_blank">
                            <FontAwesomeIcon icon={["fab", "instagram"]} style={{color:"red"}} />
                        </a>
                </FooterLinkList>
            </FooterSection>
            <div className="copyright">
                <p> &copy; 2020 University of Tasmania Football (Soccer) Club INC</p>
            </div>
            

        </Footer>
         )
    }
}

export default FooterDetail;
