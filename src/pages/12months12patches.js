import React from 'react'

import Layout from "../components/layout"
import Patches from "../components/patches"

const Page12months12patches = () => {
    return (
        <Layout>
            <h2>#12months12patches</h2>
            <p>
                A few years ago I started this personal initiative as a way to contribute more often to Drupal (and related projects).
                It's very easy: "try to contribute at least a patch each month of the year".
            </p>
            <p>
                You can read more about the challenge in the blog posts, and see the list of patches done over the years below.
            </p>
            <div>
                <Patches />
            </div>
        </Layout>
    )
}

export default Page12months12patches