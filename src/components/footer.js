import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

import footerStyles from './footer.module.scss'

const Footer = () => {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `)

    return (
        <footer className={footerStyles.footer}>
            <div className={footerStyles.fixedBottom}>
                <a rel="noreferrer" href="mailto:fjgarlin@gmail.com" target="_blank">Contact me</a>
                <span className={footerStyles.toRight}>© {(new Date().getFullYear())} {data.site.siteMetadata.title}</span>
            </div>
        </footer>
    )
}

export default Footer