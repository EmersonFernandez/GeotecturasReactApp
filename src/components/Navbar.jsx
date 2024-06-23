import React, { useEffect, useState } from 'react';
import { Menubar } from 'primereact/menubar';
import { InputText } from 'primereact/inputtext';
import { Avatar } from 'primereact/avatar';
import { useLocation, useNavigate } from 'react-router-dom';
import { rutas } from '../utils/rutas'

import logo from '../assets/img_main.png'

import ModalProfil from './ModalProfil';

export default function NavBAr() {
    // Ruta actual
    let location = useLocation();
    let navigate = useNavigate();
    // Estados
    const [searchTerm, setSearchTerm] = useState(''); // De busquedas
    const [isOpen, setIsOpen] = useState(null); // Para el modal del perfil


    // Itemes del Navbar
    const items = [
        {
            label: 'Inicio',
            icon: 'pi pi-home',
            command: () => navigate('/')
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
                    label: 'Portafolio',
                    icon: 'pi pi-briefcase',
                    command: () =>  navigate('/project')
                },
                // {
                //     label: 'Blocks',
                //     icon: 'pi pi-server'
                // },
                // {
                //     label: 'UI Kit',
                //     icon: 'pi pi-pencil'
                // },
                // {
                //     label: 'Templates',
                //     icon: 'pi pi-palette',
                //     items: [
                //         {
                //             label: 'Apollo',
                //             icon: 'pi pi-palette'
                //         },
                //         {
                //             label: 'Ultima',
                //             icon: 'pi pi-palette'
                //         }
                //     ]
                // }
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

    // Rutas que no existes
    const rutaExist = rutas.some(el => el.path === location.pathname);

    // Función que para abrir y cerrar modal del perfil
    const toggleModal = () => {
        setIsOpen(!isOpen);
    };
    
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
    const start = <img alt="logo" src={logo} height="40" className="mr-2"  onClick={() => navigate('/')}></img>; // Para mostrar el icon al comienzo del NavBar
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
        location.pathname !== '/login' && rutaExist && (
            <div className="navBar" >
                {/* NavBar */}
                <Menubar model={items} start={start} end={end} style={{borderRadius:'0px'}}/>
                {/* Modal */}
                {isOpen && (
                    <ModalProfil 
                    toggleModal={toggleModal}
                    // toggleModalThemes={toggleModalThemes}
                    // toggleTheme={toggleTheme}
                    setIsOpen={setIsOpen}
                    // isOpenThemes={isOpenThemes} 
                    // dark={dark}
                    isPrivate={false}
                    /> 
                )}
            </div>

        )

    )
}