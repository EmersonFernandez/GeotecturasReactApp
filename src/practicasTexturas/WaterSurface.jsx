import waterTexture from '../assets/texturas/waternormals.jpeg'; // Asegúrate de que la ruta sea correcta WaterSurface
import * as THREE from 'three'
import React, { Suspense, useRef, useMemo } from 'react'
import { Canvas, extend, useThree, useLoader, useFrame } from '@react-three/fiber'
import { OrbitControls, Sky } from '@react-three/drei'
import { Water } from 'three-stdlib'

extend({ Water })

function Ocean() {
    const ref = useRef()
    const gl = useThree((state) => state.gl)
    const waterNormals = useLoader(THREE.TextureLoader, waterTexture)
    waterNormals.wrapS = waterNormals.wrapT = THREE.RepeatWrapping
    const geom = useMemo(() => new THREE.PlaneGeometry(10000, 10000), [])
    const config = useMemo(
        () => ({
            textureWidth: 512,
            textureHeight: 512,
            waterNormals, // la textura
            sunDirection: new THREE.Vector3(0, 1, 0), // Dirección del sol (eje Y positivo)
            sunColor: 'red',
            waterColor: '#1F91DC',
            distortionScale: 3.7,
            fog: false,
            format: gl.encoding
        }),
        [waterNormals]
    )
    useFrame((state, delta) => (ref.current.material.uniforms.time.value += delta))
    return <water ref={ref} args={[geom, config]} rotation-x={-Math.PI / 2} />
}

function Box() {
    const ref = useRef()
    useFrame((state, delta) => {
        ref.current.position.y = 10 + Math.sin(state.clock.elapsedTime) * 20
        ref.current.rotation.x = ref.current.rotation.y = ref.current.rotation.z += delta
    })
    return (
        <mesh ref={ref} scale={20}>
            <boxGeometry />
            <meshStandardMaterial />
        </mesh>
    )
}

export default function WaterSurface() {
    return (
        <div style={{width:'100%', height:'100vh'}}>
            <Canvas camera={{ position: [0, 5, 200], fov: 55, near: 1, far: 20000 }}>
                <ambientLight />
                <pointLight position={[-10, 30, 10]} color="red" intensity={4}/>
                <pointLight position={[10, 10, 10]} />
                <Suspense fallback={null}>
                    <Ocean />
                    <Box />
                </Suspense>
                <Sky scale={1000} sunPosition={[0, 500, -1000]} turbidity={0.1} />
                <OrbitControls />
            </Canvas>
        </div>
    )
}
