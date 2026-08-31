import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";

function GridFloor({ color }) {
	const meshRef = useRef();

	useFrame((_, delta) => {
		meshRef.current.rotation.z += delta * 0.03;
	});

	return (
		<mesh ref={meshRef} rotation={[Math.PI / 2.3, 0, 0]} position={[0, -0.6, 0]}>
			<planeGeometry args={[12, 12, 24, 24]} />
			<meshBasicMaterial color={color} wireframe transparent opacity={0.22} />
		</mesh>
	);
}

const ProjectsHeaderScene = ({ darkMode }) => {
	const color = darkMode ? "#22c55e" : "#15803d";

	return (
		<div className="absolute inset-x-0 top-0 h-64 sm:h-80 -z-10 overflow-hidden pointer-events-none">
			<Canvas camera={{ position: [0, 1.4, 4], fov: 55 }} dpr={[1, 1.5]}>
				<GridFloor color={color} />
			</Canvas>
		</div>
	);
};

export default ProjectsHeaderScene;
