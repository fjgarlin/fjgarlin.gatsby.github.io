import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

import headerStyles from "./header.module.scss"

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
                to="/about"
              >
                About
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
