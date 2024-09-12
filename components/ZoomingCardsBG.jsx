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
	useAnimate,
	stagger,
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
				width={750}
				height={450}
				className="w-full h-full relative object-cover"
			/>
		</motion.div>
	);
};

export default function ZoomingCardsBG() {
	const [initSpeed, setInitSpeed] = useState(true);
	const [animateX, setAnimateX] = useState(0);
	const [animateY, setAnimateY] = useState(0);
	const [initialAnimation, setInitialAnimation] = useState(0.2);
	const [scope, animate] = useAnimate();

	useEffect(() => {
		setTimeout(() => {
			setInitialAnimation(1);
		}, 200);
	}, []);

	const points = [
		{
			x: ['-0vw', '-0vw'],
			z: ['-500px', '500px'],
			y: ['-35vh', '-150vh'],
			scale: [0.35, 1.5],
		},
		{
			x: ['-25vw', '-150vw'],
			z: ['-500px', '500px'],
			y: ['35vh', '150vh'],
			scale: [0.35, 1.5],
		},
		{
			x: ['25vw', '150vw'],
			z: ['-500px', '500px'],
			y: ['0vh', '0vh'],
			scale: [0.35, 1.5],
		},
		{
			x: ['-0vw', '-0vw'],
			z: ['-500px', '500px'],
			y: ['35vh', '150vh'],
			scale: [0.35, 1.5],
		},
		{
			x: ['-25vw', '-150vw'],
			z: ['-500px', '500px'],
			y: ['-35vh', '-150vh'],
			scale: [0.35, 1.5],
		},
		{
			x: ['-25vw', '-150vw'],
			z: ['-500px', '500px'],
			y: ['0vh', '0vh'],
			scale: [0.35, 1.5],
		},
		{
			x: ['25vw', '150vw'],
			z: ['-500px', '500px'],
			y: ['-35vh', '-150vh'],
			scale: [0.35, 1.5],
		},
		{
			x: ['25vw', '150vw'],
			z: ['-500px', '500px'],
			y: ['35vh', '150vh'],
			scale: [0.35, 1.5],
		},
	];

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
			x: 0,
			y: 0,
			opacity: 0,
			scale: 0.5,
			z: '-450px',
		}),
		animate: (i) => ({
			x: [0, x[i]],
			y: [0, y[i]],
			opacity: [0, 1, 1],
			scale: [0.5, 1],
			z: ['-450px', '2250px'],
			transition: {
				type: 'tween',
				times: [0, 0.1, 1],
				delay: i * 1.5,
				duration: 25,
				ease: 'easeIn',
				repeat: Infinity,
				repeatDelay: galleryListFooter.length * 0.75 - 25,
			},
		}),
	};

	useEffect(() => {
		const staggerScreen = (e) => {
			setAnimateX((-window.innerWidth / 4 + e.screenX) / 12);
			setAnimateY((-window.innerHeight / 4 + e.screenY) / 12);
			// console.log(e);
		};

		window.addEventListener('mousemove', staggerScreen);

		return () => window.removeEventListener('mousemove', staggerScreen);
	}, []);

	return (
		<motion.main
			style={{
				perspective: '500px',
				transformStyle: 'preserve-3d',
				perspectiveOrigin: 'center center',
			}}
			className="bg-black h-screen w-full overflow-hidden"
			// onMouseMove={(e) => staggerScreen(e)}
		>
			<motion.main
				ref={scope}
				className="bg-black h-screen w-full overflow-hidden"
				// animate={{ scale: [0, 2] }}
				// transition={{
				// 	type: 'tween',
				// 	duration: 2,
				// 	ease: 'easeIn',
				// 	delay: 1,
				// 	// delay: 5,
				// }}
				layout
				// onMouseMove={(e) => staggerScreen(e)}
			>
				<motion.main
					// animate={{ x: animateX, y: animateY }}
					// transition={{
					// 	type: 'tween',
					// 	duration: 0.75,
					// 	ease: 'easeOut',
					// }}
					className="h-screen w-full relative"
					layout
				>
					<motion.div
						initial="initial"
						animate="animate"
						className="animated-cards w-full h-full flex items-center justify-center relative"
						style={{
							perspective: '500px',
							transformStyle: 'preserve-3d',
							perspectiveOrigin: 'center center',
						}}
						layout
					>
						{points.map(({ x, y, z, scale }, i) => (
							<motion.div
								key={i}
								className="w-[750px] h-[500px] absolute overflow-hidden"
								initial={{ z: z[0], x: x[0], y: y[0], scale: scale[0] }}
								animate={{
									z: z,
									x: x,
									y: y,
									scale: scale,
								}}
								transition={{
									duration: 25,
									repeat: Infinity,
									delay: i,
									repeatDelay: points.length - 25,
								}}
								layout
							>
								<div className="relative w-full h-full overflow-hidden">
									<div className="bg-red-500 w-full h-full overflow-hidden relative" />
									<motion.div
										className="absolute top-0 bg-black w-full h-full scale-110"
										initial={{ opacity: 1 }}
										animate={{
											opacity: [1, 0, 0],
										}}
										transition={{
											duration: 25,
											repeat: Infinity,
											delay: i,
											repeatDelay: points.length - 25,
										}}
									/>
								</div>
							</motion.div>
						))}
						{/* {galleryListFooter.map((src, i) => (
							<motion.div
								key={i}
								variants={footerVariants}
								custom={i}
								className="grid grid-cols-3 grid-rows-3 h-screen opacity-0 justify-center items-center absolute gap-5 w-[125vw] md:w-[150vw]"
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
								<motion.div
									// whileInView={{ scale: [0, 1] }}
									className={`w-[50vh] h-[35vh] lg:w-[30vw] lg:h-[20vw] overflow-hidden col-span-1 row-span-1 translate-x-[-35%] lg:translate-x-[15%] scale-75 lg:scale-[0.9]`}
								>
									<RectangleCard src={src} />
								</motion.div>
							</motion.div>
						))} */}
					</motion.div>
				</motion.main>
			</motion.main>
		</motion.main>
	);
}
