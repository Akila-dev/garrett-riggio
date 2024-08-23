'use client';

import { useRef, useState } from 'react';
import Image from 'next/image';
import {
	motion,
	useTransform,
	useSpring,
	useScroll,
	useMotionTemplate,
} from 'framer-motion';

import { Hero } from '../../containers';
import { Loader } from '../../components';

// import { SmoothScroll } from '../wrappers';
import { images } from '../../utils';
import { galleryList } from '../../utils/galleryData';

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

	const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

	const trackMouse = (e) => {
		setMousePos({
			x: e.clientX - 50,
			y: e.clientY - 50,
		});
		console.log(mousePos);
	};

	return (
		<main className="w-full" ref={container}>
			<Hero />
			{/* <div className="cover-container">
				<Cover />
			</div> */}
			{/* <div
				className="h-[80vh] w-[80vw] bg-red-700"
				onMouseMove={(e) => trackMouse(e)}
			>
				<motion.div
					animate={{ x: mousePos.x, y: mousePos.y }}
					transition={{ type: 'spring', duration: 0.5 }}
					className="bg-white p-5 flex-center rounded-full w-[100px] h-[100px] text-black"
				>
					{'x: ' + mousePos.x}
					<br />
					{'y: ' + mousePos.y}
				</motion.div>
			</div> */}
		</main>
	);
}
