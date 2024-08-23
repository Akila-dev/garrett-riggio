'use client';
import { useState, useEffect } from 'react';
import {
	motion,
	useTransform,
	useSpring,
	useScroll,
	useMotionTemplate,
	AnimatePresence,
} from 'framer-motion';

import { variants, useDeviceSize } from '../utils';
const coverVideoUrl = '/videos/cover.mp4';
const textList = [
	'Marketing Specialist',
	'Sales Specialist',
	'Tech Specialist',
	'Sustainability Specialist',
	'Philantropist',
];

const Cover = ({ scrollYProgress }) => {
	const [activeText, setActiveText] = useState(3);
	// const { scrollY } = useScroll();

	// const translateTop = useTransform(
	// 	scrollY,
	// 	[0, window.innerHeight],
	// 	[0, -window.innerHeight / 2]
	// );
	// const springTranslateTop = useSpring(translateTop, { damping: 18 });

	// const translateBottom = useTransform(scrollY, [0, 200], [0, '50vh']);
	// const springTranslateBottom = useSpring(translateBottom, { damping: 18 });

	return (
		<div className="w-full h-screen relative">
			<video autoPlay muted loop className="w-full h-full object-cover">
				<source src={coverVideoUrl} type="video/mp4" />
				Your browser does not support the video tag.
			</video>
			<motion.div
				initial="initial"
				animate="intro"
				transition={{ duration: 0, staggerChildren: 0.15 }}
				className="absolute top-0 left-0 w-full h-screen p-5 md:p-7 !pb-[120px] radial-gradien flex flex-col justify-end"
			>
				{/* MOBILE  */}
				<motion.div className="lg:hidden">
					<motion.h1
						className="cover-text"
						variants={variants.TEXT_VARIANT_1}
						custom={'15.5vw'}
					>
						<motion.div className="">Award Winning</motion.div>
					</motion.h1>
					<motion.h1
						className="cover-text"
						variants={variants.TEXT_VARIANT_1}
						custom={'15.5vw'}
					>
						<motion.div className="">
							{textList.map((text, i) => (
								<div key={i} className="inline">
									<AnimatePresence>
										{i === activeText && <span key={i}>{textList[i]}</span>}
									</AnimatePresence>
								</div>
							))}{' '}
						</motion.div>
					</motion.h1>
					<motion.h1
						className="cover-text"
						variants={variants.TEXT_VARIANT_1}
						custom={'15.5vw'}
					>
						<motion.div className="">And Smile Creator</motion.div>
					</motion.h1>
				</motion.div>
				{/* DESKTOP */}
				<motion.div layout className="relative hidden lg:block">
					<motion.h1
						className="cover-text"
						variants={variants.TEXT_VARIANT_1}
						custom={'5vw'}
					>
						<motion.div className="">Award Winning</motion.div>
					</motion.h1>
					<motion.h1
						className="cover-text"
						variants={variants.TEXT_VARIANT_1}
						custom={'5vw'}
					>
						<motion.div className="">
							{textList.map((text, i) => (
								<div key={i} className="inline">
									<AnimatePresence>
										{i === activeText && <span key={i}>{textList[i]}</span>}
									</AnimatePresence>
								</div>
							))}{' '}
						</motion.div>
					</motion.h1>
					<motion.h1
						className="cover-text"
						variants={variants.TEXT_VARIANT_1}
						custom={'5vw'}
					>
						<motion.div className="">And Smile Creator</motion.div>
					</motion.h1>
				</motion.div>
			</motion.div>
		</div>
	);
};

export default Cover;
