import React, { Component } from 'react';
import '../styles/pages.scss';
import Layout from '../components/layout';
import { graphql } from 'gatsby'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import Head from "../components/head";


const Privacy = (props) => {
        return (
            <Layout>
                <Head title = "Club Member Protection Policy"/>
                <div className="page-container">
                    <a id="privacy"/>
                    <div className="page-header">
                        <h1 className="page-title">University of Tasmania Football (Soccer) Club Member Protection Policy</h1>
                    </div> 
                    <div className="privacy-content">
                    The Tasmanian University Football (Soccer) Club (TUF(S)C) operates as an affiliated body of the Football Federation Australia (FFA) and its subordinate body Football Tasmania (FT).   AS such it is governed by the policies of those bodies including the Member Protection Policy of FFA.  This policy is available at the FFA and the FT websites. <hr/>

FFA’s member protection policy is comprehensive and covers; <hr/>

• Child protection • Identification of risk • Promoting participation in service development • Taking images of children • Discrimination and harassment • Intimate relationships • Pregnancy • Gender identification including intersex status • Alcohol use and abuse • Smoking • Bullying and • Use of social media.  <hr/>

The FFA policy incorporates the national codes of conduct and they have been adapted in this document to make them particularly relevant to the TUSC.  These codes govern the behaviour of our officials, players, coaches, volunteers and spectators.   <hr/> 

In the case of junior teams there are particular codes of conduct issued by FFA and its affiliates including the Central Region and we are committed to these.  <hr/>

The principles and commitments detailed in the FFA policy are part of our framework.  The TUF(S)C accepts and is committed to all of the FFA policies.   <hr/>

<strong>Complaints and Dispute Resolution</strong>  <hr/>

FFA has a complaints and dispute resolution process and this process is available to all of our members.  Details of the FFA process are available at their website and assistance can be provided by the Club Chairperson in accessing these if needed.  <hr/>

Additionally the TUF(S)C has established a complaints and dispute resolution process to operate within the club.  This process is managed by the Executive Committee of the club and coordinated by a member protection officer appointed annually by the Committee.  This person will report directly to the club President in relation to any complaints or alleged breaches of the Club’s policies.  Should the complaint be in relation to the President then the member protection officer will report to the other Executive members of the club Committee.   <hr/>

Additionally the member protection officer will be available to all members to provide advice on options for raising and resolving concerns without necessarily making a formal complaint.  <hr/>

The Committee will make known the name and contact details of the member protection officer.  <hr/>

Any person may report a compliant about a member if they reasonably think that person has breached the policy.  <hr/>

A complaint can be made either orally or in writing.  However, if the complaint is oral then it will be documented and the complainant will be given a copy of the documentation to ensure that it is an accurate reflection of the issues.  <hr/>

All complaints will be recorded and be dealt with promptly and where necessary confidentially.  Any information regarding the complaint will be dealt with sensitively.  In recognition of the need for procedural fairness the person or group about whom the compliant is being made 9the respondent) will, wherever possible, be given the opportunity to reply to the complaint.  If the complaint is of such a nature that it would be a breach of confidentiality to allow the respondent a right of reply then the nature of the complaint will not be disclosed.  <hr/>
If a complaint involves an alleged breach of the law then the appropriate body will be contacted regardless of the undertaking to provide confidentiality.  <hr/>

Where mediation is necessary to resolve a dispute this will be undertaken within the limits of the resources available within the TUF(S)C.  <hr/>

Should a complaint be found to be sustained the application of disciplinary measures, if appropriate, will be at the discretion of the Executive Committee of the TUF(S)C. 

                    </div>
                </div>
        </Layout>
        )
    }

export default Privacy
