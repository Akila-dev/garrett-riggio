'use client';

import { useState } from 'react';

import {
	motion,
	useTransform,
	useSpring,
	useScroll,
	useMotionTemplate,
} from 'framer-motion';

import { Cover } from '../containers';
// import { SmoothScroll } from '../wrappers';

const Hero = () => {
	const { scrollY } = useScroll();

	const clipProgress = useTransform(scrollY, [0, 400], [50, 0]);
	const springClipProgress = useSpring(clipProgress, { damping: 18 });
	const clip = useMotionTemplate`inset(0 ${springClipProgress}% 0 ${springClipProgress}%)`;

	// const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

	return (
		<div className="h-[400vh] w-full relative">
			<div className="fixed top-0 left-0 w-full h-screen">
				<Cover />
			</div>
			<motion.div
				style={{ clipPath: clip }}
				className="w-full h-screen sticky top-0 left-0 bg-[--black]"
			>
				<div className="w-full h-screen flex-center container">
					<h1 className="text-[--white] text-center max-w-[60vw]">
						Award Winning Marketing, Sales, Tech & Sustainability Philanthropist
						| Smile Creator
					</h1>
				</div>
			</motion.div>
		</div>
	);
};

export default Hero;
