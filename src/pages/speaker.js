import React from 'react'

import Layout from "../components/layout"
import Talks from '../components/talks'

const Speaker = () => {
    return (
        <Layout>
            <h2>Speaker</h2>
            <p>
                I have always like sharing and participating in events, both in-person and online. Here is a list of the different talks/sessions I have given over the years.
            </p>
            <div>
                <Talks />
            </div>
        </Layout>
    )
}

export default Speaker
