import React, { Component } from 'react';
import '../styles/pages.scss';
import Layout from '../components/layout';
import { graphql } from 'gatsby'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import Head from "../components/head";
import HistoryCarousel from "../components/historyCarousel";

export const query = graphql`
    query {
        contentfulHistory  {
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

const History = (props) => {
    const options = {
        renderNode: {
            "embedded-asset-block": (node) => {
                const alt = node.data.target.fields.title['en-US']
                const url = node.data.target.fields.file['en-US'].url
                return <img alt={alt} src={url}/>
            }
        }
    }
        return (
            <Layout>
                <Head title = "Club History"/>
                <div className="page-container">
                    <a id="history"/>
                    <div className="page-header">
                        <img src={props.data.contentfulHistory.logo.file.url} alt={props.data.contentfulHistory.logo.title} className="utas-logo" width="180px"/>
                        <h1 className="page-title">{props.data.contentfulHistory.title}</h1>
                    </div>
                    <div className="page-banner">
                        <img className="banner-image" src={props.data.contentfulHistory.featureImage.file.url} alt={props.data.contentfulHistory.featureImage.title} />
                    </div> 
                    <div className="history-content">
                        {documentToReactComponents(props.data.contentfulHistory.content.json, options)}
                    </div>
                    <HistoryCarousel/>
                </div>
        </Layout>
        )
    }

export default History
