import React from 'react';
import { graphql } from 'gatsby'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import Layout from '../components/layout';
import Head from "../components/head";
import SolsticeCredit from '../components/solsticeCredit';

export const query = graphql`
    query {
        contentfulContact  {
            title
            logo{
                title
                file{
                  url
                }
              }
            featureImage{
                file{
                  url
                }
                title
              }
            content{
            json
            }
        }
    }
`

const Contact = (props) => {
    // const options = {
    //     renderNode: {
    //         "embedded-asset-block": (node) => {
    //             const alt = node.data.target.fields.title['en-US']
    //             const url = node.data.target.fields.file['en-US'].url
    //             return <img alt={alt} src={url} />
    //         }
    //     }
    // }

    return (
        <Layout>
            <Head title = "Contact"/>
            <div className="page-container">
                <a id="contact"/>
                <div className="page-header">
                    <img src={props.data.contentfulContact.logo.file.url} alt={props.data.contentfulContact.logo.title} className="utas-logo" width="180px"/>
                    <h1 className="page-title">{props.data.contentfulContact.title}</h1>
                </div>
                <div className="page-banner">
                    <img className="banner-image" src={props.data.contentfulContact.featureImage.file.url} alt={props.data.contentfulContact.featureImage.title} />
                    <SolsticeCredit/>
                </div>
                <div className="page-content">
                    <h2>Contact Us</h2>
                    <div className="contact-content">{documentToReactComponents(props.data.contentfulContact.content.json)}</div>
                </div>
            </div>
        </Layout>
    )
}

export default Contact

