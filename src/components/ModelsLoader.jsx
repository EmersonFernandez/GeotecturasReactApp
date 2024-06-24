import React from 'react'
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader.js'
import { useLoader } from '@react-three/fiber'
import model from '../assets/terreno.fbx'

export default function ModelsLoader() {
    const geom = useLoader(FBXLoader, model);
    return (
        <group scale={[0.1, 0.1, 0.1]} rotation={[-Math.PI / 2, 0, 0]} position={[0,-180,0]}>
            <primitive object={geom} />
        </group>
    )
}
