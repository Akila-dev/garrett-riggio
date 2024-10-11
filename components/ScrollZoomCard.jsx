'use client';

import { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
	motion,
	useTransform,
	useSpring,
	useScroll,
	useMotionTemplate,
	useMotionValue,
	useMotionValueEvent,
	useAnimate,
	stagger,
} from 'framer-motion';

const ScrollZoomCard = ({
	containerRef,
	firstEnd,
	start,
	mid,
	end,
	i,
	vid,
	screenSize,
	len,
	scrollYProgress,
}) => {
	const opacity = useTransform(scrollYProgress, [start, mid], [0, 1]);
	const z = useTransform(
		scrollYProgress,
		[start, end],
		screenSize.width > screenSize.height ? [-750, 200] : [-750, 100]
	);
	const x = useTransform(
		scrollYProgress,
		[start, end],
		screenSize.width > screenSize.height
			? [0, i % 2 > 0 ? screenSize.width / 8 : -screenSize.width / 8]
			: [0, i % 2 > 0 ? 1 : -1]
	);
	const scale = useTransform(
		scrollYProgress,
		[start, end],
		screenSize.width > screenSize.height ? [1, 1.3] : [2, 3]
	);
	const scaleVid = useTransform(scrollYProgress, [start, end], [0.8, 1.5]);

	// FOR FIRST ANIMATION
	const opacity2 = useTransform(scrollYProgress, [mid, firstEnd], [0, 1]);
	const z2 = useTransform(
		scrollYProgress,
		[start, end],
		screenSize.width > screenSize.height ? [-350, 100] : [-850, 100]
	);
	const scale2 = useTransform(
		scrollYProgress,
		[start, end],
		screenSize.width > screenSize.height ? [1.2, 1.2] : [4, 5]
	);

	return (
		<>
			<motion.div
				initial={{ opacity: 0, z: i === 0 ? -350 : -600 }}
				style={{
					opacity,
					z: i === 0 ? z2 : z,
					x: x,
					scale: i === 0 ? scale2 : scale,
					zIndex: len * 2 - i,
				}}
				className="absolute top-0 left-0 w-full h-screen object-contain grid grid-cols-2"
			>
				{i % 2 > 0 && <div />}
				<Link
					href={vid.link}
					className="flex flex-col items-center justify-center gap-[2vh] lg:gap-[5vh] h-ful w-ful overflow-hidden scale-70 lg:scale-100"
				>
					<div className="text-white text-center text-[3.2vw] leading-[120%]">
						<div className="">{vid.title}</div>
						<div className="uppercase">{vid.desc}</div>
					</div>
					<div
						className={`overflow-hidden ${
							vid.type === 'landscape'
								? 'h-[30vw] lg:h-[60vh]'
								: 'h-[40vw] lg:h-[100vh]'
						} ${
							vid.type === 'portrait'
								? 'w-[30vw] lg:w-[60vh]'
								: 'w-[40vw] lg:w-[100vh]'
						}`}
					>
						<motion.video
							width="auto"
							height="auto"
							preload="none"
							autoPlay
							muted
							loop
							style={{ scale: scaleVid }}
							className={`object-cover overflow-hidden text-white flex-center w-full h-full`}
						>
							<source src={vid.video} type="video/mp4" />
							Your browser does not support the video tag.
						</motion.video>
					</div>
				</Link>
			</motion.div>
		</>
	);
};

export default ScrollZoomCard;
