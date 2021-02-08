import React from 'react'
import { graphql } from 'gatsby'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import Head from "../components/head"
import Layout from "../components/layout"


export const query = graphql`
    query($slug: String!){
        contentfulNews(slug: {eq: $slug}) {
            title
            date(formatString:"MMMM Do, YYYY")
            content {
                json
            }
            featureImage{
                file{
                    url
                }
                title
            }
        }
    }
`

const News = (props) => {
    const options = {
        renderNode: {
            "embedded-asset-block": (node) => {
                const alt = node.data.target.fields.title['en-US']
                const url = node.data.target.fields.file['en-US'].url
                return <img alt={alt} src={url} />
            }
        }
    }

    return (
        <Layout>
        <Head title={props.data.contentfulNews.title}/>
        <div className="page-container">
            <div className="page-header">
                <img src="/logo.jpg" alt="University of Tasmania logo with lion" className="utas-logo" width="180px"/>
                <h1 className="page-title">{props.data.contentfulNews.title}</h1>
                <p>{props.data.contentfulNews.date}</p>
            </div>
            <div className="page-banner">
                <img className="news-image" src={props.data.contentfulNews.featureImage.file.url} alt={props.data.contentfulNews.featureImage.title} />
            </div>

            <div className="news-content">
                {documentToReactComponents(props.data.contentfulNews.content.json, options)}
            </div>
        </div>
        </Layout>
    )
}

export default News