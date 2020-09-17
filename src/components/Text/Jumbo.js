import React, { useRef } from "react";
import { useFrame } from "react-three-fiber";
import Text from "./Text";

export default function Jumbo() {
	const ref = useRef();
	useFrame(
		({ clock }) =>
			(ref.current.rotation.x = ref.current.rotation.y = ref.current.rotation.z =
				Math.sin(clock.getElapsedTime()) * 0.3)
	);
	return (
		<group ref={ref}>
			<Text hAlign="left" position={[0, 4.2, 0]} children="Hello" />
		</group>
	);
}
