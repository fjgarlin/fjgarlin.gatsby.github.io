import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const IndexPage = () => {
    return (
        <Layout>
            <h2>Hello.</h2>
            <h3>I'm Fran, a full-stack web developer specialized in Drupal.</h3>
            <p>Mostly a problem solver so throw any challenge you can have at me and I'll try to help.</p>
            <hr/>
            <p>Want to know more about me? Check the <Link to="/about">about</Link> page.</p>
        </Layout>
    )
}

export default IndexPage