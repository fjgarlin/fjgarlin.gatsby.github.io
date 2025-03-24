import React from 'react'

import Layout from "../components/layout"
import Patches from "../components/patches"

const Page12months12patches = () => {
    return (
        <Layout>
            <h2>#12months12patches</h2>
            <p>
                In 2019, I started this personal initiative because I wanted to contribute more often to Drupal (and related projects).
                My goal was: <em>"try to contribute at least one patch each month of the year"</em>.
            </p>
            <p>
                I've been doing the challenge for 4 straight years, and now (2023) I work full-time at the Drupal Association, where all of my time is spent contributing to Drupal.
                That means that I'll stop tracking the issues I contribute on this page. You can check them <a href="https://www.drupal.org/u/fjgarlin/issue-credits">here</a> if you want to keep track.
            </p>
            <p>
                You can read more about the challenge in the blog posts (linked below), and see the list of patches/PRs submitted over the years 2019-2022.
                This was a great personal challenge that helped me grow and made me feel more involved in the community and open source.
            </p>
            <div>
                <Patches />
            </div>
        </Layout>
    )
}

export default Page12months12patches