import React from 'react'
import { Helmet } from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'



// export default class Head extends Component {

    const Header = ({title}) => {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `)

    // render() {
       
        return (
            <div>
                <Helmet title={`${title} | ${data.site.siteMetadata.title}`}/>
            </div>
        )
    // }
}
export default Header
