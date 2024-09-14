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
	const [initialAnimation, setInitialAnimation] = useState();
	const [scope, animate] = useAnimate();

	useEffect(() => {
		setInitialAnimation(true);
		setTimeout(() => {
			setInitialAnimation(false);
		}, 1000);
	}, []);

	const fill = [7, 0, 2, 6, 8, 1];
	const [y, setY] = useState([]);
	const [x, setX] = useState([]);
	const [fillers, setFillers] = useState(() => {
		let res = [];
		let rep = Math.ceil(galleryListFooter.length / fill.length);
		for (let i = 0; i < rep; i++) {
			for (let j = 0; j < fill.length; j++) {
				setY((prev) => [
					...prev,
					fill[j] > 5 ? ['5vh', '20vh'] : ['-5vh', '-20vh'],
				]);
				setX((prev) => [
					...prev,
					[0, 6].includes(fill[j])
						? ['-5vw', '-15vw']
						: [2, 8].includes(fill[j])
						? ['5vw', '15vw']
						: ['0px', '0px'],
				]);
				res.push(fill[j]);
			}
		}
		return res;
	});

	const scaleFromTo = [1, 2];
	const zFromTo = ['-250px', '100px'];

	const footerVariants = {
		initial: (i) => ({
			x: x[i][0],
			y: y[i][0],
			opacity: 0,
			scale: scaleFromTo[0],
			z: zFromTo[0],
		}),
		animate: (i) => ({
			x: [x[i][0], x[i][1]],
			y: [y[i][0], y[i][1]],
			opacity: [0, 1, 1],
			scale: scaleFromTo,
			z: zFromTo,
			transition: {
				type: 'tween',
				times: [0, 0.3, 1],
				delay: i * 1,
				duration: 10,
				ease: 'easeIn',
				repeat: Infinity,
				repeatDelay: galleryListFooter.length - 10 / 1.1,
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
				perspective: '100px',
				transformStyle: 'preserve-3d',
				perspectiveOrigin: 'center center',
			}}
			className="bg-black h-screen w-full overflow-hidden"
			// onMouseMove={(e) => staggerScreen(e)}
		>
			{initialAnimation !== null && (
				<motion.main
					ref={scope}
					className="bg-black h-screen w-full overflow-hidden"
					animate={{ scale: [0, 1] }}
					transition={{
						type: 'tween',
						duration: 1,
						ease: 'easeInOut',
						delay: 3,
						// delay: 5,
					}}
					layout
					// onMouseMove={(e) => staggerScreen(e)}
				>
					<motion.main
						animate={{ x: animateX, y: animateY }}
						transition={{
							type: 'tween',
							duration: 0.75,
							ease: 'easeOut',
						}}
						className="h-screen w-full relative"
					>
						<motion.div
							initial="initial"
							animate={initialAnimation ? 'init' : 'animate'}
							// transition={{ staggerChildren: 1 }}
							className="animated-cards w-full h-full flex items-center justify-center relative"
							style={{
								perspective: '100px',
								transformStyle: 'preserve-3d',
								perspectiveOrigin: 'center center',
							}}
						>
							{galleryListFooter.map((src, i) => (
								<motion.div
									key={i}
									variants={footerVariants}
									custom={i}
									className="grid grid-cols-3 grid-rows-3 h-screen opacity-0 justify-center items-center absolute gap-5 w-[300vw] md:w-[125vw]"
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
										className={`w-[50vh] h-[35vh] lg:w-[30vw] lg:h-[20vw] overflow-hidden col-span-1 row-span-1 translate-x-[-35%] lg:translate-x-[15%] scale-90 lg:scale-100 relative`}
									>
										<RectangleCard src={src} />
										{/* <motion.div
											animate={{ opacity: [1, 0, 0] }}
											transition={{
												type: 'tween',
												delay: i,
												duration: 10,
												repeat: Infinity,
												repeatDelay: galleryListFooter.length - 10,
											}}
											className="absolute w-full h-full bg-black top-0"
										/> */}
									</motion.div>
								</motion.div>
							))}
						</motion.div>
					</motion.main>
				</motion.main>
			)}
		</motion.main>
	);
}
