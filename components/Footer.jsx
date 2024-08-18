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
const RectangleCard = ({ src }) => {
	return (
		<motion.div className="w-full h-full relative">
			<Image
				src={src}
				alt="Footer Image"
				width={1000}
				height={600}
				className="w-full h-full relative object-cover"
			/>
		</motion.div>
	);
};

export default function Footer() {
	const [initSpeed, setInitSpeed] = useState(true);

	const fill = [0, 8, 1, 6, 2, 7];
	const [y, setY] = useState([]);
	const [x, setX] = useState([]);
	const [fillers, setFillers] = useState(() => {
		let res = [];
		let rep = Math.ceil(galleryList.length / fill.length);
		for (let i = 0; i < rep; i++) {
			for (let j = 0; j < fill.length; j++) {
				setY((prev) => [...prev, fill[j] > 5 ? '50vh' : '-50vh']);
				setX((prev) => [
					...prev,
					[0, 6].includes(fill[j])
						? '-50vh'
						: [2, 8].includes(fill[j])
						? '50vh'
						: 0,
				]);
				res.push(fill[j]);
			}
		}
		return res;
	});

	const footerVariants = {
		initial: (i) => ({
			// opacity: 1,
			// z: '-100px',
			x: 0,
			y: 0,
			opacity: 0,
			scale: 0.5,
			z: '-100px',
		}),
		animate: (i) => ({
			x: [0, x[i]],
			y: [0, y[i]],
			opacity: [0, 1, 1],
			scale: [0.5, 1],
			z: ['-100px', '1000px'],
			transition: {
				type: 'tween',
				times: [0, 0.3, 1],
				duration: 15,
				ease: 'easeIn',
				repeat: Infinity,
				repeatDelay: galleryList.length - 15, //galleryList * (duration*staggerChildren)
			},
		}),
	};

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
					perspectiveOrigin: 'bottom bottom',
				}}
			>
				{galleryList.map((src, i) => (
					<motion.div
						key={i}
						variants={footerVariants}
						custom={i}
						className="grid grid-cols-3 grid-rows-3 w-full h-screen opacity-0 justify-center items-center absolute gap-5"
						layout
					>
						{fillers[i] > 0 &&
							Array(fillers[i])
								.fill(0)
								.map((n, i) => (
									<div
										key={i}
										className="w-w-[50vh] h-[35vh] lg:w-[30vw] lg:h-[20vw] overflow-hidden col-span-1 row-span-1"
									/>
								))}
						{/* <div className="w-[30vw] h-[20vw] overflow-hidden col-span-1 row-span-1" /> */}
						<motion.div
							// whileInView={{ scale: [0, 1] }}
							className={`w-[50vh] h-[35vh] lg:w-[30vw] lg:h-[20vw] overflow-hidden col-span-1 row-span-1 translate-x-[-35%]`}
						>
							<RectangleCard src={src} />
						</motion.div>
					</motion.div>
				))}
			</motion.div>
		</main>
	);
}
