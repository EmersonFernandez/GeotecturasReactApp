import React, { useRef, useState, useLayoutEffect } from 'react';
import { useSpring, animated } from '@react-spring/web'
import logoGeo from '../assets/logoGeo.svg'
import './style.css'
import { useTransform, useScroll, useTime } from "framer-motion";
import { degreesToRadians, progress, mix } from "popmotion";
import { Canvas, useThree, useFrame } from "@react-three/fiber";

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
        from: {opacity: 0, x: 40 },
        to: [
            {opacity: 0.5, x: 20 },
            {opacity: 1, x: 0 }
        ],
        config: {
            duration: 400
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


const AnimateBarCol = (col) => {
    const [props, api] = useSpring(
        () => ({
            from: { opacity: 0, x: 800 },
            to: [
                { opacity: 0.5, x: 400 },
                { opacity: 1, x: 0 }
            ],
            config: {
                duration: 300
            }
        }),
        []
    );

    return props;
}


const color = "#111111";

const Icosahedron = () => (
    <mesh rotation-x={0.35}>
        <icosahedronGeometry args={[1, 0]} />
        <meshBasicMaterial wireframe color={color} />
    </mesh>
);


const Star = ({ p }) => {
    const ref = useRef(null);

    useLayoutEffect(() => {
        const distance = mix(2, 3.5, Math.random());
        const yAngle = mix(
            degreesToRadians(80),
            degreesToRadians(100),
            Math.random()
        );
        const xAngle = degreesToRadians(360) * p;
        ref.current.position.setFromSphericalCoords(distance, yAngle, xAngle);
    }, [p]);

    return (
        <mesh ref={ref}>
            <boxGeometry args={[0.05, 0.05, 0.05]} />
            <meshBasicMaterial wireframe color={color} />
        </mesh>
    );
};

function Scene({ numStars = 200 }) {
    const gl = useThree((state) => state.gl);
    const { scrollYProgress } = useScroll();
    const yAngle = useTransform(
        scrollYProgress,
        [0, 1],
        [0.001, degreesToRadians(180)]
    );
    const distance = useTransform(scrollYProgress, [0, 1], [10, 3]);
    const time = useTime();

    useFrame(({ camera }) => {
        camera.position.setFromSphericalCoords(
            distance.get() ,
            yAngle.get(),
            time.get() * 0.0005
        );
        camera.updateProjectionMatrix();
        camera.lookAt(0, 0, 0);
    });

    useLayoutEffect(() => {
        gl.setPixelRatio(0.3);
    }, [gl]);

    const stars = [];
    for (let i = 0; i < numStars; i++) {
        stars.push(<Star key={i} p={progress(0, numStars, i)} />);
    }

    return (
        <>
            <Icosahedron />
            {stars}
        </>
    );
}

function FramerMotion() {
    return (
        <div className="container-canvas">
            <Canvas gl={{ antialias: false }}>
                <Scene />
            </Canvas>
        </div>
    );
}

export default function SpringReact() {
    const [openContactUs, setOpenContactUs] = useState(false);

    const [props, api] = useSpring(
        () => ({
            from: { opacity: 0, x: 800 },
            to: [
                { opacity: 0.5, x: 400 },
                { opacity: 1, x: 0 }
            ],
            config: {
                duration: 250,
            }
        }),
        []
    )

    const props1 = useSpring({
        from: { opacity: 0, x: 900 },
        to: [
            { opacity: 0.5, x: 450 },
            { opacity: 1, x: 0 }
        ],
        config: {
            duration: 350
        }
    })

    const props2 = useSpring({
        from: { opacity: 0, x: 900 },
        to: [
            { opacity: 0.5, x: 450 },
            { opacity: 1, x: 0 },
        ],
        config: {
            duration: 400,
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

            <FramerMotion/>
            <div className='container-home-main'>
                <div className='nav'>
                    <a onClick={() => null}><i className='pi pi-sign-in'></i>Inicar sesión</a>
                </div>
                {/* <div className='row'></div> */}
                <div>
                    <div className='dising' >
                        <div className='gg'>
                            <animated.div className="gg-symbol gg-symbol--rect gg-symbol--5" style={symbol(5,props)}></animated.div>
                            <animated.div className="gg-symbol gg-symbol--rect gg-symbol--3" style={symbol(3,props1)}></animated.div >
                            <animated.div className="gg-symbol gg-symbol--disc" style={symbol(1,props2)}></animated.div>
                        </div>
                        <div className='gg'>
                            <animated.div className="gg-symbol gg-symbol--rect gg-symbol--8" style={symbol(8,props1)}></animated.div>
                        </div>
                        <div className='gg'>
                            <div className="gg-symbol gg-symbol--rect gg-symbol--square" style={symbol(1)}></div>
                            <div className="gg-symbol gg-symbol--rect gg-symbol--6" style={symbol(6)}></div>
                        </div>
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
