import React, { useEffect, useState } from 'react';
import { Toolbar } from 'primereact/toolbar';
import { Avatar } from 'primereact/avatar';
import { Panel } from 'primereact/panel';
import { Button } from 'primereact/button';
import { Sidebar } from 'primereact/sidebar';
import MenuLeft from './MenuLeft';
import ModalProfil from './ModalProfil';
import { fetchData } from '../utils/function'
import { backgroundLetterProfil } from '../utils/function'
// import './DashBoards.css'; // Importa el archivo de estilos CSS personalizado

export default function MenuToolbar({ Child }) {
    const API_URL = import.meta.env.VITE_URL_API;
    const [isOpen, setIsOpen] = useState(null); // Para el modal del perfil
    const [visible, setVisible] = useState(false);
    const [sidebar, setSidebar] = useState(false);
    const [letter, setLetter] = useState('');
    const [color, setColor] = useState();

    const [dataUserConn, setDataUserConn] = useState([]); // Almacenar dato del usuario conectado
    useEffect(() => {
        const dataUserConnected = async () => {
            try {
                const user = await fetchData(`${API_URL}/userconnected`);
                setDataUserConn(user);
                setLetter(user.results[0].vcorreo);
            } catch (error) {
                console.log('Error altraer el dato del usuario conectado', error);
            }
        }

        dataUserConnected();
        console.log('entro');
    }, [])


    const handleClickMenu = () => {
        setVisible(!visible);
    }

    // Función que para abrir y cerrar modal del perfil
    const toggleModal = () => {
        setIsOpen(!isOpen);
    };


    useEffect(() => {
        backgroundLetterProfil(letter.charAt(0).toUpperCase()).then(color => {
            setColor(color);
        });
    }, [letter])

    const start = (
        <React.Fragment>
            <i className='pi pi-bars p-2 m-0 cursor-pointer' id='icon-menu-hamburger'
                onClick={handleClickMenu}></i>
        </React.Fragment>
    )
    const end = (
        <React.Fragment>
            <div className='flex gap-4 align-items-center'>
                <i className='pi pi-bell ml-3'></i>
                <i className='pi pi-comment ml-3'></i>
                <i className='pi pi-cog ml-3'></i>
                <Avatar label={letter.charAt(0).toUpperCase()} style={{ backgroundColor: `${color}`, color: '#ffffff' }} className='' onClick={toggleModal}></Avatar>
                {isOpen && (
                    <ModalProfil
                        toggleModal={toggleModal}
                        // toggleModalThemes={toggleModalThemes}
                        // toggleTheme={toggleTheme}
                        setIsOpen={setIsOpen}
                        // isOpenThemes={isOpenThemes} 
                        // dark={dark}
                        isPrivate={true}
                        user={dataUserConn.results[0]}
                    />
                )}
            </div>
        </React.Fragment>
    )

    // Función para establecel el sidebar 
    window.addEventListener('resize', function () {
        let screenWidth = window.innerWidth; // Obtener el ancho actual de la pantalla
        screenWidth < 780 ? setSidebar(true) : setSidebar(false);
    });

    useEffect(() => {
        window.innerWidth < 780 ? setSidebar(true) : setSidebar(false);
    }, []);


    return (
        <div className="flex gap-2 dashboard">
            <div className={`container-menu-toolbar bg-surface-400 surface-200 ${visible ? 'visible' : ''}`} id='menu-right'>
                <MenuLeft visible={visible} setVisible={setVisible} sidebar={sidebar} />
            </div>
            <div style={{ width: '100%' }} className='mx-3 my-2'>
                <Toolbar start={start} end={end} style={{ padding: '1rem' }} />
                {Child}
            </div>
            {console.log(color)}
        </div>
    );
}
