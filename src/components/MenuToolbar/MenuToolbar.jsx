import React, { useEffect, useState } from 'react';
import { Toolbar } from 'primereact/toolbar';
import { Avatar } from 'primereact/avatar';
import { Panel } from 'primereact/panel';
import { Button } from 'primereact/button';
import { Sidebar } from 'primereact/sidebar';
import MenuLeft from '../MenuLeft/MenuLeft';
// import './DashBoards.css'; // Importa el archivo de estilos CSS personalizado

export default function MenuToolbar({Child}) {
    const [visible, setVisible] = useState(false);
    const [sidebar, setSidebar] = useState(false);

    const handleClickMenu = () => {
        setVisible(!visible);
    }

    const start = (
        <React.Fragment>
            <i className='pi pi-bars hover:surface-200 hover:border-3 p-2 cursor-pointer'
                onClick={handleClickMenu}></i>
        </React.Fragment>
    )
    const end = (
        <React.Fragment>
            <div className='flex gap-4 align-items-center'>
                <i className='pi pi-bell ml-2'></i>
                <i className='pi pi-comment ml-2 '></i>
                <i className='pi pi-cog ml-2 '></i>
                <Avatar label='E' style={{ backgroundColor: '#2196F3', color: '#ffffff' }} className=''></Avatar>
            </div>
        </React.Fragment>
    )

    // Función para establecel el sidebar 
    window.addEventListener('resize', function () {
        let screenWidth = window.innerWidth; // Obtener el ancho actual de la pantalla
        screenWidth < 780 ? setSidebar(true) : setSidebar(false);
        console.log(screenWidth);
    });

    useEffect(() => {
        window.innerWidth < 780 ? setSidebar(true) : setSidebar(false);
        console.log('ventana', window.innerWidth);
    }, []);


    return (
        <div className="flex gap-2 dashboard">
            <div className={`container-menu-toolbar bg-surface-400 surface-200 ${visible ? 'visible' : ''}`} id='menu-right'>
                <MenuLeft visible={visible} setVisible={setVisible} sidebar={sidebar} />
            </div>
            <div style={{width:'100%' }}>
                <Toolbar start={start} end={end} style={{ border: 'none'}} />
                {Child}
            </div>
        </div>
    );
}
