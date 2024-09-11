'use client';

import React, { useState, useRef, Suspense, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import {
	Points,
	PointMaterial,
	Preload,
	OrbitControls,
	useGLTF,
} from '@react-three/drei';
import { useSpring } from '@react-spring/core';
import { a as three } from '@react-spring/three';
import * as random from 'maath/random/dist/maath-random.esm';
import { motion } from 'framer-motion-3d';
import { useTransform } from 'framer-motion';

const Stars = () => {
	const ref = useRef();
	const [sphere, setSphere] = useState(null);

	useEffect(() => {
		setSphere(() => random.inSphere(new Float32Array(3000), { radius: 20 }));
		console.log(sphere);
	}, []);

	//   *AUTOMATIC ROTATION
	useFrame((state, delta) => {
		ref.current.rotation.x -= delta / 10;
		ref.current.rotation.y -= delta / 15;
	});

	return (
		<motion.group
			transition={{ type: 'spring', stiffness: 700, damping: 35 }}
			animate={{ scale: [0, 0.15] }}
		>
			<Points ref={ref} positions={sphere} stride={3} frustumCulled>
				<PointMaterial
					transparent
					color="#f272c8"
					size={0.005}
					sizeAttenuation={true}
					depthWrite={false}
				/>
			</Points>
		</motion.group>
	);
};

const StarCanvas = ({ scale, opacity }) => {
	return (
		<div
			// style={{ opacity }}
			className="w-full h-screen absolute top-0 left-0 pointer-events-none"
		>
			<Canvas camera={{ position: [0, 0, 0] }}>
				<OrbitControls
					//   autoRotate
					enableZoom={false}
					maxPolarAngle={Math.PI / 2}
					minPolarAngle={Math.PI / 2}
				/>
				{/* <three.pointLight
					position={[10, 10, 10]}
					intensity={1.5}
					color={props.open.to([0, 1], ['#f0f0f0', '#429A7D'])}
				/> */}
				<Suspense fallback={null}>
					<ambientLight />
					<spotLight position={[0, 10, -5]} intensity={500} />
					<motion.group scale={scale}>
						<Stars />
					</motion.group>
				</Suspense>

				<Preload all />
			</Canvas>
		</div>
	);
};

export default StarCanvas;

useGLTF.preload('/models/laptop.glb');
