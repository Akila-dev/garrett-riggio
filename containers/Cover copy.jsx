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
	const [width, height] = useDeviceSize();
	const [screenSize, setScreenSize] = useState({ width, height });

	useEffect(() => {
		setScreenSize({ width, height });
	}, [width, height, useDeviceSize]);

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
				<div>
					<motion.h1
						className="cover-text"
						variants={variants.TEXT_VARIANT_1}
						custom={screenSize.width >= 700 ? '6vw' : '15.5vw'}
					>
						<motion.div className="">Award Winning</motion.div>
					</motion.h1>
					<motion.h1
						className="cover-text"
						variants={variants.TEXT_VARIANT_1}
						custom={screenSize.width >= 700 ? '6vw' : '15.5vw'}
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
						custom={screenSize.width >= 700 ? '6vw' : '15.5vw'}
					>
						<motion.div className="">And Smile Creator</motion.div>
					</motion.h1>
				</div>
				<motion.div
					variants={variants.TEXT_VARIANT_1}
					custom={screenSize.width >= 700 ? '6vw' : '15.5vw'}
					className="flex items-center select-none"
				>
					<div className="relative">
						<div className="animate-horizontal-scroll flex items-center gap-5 lg:gap-8 w-max px-5 lg:px-8">
							<h1 className="flow-text flow-text-1">Garrett Riggio</h1>
							<h2 className="flow-text flow-text-2">Award Winning</h2>
							<h2 className="flow-text flow-text-3">Marketing,</h2>
							<h2 className="flow-text flow-text-4">Sales, Tech</h2>
							{/* <h2 className="shrink-0 text-white text-9xl font-medium">Tech</h2> */}
							<h2 className="flow-text flow-text-2 italic">
								& Sustainability |
							</h2>
							<h2 className="flow-text flow-text-3">Philanthropist</h2>
							<h2 className="flow-text flow-text-3 italic">| Smile Creator</h2>
						</div>
						<div className="absolute top-0 left-0 animate-horizontal-scroll-2 flex items-center gap-5 lg:gap-8 px-5 lg:px-8 w-max">
							<h1 className="flow-text flow-text-1">Garrett Riggio</h1>
							<h2 className="flow-text flow-text-2">Award Winning</h2>
							<h2 className="flow-text flow-text-3">Marketing,</h2>
							<h2 className="flow-text flow-text-4">Sales, Tech</h2>
							{/* <h2 className="shrink-0 text-white text-9xl font-medium">
							Tutorials
						</h2> */}
							<h2 className="flow-text flow-text-2 italic">
								& Sustainability |
							</h2>
							<h2 className="flow-text flow-text-3">Philanthropist</h2>
							<h2 className="flow-text flow-text-3 italic">| Smile Creator</h2>
						</div>
					</div>
				</motion.div>
			</motion.div>
		</div>
	);
};

export default Cover;
