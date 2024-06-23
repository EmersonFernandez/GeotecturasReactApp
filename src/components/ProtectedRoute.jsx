import React, { useEffect, useState } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { isAuthenticated } from '../servicies/authService';
import { ProgressSpinner } from 'primereact/progressspinner';

const ProtectedRoute = ({ element: Element, ...rest }) => {
    const [isAuth, setIsAuth] = useState(null);

    useEffect(() => {
        const checkAuth = async () => {
            const authStatus = await isAuthenticated();
            setIsAuth(authStatus);
        };
        checkAuth();
    }, []);

    if (isAuth === null) {
        return <div className='w-screen h-screen flex justify-content-center align-items-center' ><ProgressSpinner /></div>; // O un spinner de carga
    }

    return isAuth ? <Element {...rest} /> : <Navigate to="/login" />;
};

export default ProtectedRoute;
