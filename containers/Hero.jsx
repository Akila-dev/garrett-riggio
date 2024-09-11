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
import { StarsCanvas, WavyText, WorkCard } from '../components';
import { SmoothScroll } from '../wrappers';
import { variants } from '../utils';
import { WORKSLIST } from '../utils/data';
import { useIsDarkStore } from '@/utils/globalStates';

const Hero = () => {
	// const { scrollY } = useScroll();
	const isDark = useIsDarkStore((state) => state.isDark);
	const scrollContainer = useRef();
	const { scrollYProgress } = useScroll({
		target: scrollContainer,
		offset: ['start start', 'end end'],
		layoutEffect: false,
	});

	// BANNER CLIP
	const clipProgress = useTransform(scrollYProgress, [0, 0.15], [50, 0]);
	const springClipProgress = useSpring(clipProgress, { damping: 18 });
	const clip = useMotionTemplate`inset(${clipProgress}% 0 ${clipProgress}% 0)`;

	// HEADER OPACITY
	const headerOpacity = useTransform(
		scrollYProgress,
		[0, 0.05, 0.1],
		[0.1, 0.25, 1]
	);
	const springHeaderOpacity = useSpring(headerOpacity, { damping: 18 });
	// HEADER SCALE
	const headerScale = useTransform(scrollYProgress, [0, 0.1], [1.1, 1]);
	const springHeaderScale = useSpring(headerScale, { damping: 18 });
	// STARS SCALE
	const starsScale = useTransform(scrollYProgress, [0, 0.15], [2, 1]);
	const springStarsScale = useSpring(starsScale, { damping: 18 });

	// const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

	return (
		<div ref={scrollContainer} className="h-[900vh] w-full relative">
			<SmoothScroll>
				<div className="absolute top-0 left-0 h-[900vh] w-full">
					<div className="sticky top-0 left-0 w-full h-screen">
						<Cover scrollYProgress={scrollYProgress} />
					</div>
				</div>
				<motion.div
					id="works"
					style={{ clipPath: clip }}
					className={`w-full h-screen sticky top-0 left-0 transition duration-500 ${
						isDark ? 'bg-[--black]' : 'bg-[--white]'
					} overflow-hidden`}
				>
					{/* {isDark && ( */}
					<StarsCanvas
						scale={springStarsScale}
						opacity={springHeaderOpacity}
						// scrollYProgress={scrollYProgress}
					/>
					{/* )} */}
					<motion.div
						style={{ opacity: springHeaderOpacity }}
						className="w-full h-full flex-center flex-col container gap-3"
					>
						<h1 className="text-[--white] text-center max-w-[45vw] lg:text-[4vw] lg:leading-[4vw]">
							<WavyText
								text={`Crafting Award Winning Experiences That Sell`}
								additionalClass={'gap-2 lg:gap-x-4 lg:gap-y-0 justify-center'}
							/>
						</h1>
					</motion.div>
				</motion.div>
				<div className="h-[200vh]" />
				{WORKSLIST.map((workData, i) => (
					<WorkCard key={i} data={workData} last={i === WORKSLIST.length - 1} />
				))}
			</SmoothScroll>
		</div>
	);
};

export default Hero;
