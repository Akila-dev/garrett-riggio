'use client';

import { useRef, useState, useEffect } from 'react';
import Link from 'next/link';
import { IoLocationOutline } from 'react-icons/io5';
import { motion, useScroll, useTransform } from 'framer-motion';

import {
	ScrollZoomRotateImages,
	WavyText,
	HeaderText,
	ClipHeightText,
	ScrollZoom,
} from '../components';
import { SmoothScroll } from '@/wrappers';
import { variants, useDeviceSize, scrollVideos } from '@/utils';

const Hero = ({ heroImages, scrollVideos }) => {
	const containerRef = useRef(null);
	const parallaxRef = useRef(null);
	const vidContainerRef = useRef(null);
	const { scrollYProgress } = useScroll({
		container: containerRef,
		offset: ['start start', 'end end'],
		layoutEffect: false,
	});
	const [deviceSize, setDeviceSize] = useState({
		width: window.innerWidth,
		height: window.innerHeight,
	});

	useEffect(() => {
		function handleResize() {
			setDeviceSize({
				width: window.innerWidth,
				height: window.innerHeight,
			});
		}
		handleResize();
		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);
	}, []);

	const height = useTransform(
		scrollYProgress,
		[0, 0.1],
		[deviceSize.height, 0]
	);

	// NOTE: THE HEIGHT OF CONTAINERREF IS THE HEIGHT THAT BOTH SCROLLZOOMROTATEIMAGES AND SCROLLZOOM TAKE. SCROLLZOOMROTATEIMAGES TAKES 1/10 OF THE FULL HEIGHT AND SCROLLZOOM TAKES THE REMAINING HEIGHT. YOU CAN CHOOSE TO INCREASE OR DECREASE THE HEIGHT HOWEVER YOU PLEASE.

	return (
		<SmoothScroll>
			<div ref={containerRef} className="h-[1250vh] !relative">
				<div className="sticky top-0 h-screen">
					<div className="w-full bg-blac h-full">
						<ScrollZoomRotateImages
							scrollYProgress={scrollYProgress}
							heroImages={heroImages}
							screenSize={deviceSize}
							containerRef={containerRef}
						/>

						<ScrollZoom
							scrollYProgress={scrollYProgress}
							scrollVideos={scrollVideos}
							screenSize={deviceSize}
							containerRef={containerRef}
						/>
					</div>
				</div>
				<motion.div className="w-full md:w-[50vw] lg:w-[45vw] px-5 md:px-[2rem] lg:px-[3rem] relative">
					<h1 className="text-[--white]">{`I don't shoot what it looks like, I shoot what it feels like.`}</h1>
				</motion.div>
			</div>
		</SmoothScroll>
	);
};

export default Hero;
