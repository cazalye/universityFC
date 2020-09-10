// import React from 'react'
// import { graphql } from 'gatsby'
// import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
// import Head from "../components/head"


// export const query = graphql`
//     query($slug: String!){
//         contentfulNews(slug: {eq: $slug}) {
//             title
//             date(formatString:"MMMM Do, YYYY")
//             content {
//                 json
//             }
//         }
//     }
// `

// const News = (props) => {
//     const options = {
//         renderNode: {
//             "embedded-asset-block": (node) => {
//                 const alt = node.data.target.fields.title['en-US']
//                 const url = node.data.target.fields.file['en-US'].url
//                 return <img alt={alt} src={url} />
//             }
//         }
//     }

//     return (
//         <div>
//             <Head title={props.data.contentfulNews.title}/>
//             <h1>{props.data.contentfulNews.title}</h1>
//             <p>{props.data.contentfulNews.date}</p>
//             {documentToReactComponents(props.data.contentfulNews.content.json, options)}
//         </div>

//     )
// }

// export default News