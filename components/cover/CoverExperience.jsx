'use client';

import { useState, useEffect } from 'react';
import { Environment, Float, OrbitControls } from '@react-three/drei';
import { Book } from '../../components';

const getWindowsDimension = () => {
	const { innerWidth: width, innerHeight: height } = window;
	return {
		width,
		height,
	};
};

const CoverExperience = () => {
	const [screenSize, setScreenSize] = useState(getWindowsDimension());
	const [isMobile, setIsMobile] = useState(getWindowsDimension());

	// *UPDATE SCREEN SIZE WHEN SCREEN/VIEW PORT RESIZES
	useEffect(() => {
		const handleResize = () => {
			setScreenSize(getWindowsDimension());
		};

		window.addEventListener('resize', handleResize);

		return () => window.removeEventListener('resize', handleResize);
	}, []);

	useEffect(() => {
		if (screenSize.width >= 700) {
			setIsMobile(false);
		} else {
			setIsMobile(true);
		}
	}, [screenSize]);

	return (
		<>
			<Float
				rotation-x={-Math.PI / 5}
				floatIntensity={1}
				speed={2}
				rotationIntensity={2}
			>
				<Book scale={isMobile ? 0.7 : 1} />
			</Float>
			<OrbitControls
				enableZoom={false}
				maxPolarAngle={Math.PI / 2}
				minPolarAngle={Math.PI / 2}
			/>
			<Environment preset="studio"></Environment>
			<directionalLight
				position={[2, 5, 2]}
				intensity={2.5}
				castShadow
				shadow-mapSize-width={2048}
				shadow-mapSize-height={2048}
				shadow-bias={-0.0001}
			/>
			<mesh position-y={-1.5} rotation-x={-Math.PI / 2} receiveShadow>
				<planeGeometry args={[100, 100]} />
				<shadowMaterial transparent opacity={0.2} />
			</mesh>
		</>
	);
};

export default CoverExperience;
