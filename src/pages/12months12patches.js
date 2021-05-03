import React from 'react'

import Layout from "../components/layout"
import Patches from "../components/patches"

const Page12months12patches = () => {
    return (
        <Layout>
            <h2>#12months12patches</h2>
            <p>
                A few years ago I started this personal initiative as a way to contribute more often to Drupal (and related projects).
                My goal was (and still is): "try to contribute at least one patch each month of the year".
            </p>
            <p>
                You can read more about the challenge in the blog posts (linked below), and see the list of patches/PRs submitted over the years.
            </p>
            <div>
                <Patches />
            </div>
        </Layout>
    )
}

export default Page12months12patches