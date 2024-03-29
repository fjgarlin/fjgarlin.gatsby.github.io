import React from 'react'
import { Link } from "gatsby"

// import Layout from "../components/layout"
import * as webServicesStyles from './web-services.module.scss'
import * as languageSwitcherStyles from '../styles/language-switcher.module.scss'
import Footer from '../components/footer'

const WebServicesPage = () => {
    return (
        <div class={webServicesStyles.webServices}>
            <Link className={webServicesStyles.logo} to="/">
                <img src='https://www.fjgarlin.com/logo.png' alt='Home' />
            </Link>
            <Link className={languageSwitcherStyles.language} to="/servicios-web">ES</Link>
            <h2>Web Services</h2>
            <hr />
            <div class={webServicesStyles.grid}>
                <div class={webServicesStyles.box}>
                    <h3>Audit, how is your site?</h3>
                    <ul>
                        <li>Responsiveness</li>
                        <li>Speed</li>
                        <li>SEO</li>
                    </ul>
                </div>
                <div class={webServicesStyles.box}>
                    <h3>Reports &amp; plans</h3>
                    <ul>
                        <li>Audit report (just results)</li>
                        <li>Improvements plan</li>
                        <li>Maintenance plan</li>
                        <li>Collaboration existing agency</li>
                    </ul>
                </div>
                <div class={webServicesStyles.box}>
                    <h3>Pricing</h3>
                    <ul>
                        <li>Per hour</li>
                        <li>Per product</li>
                        <li>Per package</li>
                    </ul>
                    <p>
                        International support and invoicing.<br />
                        <small><em>Currencies: EUR, GBP, USD.</em></small>
                    </p>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default WebServicesPage