import React, { useState, useRef } from "react";
import { useSpring, a } from "react-spring/three";
import { useFrame } from "react-three-fiber";

const Planet = ({ radius, color, x, y, z, scale, vel }) => {
	const [clicked, setClicked] = useState(false);
	const [hovered, setHovered] = useState(false);
	const springs = useSpring({
		scale: clicked ? [1.5, 1.5, 1.5] : [1, 1, 1],
		color: hovered ? color : "white",
	});

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
