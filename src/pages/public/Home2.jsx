import React, { Suspense, useRef, useState } from 'react';
import { Canvas, useLoader } from '@react-three/fiber';
import { Environment, Html, OrbitControls, PerspectiveCamera } from '@react-three/drei';
import * as THREE from 'three';
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader';
import { Text3D } from '@react-three/drei';
import font1 from '../../assets/fonts/unione.json';
import font2 from '../../assets/fonts/helvatica.json';
import PageHome from '../../components/PageHome';
import ModelsLoader from '../../components/ModelsLoader';
import { Logo3D } from '../../components/Logo3D';

const IntroText = () => {
    return (
        <group position={[0,0,0]}>
            <Text3D
                font={font1}
                size={0.12}
                height={0}
                curveSegments={12}
                bevelEnabled={false}
                position={[-0.27, 0.7, 0.7]}
                // rotation={[0, Math.PI * 0.5, 0]}
            >
                Geotecturas
                <meshStandardMaterial attach="material" color="#1696ba" />
            </Text3D>

            <Text3D
                font={font2}
                size={0.04}
                height={0}
                curveSegments={12}
                bevelEnabled={false}
                position={[-0.27, 0.6, 0.7]}
                // rotation={[0, Math.PI * 0.5, 0]}
            >
                Una solución para tus problemas
                <meshStandardMaterial attach="material" color="#0b4b5d" />
            </Text3D>
        </group>
    );
};

const Home2 = () => {
    const orbit = useRef();
    const [position, setPosition] = useState({
        x: 0,
        y: 0.5,
        z: 3
    });

    return (
        <div style={{ width: '100%', height: '100vh' }} className='__homeRoom'>
            <Canvas
                shadows
                gl={{
                    outputEncoding: THREE.sRGBEncoding,
                    toneMapping: THREE.ACESFilmicToneMapping,
                    toneMappingExposure: 1.4,
                    antialias: true
                }}
            >
                <color attach="background" args={['#131842']} />
                {/* <IntroText /> */}


                <ambientLight intensity={1} />
                <pointLight color={0xffffff} intensity={0.6} position={[0, 1, 0]} />

                <directionalLight
                    color={0xffffff}
                    intensity={0.6}
                    position={[10, 10, 10]}
                    castShadow
                />

                <PerspectiveCamera
                    fov={40}
                    near={0.01}
                    far={1000}
                    position={[position.x, position.y, position.z]}
                    makeDefault
                />

                <Suspense fallback={null}>
                    <group>
                        <Html as="div" prepend center>
                            <PageHome />
                        </Html>
                        <Logo3D />
                    </group>


                </Suspense>

                <OrbitControls
                    autoRotate
                    ref={orbit}
                    enablePan={false}
                    enableZoom={true}
                    // target={[1, 1, 1]}
                />
            </Canvas>
        </div>
    );
};

export default Home2;
