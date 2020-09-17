import React, { useState, useRef } from "react";
import { useSpring, a } from "react-spring/three";
import { useFrame } from "react-three-fiber";
import { Shape, Font, FontLoader } from "three";

const Yshape = () => {
	// const group = useRef();

	// useFrame(() => {
	// 	group.current.rotation.y += vel * 0.01;
	// });;

	var y = 25;
	var x = 0;

	return (
		<group>
			<mesh position={[x, y, 0]}></mesh>
		</group>
	);
};

export default Yshape;
