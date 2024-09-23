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
	xPoints,
	yPoints,
	zPoints,
	img,
	scalePoints,
	screenSize,
}) => {
	const { scrollYProgress } = useScroll({
		container: container,
		offset: ['start start', 'end end'],
	});

	const containerY = useTransform(
		scrollYProgress,
		[0, 1],
		[screenSize.height, 0]
	);

	const xPos = useTransform(scrollYProgress, [0, 1], [xPoints[0], xPoints[1]]);
	// const yPos = useTransform(scrollYProgress, [0, 0.35, 1], yPoints);
	const yPos = useTransform(scrollYProgress, [0, 1], [yPoints[0], yPoints[1]]);
	const zPos = useTransform(
		scrollYProgress,
		[0, 0.5],
		[zPoints[0], zPoints[1]]
	);
	// const zPos = useTransform(scrollYProgress, [0, 0.35, 1], zPoints);
	const scale = useTransform(scrollYProgress, [0, 1], [0.35, 0.75]);
	// const scale = useTransform(scrollYProgress, [0, 1], [0.1, scalePoints]);
	const rotate = useTransform(scrollYProgress, [0, 1], [-0.8, -0.2]);

	return (
		<motion.div
			style={{
				y: containerY,
				perspective: '100px',
				transformStyle: 'preserve-3d',
				perspectiveOrigin: 'center center',
			}}
			className="relative"
			layout
		>
			<motion.div
				style={{
					x: xPos,
					y: yPos,
					scale: scale,
					z: zPos,
					// x: xPoints[0],
					// y: yPoints[0],
					rotateX: rotate,
				}}
				className="absolute"
			>
				<Image
					src={img}
					alt="Some Pictures I've taken"
					width={200}
					height={200}
					className="object-contain"
				/>
			</motion.div>
		</motion.div>
	);
};

export default ScrollZoomRotateImagesCard;
