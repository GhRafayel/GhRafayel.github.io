import { Canvas, useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";

function pseudoRandom(seed) {
	const value = Math.sin(seed * 12.9898) * 43758.5453;
	return value - Math.floor(value);
}

function Field({ count, color }) {
	const pointsRef = useRef();

	const positions = useMemo(() => {
		const pos = new Float32Array(count * 3);
		for (let i = 0; i < count; i++) {
			pos[i * 3] = (pseudoRandom(i * 3 + 0.1) - 0.5) * 24;
			pos[i * 3 + 1] = (pseudoRandom(i * 3 + 1.7) - 0.5) * 14;
			pos[i * 3 + 2] = (pseudoRandom(i * 3 + 2.9) - 0.5) * 14;
		}
		return pos;
	}, [count]);

	useFrame((_, delta) => {
		if (!pointsRef.current) return;
		pointsRef.current.rotation.y += delta * 0.02;
		pointsRef.current.rotation.x += delta * 0.006;
	});

	return (
		<points ref={pointsRef}>
			<bufferGeometry>
				<bufferAttribute
					attach="attributes-position"
					count={count}
					array={positions}
					itemSize={3}
				/>
			</bufferGeometry>
			<pointsMaterial
				size={0.045}
				color={color}
				sizeAttenuation
				transparent
				opacity={0.65}
				depthWrite={false}
			/>
		</points>
	);
}

const ParticleField = ({ darkMode }) => {
	const isSmallScreen = typeof window !== "undefined" && window.innerWidth < 768;

	return (
		<div className="fixed inset-0 -z-10 pointer-events-none">
			<Canvas
				camera={{ position: [0, 0, 8], fov: 75 }}
				dpr={[1, 1.5]}
				gl={{ antialias: true, alpha: true }}
			>
				<Field count={isSmallScreen ? 350 : 700} color={darkMode ? "#22c55e" : "#15803d"} />
			</Canvas>
		</div>
	);
};

export default ParticleField;
