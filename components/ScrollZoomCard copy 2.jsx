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
	start,
	mid,
	bgEnd,
	end,
	i,
	vid,
	screenSize,
	activeVid,
	setActiveVid,
	// scrollYProgress,
}) => {
	const [zIndex, setZIndex] = useState(-600);
	const [showBg, setShowBg] = useState(false);
	const { scrollYProgress } = useScroll({
		container: containerRef,
		offset: ['start start', 'end end'],
	});

	const opacity = useTransform(scrollYProgress, [start, mid], [0, 1]);
	const bgOpacity = useTransform(scrollYProgress, [start, bgEnd], [0, 1]);
	const bgZ = useTransform(scrollYProgress, [start, mid, end], [0, 10, 0]);
	const z = useTransform(scrollYProgress, [start, end], [-650, 100]);
	const x = useTransform(
		scrollYProgress,
		[start, end],
		screenSize.width > screenSize.height
			? [0, i % 2 > 0 ? screenSize.width / 4 : -screenSize.width / 4]
			: [0, i % 2 > 0 ? screenSize.width / 10 : -screenSize.width / 10]
	);
	const scale = useTransform(
		scrollYProgress,
		[start, end],
		screenSize.width > screenSize.height ? [0.5, 1.2] : [2, 3]
	);
	const scaleVid = useTransform(scrollYProgress, [start, end], [0.8, 1.5]);

	// useMotionValueEvent(z, 'change', (latest) => {
	// 	setZIndex(latest);
	// });

	// useEffect(() => {
	// 	if (i === 0) {
	// 		if (zIndex < -350) {
	// 			setActiveVid(-1);
	// 		} else {
	// 			if (zIndex <= 0) {
	// 				setActiveVid(i);
	// 			} else {
	// 				setActiveVid(i + 1);
	// 			}
	// 		}
	// 	} else {
	// 		if (i === activeVid) {
	// 			if (zIndex <= 0) {
	// 				setActiveVid(i);
	// 			} else {
	// 				setActiveVid(i + 1);
	// 			}
	// 		}
	// 	}

	// 	// eslint-disable-next-line react-hooks/exhaustive-deps
	// }, [zIndex]);

	return (
		<>
			<motion.div
				initial={{ z: -10 }}
				style={{ z: bgZ }}
				key={i}
				className="absolute top-0 left-0 w-full h-screen blur-2xl z-[-10]"
				// animate={{ opacity: [0, 1] }}
				// exit={{ opacity: [1, 0] }}
				// transition={{ duration: 0.5 }}
			>
				<motion.video
					width="auto"
					height="auto"
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
			<motion.div
				initial={{ opacity: 0, z: -600 }}
				style={{
					opacity: opacity,
					z: z,
					x: x,
					scale: scale,
				}}
				className="absolute top-0 left-0 w-full h-screen object-contain grid grid-cols-2"
			>
				{i % 2 > 0 && <div />}
				<Link
					href={vid.link}
					className="flex flex-col items-center justify-center gap-[2vh] lg:gap-[5vh] h-ful w-ful overflow-hidden"
				>
					<div className="text-white text-center text-[3.5vw] leading-[120%]">
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
