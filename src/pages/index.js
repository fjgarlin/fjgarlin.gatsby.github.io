import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'

import Layout from '../components/layout'

const IndexPage = () => {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    author
                }
            }
        }
    `)
    
    return (
        <Layout>
            <h2>Hello.</h2>
            <h3>I'm {data.site.siteMetadata.author}, a full-stack web developer specialized in maintenance of Drupal projects.</h3>
            <p>Mostly a problem solver so throw any challenge you have at me and I'll try to help.</p>
            <hr/>
            <p>Want to know more about me? Check the <Link to="/about">about</Link> page.</p>
        </Layout>
    )
}

export default IndexPage