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
            <div className={footerStyles.wrapper}>
                <p>© {(new Date().getFullYear())} {data.site.siteMetadata.title}</p>
            </div>
        </footer>
    )
}

export default Footer