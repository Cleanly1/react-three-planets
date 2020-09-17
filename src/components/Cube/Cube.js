import React, { useState } from "react";
import { useSpring, a } from "react-spring/three";

const Cube = ({ width, height, depth, color }) => {
	const [clicked, setClicked] = useState(false);
	const [hovered, setHovered] = useState(false);
	const springs = useSpring({
		scale: clicked ? [1.5, 1.5, 1.5] : [1, 1, 1],
		color: hovered ? color : "white",
	});
	return (
		<a.mesh
			scale={springs.scale}
			onClick={() => setClicked(!clicked)}
			onPointerEnter={() => {
				setHovered(!hovered);
			}}
			onPointerLeave={() => {
				setHovered(!hovered);
			}}
		>
			<boxBufferGeometry
				attach="geometry"
				args={[width, height, depth]}
			/>
			<a.meshStandardMaterial attach="material" color={springs.color} />
		</a.mesh>
	);
};

export default Cube;
