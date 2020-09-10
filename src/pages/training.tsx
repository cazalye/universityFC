import React, { Component } from 'react';
import {Grid, Cell} from 'react-mdl';
import '../styles/pages.scss';
import SolsticeCredit from '../components/solsticeCredit';
import Layout from '../components/layout';
import { graphql } from 'gatsby'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import Head from "../components/head";

export const query = graphql`
    query {
        contentfulTraining  {
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
            subtitle{
                json
            }
            content{
                json
            }
            contentWomen{
                json
            }
        }
    }
`

const Training = (props) => {
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
                <Head title = "Training"/>
                <div className="page-container">
                    <a id="training"/>
                    <div className="page-header">
                        <img src={props.data.contentfulTraining.logo.file.url} alt={props.data.contentfulTraining.logo.title} className="utas-logo" width="180px"/>
                        <h1 className="page-title">{props.data.contentfulTraining.title}</h1>
                    </div>
                    <div className="page-banner">
                        <img className="banner-image" src={props.data.contentfulTraining.featureImage.file.url} alt={props.data.contentfulTraining.featureImage.title} />
                        <SolsticeCredit/>
                    </div> 
                    <div className="training-subtitle">{documentToReactComponents(props.data.contentfulTraining.subtitle.json, options)}</div>
                    <Grid className="training-content">
                        <Cell col={6} offsetTablet={1} className="left-col">
                            {documentToReactComponents(props.data.contentfulTraining.content.json, options)}
                        </Cell>
                        <Cell col={6} offsetTablet={1} className="right-col">
                        {documentToReactComponents(props.data.contentfulTraining.contentWomen.json, options)}
                        </Cell>
                    </Grid>
                </div>
            </Layout>
        )
    }
export default Training
