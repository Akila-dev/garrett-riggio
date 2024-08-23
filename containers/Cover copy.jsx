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

const Cover = () => {
	const [activeText, setActiveText] = useState(2);

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
				className="absolute top-0 left-0 w-full h-screen p-5 md:p-10 radial-gradient !pt-[120px] flex flex-col justify-between"
			>
				{/* DESKTOP */}
				<div className="hidden lg:block">
					<motion.h1
						className="cover-text"
						variants={variants.TEXT_VARIANT_1}
						custom={'6vw'}
					>
						<motion.div className="">Award Winning</motion.div>
					</motion.h1>
					<motion.h1
						className="cover-text"
						variants={variants.TEXT_VARIANT_1}
						custom={'6vw'}
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
						custom={'6vw'}
					>
						<motion.div className="">And Smile Creator</motion.div>
					</motion.h1>
				</div>
				{/* MOBILE */}
				<div className="lg:hidden">
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
				</div>
			</motion.div>
		</div>
	);
};

export default Cover;
