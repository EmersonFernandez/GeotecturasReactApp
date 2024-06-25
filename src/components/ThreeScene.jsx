import React from 'react';
import { Canvas, useThree } from '@react-three/fiber';

export default function ThreeScene({ children }) {
    return (
        <Canvas>
            <SceneContents />
            {children}
        </Canvas>
    );
}

function SceneContents() {
    const { scene, camera, gl } = useThree();
    console.log(scene); // Imprime la escena en la consola del navegador

    return null; // No renderiza ningún elemento en sí mismo
}
