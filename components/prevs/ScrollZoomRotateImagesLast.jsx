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
	const right = screenSize.width + padding;

	return (
		<div className="text-white h-[100vh] overflow-hidden relative">
			<motion.div
				style={{
					perspective: '100px',
					transformStyle: 'preserve-3d',
					perspectiveOrigin: 'center center',
				}}
				className="w-full h-screen relative top-0"
			>
				{/* LEFT */}
				<ScrollZoomRotateImagesCard
					img={heroImages[0]}
					screenSize={screenSize}
					x={[-padding / 2, 0]}
					y={[0, screenSize.height / 8]}
					z={[-80, 100]}
					rotation={[-0.8, -0]}
				/>
				<ScrollZoomRotateImagesCard
					img={heroImages[1]}
					screenSize={screenSize}
					x={[-padding / 2, padding * 1.2]}
					y={[-screenSize.height / 15, screenSize.height / 2]}
					z={[-90, 100]}
					rotation={[-0.8, -0]}
				/>
				<ScrollZoomRotateImagesCard
					img={heroImages[2]}
					screenSize={screenSize}
					x={[-padding / 1.25, padding / 2]}
					y={[0, -screenSize.height / 5]}
					z={[-100, 100]}
					rotation={[-0.8, -0]}
				/>
				<ScrollZoomRotateImagesCard
					img={heroImages[3]}
					screenSize={screenSize}
					x={[-padding / 2, padding]}
					y={[0, -screenSize.height / 4]}
					z={[-110, 100]}
					rotation={[-0.8, -0]}
				/>
				{/* ML */}
				<ScrollZoomRotateImagesCard
					img={heroImages[0]}
					screenSize={screenSize}
					x={[padding, padding * 1.25]}
					y={[0, screenSize.height / 3]}
					z={[-80, 100]}
					rotation={[-0.8, -0]}
				/>
				<ScrollZoomRotateImagesCard
					img={heroImages[1]}
					screenSize={screenSize}
					x={[padding / 4, padding]}
					y={[-screenSize.height / 15, -screenSize.height / 2]}
					z={[-110, 100]}
					rotation={[-0.8, -0]}
				/>
				<ScrollZoomRotateImagesCard
					img={heroImages[2]}
					screenSize={screenSize}
					x={[padding / 1.25, padding]}
					y={[0, -screenSize.height / 5]}
					z={[-100, 100]}
					rotation={[-0.8, -0]}
					makeSmaller
				/>
				<ScrollZoomRotateImagesCard
					img={heroImages[3]}
					screenSize={screenSize}
					x={[padding / 8, padding]}
					y={[0, screenSize.height / 10]}
					z={[-110, 100]}
					rotation={[-0.8, -0]}
				/>
				{/* MR */}
				<ScrollZoomRotateImagesCard
					img={heroImages[12]}
					screenSize={screenSize}
					x={[screenSize.width / 2, right / 2]}
					y={[0, screenSize.height / 16]}
					z={[-90, 100]}
					rotation={[-0.8, -0]}
					makeSmaller
				/>
				<ScrollZoomRotateImagesCard
					img={heroImages[13]}
					screenSize={screenSize}
					x={[right / 4, right / 2]}
					y={[0, -screenSize.height / 2]}
					z={[-100, 100]}
					rotation={[-0.8, -0]}
				/>
				<ScrollZoomRotateImagesCard
					img={heroImages[14]}
					screenSize={screenSize}
					x={[right / 3, right / 2.5]}
					y={[0, -screenSize.height / 6]}
					z={[-110, 100]}
					rotation={[-0.8, -0]}
				/>
				<ScrollZoomRotateImagesCard
					img={heroImages[15]}
					screenSize={screenSize}
					x={[right / 4, right / 3]}
					y={[0, -screenSize.height / 4]}
					z={[-120, 100]}
					rotation={[-0.8, -0]}
				/>
				{/* RIGHT */}
				<ScrollZoomRotateImagesCard
					img={heroImages[12]}
					screenSize={screenSize}
					x={[screenSize.width, right / 2]}
					y={[0, screenSize.height / 8]}
					z={[-80, 100]}
					rotation={[-0.8, -0]}
				/>
				<ScrollZoomRotateImagesCard
					img={heroImages[13]}
					screenSize={screenSize}
					x={[right / 1.75, right / 2]}
					y={[-screenSize.height / 15, screenSize.height / 2]}
					z={[-110, 100]}
					rotation={[-0.8, -0]}
				/>
				<ScrollZoomRotateImagesCard
					img={heroImages[14]}
					screenSize={screenSize}
					x={[right / 1.25, right / 2]}
					y={[0, -screenSize.height / 5]}
					z={[-120, 100]}
					rotation={[-0.8, -0]}
				/>
				<ScrollZoomRotateImagesCard
					img={heroImages[15]}
					screenSize={screenSize}
					x={[right / 1.5, right / 2]}
					y={[0, -screenSize.height / 4]}
					z={[-140, 100]}
					rotation={[-0.8, -0]}
				/>
			</motion.div>
		</div>
	);
};

export default ScrollZoomRotateImages;
