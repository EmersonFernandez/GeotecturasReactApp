import React, { useRef, useState } from 'react';
import { useSpring, animated } from '@react-spring/web'
import logoGeo from '../assets/logoGeo.svg'
import './style.css'

// funcion para los symbol
function symbol(numSymbol, props) {

    const gradient = [
        '#969696', // symbol 1
        'linear-gradient(90deg, rgb(242, 159, 255) 0%, rgb(124, 153, 255) 100%)',  // symbol 2
        '#969696',  // symbol 3
        'linear-gradient(90deg, rgb(100, 145, 214) 0%, rgb(67, 240, 199) 100%)',  // symbol 4
        'linear-gradient(90deg, rgb(100, 145, 214) 0%, rgb(67, 240, 199) 100%)',  // symbol 4
        'linear-gradient(90deg, rgb(100, 145, 214) 0%, rgb(67, 240, 199) 100%)',  // symbol 6
        'linear-gradient(90deg, #707cff,#8224fe)',  // symbol 7
        'linear-gradient(90deg, rgb(242, 159, 255) 0%, rgb(124, 153, 255) 100%)',  // symbol 8
        'linear-gradient(90deg, #ff8c51,#ff6d6d)'  // symbol 9
    ]



    const styles = {
        background: gradient[numSymbol - 1],
        opacity: 1,
        transform: 'translate(0px, 0px)',
    }

    return { ...props, ...styles };
}

// Componente logo
const Logo = () => {
    return <div className='logo'><img src={logoGeo} alt="" /></div>
}

// Componnete contacnamos
const ContactUs = () => {
    const [springs, api] = useSpring(() => ({
        from: { x: 40 },
        to: { x: 0 },
        config: {
            duration: 800
        }
    }))


    return <>
        <animated.div className='contactUs' style={springs}>
            <div className='flex flex-column gap-4'>
                <div className='flex flex-column align-items-center gap-2'>
                    <i className='pi pi-whatsapp'></i>
                    <span>LLamar a</span>
                    <a href="" className='no-underline text-white'>+57 300 144 0657</a>
                </div>
                <div className='flex flex-column align-items-center gap-1 mb-2'>
                    <i className='pi pi-envelope'></i>
                    <span>Enviar correo a</span>
                    <a href="" className='no-underline text-white'>fernandezreginoe@gmail.com</a>
                </div>
                <div className='followUsText  mb-1'></div>
                <div className='followUsIcons'>
                    <a href="" className='text-white'><i className='pi pi-facebook'></i></a>
                    <a href="" className='text-white'><i className='pi pi-linkedin'></i></a>
                    <a href="" className='text-white'><i className='pi pi-twitter'></i></a>
                    <a href="" className='text-white'><i className='pi pi-instagram'></i></a>
                    <a href="" className='text-white'><i className='pi pi-youtube'></i></a>
                </div>
            </div>
        </animated.div>
    </>
}

export default function SpringReact() {
    const [openContactUs, setOpenContactUs] = useState(false);

    const [props, api] = useSpring(
        () => ({
            from: { opacity: 0, x: 500 },
            to: { opacity: 1, x: 0 },
            config: {
                duration: 400
            }
        }),
        []
    )

    const props1 = useSpring({
        from: { opacity: 0, x: 40 },
        to: { opacity: 1, x: 0 },
        config: {
            duration: 400
        }
    })

    const props2 = useSpring({
        from: { opacity: 0, x: 40 },
        to: { opacity: 1, x: 0 },
        config: {
            duration: 1000
        }
    })


    const propsFooter = useSpring({
        from: { opacity: 0, color: 'blue' },
        to: { opacity: 1, color: 'white' },
        config: {
            duration: 300,
            mass: 10,
            friction: 5,
            tension: 80,
        }
    })



    return (
        <>
            <div className='container-home-main'>
                <div className='nav'>
                    <a><i className='pi pi-sign-in'></i>Inicar sesión</a>
                </div>
                {/* <div className='row'></div> */}
                <div>
                    <div className='dising' >
                        {/* <div className='gg'>
                            <animated.div className="gg-symbol gg-symbol--rect gg-symbol--5" style={symbol(5, props)}></animated.div>
                            <animated.div className="gg-symbol gg-symbol--rect gg-symbol--3" style={symbol(3, props1)}></animated.div >
                            <animated.div className="gg-symbol gg-symbol--disc" style={symbol(1, props2)}></animated.div>
                        </div>
                        <div className='gg'>
                            <div className="gg-symbol gg-symbol--rect gg-symbol--8" style={symbol(8)}></div>
                        </div>
                        <div className='gg'>
                            <div className="gg-symbol gg-symbol--rect gg-symbol--square" style={symbol(1)}></div>
                            <div className="gg-symbol gg-symbol--rect gg-symbol--6" style={symbol(6)}></div>
                        </div> */}
                        <animated.div className='title' style={props1}>
                            <h1>Geotectura</h1>
                            <h2>Tencnología para la gestión urbana</h2>
                        </animated.div>
                        {/* <div className='gg'>
                            <div className="gg-symbol gg-symbol--rect gg-symbol--5" style={symbol(5)}></div>
                            <div className="gg-symbol gg-symbol--rect gg-symbol--3" style={symbol(3)}></div>
                            <div className="gg-symbol gg-symbol--rect gg-symbol--6" style={symbol(6)}></div>
                        </div> */}
                        {/* <div className='gg'>
                            <div className="gg-symbol gg-symbol--rect gg-symbol--9" style={symbol(9)}></div>
                            <div className="gg-symbol gg-symbol--rect gg-symbol--square" style={symbol(1)}></div>
                            <div className="gg-symbol gg-symbol--3" style={symbol(3)}></div>
                        </div> */}
                    </div>
                </div>
                <animated.div className="footer" style={propsFooter}>
                    <ul>
                        <li><a onClick={() => setOpenContactUs(!openContactUs)}>Contácnanos</a></li>
                        {/* <li><a href="mailto:guillaume.gouessan@gmail.com">Correo</a></li> */}
                        <li><a>Nosotros</a></li>
                        <li><a>Servicios</a></li>
                    </ul>
                </animated.div>

                {
                    openContactUs && <ContactUs />
                }
            </div>
        </>
    );
}
