import React, { useEffect, useState } from 'react';
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader.js';
import { useLoader, useThree } from '@react-three/fiber';
import * as THREE from 'three';

const ModelsLoader = ({ url, position, isTerreno, scale }) => {
    const [model, setModel] = useState(null);
    const { scene, camera, gl } = useThree();

    const fbx = useLoader(FBXLoader, url);

    useEffect(() => {
        if (fbx) {
            console.log(fbx);
            console.log(scene);




            if (isTerreno) {
                //  terreno
                fbx.children[2].children.forEach((el) => {
                    el.children[0].material.color = new THREE.Color(3, 3, 3);
                });

                fbx.children[1].children.forEach((el) => {
                    el.children[0].material.color = new THREE.Color(1.6, 1.6, 1.6);
                });

                fbx.traverse((child) => {
                    if (child.isMesh) {
                        const material = new THREE.MeshBasicMaterial({ color: 0xffffff });
                        child.material = material;
                    }
                });
                // fbx.children[2].children[0].children[0].material = <meshBasicMaterial color={0xffffff}/>  
            }

            setModel(fbx);
        }
    }, [fbx]);

    if (!model) {
        return null; // Or a loading spinner if preferred
    }

    return (
        <group scale={scale} rotation={[-Math.PI / 2, 0, 0]} position={position}>
            <primitive object={model} />
        </group>
    );
};

export default ModelsLoader;
