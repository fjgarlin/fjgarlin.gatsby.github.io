import React from 'react'

import Header from './header'
import Footer from './footer'
import '../styles/index.scss'
import layoutStyles from './layout.module.scss'

const Layout = (props) => {
    return (
        <div className={layoutStyles.container}>
            <div className={layoutStyles.content}>
                <Header />
                <section className={layoutStyles.main}>
                	{props.children}
                </section>
            </div>
            <Footer />
        </div>
    )
}

export default Layout