import React, {Suspense} from 'react'
import ThreeScene from '../../components/ThreeScene'
import Sphere from '../../components/Sphere'
import {OrbitControls, Stars} from '@react-three/drei'
import ModelsLoader from '../../components/ModelsLoader'


export default function Models() {
    return (
        <>
            <div style={{height:'100vh'}}>
                <ThreeScene>
                    <color attach="background" args={['#161c24']} />
                    {/* <Sphere color="#00ff00" position={[-2,0,4]} />
                    <Sphere color="#ff0000"  position={[2,0,-4]} /> */}
                    <Suspense fallback={null}>
                    <ModelsLoader />
                    </Suspense>
                    <ambientLight/>
                    <OrbitControls autoRotate/>
                    <Stars count={1000} factor={3}/>
                </ThreeScene>
            </div>
        </>
    )
}
