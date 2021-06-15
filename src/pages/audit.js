import React from 'react'

// import Layout from "../components/layout"
import auditStyles from './audit.module.scss'
import Footer from '../components/footer'

const AuditPage = () => {
    return (
        <div class={auditStyles.audit}>
            <h2>Audit</h2>
            <hr />
            <div class={auditStyles.grid}>
                <div class={auditStyles.box}>
                    <h3>Audit - How your site is now</h3>
                    <ul>
                        <li>Responsiveness</li>
                        <li>Speed</li>
                        <li>SEO</li>
                    </ul>
                </div>
                <div class={auditStyles.box}>
                    <h3>Reports - Looking forwards</h3>
                    <ul>
                        <li>Quick audit (just results)</li>
                        <li>Improvements plan</li>
                        <li>Maintenance plan</li>
                        <li>CMS recommendation</li>
                        <li>Recommendations based on needs and audit results</li>
                        <li>Collaboration existing agency</li>
                    </ul>
                </div>
            </div>
            <hr />
            <div class={auditStyles.gridLeft}>
                <div>
                    <h3>Expertise &amp; Training</h3>
                    <ul>
                        <li>Web</li>
                        <li>Agile</li>
                        <li>Team leadership</li>
                        <li>Maintenance</li>
                        <li>Drupal</li>
                    </ul>
                </div>
            </div>
            <hr />
            <div class={auditStyles.gridRight}>
                <div>
                    <h3>Pricing</h3>
                    <ul>
                        <li>Per hour: <b>EUR 80</b></li>
                        <li>Per product</li>
                        <li>Per package</li>
                        <li>International support and invoicing</li>
                        <li>Currencies: EUR, GBP, USD, BTC</li>
                    </ul>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default AuditPage