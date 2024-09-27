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

const ScrollZoomCard = ({ container, start, end, i, video }) => {
	const { scrollYProgress } = useScroll({
		container: container,
		offset: ['start start', 'end end'],
	});

	// const zPos = useTransform(scrollYProgress, [start, end], [0, i * 10]);

	return (
		<motion.div
			// initial={{ x: x[0], y: y[0], z: z[0] }}
			// style={{
			// 	z: zPos,
			// }}
			className="absolute top-0 left-0 w-full h-full object-cover"
		>
			<video
				// width="100vw"
				// height="100vh"
				preload="none"
				autoPlay
				muted
				loop
				className="object-cover w-full h-full text-white blur-2x"
			>
				<source src={video} type="video/mp4" />
				Your browser does not support the video tag.
			</video>
		</motion.div>
	);
};

export default ScrollZoomCard;
