import React, { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { Image, Float } from '@react-three/drei';
import * as THREE from 'three';

const Portrait3D = () => {
    const meshRef = useRef();
    const [hovered, setHover] = useState(false);

    // Smooth interaction: tilt towards mouse slightly
    useFrame((state) => {
        if (meshRef.current) {
            const { x, y } = state.mouse;
            // Gentle parallax/tilt
            meshRef.current.rotation.y = THREE.MathUtils.lerp(meshRef.current.rotation.y, x * 0.1, 0.1);
            meshRef.current.rotation.x = THREE.MathUtils.lerp(meshRef.current.rotation.x, -y * 0.1, 0.1);
        }
    });

    return (
        <Float
            speed={2}
            rotationIntensity={0.2}
            floatIntensity={0.5}
            floatingRange={[-0.1, 0.1]}
        >
            <group
                ref={meshRef}
                onPointerOver={() => setHover(true)}
                onPointerOut={() => setHover(false)}
            >
                {/* 1. Neon Rim Light / Glow Backing */}
                <mesh position={[0, 0, -0.05]} scale={[3.1, 4.1, 1]}>
                    <planeGeometry args={[1, 1]} />
                    <meshBasicMaterial
                        color={hovered ? "#bb86fc" : "#4a4a4a"}
                        transparent
                        opacity={0.5}
                    />
                </mesh>

                {/* 2. Glass Frame */}
                <mesh position={[0, 0, -0.01]}>
                    <planeGeometry args={[3.2, 4.2]} />
                    <meshPhysicalMaterial
                        color="#ffffff"
                        transparent
                        opacity={0.1}
                        roughness={0}
                        metalness={0.1}
                        transmission={0.9} // Glass effect
                        thickness={0.1}
                    />
                </mesh>

                {/* 3. The Portrait Image - High Quality */}
                <Image
                    url="/assets/Nikkita.jpeg"
                    scale={[3, 4]}
                    transparent
                    opacity={1}
                    toneMapped={false}
                    radius={0.1} // Rounded corners if Image supports it (Drei Image doesn't strictly support radius props like DOM, but often used with masks. We'll stick to rect for now or overlaid alpha map if needed. Keeping it clean rect is pro too.)
                />

                {/* 4. Soft Shadow (Billboarded or simple plane below/behind) */}
                {/* Using a simple circular shadow sprite logic or gradient plane behind */}
                <mesh position={[0, -2.2, -0.5]} rotation={[-Math.PI / 2, 0, 0]}>
                    <planeGeometry args={[3, 1]} />
                    <meshBasicMaterial
                        color="#000000"
                        transparent
                        opacity={0.4}
                    />
                    {/* Note: Real soft shadow usually implies a texture, but this simple dark plane adds grounding */}
                </mesh>
            </group>
        </Float>
    );
};

export default Portrait3D;
