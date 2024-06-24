import React from 'react'


export default function Sphere({color,position}) {
    return (
        <mesh position={position}>
            <sphereGeometry/>
            <meshStandardMaterial color={color} wireframe/>
        </mesh>
    )
}
