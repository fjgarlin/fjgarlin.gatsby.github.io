import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

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
            <h2>Hi!</h2>
            <h3>I'm {data.site.siteMetadata.author}, a full-stack web developer specialized in maintenance of Drupal projects.</h3>
            <p>Mostly a problem solver so throw any challenge you have at me and I'll try to help.</p>
            <hr/>
            <p>I work at the <a rel="noreferrer" href="https://www.drupal.org/association" target="_blank">Drupal Association</a> as part of the Engineering Team.</p>
            <p>I also like running, basketball and photography, among others.</p>
            <p>You can find me on:</p>
            <ul>
                <li><a rel="noreferrer" href="https://www.drupal.org/u/fjgarlin" target="_blank">Drupal</a></li>
                <li><a rel="noreferrer" href="https://www.linkedin.com/in/fjgarlin" target="_blank">Linkedin</a></li>
				<li><a rel="noreferrer" href="https://github.com/fjgarlin" target="_blank">Github</a></li>
            </ul>
        </Layout>
    )
}

export default IndexPage