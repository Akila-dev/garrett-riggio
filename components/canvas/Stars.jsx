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

const StarsParticles = () => {
	const ref = useRef();
	const [sphere, setSphere] = useState(null);

	useEffect(() => {
		setSphere(() => random.inSphere(new Float32Array(3000), { radius: 20 }));
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

const Stars = () => {
	return (
		<div className="w-full h-screen fixed top-0 left-0 pointer-events-none bg-[--black]">
			<Canvas camera={{ position: [0, 0, 0] }}>
				<OrbitControls
					enableZoom={false}
					maxPolarAngle={Math.PI / 2}
					minPolarAngle={Math.PI / 2}
				/>
				<Suspense fallback={null}>
					<ambientLight />
					<spotLight position={[0, 10, -5]} intensity={500} />
					<motion.group>
						<StarsParticles />
					</motion.group>
				</Suspense>

				<Preload all />
			</Canvas>
		</div>
	);
};

export default Stars;
