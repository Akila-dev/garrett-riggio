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

const ScrollZoomCardBG = ({
	containerRef,
	opacityStart,
	opacityEnd,
	firstOpacityStart,
	firstOpacityEnd,
	start,
	mid,
	end,
	i,
	vid,
	screenSize,
	activeVid,
	setActiveVid,
	len,
	// scrollYProgress,
}) => {
	const [showBg, setShowBg] = useState(false);
	const { scrollYProgress } = useScroll({
		container: containerRef,
		offset: ['start start', 'end end'],
	});

	const opacity = useTransform(scrollYProgress, [start, opacityEnd], [0, 1]);
	const opacity0 = useTransform(
		scrollYProgress,
		[firstOpacityStart, firstOpacityEnd],
		[0, 1]
	);
	const z = useTransform(scrollYProgress, [start, end], [-i, i]);
	const zIndex = useTransform(scrollYProgress, [start, mid], [-i * 10, i]);
	const zIndex0 = useTransform(scrollYProgress, [start, mid], [-i * 10, i]);
	const scale = useTransform(
		scrollYProgress,
		[start, end],
		screenSize.width > screenSize.height ? [1.2, 1] : [2, 3]
	);

	return (
		<motion.div
			initial={{ zIndex: -i, opacity: 0 }}
			style={{
				zIndex: i === 1 ? zIndex0 : zIndex,
				opacity: i === 0 ? opacity0 : opacity,
			}}
			key={i}
			className="absolute w-full h-screen blur-3xl"
		>
			<motion.video
				width={750}
				height={750}
				preload="none"
				autoPlay
				muted
				loop
				className={`object-cover overflow-hidden text-white flex-center w-full h-screen transition-all duration-700`}
			>
				<source src={vid.video} type="video/mp4" />
				Your browser does not support the video tag.
			</motion.video>
		</motion.div>
	);
};

export default ScrollZoomCardBG;
