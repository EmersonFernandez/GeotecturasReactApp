import React, { Suspense, useRef, useState, useEffect } from 'react';
import ThreeScene from '../../components/ThreeScene';
import { Canvas, useFrame } from '@react-three/fiber';
import Sphere from '../../components/Sphere';
import { OrbitControls, Stars, PerspectiveCamera, useProgress, Html, Sky, PresentationControls ,MeshReflectorMaterial} from '@react-three/drei';
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

    useEffect(() => {
        if (cameraRef.current) {
            cameraRef.current.rotation.set(-Math.PI / 2, 0, 0); // Adjust these values for desired initial rotation
        }
    }, []);

    return (
        <>
            <div style={{ height: '100vh' }}>
                <ThreeScene>
                    {/* <PresentationControls
                        speed={0.5}
                    // global
                    // polar={[-0.1, Math.PI / 4]}
                    // rotation={[Math.PI /2 , 0 , 0]}
                    >
 */}

                        <color attach="background" args={['#161c24']} />
                        <PerspectiveCamera
                            ref={cameraRef}
                            position={[-21.237734429428745, -3.3392068362505003, -77.47819117414106]}
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

                        <mesh rotation={[-Math.PI / 2, 0, 0]} position-y={-2}>
                            <planeGeometry args={[170, 170]} />
                            <MeshReflectorMaterial
                                blur={[300, 100]}
                                resolution={2048}
                                mixBlur={1}
                                mixStrength={40}
                                roughness={1}
                                depthScale={1.2}
                                minDepthThreshold={0.4}
                                maxDepthThreshold={1.4}
                                color="#101010"
                                metalness={0.5}
                            />
                        </mesh>
                    {/* </PresentationControls> */}
                </ThreeScene>
            </div>
        </>
    );
}
