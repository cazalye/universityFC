import React from "react";
import { Link, graphql, useStaticQuery } from 'gatsby'
import Head from "../components/head"
import Layout from '../components/layout';


const NewsPage = () => {
    const data = useStaticQuery(graphql`
        query {
            allContentfulNews ( sort: { fields: date, order: DESC } ) {
                edges {
                    node {
                        title
                        slug
                        date(formatString:"MMMM Do, YYYY")
                    }
                }
            }
        }
    `)

    return (
        <Layout>
        <Head title="News"/>
        <div className="page-container">
            <div className="page-header">
                <img src="/logo.jpg" alt="University of Tasmania logo with lion" className="utas-logo" width="180px"/>
                <h1 className="page-title">News</h1>
            </div>
            <div className="page-banner">
                <img className="banner-image" src="/newsPage.jpg" alt="Awards night 2019" />
            </div>
            <div className="news-page-content">
                <ul>
                    {data.allContentfulNews.edges.map((edge) => {
                    return (
                        <li>
                            <a href={`/news/${edge.node.slug}`}>
                                <h2>{edge.node.title}</h2>
                                <p>{edge.node.date}</p>
                            </a>
                        </li>
                            )
                        })}
                </ul>
            </div>
        </div>
        </Layout>
    )
}

export default NewsPage
