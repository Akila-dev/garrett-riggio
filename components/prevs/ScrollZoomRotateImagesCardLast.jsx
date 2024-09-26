'use client';

import { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import {
	motion,
	useTransform,
	useSpring,
	useScroll,
	useMotionTemplate,
	useMotionValue,
	useAnimate,
	stagger,
} from 'framer-motion';

const ScrollZoomRotateImagesCard = ({
	container,
	x,
	y,
	z,
	rotation,
	img,
	screenSize,
	makeSmaller,
}) => {
	const { scrollYProgress } = useScroll({
		container: container,
		// offset: ['start start', 'end end'],
	});

	const containerY = useTransform(
		scrollYProgress,
		[0, 1],
		[screenSize.height * 1.35, -100]
	);
	const containerRotate = useTransform(scrollYProgress, [0, 1], [0, -2.5]);

	const xPos = useTransform(scrollYProgress, [0, 1], x);
	const yPos = useTransform(scrollYProgress, [0, 1], y);
	const zPos = useTransform(scrollYProgress, [0, 1], z);
	const rotate = useTransform(scrollYProgress, [0, 1], rotation);
	const scale = useTransform(
		scrollYProgress,
		[0, 1],
		[1, makeSmaller ? 0.15 : 0.5]
	);

	return (
		<motion.div
			style={{
				y: containerY,
				rotateX: containerRotate,
				perspective: '100px',
				transformStyle: 'preserve-3d',
				perspectiveOrigin: 'center center',
			}}
			className="relative"
			layout
		>
			<motion.div
				initial={{ x: x[0], y: y[0], z: z[0] }}
				style={{
					x: xPos,
					y: yPos,
					z: zPos,
					// rotateX: rotate,
					scale: scale,
				}}
				className="absolute"
			>
				<Image
					src={img}
					alt="Some Pictures I've taken"
					width={150}
					height={150}
					className="object-contain"
				/>
			</motion.div>
		</motion.div>
	);
};

export default ScrollZoomRotateImagesCard;
