import React from 'react'
import { Link } from "gatsby"

// import Layout from "../../components/layout"
import * as webServicesStyles from './web-services.module.scss'
import * as languageSwitcherStyles from '../styles/language-switcher.module.scss'
import Footer from '../components/footer'

const ServiciosWebPage = () => {
    return (
        <div class={webServicesStyles.webServices}>
            <Link className={webServicesStyles.logo} to="/">
                <img src='https://www.fjgarlin.com/logo.png' alt='Home' />
            </Link>
            <Link className={languageSwitcherStyles.language} to="/web-services">EN</Link>
            <h2>Servicios Web</h2>
            <hr />
            <div class={webServicesStyles.grid}>
                <div class={webServicesStyles.box}>
                    <h3>Auditoria, ¿analizamos tu web?</h3>
                    <ul>
                        <li>Adaptada a móviles y tablets</li>
                        <li>Velocidad de carga y navegación</li>
                        <li>Posicionamiento (SEO)</li>
                    </ul>
                </div>
                <div class={webServicesStyles.box}>
                    <h3>Informes y planes</h3>
                    <ul>
                        <li>Informe auditoria (sólo resultados)</li>
                        <li>Plan de mejoras</li>
                        <li>Plan de mantenimiento</li>
                        <li>Colaboración con su agencia web</li>
                    </ul>
                </div>
                <div class={webServicesStyles.box}>
                    <h3>Precios</h3>
                    <ul>
                        <li>Por hora</li>
                        <li>Por producto</li>
                        <li>Por paquete de productos</li>
                    </ul>
                    <p>
                        Soporte international y facturación.<br />
                        <small><em>Monedas: EUR, GBP, USD.</em></small>
                    </p>
                </div>
            </div>
            <Footer language='es' />
        </div>
    )
}

export default ServiciosWebPage