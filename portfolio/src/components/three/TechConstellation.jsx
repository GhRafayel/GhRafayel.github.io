import { Canvas, useFrame } from "@react-three/fiber";
import { Html, OrbitControls, MeshDistortMaterial } from "@react-three/drei";
import { useMemo, useRef } from "react";

function fibonacciSphere(count, radius) {
	const points = [];
	const offset = 2 / count;
	const increment = Math.PI * (3 - Math.sqrt(5));

	for (let i = 0; i < count; i++) {
		const y = i * offset - 1 + offset / 2;
		const r = Math.sqrt(Math.max(0, 1 - y * y));
		const phi = i * increment;
		points.push([Math.cos(phi) * r * radius, y * radius, Math.sin(phi) * r * radius]);
	}
	return points;
}

function CoreSphere({ color }) {
	const meshRef = useRef();
	useFrame((_, delta) => {
		meshRef.current.rotation.y += delta * 0.15;
		meshRef.current.rotation.x += delta * 0.05;
	});
	return (
		<mesh ref={meshRef}>
			<sphereGeometry args={[1.15, 48, 48]} />
			<MeshDistortMaterial color={color} distort={0.35} speed={1.6} wireframe transparent opacity={0.8} />
		</mesh>
	);
}

function SkillRing({ skills, radius, darkMode }) {
	const groupRef = useRef();
	const points = useMemo(() => fibonacciSphere(skills.length, radius), [skills.length, radius]);

	useFrame((_, delta) => {
		groupRef.current.rotation.y += delta * 0.09;
	});

	return (
		<group ref={groupRef}>
			{skills.map((skill, i) => (
				<Html key={skill.name} position={points[i]} center distanceFactor={9} zIndexRange={[10, 0]}>
					<div
						title={skill.name}
						className="w-9 h-9 sm:w-11 sm:h-11 rounded-lg bg-white/90 border border-white/60 shadow-lg p-1.5 flex items-center justify-center backdrop-blur-sm transition-transform duration-200 hover:scale-125 hover:z-10 select-none"
					>
						{skill.Icon
							? <skill.Icon className="w-full h-full" style={{ color: darkMode && skill.darkColor ? skill.darkColor : skill.color }} />
							: <img src={skill.icon} alt={skill.name} className="w-full h-full object-contain" draggable={false} />
						}
					</div>
				</Html>
			))}
		</group>
	);
}

const TechConstellation = ({ darkMode, skills }) => {
	const color = darkMode ? "#22c55e" : "#15803d";

	return (
		<div className="w-full h-[360px] sm:h-[440px] lg:h-[500px] touch-pan-y">
			<Canvas camera={{ position: [0, 0, 8.5], fov: 45 }} dpr={[1, 1.5]}>
				<ambientLight intensity={0.7} />
				<pointLight position={[5, 5, 5]} intensity={1.3} color={color} />
				<CoreSphere color={color} />
				<SkillRing skills={skills} radius={2.7} darkMode={darkMode} />
				<OrbitControls
					enableZoom={false}
					enablePan={false}
					autoRotate
					autoRotateSpeed={0.7}
					rotateSpeed={0.5}
				/>
			</Canvas>
		</div>
	);
};

export default TechConstellation;
