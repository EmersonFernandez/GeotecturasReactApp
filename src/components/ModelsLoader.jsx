import React, { useEffect, useState } from 'react';
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader.js';
import { useLoader } from '@react-three/fiber';
import modelPath from '../assets/terreno.fbx';

const ModelsLoader = ({ setLoaded }) => {
    const [model, setModel] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const loader = new FBXLoader();
        loader.load(modelPath, (fbx) => {
            setModel(fbx);
            // Manipulación del modelo una vez cargado
            fbx.children[2].children.forEach((el) => {
                el.children[0].material.color.setRGB(3, 3, 3);
            });

            fbx.children[1].children.forEach((el) => {
                el.children[0].material.color.setRGB(1.6, 1.6, 1.6);
            });
            setIsLoading(false);
            setLoaded(true); // Marcar como cargado cuando el modelo está listo
        });

        // Limpieza al desmontar el componente
        return () => {
            // loader.dispose(); // Liberar recursos del loader
            // if (model) {
            //     model.traverse((child) => {
            //         if (child.isMesh) {
            //             child.geometry.dispose(); // Liberar geometría de los meshes
            //             child.material.dispose(); // Liberar materiales de los meshes
            //         }
            //     });
            // }
        };
    }, []);

    return (
        <group scale={[0.9, 0.9, 0.1]} rotation={[-Math.PI / 2, 0, 0]} position={[-160, -180, 150]}>
            {model && <primitive object={model} />}
        </group>
    );
};

export default ModelsLoader;
