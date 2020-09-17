import React from "react";
import { Canvas } from "react-three-fiber";
import { OrbitControls, Text } from "drei";
//import Cube from "./components/Cube/Cube";
import Sphere from "./components/Planet/Planet";
//import Shape from "./components/Shape/Yshape";

import "./App.css";
import { Planets } from "./assets/Planets";

function App() {
	return (
		<div className="App">
			<Canvas camera={{ position: [-50, 50, 50], far: 4000 }}>
				<OrbitControls />
				<ambientLight />
				<Text
					color="white" // default
					anchorX="center" // default
					anchorY="middle" // default
					position={[0, 50, 0]}
					fontSize={20}
				>
					Orbit Please?
				</Text>
				{Planets.map((planet) => {
					return (
						<Sphere
							scale={[0.5, 0.5, 0.5]}
							key={planet.name}
							x={planet.distanceFromSun * 0.4}
							y={0}
							z={0}
							radius={planet.size}
							color={planet.color}
							vel={planet.orbitalVelocity}
						/>
					);
				})}
				<pointLight position={[0, 0, 0]} />
				{/* <Cube width="1" height="1" depth="1" color="hotpink" /> */}
			</Canvas>
		</div>
	);
}

export default App;
