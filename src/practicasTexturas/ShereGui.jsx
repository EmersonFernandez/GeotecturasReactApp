import React, { useState, useTransition, useRef, useEffect, useMemo } from 'react';
import { useControls } from 'leva';
import { Canvas, useLoader } from '@react-three/fiber';
import * as THREE from 'three'
import { TextureLoader } from 'three';
import { AccumulativeShadows, RandomizedLight, Center, Environment, OrbitControls } from '@react-three/drei';

import normal from '../assets/texturas/textures2/patterned_cobblestone_02_nor_gl_2k.jpg'
import ao from '../assets/texturas/textures2/patterned_cobblestone_02_ao_2k.jpg'
import rough from '../assets/texturas/textures2/patterned_cobblestone_02_rough_2k.jpg'
import map from '../assets/texturas/textures2/patterned_cobblestone_02_diff_2k.jpg'
import disp from '../assets/texturas/textures2/patterned_cobblestone_02_disp_2k.jpg'
import arm from  '../assets/texturas/textures2/patterned_cobblestone_02_arm_2k.jpg'

export default function SphereGui() {
    const [shadowScale, setShadowScale] = useState(10); // Inicialmente escala de la sombra
    const { numero } = useControls('Numeros', {
        numero: {
            value: 0, // Valor inicial
            min: 0, // Valor mínimo
            max: 100, // Valor máximo
            step: 1, // Incremento de cada paso
            label: 'Número', // Etiqueta
        },
    }, {
        collapsed: false,
        color: '#5733FF',
    });

    return (
        <Canvas shadows camera={{ position: [0, 0, 4.5], fov: 50 }}>
            {/* <color attach="background" args={[color.value]} /> */}

            <group position={[0, -0.65, 0]}>
                <ambientLight intensity={4} position={[100,100,100]}/>
                <directionalLight intensity={4} position={[-100,50,-100]}/>
                <Sphere setShadowScale={setShadowScale} />
                <AccumulativeShadows
                    temporal frames={200} color="purple" colorBlend={0.5} opacity={0.9}
                    scale={shadowScale} alphaTest={0.74}
                >
                    <RandomizedLight amount={8} radius={5} ambient={0.5} position={[5, 3, 2]} bias={0.001} />
                </AccumulativeShadows>
            </group>
            <Env />
            {/* minPolarAngle={Math.PI / 2.1} maxPolarAngle={Math.PI / 2.1}  */}
            <OrbitControls autoRotateSpeed={4} enablePan={true} enableZoom={false} />
        </Canvas>
    );
}

function Sphere({ setShadowScale }) {
    const normalMap = useLoader(TextureLoader, normal);
    const aoMap = useLoader(TextureLoader, ao);
    const roughnessMap = useLoader(TextureLoader,rough);
    const texturaMap = useLoader(TextureLoader,map);
    const displacementMap = useLoader(TextureLoader,disp);
    // const arm = useLoader(TextureLoader,arm);

    const { roughness, radius } = useControls({
        roughness: { value: 1, min: 0, max: 1 },
        radius: { value: 0.75, min: 0.1, max: 0.75, name: 'Radio de la Esfera' } // Control para ajustar el radio de la esfera con nombre personalizado
    });

    const { color } = useControls('Color Sphere', {
        color: {
            value: '#ffffff',
            label: 'Backgorung'
        },
    }, {
        collapsed: false,
        color: '#1BC727',
    });

    // Actualiza la escala de la sombra cuando cambia el radio de la esfera
    useEffect(() => {
        setShadowScale(10 / 0.75 * radius);
    }, [radius, setShadowScale]);

    return (
        <Center top>
            <mesh castShadow>
                <sphereGeometry args={[radius, 64, 64]} />
                <meshStandardMaterial
                    map={texturaMap}
                    metalness={1}
                    roughness={roughness}
                    displacementMap={displacementMap}
                    displacementScale={0.03}
                    // color={color}
                    normalMap={normalMap}
                    aoMap={aoMap}
                    aoMapIntensity={1}
                    roughnessMap={roughnessMap}
                />


            </mesh>
        </Center>
    );
}

function Env() {
    const [preset, setPreset] = useState('sunset');
    const [inTransition, startTransition] = useTransition();
    const { blur } = useControls({
        blur: { value: 0.65, min: 0, max: 1 },
        preset: {
            value: preset,
            options: ['sunset', 'dawn', 'night', 'warehouse', 'forest', 'apartment', 'studio', 'city', 'park', 'lobby'],
            onChange: (value) => startTransition(() => setPreset(value))
        }
    });

    return <Environment preset={preset} background backgroundBlurriness={blur} />;
}
