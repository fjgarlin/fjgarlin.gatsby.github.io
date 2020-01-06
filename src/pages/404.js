import React from 'react'
import { Link } from 'gatsby'

import Layout from "../components/layout"

const NotFoundPage = () => {
    return (
        <Layout>
            <h2>Page not found</h2>
            <p>The URL you tried does not match with any page.</p>

            <p>You can navigate to the homepage <Link to="/">here</Link>.</p>
        </Layout>
    )
}

export default NotFoundPage