import React, { useEffect, useState, useCallback } from 'react';
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader.js';
import { useLoader, useThree } from '@react-three/fiber';
import * as THREE from 'three';
import { TextureLoader } from 'three';

// import urlColorMap from '../assets/recursos/bricks/basecolor.jpg';
// import urlNormal from '../assets/recursos/bricks/normal.jpg';
// import urlRou from '../assets/recursos/bricks/roughness.jpg';
// import { Html } from '@react-three/drei';
// import Tooltip from './Tooltip';

const ModelsLoader = ({ url, position, isTerreno, scale }) => {
    const [model, setModel] = useState(null);
    const { scene, camera, gl } = useThree();

    // const colorMap = useLoader(TextureLoader, urlColorMap);
    // const normalMap = useLoader(TextureLoader, urlNormal);
    // const roughnessMap = useLoader(TextureLoader, urlRou);

    const fbx = useLoader(FBXLoader, url);

    useEffect(() => {
        if (fbx) {
            if (isTerreno) {
                //  terreno
                fbx.children[2].children.forEach((el) => {
                    el.children[0].material.color = new THREE.Color(3, 3, 3);
                });

                fbx.children[1].children.forEach((el) => {
                    el.children[0].material.color = new THREE.Color(1.6, 1.6, 1.6);
                });
            }

            fbx.traverse((child) => {
                if (child.isMesh) {
                    child.castShadow = true;
                    child.receiveShadow = true;
                }
            });

            setModel(fbx);
            console.log(fbx);
        }
    }, [fbx, isTerreno]);

    const handlePointerOver = useCallback((event) => {
        event.stopPropagation();
        console.log('Mouse over', event.object.name);
    }, []);

    const handlePointerDown = useCallback((event) => {
        event.stopPropagation();
        // event.object.material.map = colorMap;
        // event.object.material.normalMap = normalMap;
        // event.object.material.roughnessMap = roughnessMap;
        // event.object.material.needsUpdate = true;
        console.log('Pointer down on', event.object.parent.parent.name);
    }, []); // colorMap, normalMap, roughnessMap

    if (!model) {
        return null; // O un spinner de carga si se prefiere
    }

    return (
        <group
            scale={scale}
            rotation={[-Math.PI / 2, 0, 0]}
            position={position}
        >
            {model.children.map((child, index) => (
                <primitive
                    key={index}
                    object={child}
                    onPointerOver={handlePointerOver}
                    onPointerDown={handlePointerDown}
                />
            ))}
        </group>
    );
};

export default ModelsLoader;
