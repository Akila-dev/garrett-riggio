'use client';

import { useRef, useState } from 'react';

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
	// const { scrollY } = useScroll();
	const scrollContainer = useRef();
	const { scrollYProgress } = useScroll({
		target: scrollContainer,
		offset: ['start start', 'end end'],
		layoutEffect: false,
	});

	// BANNER CLIP
	const clipProgress = useTransform(scrollYProgress, [0, 0.25], [50, 0]);
	const springClipProgress = useSpring(clipProgress, { damping: 18 });
	const clip = useMotionTemplate`inset(${springClipProgress}% 0 ${springClipProgress}% 0)`;

	// HEADER OPACITY
	const headerOpacity = useTransform(
		scrollYProgress,
		[0, 0.1, 0.2],
		[0.1, 0.25, 1]
	);
	const springHeaderOpacity = useSpring(headerOpacity, { damping: 18 });

	// const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

	return (
		<div ref={scrollContainer} className="h-[400vh] w-full relative">
			<div className="fixed top-0 left-0 w-full h-screen">
				<Cover scrollYProgress={scrollYProgress} />
			</div>
			<motion.div
				style={{ clipPath: clip }}
				className="w-full h-screen sticky top-0 left-0 bg-[--black]"
			>
				<div className="w-full h-screen flex-center flex-col container gap-3">
					<motion.h1
						style={{ opacity: springHeaderOpacity }}
						className="text-[--white] text-center max-w-[60vw] lg:text-[4vw]"
					>
						{`Hi, I'm Garret Riggio`}
					</motion.h1>
					<p className="max-w-[40vw] text-center lg:text-[1.5vw]">
						Award Winning Marketing, Sales, Tech & Sustainability Philanthropist
						| Smile Creator
					</p>
					{/* <div className="grid grid-cols-1 lg:grid-cols-2">
						<div></div>
						<p>
							As the Head of Sales Enablement at Maersk and former Kahoot! SR
							Digital Marketing Manger, I spearhead product marketing, content,
							and communications for over 7,000 sales representatives, driving
							the success of our new Logistics Platform and Global Supply Chain
							Services within the Product Growth Team. With 14+ years of
							experience in growth and performance marketing, digital strategy,
							product marketing, and business development, I have collaborated
							with top-tier B2C and B2B brands like Audi, Microsoft, Salesforce,
							TED, and Gartner across diverse industries and markets.
						</p>
					</div> */}
				</div>
			</motion.div>
		</div>
	);
};

export default Hero;
