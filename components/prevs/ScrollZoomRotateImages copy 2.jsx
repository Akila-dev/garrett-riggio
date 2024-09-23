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
import { ScrollZoomRotateImagesCard } from '@/components';

const ScrollZoomRotateImages = ({
	container,
	scrollYProgress,
	heroImages,
	screenSize,
}) => {
	const padding = screenSize.width / 3;
	const len = heroImages.length;
	const factor = screenSize.width - padding * 2;

	const xPoints = [
		[padding, -screenSize.width / 2, -screenSize.width * 2],
		[
			padding + (1 / len) * factor,
			-screenSize.width * 2,
			padding + (1 / len) * factor,
		],
		[
			padding + (2 / len) * factor,
			padding + (2 / len) * factor,
			padding + (2 / len) * factor,
		],
		[
			padding + (3 / len) * factor,
			padding + (3 / len) * factor,
			padding + (3 / len) * factor,
		],
		[
			padding + (4 / len) * factor,
			padding + (4 / len) * factor,
			padding + (4 / len) * factor,
		],
		[
			padding + (5 / len) * factor,
			padding + (5 / len) * factor,
			padding + (5 / len) * factor,
		],
		[
			padding + (6 / len) * factor,
			padding + (6 / len) * factor,
			padding + (6 / len) * factor,
		],
		[
			padding + (7 / len) * factor,
			padding + (7 / len) * factor,
			padding + (7 / len) * factor,
		],
		[
			padding + (8 / len) * factor,
			padding + (8 / len) * factor,
			padding + (8 / len) * factor,
		],
		[
			padding + (9 / len) * factor,
			padding + (9 / len) * factor,
			padding + (9 / len) * factor,
		],
		[
			padding + (10 / len) * factor,
			padding + (10 / len) * factor,
			padding + (10 / len) * factor,
		],
		[
			padding + (11 / len) * factor,
			padding + (11 / len) * factor,
			padding + (11 / len) * factor,
		],
		[
			padding + (12 / len) * factor,
			padding + (12 / len) * factor,
			padding + (12 / len) * factor,
		],
		[
			padding + (13 / len) * factor,
			padding + (13 / len) * factor,
			padding + (13 / len) * factor,
		],
		[
			padding + (14 / len) * factor,
			padding + (14 / len) * factor,
			padding + (14 / len) * factor,
		],
		[
			padding + (15 / len) * factor,
			padding + (15 / len) * factor,
			padding + (15 / len) * factor,
		],
	];

	const yPoints = [
		[screenSize.height - 20, screenSize.height / 5, screenSize.height / 10],
		[screenSize.height - 20, screenSize.height / 5, screenSize.height / 10],
		[screenSize.height - 20, screenSize.height - 20, screenSize.height - 20],
		[screenSize.height - 20, screenSize.height - 20, screenSize.height - 20],
		[screenSize.height - 20, screenSize.height - 20, screenSize.height - 20],
		[screenSize.height - 20, screenSize.height - 20, screenSize.height - 20],
		[screenSize.height - 20, screenSize.height - 20, screenSize.height - 20],
		[screenSize.height - 20, screenSize.height - 20, screenSize.height - 20],
		[screenSize.height - 20, screenSize.height - 20, screenSize.height - 20],
		[screenSize.height - 20, screenSize.height - 20, screenSize.height - 20],
		[screenSize.height - 20, screenSize.height - 20, screenSize.height - 20],
		[screenSize.height - 20, screenSize.height - 20, screenSize.height - 20],
		[screenSize.height - 20, screenSize.height - 20, screenSize.height - 20],
		[screenSize.height - 20, screenSize.height - 20, screenSize.height - 20],
		[screenSize.height - 20, screenSize.height - 20, screenSize.height - 20],
		[screenSize.height - 20, screenSize.height - 20, screenSize.height - 20],
	];

	const zInit = -750;
	const zEnd = -750;
	const zPoints = [
		[0, zInit, zEnd],
		[0, zInit * 5, zEnd],
		[0, 0, 0],
		[0, 0, 0],
		[0, 0, 0],
		[0, 0, 0],
		[0, 0, 0],
		[0, 0, 0],
		[0, 0, 0],
		[0, 0, 0],
		[0, 0, 0],
		[0, 0, 0],
		[0, 0, 0],
		[0, 0, 0],
		[0, 0, 0],
		[0, 0, 0],
	];

	const scalePoints = [
		0.5, 0.7, 0.85, 1, 0.5, 0.7, 0.85, 1, 0.5, 0.7, 0.85, 1, 0.5, 0.7, 0.85, 1,
	];

	return (
		<div className="text-white h-[100vh] overflow-hidden relative">
			<div
				style={{
					perspective: '1000px',
					transformStyle: 'preserve-3d',
					perspectiveOrigin: 'center center',
				}}
				className="w-full h-screen relative top-0"
			>
				{heroImages.map((img, i) => (
					<ScrollZoomRotateImagesCard
						key={i}
						scrollYProgress={scrollYProgress}
						xPoints={xPoints[i]}
						yPoints={yPoints[i]}
						zPoints={zPoints[i]}
						img={img}
						// container={container}
						scalePoints={scalePoints[i]}
					/>
				))}
			</div>
		</div>
	);
};

export default ScrollZoomRotateImages;
