import React from 'react'

// import Layout from "../../components/layout"
import webServicesStyles from './web-services.module.scss'
import Footer from '../components/footer'

const ServiciosWebPage = () => {
    return (
        <div class={webServicesStyles.webServices}>
            <h2>Servicios Web</h2>
            <hr />
            <div class={webServicesStyles.grid}>
                <div class={webServicesStyles.box}>
                    <h3>Auditoria - ¿Cómo está tu web?</h3>
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
                        <li>Por hora: <em>80 EUR</em></li>
                        <li>Por producto</li>
                        <li>Por paquete de productos</li>
                    </ul>
                    <p>
                        Soporte international y facturación.<br />
                        <small><em>Monedas: EUR, GBP, USD, BTC.</em></small>
                    </p>
                </div>
            </div>
            <Footer language='es' />
        </div>
    )
}

export default ServiciosWebPage