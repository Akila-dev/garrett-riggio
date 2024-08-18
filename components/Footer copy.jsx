'use client';

import { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import {
	motion,
	useTransform,
	useSpring,
	useScroll,
	useMotionTemplate,
} from 'framer-motion';

// import { SmoothScroll } from '../wrappers';
import { images } from '../utils';
import { galleryList } from '../utils/galleryData'; // This is just a list of the images that would be used

export default function Footer() {
	const container = useRef();
	const [screenSize, setScreenSize] = useState({
		width: window.innerWidth,
		height: window.innerHeight,
	});

	const xPositions = [
		0,
		-screenSize.width / 10,
		screenSize.width / 10,
		0,
		-screenSize.width / 10,
		screenSize.width / 10,
	];
	const yPositions = [
		0,
		-screenSize.height / 10,
		screenSize.height / 10,
		0,
		-screenSize.height / 10,
		screenSize.height / 10,
	];

	const xEndPoints = [
		0,
		-screenSize.width,
		screenSize.width,
		0,
		-screenSize.width,
		screenSize.width,
	];
	const yEndPoints = [
		screenSize.height,
		screenSize.height,
		-screenSize.height,
		-screenSize.height,
		-screenSize.height,
		+screenSize.height,
	];

	const [xAxisList, setXAxisList] = useState(() => {
		let res = [];
		let rep = Math.ceil(galleryList.length / xPositions.length);
		for (let i = 0; i < rep; i++) {
			for (let i = 0; i < xPositions.length; i++) {
				let obj = {
					start: xPositions[i],
					end: xEndPoints[i],
				};
				res.push(obj);
			}
		}
		return res;
	});

	const [yAxisList, setYAxisList] = useState(() => {
		let res = [];
		let rep = Math.ceil(galleryList.length / yPositions.length);
		for (let i = 0; i < rep; i++) {
			for (let i = 0; i < yPositions.length; i++) {
				let obj = {
					start: yPositions[i],
					end: yEndPoints[i],
				};
				res.push(obj);
			}
		}
		return res;
	});

	console.log(xAxisList);

	// *UPDATE SCREEN SIZE WHEN SCREEN/VIEW PORT RESIZES
	useEffect(() => {
		const handleResize = () => {
			setScreenSize({
				width: window.innerWidth,
				height: window.innerHeight,
			});
		};

		window.addEventListener('resize', handleResize);

		return () => window.removeEventListener('resize', handleResize);
	}, []);

	const footerVariants = {
		initial: (i) => ({
			scale: 0.1,
		}),
		animate: (i) => ({
			// scale: [0.2, 1],
			x: [xAxisList[i].start, xAxisList[i].start],
			y: [yAxisList[i].start, yAxisList[i].start],
			transition: {
				type: 'tween',
				duration: 5,
				ease: 'circIn',
				repeat: Infinity,
				repeatDelay: galleryList.length,
			},
		}),
		coverInit: (i) => ({
			opacity: 1,
		}),
		coverAnim: (i) => ({
			opacity: [0.5, 0],
			transition: {
				type: 'tween',
				duration: 5,
				ease: 'circIn',
				repeat: Infinity,
				repeatDelay: galleryList.length,
			},
		}),
	};

	return (
		<main className="" ref={container}>
			<motion.div
				initial="initial"
				animate="animate"
				transition={{ staggerChildren: 1 }}
				className="relative bg-black w-full h-screen overflow-hidden"
			>
				{galleryList.map((img, i) => (
					<div
						key={i}
						className="absolute top-0 left-0 w-full h-screen flex items-center justify-center "
					>
						<motion.div
							variants={footerVariants}
							key={i}
							custom={i}
							className="min-w-[60vw] h-[40vw] lg:w-[60vw] lg:h-[40vw] overflow-hidden p-0"
						>
							<Image
								src={img}
								alt="Footer Image"
								width={1000}
								height={600}
								className="w-full h-full relative"
							/>
							<motion.div
								className="bg-black absolute top-0 left-0 w-full h-full"
								initial="coverInit"
								animate="coverAnim"
								variants={footerVariants}
							/>
						</motion.div>
					</div>
				))}
				<div className="bg-black opacity-50 absolute bottom-0 left-0 w-full h-screen" />
			</motion.div>
		</main>
	);
}
