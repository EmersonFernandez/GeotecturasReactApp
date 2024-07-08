
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import bottle from '../assets/Bottles/Bottle.glb'

export function Bottle(props) {
    const { nodes, materials } = useGLTF(bottle)
    return (
        <group {...props} dispose={null}>
            <mesh name="Bottle" geometry={nodes.Bottle.geometry} material={nodes.Bottle.material} />
            <mesh name="Soda" geometry={nodes.Soda.geometry} material={nodes.Soda.material} />
            <mesh name="Brand" geometry={nodes.Brand.geometry} material={nodes.Brand.material} />
            <mesh name="Cap" geometry={nodes.Cap.geometry} material={nodes.Cap.material} />
        </group>
    )
}

useGLTF.preload(bottle)
