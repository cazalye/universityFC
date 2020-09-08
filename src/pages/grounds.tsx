import React, { Component } from 'react';
import '../styles/pages.scss';
import SolsticeCredit from '../components/solsticeCredit';
import Layout from '../components/layout';
import { graphql } from 'gatsby'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import Head from "../components/head";

export const query = graphql`
    query {
        contentfulGrounds  {
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

const Grounds = (props) => {
        return (
            <Layout>
                <Head title = "Grounds"/>
                <div className="page-container">
                    <a id="grounds"/>
                    <div className="page-header">
                        <img src={props.data.contentfulGrounds.logo.file.url} alt={props.data.contentfulGrounds.logo.title} className="utas-logo" width="180px"/>
                        <h1 className="page-title">{props.data.contentfulGrounds.title}</h1>
                    </div>
                    <div className="page-banner">
                        <img className="banner-image" src={props.data.contentfulGrounds.featureImage.file.url} alt={props.data.contentfulGrounds.featureImage.title} />
                        <SolsticeCredit/>
                    </div> 
                    <div className="grounds-content">{documentToReactComponents(props.data.contentfulGrounds.content.json)}</div>
                </div>
        </Layout>
        )
    }
export default Grounds
