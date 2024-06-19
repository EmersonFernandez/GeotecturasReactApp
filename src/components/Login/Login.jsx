import { InputText } from 'primereact/inputtext';
import { Password } from 'primereact/password';
import { Button } from 'primereact/button';
import { Card } from 'primereact/card';
import { FloatLabel } from "primereact/floatlabel";
import { useNavigate } from 'react-router-dom';
import { Ripple } from 'primereact/ripple';
import './Login.css'
import logo from '../../assets/img_main.png'

export default function Login({setIsLoggedIn}) {

    const navigate = useNavigate();
    // Login
    const handleOnClickLogin = async () => {
        // console.log('Login');
        navigate('/home');
    }


    return (
        <div className="home-container --surface-50">
            <div className="box">
                <div className="container-login100">
                    <div className="login-container">
                        <form>
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
                                        <InputText id="username" />
                                        <label htmlFor="username">Usuario</label>
                                    </FloatLabel>
                                    <FloatLabel className="mb-5">
                                        <Password id="pass" feedback={false} tabIndex={1} toggleMask/>
                                        <label htmlFor="pass">Contraseña</label>
                                    </FloatLabel>
                                    <Button label="Entrar" icon="pi pi-sign-in" className="shadow-2" onClick={handleOnClickLogin}></Button>
                                </div>
                            </Card>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
