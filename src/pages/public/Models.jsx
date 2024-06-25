import React, { Suspense, useRef, useState } from 'react'
import ThreeScene from '../../components/ThreeScene'
import Sphere from '../../components/Sphere'
import { OrbitControls, Stars, PerspectiveCamera, useProgress, Html } from '@react-three/drei'
import ModelsLoader from '../../components/ModelsLoader'


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

    return (
        <>
            <div style={{ height: '100vh' }}>
                <ThreeScene>
                    <color attach="background" args={['#161c24']} />
                    <PerspectiveCamera
                        ref={cameraRef}
                        position={[0, 2, 5]}
                        fov={75}
                        near={0.1}
                        far={1000}
                        makeDefault
                    />
                    <ambientLight />
                    <directionalLight position={[5, 5, 5]} intensity={1} />
                    <OrbitControls camera={cameraRef.current} />
                    <Stars count={1000} factor={3} />

                    <Suspense fallback={<Loader />}>
                        <ModelsLoader setLoaded={setLoaded} />
                    </Suspense>

                </ThreeScene>
            </div>
        </>
    );
}
