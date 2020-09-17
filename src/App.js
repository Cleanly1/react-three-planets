import { OrbitControls } from "drei";
//import Cube from "./components/Cube/Cube";
import Sphere from "./components/Planet/Planet";

import React, { Suspense, useRef } from "react";
import { Canvas } from "react-three-fiber";
import Text from "./components/Text/Text";

import "./App.css";
import { Planets } from "./assets/Planets";

function Jumbo() {
	const ref = useRef();

	return (
		<group ref={ref}>
			<Text hAlign="left" position={[0, 30, 0]} children="HELLO" />
			<Text hAlign="left" position={[45, 30, 0]} children="YRGO" />
		</group>
	);
}

function App() {
	const intense = 0.4;
	return (
		<div className="App">
			<Canvas camera={{ position: [-50, 50, 50], far: 4000 }}>
				<Suspense fallback={null}>
					<OrbitControls />
					{/* <ambientLight args={["fff", 0.3]} /> */}

					<Jumbo />

					{Planets.map((planet) => {
						return (
							<Sphere
								scale={[0.8, 0.8, 0.8]}
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
					<pointLight
						position={[0, 80, 0]}
						args={["white", intense]}
					/>
					<pointLight
						position={[0, -80, 0]}
						args={["white", intense]}
					/>
					<pointLight
						position={[80, 0, 0]}
						args={["white", intense]}
					/>
					<pointLight
						position={[-80, 0, 0]}
						args={["white", intense]}
					/>
					<pointLight
						position={[0, 0, 80]}
						args={["white", intense]}
					/>
					<pointLight
						position={[0, 0, -80]}
						args={["white", intense]}
					/>
					<pointLight
						position={[0, 40, 40]}
						args={["white", intense]}
					/>

					<pointLight
						position={[0, 40, -40]}
						args={["white", intense]}
					/>
					<pointLight
						position={[40, 0, -40]}
						args={["white", intense]}
					/>
					<pointLight
						position={[-40, 0, 40]}
						args={["white", intense]}
					/>
					<pointLight
						position={[-40, 0, 0]}
						args={["white", intense]}
					/>
					<pointLight
						position={[40, 0, 0]}
						args={["white", intense]}
					/>
					<pointLight
						position={[-40, 0, -40]}
						args={["white", intense]}
					/>
					<pointLight
						position={[40, 0, 40]}
						args={["white", intense]}
					/>
					<pointLight
						position={[0, -40, -40]}
						args={["white", intense]}
					/>
					<pointLight
						position={[0, -40, 40]}
						args={["white", intense]}
					/>
					{/* <Cube width="1" height="1" depth="1" color="hotpink" /> */}
				</Suspense>
			</Canvas>
		</div>
	);
}

export default App;
