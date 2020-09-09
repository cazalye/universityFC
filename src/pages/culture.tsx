import React, { Component } from 'react';
import '../styles/pages.scss';
import SolsticeCredit from '../components/solsticeCredit';
import Layout from '../components/layout';
import { graphql } from 'gatsby'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import Head from "../components/head";

export const query = graphql`
    query {
        contentfulCulture  {
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
            cultureGallery{
                file{
                    url
                  }
                title
            }
        }
    }
`

const Culture = (props) => {
        return (
            <Layout>
                <Head title = "Club Culture"/>
                <div className="page-container">
                    <a id="culture"/>
                    <div className="page-header">
                        <img src={props.data.contentfulCulture.logo.file.url} alt={props.data.contentfulCulture.logo.title} className="utas-logo" width="180px"/>
                        <h1 className="page-title">{props.data.contentfulCulture.title}</h1>
                    </div>
                    <div className="page-banner">
                        <img className="banner-image" src={props.data.contentfulCulture.featureImage.file.url} alt={props.data.contentfulCulture.featureImage.title} />
                        <SolsticeCredit/>
                    </div> 
                    <div className="culture-content">{documentToReactComponents(props.data.contentfulCulture.content.json)}</div>
                    {/* <img className="culture-gallery" src={props.data.contentfulCulture.cultureGallery.file.url} alt={props.data.contentfulCulture.cultureGallery.title} /> */}
                </div>
        </Layout>
        )
    }

export default Culture
