import React, { useEffect, useState } from 'react';


import MenuToolbar from '../../components/MenuToolbar';

export default function DashBoards() {
    const Component = () => {
        return (
            <>
                <div className='box-dashboard'>
                    hola
                </div>
            </>
        )
    }

    return (
        <MenuToolbar Child={<Component/>}/>
    );
}
