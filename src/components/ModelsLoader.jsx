import React, { useEffect, useState } from 'react';
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader.js';
import { useLoader,useThree } from '@react-three/fiber';
import * as THREE from 'three';

const ModelsLoader = () => {
    const [model, setModel] = useState(null);
    const { scene, camera, gl } = useThree();

    const fbx = useLoader(FBXLoader, `${import.meta.env.VITE_URL_API}/models/arquitectonico/2`);

    useEffect(() => {
        if (fbx) {
            console.log(fbx);
            console.log(scene);



            // Manipulate the model
            // fbx.children[2].children.forEach((el) => {
            //     el.children[0].material.color = new THREE.Color(3, 3, 3);
            // });

            // fbx.children[1].children.forEach((el) => {
            //     el.children[0].material.color = new THREE.Color(1.6, 1.6, 1.6);
            // });


            setModel(fbx);
        }
    }, [fbx]);

    if (!model) {
        return null; // Or a loading spinner if preferred
    }

    return (
        <group scale={[0.9, 0.9, 0.1]} rotation={[-Math.PI / 2, 0, 0]} position={[-160, -166.5, 150]}>
            <primitive object={model} />
        </group>
    );
};

export default ModelsLoader;
