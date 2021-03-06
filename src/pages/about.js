import React from 'react'

import Layout from "../components/layout"

const AboutPage = () => {
    return (
        <Layout>
            <h2>About Me</h2>
            <p>I work at <a rel="noreferrer" href="https://www.amazeelabs.com/en" target="_blank">AmazeeLabs</a> as Drupal Web Developer, Team and Tech Lead for the Global Maintenance Team.</p>
            <p>I also like running, basketball and photography, among others.</p>
            <p>You can also find me on:</p>
            <ul>
                <li><a rel="noreferrer" href="https://www.drupal.org/u/fjgarlin" target="_blank">Drupal</a></li>
                <li><a rel="noreferrer" href="https://www.linkedin.com/in/fjgarlin" target="_blank">Linkedin</a></li>
				<li><a rel="noreferrer" href="https://github.com/fjgarlin" target="_blank">Github</a></li>
            </ul>
        </Layout>
    )
}

export default AboutPage