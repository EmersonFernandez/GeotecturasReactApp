import { Canvas } from '@react-three/fiber'
import React from 'react'
import { Bottle } from './Bottle'
import hdr from '../assets/Bottles/snowy_park_01_1k.hdr'
import { PerspectiveCamera, OrbitControls, Environment, ScrollControls } from '@react-three/drei'

export default function Scene() {
    return (
        <div className='container-3d '>
            <Canvas className='canvas' camera={{ fov: 35, position: [0, 2, 12] }}>
                <ambientLight intensity={0.8} color={"#FFFFFF"} />
                <ScrollControls pages={4} damping={0.5} >
                    <Bottle />
                </ScrollControls>
                <OrbitControls target={[0, 2, 0]} enableZoom={false} enableRotate={false} />
                <Environment files={hdr} blur={0.5} />
            </Canvas>
        </div>
    )
}
