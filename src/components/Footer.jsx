import React from 'react';
import { useLocation } from 'react-router-dom';

import {rutas} from '../utils/rutas'
import logo from '../assets/img_main.png'



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
        location.pathname != '/login' && rutaExist && (
            <footer className="__footer">
                <div>  
                    {/* Apartados */}
                    <div>
                        <div className='grid'>
                            {/* Nombre Pagina */}
                            <div className='col-12 md:col-4'>
                                <div className='__center__horizontal'>
                                    <p className='__title__footer'>Geotecturas</p>
                                    <img src={logo} alt="" style={{ width: '100px', height: 'auto' }} />
                                    {/* <p className='p-footer'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus perspiciatis quisquam officia numquam.!</p> */}
                                </div>
                            </div>

                            {/* Servicios */}
                            <div className='col-12 md:col-4'>
                                <div className='__center__horizontal'>
                                    <p className='__title__footer'>Servicios</p>
                                    <ul className='__ul__footer text-center'>
                                        <li className='mb-1'><a className='mb-2 __link__servicios'>Ecosistemas Digitales</a></li>
                                        <li className='mb-1'><a className='mb-2 __link__servicios'>Gemelo Digital Smart City</a></li>
                                        <li className='mb-1'><a className='mb-2 __link__servicios'>Gemelo Digital P.O.T.</a></li>
                                        <li className='mb-1'><a className='mb-2 __link__servicios'>Gemelo Digital P.D.M.</a></li>
                                        <li className='mb-1'><a className='mb-2 __link__servicios'>Gemelo Digital Macroproyectos</a></li>
                                        <li className='mb-1'><a className='mb-2 __link__servicios'>Gemelo Digital Inmobiliario</a></li>
                                    </ul>
                                </div>
                            </div>
                            {/* Contactanos */}
                            <div className='col-12 md:col-4 '>
                                <div className='__center__horizontal'>
                                    <p className='__title__footer'>Contáctanos</p>
                                    <ul className='__ul__footer'>
                                        <li className='mb-1'><a href={mailtoUrl} className='__icon__dividir __contactanos'><i className='pi pi-envelope'></i>gerencia@geotecturas.com</a></li>
                                        <li className='mb-1'><a href={whatsappUrl} target='_blank' className='__icon__dividir __contactanos'><i className='pi pi-phone'></i>+57 321 6279691</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Divisor */}
                    <div className='__dividir__footer'></div>
                    <div className='flex justify-content-center align-content-center'>
                        <div className='flex flex-column justify-content-center align-content-center'>
                            <div className='text-center mb-2'>Todos los derechos reservados © 2024 Geotecturas SAS</div>
                            <div className='flex justify-content-center align-content-center gap-2'>
                                <a href='https://www.facebook.com/Geotecturas/' className='__icon__dividir' target="_blank" ><i className='pi pi-facebook'></i></a>
                                <a href='https://www.instagram.com/geotecturas/' className='__icon__dividir' target="_blank" ><i className='pi pi-instagram'></i></a>
                                <a href='https://x.com/geotecturas' className='__icon__dividir' target="_blank" ><i className='pi pi-twitter'></i></a>
                                <a href='https://www.linkedin.com/in/geotecturas/' className='__icon__dividir' target="_blank" ><i className='pi pi-linkedin'></i></a>
                                <a href='https://www.youtube.com/channel/UCZVMtvoLKIHOviY61cmgCKQ' className='__icon__dividir' target="_blank" ><i className='pi pi-youtube'></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>

        )
    );
}

export default Footer;
