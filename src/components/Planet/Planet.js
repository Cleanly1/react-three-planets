import React, { useRef } from "react";
import { a } from "react-spring/three";
import { useFrame } from "react-three-fiber";

const Planet = ({ radius, color, x, y, z, scale, vel }) => {
	const group = useRef();

	useFrame(() => {
		group.current.rotation.y += vel * 0.01;
	});
	return (
		<group ref={group}>
			<a.mesh scale={scale} position={[x, y, z]}>
				<sphereBufferGeometry
					attach="geometry"
					args={[radius, 32, 32]}
				/>
				<a.meshStandardMaterial attach="material" color={color} />
			</a.mesh>
		</group>
	);
};

export default Planet;
