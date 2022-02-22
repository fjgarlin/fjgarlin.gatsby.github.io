import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

import * as footerStyles from './footer.module.scss'

const Footer = ({ language = 'en' }) => {
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
                <a rel="noreferrer" href="mailto:fjgarlin@gmail.com" target="_blank">{language === 'en' ? 'Contact me' : 'Contactar'}</a>
                <span className={footerStyles.toRight}>© {(new Date().getFullYear())} {data.site.siteMetadata.title}</span>
            </div>
        </footer>
    )
}

export default Footer