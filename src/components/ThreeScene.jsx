import React from 'react'
// three.js
import { Canvas } from '@react-three/fiber'

export default function ThreeScene({children}) {
    return (
        <>
            <Canvas>
                {children}
            </Canvas>
        </>
    )
}
