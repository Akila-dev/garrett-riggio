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
} from 'framer-motion';

// import { SmoothScroll } from '../wrappers';
import { images } from '../utils';
import { galleryList } from '../utils/galleryData'; // This is just a list of the images that would be used
const RectangleCard = ({ x, src }) => {
	const zPos = useTransform(x, [0, 500], [0, 100]);

	// const z = useMotionTemplate`inset(0 ${clipProgress}% 0 0)`;

	return (
		<motion.div className="w-full h-full">
			<Image
				src={src}
				alt="Footer Image"
				width={1000}
				height={600}
				className="w-full h-full relative"
			/>
		</motion.div>
	);
};

const initX = [
	'-25vw',
	'25vw',
	// 0,
	'25vw',
	'-25vw',
	'-25vw',
	'25vw',
	// 0,
	'25vw',
	'-25vw',
];
const endX = [
	'-100vw',
	'100vw',
	// 0,
	'100vw',
	'-100vw',
	'-100vw',
	'100vw',
	// 0,
	'100vw',
	'-100vw',
];
const initY = [
	'-15vh',
	'15vh',
	// '-15vh',
	'-15vh',
	'15vh',
	'-15vh',
	'15vh',
	// '15vh',
	'-15vh',
	'15vh',
];
const endY = [
	'-75vh',
	'75vh',
	// '-100vh',
	'-75vh',
	'75vh',
	'-75vh',
	'75vh',
	// '100vh',
	'-75vh',
	'75vh',
];

export default function Footer() {
	const [xAxisList, setXAxisList] = useState(() => {
		let res = [];
		let rep = Math.ceil(galleryList.length / initX.length);
		for (let i = 0; i < rep; i++) {
			for (let i = 0; i < initX.length; i++) {
				let obj = {
					start: initX[i],
					end: endX[i],
				};
				res.push(obj);
			}
		}
		return res;
	});
	const [yAxisList, setYAxisList] = useState(() => {
		let res = [];
		let rep = Math.ceil(galleryList.length / initY.length);
		for (let i = 0; i < rep; i++) {
			for (let i = 0; i < initY.length; i++) {
				let obj = {
					start: initY[i],
					end: endY[i],
				};
				res.push(obj);
			}
		}
		return res;
	});

	const footerVariants = {
		initial: (i) => ({
			x: xAxisList[i].start,
			y: yAxisList[i].start,
			z: -50,
			scale: 0,
		}),
		animate: (i) => ({
			x: [xAxisList[i].start, xAxisList[i].end],
			y: [yAxisList[i].start, yAxisList[i].start],
			scale: [0.25, 1],
			z: [-50, 500],
			transition: {
				type: 'tween',
				duration: 10,
				ease: 'easeIn',
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

	const x = useMotionValue(0);
	const zPos = useTransform(x, [0, 500], [0, 100]);

	return (
		<main className="bg-black h-screen w-full overflow-hidden" style={{}}>
			<motion.div
				initial="initial"
				animate="animate"
				transition={{ staggerChildren: 1 }}
				className="w-full h-full flex items-center justify-center"
				style={{
					perspective: '500px',
					transformStyle: 'preserve-3d',
				}}
			>
				{galleryList.map((src, i) => (
					<motion.div
						key={i}
						variants={footerVariants}
						custom={i}
						className="absolute min-w-[60vw] h-[40vw] lg:w-[60vw] lg:h-[40vw] overflow-hidden p-0"
					>
						<div className="relative">
							<RectangleCard x={x} src={src} />
						</div>
						<motion.div
							className="bg-black absolute top-0 left-0 w-full h-full"
							initial="coverInit"
							animate="coverAnim"
							variants={footerVariants}
						/>
					</motion.div>
				))}
			</motion.div>
			{/* <motion.div
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
			</motion.div> */}
		</main>
	);
}
