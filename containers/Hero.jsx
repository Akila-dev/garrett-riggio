'use client';

import { useRef, useState, useEffect } from 'react';
import Link from 'next/link';
import { IoLocationOutline } from 'react-icons/io5';
import { motion, useScroll } from 'framer-motion';

import {
	ScrollZoomRotateImages,
	WavyText,
	HeaderText,
	ClipHeightText,
	ScrollZoom,
} from '../components';
import { SmoothScroll } from '@/wrappers';
import { variants, useDeviceSize, scrollVideos } from '@/utils';

const Hero = ({ heroImages }) => {
	const containerRef = useRef(null);
	const vidContainerRef = useRef(null);
	const { scrollYProgress } = useScroll({
		container: containerRef,
		offset: ['start start', 'end end'],
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

	return (
		<SmoothScroll>
			<div ref={containerRef} className="h-[250vh]">
				<div className="sticky top-0 h-screen">
					<div className="w-full bg-black">
						<ScrollZoomRotateImages
							scrollYProgress={scrollYProgress}
							heroImages={heroImages}
							screenSize={deviceSize}
							containerRef={containerRef}
						/>
					</div>
				</div>
			</div>
			{/* <div ref={vidContainerRef} className="h-[400vh]">
				<div className="sticky top-0 h-screen bg-transparent">
					<ScrollZoom />
				</div>
			</div> */}
		</SmoothScroll>
	);
};

export default Hero;
