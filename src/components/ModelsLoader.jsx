import React from 'react'
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader.js'
import { useLoader } from '@react-three/fiber'
import model from '../assets/model.fbx'

export default function ModelsLoader() {
    const geom = useLoader(FBXLoader, model);
    return (
        <group scale={[0.01, 0.01, 0.01]}>
            <primitive object={geom} />
        </group>
    )
}
