import { useFrame } from '@react-three/fiber';
import { Image, Float } from '@react-three/drei';

const Portrait3D = () => {
    const meshRef = useRef();
    const [hovered, setHover] = useState(false);

    // Smooth rotation towards mouse
    useFrame((state) => {
        if (meshRef.current) {
            const { x, y } = state.mouse;
            // Soft look-at effect
            meshRef.current.rotation.y = x * 0.2; // Rotate Y based on Mouse X
            meshRef.current.rotation.x = -y * 0.2; // Rotate X based on Mouse Y
        }
    });

    return (
        <Float speed={2} rotationIntensity={0.2} floatIntensity={0.5} floatingRange={[-0.1, 0.1]}>
            <group
                ref={meshRef}
                onPointerOver={() => setHover(true)}
                onPointerOut={() => setHover(false)}
            >
                {/* Glass Frame Backing */}
                <mesh position={[0, 0, -0.1]}>
                    <planeGeometry args={[3.2, 4.2]} />
                    <meshPhysicalMaterial
                        color={hovered ? "#bb86fc" : "#ffffff"}
                        transparent
                        opacity={0.1}
                        metalness={0.8}
                        roughness={0.2}
                        clearcoat={1}
                    />
                </mesh>

                {/* The Image */}
                <Image
                    url="/assets/Nikkita.jpeg"
                    scale={[3, 4]}
                    transparent
                    opacity={1}
                    toneMapped={false}
                />

                {/* Simple "Glow" behind */}
                <pointLight position={[0, 0, -1]} intensity={hovered ? 2 : 0.5} color="#bb86fc" distance={5} />
            </group>
        </Float>
    );
};

export default Portrait3D;
