import React, { Suspense, useRef, useState, useEffect } from 'react';
import ThreeScene from '../../components/ThreeScene';
import { Canvas, useFrame } from '@react-three/fiber';
import Sphere from '../../components/Sphere';
import { OrbitControls, Stars, PerspectiveCamera, useProgress, Html, Sky } from '@react-three/drei';
import ModelsLoader from '../../components/ModelsLoader';

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

    // useEffect(() => {
    //     if (cameraRef.current) {
    //         cameraRef.current.rotation.set(-0.5348537447251815, 0.00902461966868703, 0.0053465637374831); // Adjust these values for desired initial rotation
    //     }
    // }, []);

    return (
        <>
            <div style={{ height: '100vh' }}>
                <ThreeScene>
                    <color attach="background" args={['#161c24']} />
                    <PerspectiveCamera
                        ref={cameraRef}
                        position={[0, 270, 350]}
                        fov={40}
                        near={0.1}
                        far={1000}
                        makeDefault
                    />
                    <ambientLight intensity={1} />
                    <pointLight position={[10, 10, 10]} />
                    <Sky
                        distance={450000} // Distance of the sky
                        sunPosition={[5, 2, 8]} // Position of the sun
                        inclination={4} // Sun inclination
                        azimuth={2} // Sun azimuth
                    />

                    <OrbitControls
                        enableZoom={true}
                        zoomSpeed={3.0}
                        minDistance={0.1} // Adjusted min distance
                        maxDistance={1000} // Adjusted max distance
                        enablePan={true}
                        // target={[0, -100, 0]}
                    />

                    <Suspense fallback={<Loader />}>
                        <ModelsLoader setLoaded={setLoaded} />
                    </Suspense>

                </ThreeScene>
            </div>
        </>
    );
}
