import React, { Component } from 'react';
import { graphql } from 'gatsby'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import '../styles/pages.scss';
import SolsticeCredit from '../components/solsticeCredit';
import {Grid, Cell} from 'react-mdl';
import Layout from '../components/layout';

export const query = graphql`
    query {
        contentfulFixtures  {
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
            contentWomen{
            json
            }
        }
    }
`

const Fixtures = (props) => {
        return (
            <Layout>
            <div className="page-container">
                <a id="fixtures"/>
                <div className="page-header">
                    <img src={props.data.contentfulFixtures.logo.file.url} alt={props.data.contentfulFixtures.logo.title} className="utas-logo" width="180px"/>
                    <h1 className="page-title">{props.data.contentfulFixtures.title}</h1>
                </div>
                <div className="page-banner">
                    <img className="banner-image" src={props.data.contentfulFixtures.featureImage.file.url} alt={props.data.contentfulFixtures.featureImage.title} />
                    <SolsticeCredit/>
                </div>
                <Grid className="page-content">
                    <Cell col={6} className="left-col">
                        {documentToReactComponents(props.data.contentfulFixtures.content.json)}
                    </Cell>
                    <Cell col={6} className="right-col">
                       {documentToReactComponents(props.data.contentfulFixtures.contentWomen.json)}
                    </Cell>
                </Grid>
            </div>
            </Layout>
        )
    }
    export default Fixtures