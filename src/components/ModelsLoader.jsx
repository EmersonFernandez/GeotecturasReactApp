import React, { useEffect, useRef } from 'react';
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader.js';
import { useLoader } from '@react-three/fiber';
import { LoadingManager } from 'three';
import model from '../assets/terreno.fbx';

export default function ModelsLoader({ setLoaded }) {
    const manager = useRef(new LoadingManager());
    const [geom, setGeom] = React.useState(null);

    useEffect(() => {
        const loader = new FBXLoader(manager.current);
        loader.load(model, (loadedGeom) => {
            setGeom(loadedGeom);
            setLoaded(true);
            loadedGeom.children[2].children.map((el,index) => {
                el.children[0].material.color.setRGB(3, 3, 3)
            });

            loadedGeom.children[1].children.map((el,index) => {
                el.children[0].material.color.setRGB(1.6, 1.6, 1.6)
                console.log(el);
            })
        });
    }, [setLoaded]);

    if (!geom) {
        return null; // Or render a loading indicator
    }

    return (
        <group scale={[0.1, 0.1, 0.1]} rotation={[-Math.PI / 2, 0, 0]} position={[0, -180, 0]}>
            <primitive object={geom} />
        </group>
    );
}
