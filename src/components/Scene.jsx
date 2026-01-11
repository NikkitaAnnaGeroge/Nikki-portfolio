import React, { useRef } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { Stars, Float } from '@react-three/drei';
import Portrait3D from './3DPortrait';

const FloatingShape = ({ position, color, speed = 1, rotationIntensity = 1, floatIntensity = 1, scale = 1 }) => {
    return (
        <Float
            speed={speed}
            rotationIntensity={rotationIntensity}
            floatIntensity={floatIntensity}
            position={position}
        >
            <mesh scale={scale}>
                <icosahedronGeometry args={[1, 0]} />
                <meshStandardMaterial
                    color={color}
                    transparent
                    opacity={0.4}
                    wireframe={true}
                />
            </mesh>
        </Float>
    );
};

const BackgroundParticles = () => {
    const ref = useRef();
    useFrame((state) => {
        // Subtle rotation of the entire starfield
        if (ref.current) {
            ref.current.rotation.y = state.clock.getElapsedTime() * 0.05;
            ref.current.rotation.x = state.clock.getElapsedTime() * 0.02;
        }
    });

    return (
        <group ref={ref}>
            <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
        </group>
    );
};

const Scene = () => {
    const { mouse } = useThree();
    const lightRef = useRef();

    useFrame(() => {
        // Move light based on mouse position for interactive lighting
        if (lightRef.current) {
            lightRef.current.position.x = mouse.x * 10;
            lightRef.current.position.y = mouse.y * 10;
        }
    });

    return (
        <>
            <color attach="background" args={['#050505']} />
            <BackgroundParticles />

            {/* Interactive moving light */}
            <pointLight ref={lightRef} position={[0, 0, 5]} intensity={2} color="#bb86fc" distance={20} />

            {/* Hero Section Portrait - Positioned to the right */}
            {/* Adjust coordinates to match Hero layout. x=3 pushes it to the right column on desktop */}
            <group position={[3, 0, 0]}>
                <Portrait3D />
            </group>

            {/* Floating geometric shapes for depth */}
            <FloatingShape position={[-5, 2, -10]} color="#00f2ea" scale={1.5} />
            <FloatingShape position={[5, -2, -15]} color="#bb86fc" scale={2} speed={1.5} />
            <FloatingShape position={[-8, -5, -8]} color="#ffffff" scale={1} floatIntensity={2} />
            <FloatingShape position={[8, 5, -12]} color="#00f2ea" scale={1.2} rotationIntensity={2} />
        </>
    );
};

export default Scene;
