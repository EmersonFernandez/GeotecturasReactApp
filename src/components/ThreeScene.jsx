import React from 'react';
import { Canvas, useThree } from '@react-three/fiber';
import * as THREE from 'three'

export default function ThreeScene({ children }) {
    return (
        <Canvas shadows
            gl={{
                antialias: true,
                toneMapping: THREE.ReinhardToneMapping,
                toneMappingExposure: 1.5
            }}
        >
            {children}
        </Canvas>
    );
}


