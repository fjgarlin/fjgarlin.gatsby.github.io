import React from 'react'
import { Link } from "gatsby"

// import Layout from "../components/layout"
import webServicesStyles from './web-services.module.scss'
import languageSwitcherStyles from '../styles/language-switcher.module.scss'
import Footer from '../components/footer'

const WebServicesPage = () => {
    return (
        <div class={webServicesStyles.webServices}>
            <Link className={languageSwitcherStyles.language} to="/servicios-web">ES</Link>
            <h2>Web Services</h2>
            <hr />
            <div class={webServicesStyles.grid}>
                <div class={webServicesStyles.box}>
                    <h3>Audit - How is your site?</h3>
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
                        <li>Per hour: <em>EUR 80</em></li>
                        <li>Per product</li>
                        <li>Per package</li>
                    </ul>
                    <p>
                        International support and invoicing.<br />
                        <small><em>Currencies: EUR, GBP, USD, BTC.</em></small>
                    </p>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default WebServicesPage