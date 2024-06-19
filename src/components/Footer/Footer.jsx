import React from 'react';
import './Footer.css'; // Estilo CSS personalizado para el footer si es necesario
import logo from '../../assets/img_main.png'
import {rutas} from '../../utils/rutas'
import { useLocation } from 'react-router-dom';


const Footer = () => {
    // Información para WhatsApps
    const phoneNumber = '3216279691'; 
    const message = 'Hola, estoy interesado en tus servicios.'; 
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    // Información para Correos
    const emailAddress = 'gerencia@geotecturas.com'; 
    const subject = 'Interesado en tus servicios';
    const body = 'Hola, estoy interesado en tus servicios.';
    const mailtoUrl = `mailto:${emailAddress}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    let location = useLocation();

    const rutaExist = rutas.some(el => el.path === location.pathname);
    return (
        location.pathname != '/' && rutaExist && (
            <footer className="footer">
                <div className='box'>
                    {/* Apartados */}
                    <div className='container'>
                        <div className='grid'>
                            {/* Nombre Pagina */}
                            <div className='col-12 md:col-4'>
                                <div className='center-horizontal'>
                                    <p className='title-footer'>Geotecturas</p>
                                    <img src={logo} alt="" style={{ width: '100px', height: 'auto' }} />
                                    {/* <p className='p-footer'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus perspiciatis quisquam officia numquam.!</p> */}
                                </div>
                            </div>

                            {/* Servicios */}
                            <div className='col-12 md:col-4'>
                                <div className='center-horizontal'>
                                    <p className='title-footer'>Servicios</p>
                                    {/* <ul className='ul-footer text-center'>
                                        <li className='mb-1'><a href="#" className='mb-2 link-servicios'>Ecosistemas Digitales</a></li>
                                        <li className='mb-1'><a href="#" className='mb-2 link-servicios'>Gemelo Digital Smart City</a></li>
                                        <li className='mb-1'><a href="#" className='mb-2 link-servicios'>Gemelo Digital P.O.T.</a></li>
                                        <li className='mb-1'><a href="#" className='mb-2 link-servicios'>Gemelo Digital P.D.M.</a></li>
                                        <li className='mb-1'><a href="#" className='mb-2 link-servicios'>Gemelo Digital Macroproyectos</a></li>
                                        <li className='mb-1'><a href="#" className='mb-2 link-servicios'>Gemelo Digital Inmobiliario</a></li>
                                    </ul> */}
                                </div>
                            </div>
                            {/* Contactanos */}
                            <div className='col-12 md:col-4 '>
                                <div className='center-horizontal'>
                                    <p className='title-footer'>Contáctanos</p>
                                    <ul className='ul-footer'>
                                        <li className='mb-1'><a href={mailtoUrl} className='icon-dividir contactanos'><i className='pi pi-envelope'></i>gerencia@geotecturas.com</a></li>
                                        <li className='mb-1'><a href={whatsappUrl} target='_blank' className='icon-dividir contactanos'><i className='pi pi-phone'></i>+57 321 6279691</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>



                    {/* Divisor */}
                    <div className='dividir-f'></div>
                    <div className='flex justify-content-center align-content-center'>
                        <div className='flex flex-column justify-content-center align-content-center'>
                            <div className='text-center mb-2'>Todos los derechos reservados © 2024 Geotecturas SAS</div>
                            {/* <div className='flex justify-content-center align-content-center'>
                                <a href="#" className='icon-dividir'><i className='pi pi-facebook'></i></a>
                                <a href="#" className='icon-dividir'><i className='pi pi-instagram'></i></a>
                                <a href="#" className='icon-dividir'><i className='pi pi-twitter'></i></a>
                                <a href="#" className='icon-dividir'><i className='pi pi-linkedin'></i></a>
                                <a href="#" className='icon-dividir'><i className='pi pi-youtube'></i></a>
                            </div> */}
                        </div>
                    </div>
                </div>
            </footer>
        )
    );
}

export default Footer;
