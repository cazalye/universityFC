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
      <div>
          <Layout>
           <Head title="News"/>
          <h1>News</h1>
          <ol>
              {data.allContentfulNews.edges.map((edge) => {
                  return (
                      <li>
                          <Link to={`/news/${edge.node.slug}`}>
                              <h2>{edge.node.title}</h2>
                              <p>{edge.node.date}</p>
                          </Link>
                      </li>
                  )
              })}
          </ol>
          </Layout>
      </div>
     
    )
}

export default NewsPage
