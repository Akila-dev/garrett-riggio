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
import { galleryListFooter } from '../utils/galleryData'; // This is just a list of the images that would be used
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
	const [animateX, setAnimateX] = useState(0);
	const [animateY, setAnimateY] = useState(0);

	const fill = [0, 8, 1, 6, 2, 7];
	const [y, setY] = useState([]);
	const [x, setX] = useState([]);
	const [fillers, setFillers] = useState(() => {
		let res = [];
		let rep = Math.ceil(galleryListFooter.length / fill.length);
		for (let i = 0; i < rep; i++) {
			for (let j = 0; j < fill.length; j++) {
				setY((prev) => [...prev, fill[j] > 5 ? '10vh' : '-10vh']);
				setX((prev) => [
					...prev,
					[0, 6].includes(fill[j])
						? '-25vw'
						: [2, 8].includes(fill[j])
						? '25vw'
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
			z: '0',
		}),
		animate: (i) => ({
			x: [0, x[i]],
			y: [0, y[i]],
			opacity: [0, 1, 1],
			scale: [0.5, 1],
			z: ['0', '1000px'],
			transition: {
				type: 'tween',
				times: [0, 0.3, 1],
				duration: 17,
				ease: 'easeIn',
				repeat: Infinity,
				repeatDelay: galleryListFooter.length - 17, //galleryListFooter * (duration*staggerChildren)
			},
		}),
	};

	useEffect(() => {
		const staggerScreen = (e) => {
			setAnimateX((window.innerWidth / 4 - e.screenX) / 10);
			setAnimateY((window.innerHeight / 4 - e.screenY) / 10);
			console.log(e);
		};

		window.addEventListener('mousemove', staggerScreen);

		return () => window.removeEventListener('mousemove', staggerScreen);
	}, []);

	return (
		<motion.main
			className="bg-black h-screen w-full overflow-hidden"
			// onMouseMove={(e) => staggerScreen(e)}
		>
			<motion.main
				animate={{ x: animateX, y: animateY }}
				transition={{
					type: 'tween',
					duration: 1,
					ease: 'easeOut',
				}}
				className="h-screen w-full relative"
			>
				<motion.div
					initial="initial"
					animate="animate"
					transition={{ staggerChildren: 1 }}
					className="w-full h-full flex items-center justify-center relative"
					style={{
						perspective: '500px',
						transformStyle: 'preserve-3d',
						perspectiveOrigin: 'center center',
					}}
				>
					{galleryListFooter.map((src, i) => (
						<motion.div
							key={i}
							variants={footerVariants}
							custom={i}
							className="grid grid-cols-3 grid-rows-3 h-screen opacity-0 justify-center items-center absolute gap-5 w-[150vw] md:w-screen"
							layout
						>
							{fillers[i] > 0 &&
								Array(fillers[i])
									.fill(0)
									.map((n, i) => (
										<div
											key={i}
											className="w-[50vh] h-[35vh] lg:w-[30vw] lg:h-[20vw] overflow-hidden col-span-1 row-span-1"
										/>
									))}
							{/* <div className="w-[30vw] h-[20vw] overflow-hidden col-span-1 row-span-1" /> */}
							<motion.div
								// whileInView={{ scale: [0, 1] }}
								className={`w-[50vh] h-[35vh] lg:w-[30vw] lg:h-[20vw] overflow-hidden col-span-1 row-span-1 translate-x-[-35%] lg:translate-x-[15%] scale-75 lg:scale-[0.9]`}
							>
								<RectangleCard src={src} />
							</motion.div>
						</motion.div>
					))}
				</motion.div>
			</motion.main>
		</motion.main>
	);
}
