import React, { useEffect, useState } from 'react';

import './DashBoards.css'; // Importa el archivo de estilos CSS personalizado
import MenuToolbar from '../../../components/MenuToolbar/MenuToolbar';

export default function DashBoards() {
    
    const Component = () => {
        return (
            <>
                <div className='bg-primary'>
                    hola
                </div>
            </>
        )
    }

    return (
        <MenuToolbar Child={<Component/>}/>
    );
}
