import React, { Suspense, useState, useEffect, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Environment, OrbitControls } from '@react-three/drei';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { useLoader } from '@react-three/fiber';
import car from './Models/nissan_skyline_gtr_r35.glb';

function Model({ model, position, rotation }) {
    const gltf = useLoader(GLTFLoader, model);
    return <primitive object={gltf.scene} position={position} rotation={rotation} />;
}

export default function Car() {
    const [position, setPosition] = useState([0, 0, 0]);
    const [rotation, setRotation] = useState([0, 0, 0]);
    const [direction, setDirection] = useState(0); // Angle in radians

    const handleKeyDown = (event) => {
        if (event.key === 'ArrowUp') {
            setPosition((prev) => [
                prev[0] + Math.sin(direction) * 0.1,
                prev[1],
                prev[2] - Math.cos(direction) * 0.1
            ]);
        } else if (event.key === 'ArrowDown') {
            setPosition((prev) => [
                prev[0] - Math.sin(direction) * 0.1,
                prev[1],
                prev[2] + Math.cos(direction) * 0.1
            ]);
        } else if (event.key === 'ArrowLeft') {
            setDirection((prev) => prev + 0.1);
            setRotation([0, direction + 0.1, 0]);
        } else if (event.key === 'ArrowRight') {
            setDirection((prev) => prev - 0.1);
            setRotation([0, direction - 0.1, 0]);
        }
    };

    useEffect(() => {
        window.addEventListener('keydown', handleKeyDown);
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [direction]);

    return (
        <Canvas style={{ height: '100vh', width: '100vw' }}>
            <color attach="background" args={['#f0f0f0']} />
            <ambientLight intensity={0.6} />
            <pointLight position={[10, 10, 10]} />
            <Suspense fallback={null}>
                <Model model={car} position={position} rotation={rotation} />
            </Suspense>
            <Environment preset="sunset" />
            <OrbitControls />
        </Canvas>
    );
}
