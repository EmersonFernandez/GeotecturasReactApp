import React, { Suspense, useRef, useState, useEffect } from 'react';
import ThreeScene from '../../components/ThreeScene';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Stars, PerspectiveCamera, useProgress, Html, Sky, PresentationControls, MeshReflectorMaterial, Stage, Environment } from '@react-three/drei';
import ModelsLoader from '../../components/ModelsLoader';
// import hdr from '../../assets/recursos/hdr/decor_shop_1k.hdr'
import Tooltip from '../../components/Tooltip';

export default function Models() {
    const cameraRef = useRef();
    const [loaded, setLoaded] = useState(false);

    function Loader() {
        const { active, progress } = useProgress();

        return (
            <Html center>
                {active && (
                    <div style={{ textAlign: 'center', color: 'white' }}>
                        <div className="progress-bar-outer">
                            <div
                                className="progress-bar-inner"
                                style={{ width: `${progress * 100}%` }}
                            />
                        </div>
                        <div>{Math.floor(progress * 100)}% loaded</div>
                    </div>
                )}
            </Html>
        );
    }

    useEffect(() => {
        if (cameraRef.current) {
            cameraRef.current.rotation.set(-Math.PI / 2, -Math.PI / 2, -Math.PI / 2); // Adjust these values for desired initial rotation
        }
    }, []);

    return (
        <>
            <div style={{ height: '100vh' }}>
                <Tooltip data={{ name: 'Nombres ya estan' }} />
                <ThreeScene>
                    {/* <Environment files={hdr} /> */}
                    <color attach="background" args={['#161c24']} />
                    <PerspectiveCamera
                        ref={cameraRef}
                        position={[-100.31190225088316, 30.492793327644744, -100.43008731316462]}
                        fov={20}
                        near={0.1}
                        far={3000}
                        makeDefault
                    />
                    <ambientLight intensity={2} />
                    <directionalLight
                        position={[10, 10, 10]}
                        intensity={1}
                        castShadow
                    />
                    <Sky
                        distance={450000}
                        sunPosition={[5, 2, 8]}
                        inclination={4}
                        azimuth={2}
                    />

                    <OrbitControls
                        enableZoom={true}
                        zoomSpeed={1.0}
                        minDistance={0.001}
                        maxDistance={1000}
                        enablePan={true}
                    />

                    <Stage environment="city" intensity={0.6} castShadow={false}>
                        <ModelsLoader url={`${import.meta.env.VITE_URL_API}/models/arquitectonico/5`} position={[-160, -1710, 150]} scale={[1, 1, 1]} />
                    </Stage>

                </ThreeScene>
            </div>
        </>
    );
}
