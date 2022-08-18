import React from 'react'
import './Footer.css'
import image from '../../assets/svg/footer.svg'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PersonIcon from '@mui/icons-material/Person';
import ShareIcon from '@mui/icons-material/Share';
// import AcUnitIcon from "@mui/icons-material/AcUnit";
import Logo from '../../assets/img/logo.png'

const Footer = () => {
    return (
        <div className="container__footer">
            <div className="footer__row">
                <div className="row__left">
                    <ul className="footer__section">
                    <PersonIcon className="icon" /><li className="footer__section-header">Querido usuario:</li>
                        <li><p>Hiring Code se compromete a
                            mantener su información totalmente a salvo
                            cumpliendo con los más altos estándares
                            de calidad y gestión de la información.
                            Porque la seguridad de los datos de nuestros
                            usuarios nos importa. Gracias por confiar en nosotros.
                            </p></li>
                    </ul>
                    <ul className="footer__section">
                        {/* <AcUnitIcon className="icon" /><li className="footer__section-header">Young Enterprising</li> */}
                        <img src={Logo}></img>
                        <li className="mark"><a href="#">Sobre nosotros</a></li>
                        <li className="mark"><a href="#">Únete a la comunidad</a></li>
                        <li className="mark"><a href="#">Términos y condiciones</a></li>
                    </ul>
                    <ul className="footer__section">
                        <ShareIcon className="icon" /><li className="footer__section-header">Nuestras redes</li>
                        <li title="Instagram"><a href="#"><InstagramIcon /></a></li>
                        <li title="Facebook"><a href="#"><FacebookIcon /></a></li>
                        <li title="LinkedIn"><a href="#"><LinkedInIcon /></a></li>
                        <li title="Email"><a href="mailto:elcorreoquequieres@correo.com?Subject=YoungEnterprising%Me%dirijo%a%ustedes%"><MailOutlineIcon /></a></li>
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