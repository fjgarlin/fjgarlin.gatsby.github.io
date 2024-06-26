import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

import * as headerStyles from "./header.module.scss"

const Header = () => {
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
    <header className={headerStyles.header}>
      <div className={headerStyles.container}>
        <h1>
          <Link className={headerStyles.title} to="/">
            {data.site.siteMetadata.title}
            <small>dev</small>
            <img className={headerStyles.titleImage} src={"https://github.com/" + data.site.siteMetadata.title + ".png"} alt={data.site.siteMetadata.title + " Image"} />
          </Link>
        </h1>
        <nav>
          <ul className={headerStyles.navList}>
            <li>
              <Link
                className={headerStyles.navItem}
                activeClassName={headerStyles.activeNavItem}
                to="/"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                className={headerStyles.navItem}
                activeClassName={headerStyles.activeNavItem}
                to="/speaker"
              >
                Speaker
              </Link>
            </li>
            <li>
              <Link
                className={headerStyles.navItem}
                activeClassName={headerStyles.activeNavItem}
                to="/12months12patches"
              >
                #12months<span className={headerStyles.hiddenXs}>12patches</span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
