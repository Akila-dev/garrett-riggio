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

const ImageCard = ({ src, pos, scale }) => {
	const ref = useRef();
	return (
		<motion.mesh scale={scale}>
			<Image
				ref={ref}
				url={src}
				scale={[3, 2]}
				position={pos}
				// rotation={[0, 1, 0]}
				side={THREE.DoubleSide}
			/>
		</motion.mesh>
	);
};

const Sphere = ({ imgs, count = 4, radius = 2, containerRef }) => {
	const [factor, setFactor] = useState(-35);
	const { scrollYProgress } = useScroll({
		container: containerRef,
		offset: ['start start', 'end end'],
	});

	const yProg = useTransform(scrollYProgress, [0, 1], [-35, 0]);
	useMotionValueEvent(yProg, 'change', (latest) => {
		setFactor(latest);
	});

	const images = useMemo(() => {
		const temp = [];
		const spherical = new THREE.Spherical();
		const phiSpan = Math.PI / (count + 1);
		const thetaSpan = (Math.PI * 2) / count;
		// let phi = 2 * 3.1415926 * Math.random();
		// let csth = 1.0 - 2.0 * Math.random();
		// let snth = Math.sqrt(1.0 - csth * csth);

		for (let i = 1; i < count + 1; i++)
			for (let j = 0; j < count; j++)
				temp.push([
					new THREE.Vector3().setFromSpherical(
						spherical.set(radius * 2, phiSpan * i, thetaSpan * j)
						// spherical.set(
						// 	radius * snth * Math.sin((phi * count) / 1),
						// 	radius * snth * Math.cos((phi * count) / 1),
						// 	radius * csth
						// )
					),
				]);
		return temp;
	}, [count, radius]);
	console.log(images);

	return (
		// <motion.group position-y={yProg}>
		<motion.group>
			<ImageCard key={i} src={imgs[i]} pos={val[0]} scale={0.35} />

			{/* {images.map((val, i) => (
				<ImageCard key={i} src={imgs[i]} pos={val[0]} scale={0.35} />
			))} */}
		</motion.group>
	);
};

const ScrollZoomRotateImages = ({ heroImages, containerRef }) => {
	return (
		<div className="w-full h-screen">
			<Canvas dpr={[1, 2]} camera={{ position: [0, 0, 12.5], fov: 45 }}>
				{/* <OrbitControls /> */}
				{/* <fog attach="fog" args={['#202025', 0, 80]} /> */}
				<Suspense fallback={null}>
					<motion.group>
						<Sphere imgs={heroImages} />
						{/* <ImageCard src={heroImages[0]} /> */}
					</motion.group>
				</Suspense>
			</Canvas>
		</div>
	);
};

export default ScrollZoomRotateImages;
