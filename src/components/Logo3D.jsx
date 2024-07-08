
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import logo from '../assets/Logo3D.gltf'

export function Logo3D(props) {
    const { nodes, materials } = useGLTF(logo)
    return (
        <group {...props} dispose={null} scale={[0.1,0.1,0.1]} position={[0,-0.6,0]}>
            <mesh castShadow receiveShadow geometry={nodes.Mesh1.geometry} material={materials._auto_1} />
            <mesh castShadow receiveShadow geometry={nodes.Mesh2.geometry} material={materials._auto_1} />
            <mesh castShadow receiveShadow geometry={nodes.Mesh3.geometry} material={materials._auto_} />
        </group>
    )
}

useGLTF.preload(logo)