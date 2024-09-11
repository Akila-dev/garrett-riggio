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

import { Hero, CreativeWork, About, Services } from '../../containers';
import { Loader, Stars } from '../../components';

// import { SmoothScroll } from '../wrappers';
import { images } from '../../utils';
import { galleryList } from '../../utils/galleryData';

export default function Home() {
	const [loading, setLoading] = useState(true);

	// useEffect(() => {
	// 	setLoading(false);
	// }, []);

	return loading ? (
		<div className="fixed top-0 w-full h-screen bg-[--black] text-[--white] z-[100000]">
			Nothing to see here
		</div>
	) : (
		<main className="w-full relative">
			<Stars />
			<Hero />
			<About />
			<Services />
			<CreativeWork />
			<div className="h-screen relative">Hi</div>
		</main>
	);
}
