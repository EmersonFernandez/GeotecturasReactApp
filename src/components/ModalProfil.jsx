import React, { useEffect, useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import {logout} from '../servicies/authService'
import {capitalizeFirstLetter} from '../utils/function'

export default function ModalProfil({ setIsOpen, toggleModal, isPrivate, user }) {
    let location = useLocation();
    let navigate = useNavigate();

    let themeDark = 'lara-dark-blue/theme.css';
    let ThemeLight = 'lara-light-blue/theme.css';

    // Estado 
    const [isOpenThemes, setIsOpenThemes] = useState(false); // Para el modal del perfil

    // Moda dark
    const [dark, setDark] = useState(() => {
        const savedDarkMode = localStorage.getItem('darkMode');
        return savedDarkMode ? JSON.parse(savedDarkMode) : false;  // Default to false if not set
    });


    // Función para cambiar el tema y guardar la preferencia en localStorage
    const toggleTheme = (isDark) => {
        if (dark !== isDark) {
            setDark(isDark);
            localStorage.setItem('darkMode', JSON.stringify(isDark));
            changeTheme(isDark);
        }
    };

    // Función para aplicar el tema seleccionado
    const changeTheme = (isDark) => {
        const themeElement = document.getElementById('app-theme');
        const themeBasePath = '/themes';
        const selectedTheme = isDark ? themeDark : ThemeLight;
        themeElement.href = `${themeBasePath}/${selectedTheme}`;
    };

    const toggleModalThemes = () => {
        setIsOpenThemes(!isOpenThemes);
    };

    // Función para cerrar modal del perdil mediante el scroll
    window.addEventListener('scroll', function () {
        let scrollTop = window.scrollY; // Obtener la posición actual del scroll vertical
        scrollTop > 30 ? setIsOpen(false) : '';
    });

    // Cerrar sesión
    const closeSession = () => {
        logout();
        navigate('/login');

    }


    return (
        <>
            <div className='modal-overlay' onClick={toggleModal}>
                <div className='modal-box' onClick={(e) => e.stopPropagation()}>
                    <div className='modal-content'>
                        {
                            isPrivate && <>
                                <div className='info-perfil'>
                                    <p className='mb-1 name'>{`${capitalizeFirstLetter(user.nombre)} ${capitalizeFirstLetter(user.apellido)}`}</p>
                                    <p className='email'>{user.vcorreo}</p>
                                </div>
                                <div className='dividir'></div>
                            </>
                        }
                        {
                            isPrivate && <div className='info-perfil _efect'>
                                <p><i className='pi pi-cog' style={{ marginRight: '10px' }}></i>Configurar Perfil</p>
                            </div>
                        }
                        {
                            !isPrivate && <div className='info-perfil _efect' onClick={() => navigate('/login')}>
                                <p><i className='pi pi-sign-in' style={{ marginRight: '10px' }}></i>Iniciar Sesión</p>
                            </div>
                        }
                        <div className='info-perfil _efect _themes' onClick={toggleModalThemes}>
                            <p><i className='pi pi-palette' style={{ marginRight: '10px' }}></i>Temas<i className='pi pi-angle-right _row' style={{ marginLeft: '90px' }}></i></p>
                            {isOpenThemes && (
                                <div className='themes'>
                                    <p onClick={() => toggleTheme(false)}>
                                        <span>Claro</span>
                                        {!dark && (<i className='pi pi-check' style={{ marginLeft: '10px', fontSize: '10px' }}></i>)}
                                    </p>
                                    <div className='dividir'></div>
                                    <p onClick={() => toggleTheme(true)}>
                                        <span>Oscuro</span>
                                        {dark && (<i className='pi pi-check' style={{ marginLeft: '10px', fontSize: '10px' }}></i>)}
                                    </p>
                                </div>
                            )
                            }

                        </div>
                        {
                            isPrivate && <>
                                <div className='dividir'></div>
                                <div className='info-perfil _efect' onClick={closeSession}>
                                    <p><i className='pi pi-sign-out' style={{ marginRight: '10px' }}></i>Cerrar Sesión</p>
                                </div>
                            </>

                        }
                    </div>
                </div>
            </div>
        </>
    )
}
