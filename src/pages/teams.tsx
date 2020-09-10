import React, { Component } from 'react';
import { graphql } from 'gatsby'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import '../styles/pages.scss';
import SolsticeCredit from '../components/solsticeCredit';
import Layout from '../components/layout';
import {Grid, Cell} from 'react-mdl';
import Head from "../components/head";

export const query = graphql`
    query {
        contentfulTeams  {
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
            contentMen{
            json
            }
        }
    }
`

const Teams = (props) => {
    const options = {
        renderNode: {
            "embedded-asset-block": (node) => {
                const alt = node.data.target.fields.title['en-US']
                const url = node.data.target.fields.file['en-US'].url
                return <img alt={alt} src={url}  className="team-image" width="80%"/>
            }
        }
    }

        return (
            <Layout>
                <Head title = "Teams"/>
            <div className="page-container">
                <a id="teams"/>
                <div className="page-header">
                    <img src={props.data.contentfulTeams.logo.file.url} alt={props.data.contentfulTeams.logo.title} className="utas-logo" width="180px"/>
                    <h1 className="page-title">{props.data.contentfulTeams.title}</h1>
                </div>
                <div className="page-banner">
                    <img className="banner-image" src={props.data.contentfulTeams.featureImage.file.url} alt={props.data.contentfulTeams.featureImage.title} />
                    <SolsticeCredit/>
                </div> 
                <Grid className="team-content">
                    <Cell col={6} offsetTablet={1} className="left-col">
                        {documentToReactComponents(props.data.contentfulTeams.content.json, options)}
                    </Cell> 
                    <Cell col={6} offsetTablet={1} className="right-col">
                       {documentToReactComponents(props.data.contentfulTeams.contentMen.json, options)}
                    </Cell>
                </Grid>
            </div>
            </Layout>
        )
    }
 export default Teams
