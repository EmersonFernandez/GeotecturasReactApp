import { useState, useRef, useEffect } from 'react';
import { InputText } from 'primereact/inputtext';
import { Password } from 'primereact/password';
import { Button } from 'primereact/button';
import { Card } from 'primereact/card';
import { FloatLabel } from "primereact/floatlabel";
import { Toast } from "primereact/toast";
import { ProgressSpinner } from 'primereact/progressspinner';

import { useNavigate } from 'react-router-dom';
import logo from '../../assets/img_main.png'
import { login,logout } from '../../servicies/authService'
import { showMessage } from '../../utils/function'

export default function Login({ setIsLoggedIn }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [showSpinner, setShoeSpinner] = useState(false);
    const navigate = useNavigate();
    const toast = useRef(null);
    // Login
    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            setShoeSpinner(true);
            await login(username, password);
            navigate('/dashboard');
        } catch (error) {
            setShoeSpinner(false);
            showMessage('', error.response.data.message, toast, 'error');
            console.error('Error during login', error);
        }
    };

    useEffect(() => {
        logout();
    })

    return (
        <div className="box-login">
            <Toast ref={toast} position="bottom-right" />
            <div className="box">
                <div className="container-login100">
                    <div className="login-container">
                        <form onSubmit={handleLogin}>
                            <Card className="login-card border-1 surface-border border-round">
                                <div className="login-header">
                                    <img src={logo} alt="Logo" className="login-logo" />
                                    <div className='text-session'>
                                        <p className='h1'>Bienvenido!</p>
                                        <p className='p'>Iniciar sesión para continuar</p>
                                    </div>
                                </div>
                                <div className="p-fluid">
                                    <FloatLabel className="mb-5">
                                        <InputText id="username" onChange={(e) => setUsername(e.target.value)} />
                                        <label htmlFor="username">Usuario</label>
                                    </FloatLabel>
                                    <FloatLabel className="mb-5">
                                        <Password id="pass" feedback={false} tabIndex={1} toggleMask onChange={(e) => setPassword(e.target.value)} />
                                        <label htmlFor="pass">Contraseña</label>
                                    </FloatLabel>
                                    {
                                        showSpinner && (
                                            <div className='flex justify-content-center mb-2'>
                                                <ProgressSpinner style={{ width: '60px', height: '60px', border:'1px' }} strokeWidth="4" fill="var(--surface-ground)" stroke=' #d62d20' animationDuration="1s" />
                                            </div>
                                        )
                                    }
                                    <Button type='submit' label="Entrar" icon="pi pi-sign-in" className="shadow-2"></Button>
                                </div>
                            </Card>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
