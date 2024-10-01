/* eslint-disable jsx-a11y/alt-text */
'use client';

import * as THREE from 'three';
import { useRef, useState, useMemo, useEffect, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useTransform, useScroll, useMotionValueEvent } from 'framer-motion';
import { motion } from 'framer-motion-3d';
import {
	Billboard,
	Text,
	TrackballControls,
	Image,
	OrbitControls,
} from '@react-three/drei';

const ImageCard = ({
	src,
	pos,
	scrollYProgress,
	size,
	i,
	scale,
	initX,
	screenSize,
}) => {
	const ref = useRef();
	const x = useTransform(
		scrollYProgress,
		[0, 0.1],
		[initX, screenSize.width > screenSize.height ? pos[0] : pos[0] / 1.75]
	);
	const y = useTransform(
		scrollYProgress,
		[0, 0.1],
		[1 - i / 10, screenSize.width > screenSize.height ? pos[1] : pos[1] * 1.1]
	);
	const z = useTransform(scrollYProgress, [0, 0.1], [-i * 2, pos[2]]);
	const rotate = useTransform(scrollYProgress, [0, 0.1], [0.75, -0.5]);
	const scaleP = useTransform(scrollYProgress, [0, 0.1], scale);

	return (
		<motion.mesh
			scale={scaleP}
			position-x={x}
			position-y={y}
			position-z={z}
			rotation-x={rotate}
		>
			<Image
				ref={ref}
				url={src}
				scale={size}
				// rotation={[0, 1, 0]}
				side={THREE.DoubleSide}
			/>
		</motion.mesh>
	);
};

const Sphere = ({ imgs, count = 4, radius = 2, containerRef, screenSize }) => {
	const { scrollYProgress } = useScroll({
		container: containerRef,
		offset: ['start start', 'end end'],
		layoutEffect: false,
	});

	const yProg = useTransform(scrollYProgress, [0, 0.1], [-8, 0]);
	const zProg = useTransform(scrollYProgress, [0, 0.1], [0, 2]);

	const rotation = useTransform(scrollYProgress, [0, 0.1], [-0.5, 0.5]);

	const initX = [
		0, -0.1, 0.1, -0.2, 0.2, -0.3, 0.3, 0.4, -0.4, 0.5, 0.6, -0.5, 0.7, 0.8,
		-0.6, -0.7,
	];

	const positions = [
		[0, 4, 15],
		[7, 4, 15],
		[-8, 3, 13],
		[-7, 5, 10],
		[12, 4, 10],
		[-15, 4, 10],
		[10, 3, 10],
		[3, 1, 12],
		[-5, 2, 11],
		[5, 2, 11],
		[3, 3, 10],
		[-3, 3.5, 11],
		[8, 5, 11],
		[4, 6, 12],
		[-6, 6, 12],
		[-0.4, 4.65, 10],
	];
	const scale = [
		[0.15, 0.25],
		[0.15, 0.35],
		[0.2, 0.35],
		[0.2, 0.35],
		[0.35, 0.35],
		[0.45, 0.35],
		[0.45, 0.25],
		[0.5, 0.25],
		[0.6, 0.2],
		[0.6, 0.2],
		[0.6, 0.2],
		[0.6, 0.2],
		[0.7, 0.1],
		[0.7, 0.1],
		[0.7, 0.1],
		[0.8, 0.1],
	];

	// const positions = [
	// 	[0, 5, 20],
	// 	[-7, 5, 19],
	// 	[7, 5, 19],
	// 	[5, 4, 18],
	// 	[-5, 4, 16],
	// 	[7, 8, 15],
	// 	[8, 8, 14],
	// 	[-8, 8, 13],
	// 	[-7, 6, 12],
	// 	[5, 6, 11],
	// 	[-5, 6, 10],
	// 	[6, 3, 9],
	// 	[-6, 8, 8],
	// 	[3, 8, 7],
	// 	[-4, 4, 6],
	// 	[4, 4, 5],
	// ];

	return (
		<motion.group position-y={yProg} rotation-x={rotation} position-z={zProg}>
			{/* <motion.group position-y={yProg}> */}
			{/* <motion.group> */}
			{/* <ImageCard src={imgs[0]} pos={[0, 0, 0]} scale={0.35} /> */}

			{imgs.map(({ img, size }, i) => (
				<ImageCard
					key={i}
					src={img}
					pos={positions[i]}
					// scale={0.35}
					scrollYProgress={scrollYProgress}
					i={i}
					scale={scale[i]}
					size={size}
					initX={initX[i]}
					screenSize={screenSize}
				/>
			))}
		</motion.group>
	);
};

const ScrollZoomRotateImages = ({ heroImages, containerRef, screenSize }) => {
	return (
		<div className="w-full h-screen absolute top-0 left-0">
			<Canvas dpr={[1, 2]} camera={{ position: [0, 0, 12.5], fov: 45 }}>
				{/* <OrbitControls /> */}
				<fog attach="fog" args={['#202025', 0, 1]} />
				<Suspense fallback={null}>
					<motion.group>
						<Sphere imgs={heroImages} screenSize={screenSize} />
						{/* <ImageCard src={heroImages[0]} /> */}
					</motion.group>
				</Suspense>
			</Canvas>
		</div>
	);
};

export default ScrollZoomRotateImages;
