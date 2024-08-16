'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { Gallery } from '../containers';
import {
	motion,
	useTransform,
	useSpring,
	useScroll,
	useMotionTemplate,
} from 'framer-motion';

// import { SmoothScroll } from '../wrappers';
import { images } from '../utils';
import { galleryList } from '../utils/galleryData';

export default function Home() {
	const container = useRef();
	//   const scrollContainer = useRef();
	// const { scrollYProgress } = useScroll({
	// 	target: container,
	// 	offset: ['start start', 'end end'],
	// 	layoutEffect: false,
	// });
	const { scrollY } = useScroll();

	const clipProgress = useTransform(scrollY, [0, 400], [50, 0]);
	const springClipProgress = useSpring(clipProgress, { damping: 18 });
	const clip = useMotionTemplate`inset(0 ${springClipProgress}% 0 ${springClipProgress}%)`;

	return (
		<main className="" ref={container}>
			<div className="fixed w-full top-0">
				<Gallery />
			</div>
			<motion.div
				style={{ clipPath: clip }}
				className="relative h-[500vh] bg-black"
			></motion.div>
		</main>
	);
}
