import React, { useEffect, useState } from 'react';
import { Menubar } from 'primereact/menubar';
import { InputText } from 'primereact/inputtext';
import { Avatar } from 'primereact/avatar';
import { useLocation, useNavigate } from 'react-router-dom';
import { rutas } from '../../utils/rutas'
import logo from '../../assets/img_main.png'
import './NavBar.css'

export default function NavBAr() {
    // Ruta actual
    let location = useLocation();
    let navigate = useNavigate();

    let themeDark = 'lara-dark-blue/theme.css';
    let ThemeLight = 'lara-light-blue/theme.css';
    // Estados
    const [searchTerm, setSearchTerm] = useState(''); // De busquedas
    const [isOpen, setIsOpen] = useState(false); // Para el modal del perfil
    const [isOpenThemes, setIsOpenThemes] = useState(false); // Para el modal del perfil

    // Itemes del Navbar
    const items = [
        {
            label: 'Inicio',
            icon: 'pi pi-home',
            command: () => navigate('/home')
        },
        {
            label: 'Servicios',
            icon: 'pi pi-star',
            command: () => navigate('/services')
        },
        {
            label: 'Proyectos',
            icon: 'pi pi-search',
            items: [
                {
                    label: 'Components',
                    icon: 'pi pi-bolt'
                },
                {
                    label: 'Blocks',
                    icon: 'pi pi-server'
                },
                {
                    label: 'UI Kit',
                    icon: 'pi pi-pencil'
                },
                {
                    label: 'Templates',
                    icon: 'pi pi-palette',
                    items: [
                        {
                            label: 'Apollo',
                            icon: 'pi pi-palette'
                        },
                        {
                            label: 'Ultima',
                            icon: 'pi pi-palette'
                        }
                    ]
                }
            ]
        },
        {
            label: 'Nosotros',
            icon: 'pi pi-users',
            command: () => navigate('/servicios')
        },
        {
            label: 'Contactanos',
            icon: 'pi pi-envelope',
            command: () => navigate('/servicios')
        }
    ];

    const rutaExist = rutas.some(el => el.path === location.pathname);


    const [dark, setDark] = useState(() => {
        const savedDarkMode = localStorage.getItem('darkMode');
        return savedDarkMode ? JSON.parse(savedDarkMode) : false;  // Default to false if not set
    });

    const toggleTheme = (isDark) => {
        if (dark !== isDark) {
            setDark(isDark);
            localStorage.setItem('darkMode', JSON.stringify(isDark));
            changeTheme(isDark);
        }
    };

    const changeTheme = async (isDark) => {
        const themeElement = await document.getElementById('app-theme');
        const themeBasePath = './node_modules/primereact/resources/themes';

        if (themeElement) {
            themeElement.href = isDark ? `${themeBasePath}/${themeDark}` : `${themeBasePath}/${themeLight}`;
        } else {
            console.error('No se encuentra el thema');
        }
    };

    useEffect(() => {
        changeTheme(dark);
    },[])


    // Función que para abrir y cerrar modal del perfil
    const toggleModal = () => {
        setIsOpen(!isOpen);
    };
    const toggleModalThemes = () => {
        setIsOpenThemes(!isOpenThemes);
    };

    // Función para cerrar modal del perdil mediante el scroll
    window.addEventListener('scroll', function () {
        let scrollTop = window.scrollY; // Obtener la posición actual del scroll vertical
        scrollTop > 30 ? setIsOpen(false) : '';
    });

    // Función para añadir la busqueda en el estado de busqueda
    const handleChange = (event) => {
        setSearchTerm(event.target.value);
    };

    // Funcion que nos permite saber el valor de la busqueda
    const handleSearch = () => {
        // Aquí puedes implementar la lógica para realizar la búsqueda con el término ingresado
        console.log('Realizar búsqueda con:', searchTerm);
    };


    // Contenido Html
    const start = <img alt="logo" src={logo} height="40" className="mr-2"></img>; // Para mostrar el icon al comienzo del NavBar
    const end = (  // Para Mostrar la barra de busqueda y el Icon del perfil al final del NavBar 
        <div className="flex align-items-center gap-2">
            <InputText
                placeholder="Buscar..."
                type="text"
                className="w-8rem sm:w-auto"
                value={searchTerm}
                onChange={handleChange}
                onKeyDown={(event) => {
                    if (event.key === 'Enter') {
                        handleSearch();
                    }
                }}
            />
            <Avatar
                icon="pi pi-user"
                shape="circle"
                size="large"
                onClick={toggleModal}
                style={{ cursor: 'pointer' }}

            />
        </div>
    )


    return (
        location.pathname !== '/' && rutaExist && (
            <div className="card" >
                {/* NavBar */}
                <Menubar model={items} start={start} end={end} />
                {/* Modal */}
                {isOpen && (
                    <div className='modal-overlay' onClick={toggleModal}>
                        <div className='modal-box' onClick={(e) => e.stopPropagation()}>
                            <div className='modal-content'>
                                <div className='info-perfil'>
                                    <p className='mb-1 name'>Emerson Fernández</p>
                                    <p className='email'>Fernandezreginoe@gmailcom</p>
                                </div>
                                <div className='dividir'></div>
                                <div className='info-perfil _efect'>
                                    <a><i className='pi pi-cog' style={{ marginRight: '10px' }}></i>Configurar Perfil</a>
                                </div>
                                <div className='info-perfil _efect _themes' onClick={toggleModalThemes}>
                                    <a><i className='pi pi-palette' style={{ marginRight: '10px' }}></i>Temas<i className='pi pi-angle-right _row' style={{ marginLeft: '90px' }}></i></a>
                                    {isOpenThemes && (
                                        <div className='themes'>
                                            <p onClick={() => toggleTheme(false)}>
                                                <span>Claro</span>
                                                {!dark && (<i className='pi pi-check' style={{ marginLeft: '10px', fontSize: '10px' }}></i>)}
                                            </p>
                                            <p onClick={() => toggleTheme(true)}>
                                                <span>Oscuro</span>
                                                {dark && (<i className='pi pi-check' style={{ marginLeft: '10px', fontSize: '10px' }}></i>)}
                                            </p>
                                        </div>
                                    )
                                    }

                                </div>
                                <div className='dividir'></div>
                                <div className='info-perfil _efect' onClick={() => navigate('/')}>
                                    <a><i className='pi pi-sign-out' style={{ marginRight: '10px' }}></i>Cerrar Sesión</a>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>

        )

    )
}