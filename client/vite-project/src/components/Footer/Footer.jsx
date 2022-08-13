import React from 'react'
import './Footer.css'
import image from '../../assets/svg/footer.svg'

const Footer = () => {
    return (
        <div className="container__footer">
            <div className="footer__row">
                <div className="row__left">
                    <ul className="footer__section">
                        <li className="footer__section-header">Servicios</li>
                        <li><a href="#">Este es un texto</a></li>
                        <li><a href="#">Este es un texto</a></li>
                        <li><a href="#">Este es un texto</a></li>
                        <li><a href="#">Este es un texto</a></li>
                    </ul>
                    <ul className="footer__section">
                        <li className="footer__section-header">Servicios</li>
                        <li><a href="#">Este es un texto</a></li>
                        <li><a href="#">Este es un texto</a></li>
                        <li><a href="#">Este es un texto</a></li>
                        <li><a href="#">Este es un texto</a></li>
                    </ul>
                    <ul className="footer__section">
                        <li className="footer__section-header">Servicios</li>
                        <li><a href="#">Este es un texto</a></li>
                        <li><a href="#">Este es un texto</a></li>
                        <li><a href="#">Este es un texto</a></li>
                        <li><a href="#">Este es un texto</a></li>
                    </ul>
                </div>
                <div className="row__right">
                    <img src={image}></img>
                </div>
            </div>
        </div>
    )
}

export default Footer