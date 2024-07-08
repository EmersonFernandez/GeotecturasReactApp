import React from 'react'
import logo from '../assets/img_main.png'

export default function PageHome() {
    return (
        <div className='__homeRoomInfo'>
            <div className='__homeNavBar'>
                <div className='__homeNavBarLeft'>
                    <div className='__homeTexts'>
                        <h1>GEOTECTURAS</h1>
                        {/* <p>Solución de problemas</p> */}
                    </div>
                </div>
                <div className='__homeNavBarRight'>
                    <div className='__homeNavRightTop'>
                        <div className='__project'><i className='pi pi-bullseye'></i><span>Portafolio</span></div>
                        <div className='__project'><i className='pi pi-sign-in'></i><span>Iniciar Sesión</span></div>
                    </div>
                    <div className='__homeNavRightGroup'>
                        <div><i className='pi pi-users'></i><span>Nosotros</span></div>
                        <div><i className='pi pi-bookmark'></i><span >Servicios</span></div>
                        <div><i className='pi pi-envelope'></i><span>Contáctonos</span></div>
                    </div>
                </div>
            </div>
            <div className='__homeFooter'>
                Todos los derechos reservados © 2024 Geotecturas SAS
            </div>
        </div>
    )
}
