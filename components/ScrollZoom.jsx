'use client';

import { useRef, useState, useEffect } from 'react';

import {
	useTransform,
	useScroll,
	useMotionValueEvent,
	motion,
	AnimatePresence,
} from 'framer-motion';
import { ScrollZoomCard, ScrollZoomCardBG } from '@/components';

const ScrollZoom = ({
	screenSize,
	scrollVideos,
	containerRef,
	scrollYProgress,
}) => {
	const [activeVid, setActiveVid] = useState(-1);
	const [len, setLen] = useState(scrollVideos.length);
	const [scrollPoints, setScrollPoints] = useState(
		Array.from(
			{ length: len + 1 },
			(_, index) => ((index + 1) / (len + 1)) * 0.9
		)
	);

	return (
		<div className="text-white w-full h-screen">
			<div
				style={{
					perspective: '100px',
					transformStyle: 'preserve-3d',
					perspectiveOrigin: 'center center',
				}}
				className="w-full h-full overflow-hidden relative flex-center"
			>
				{/* BG */}
				{scrollVideos.map((vid, i) => (
					<ScrollZoomCardBG
						key={i}
						opacityStart={scrollPoints[i] + 0.9 / (len + 1) / 2}
						firstOpacityStart={scrollPoints[i] + (0.9 / (len + 1)) * 0}
						firstOpacityEnd={scrollPoints[i] + (0.9 / (len + 1)) * 0.5}
						start={scrollPoints[i]}
						mid={scrollPoints[i] + (0.9 / (len + 1)) * 1.7}
						opacityEnd={scrollPoints[i] + (0.9 / (len + 1)) * 2}
						exitStart={scrollPoints[i + 1] + (0.9 / (len + 1)) * 1.7}
						exitEnd={scrollPoints[i + 1] + (0.9 / (len + 1)) * 2}
						end={scrollPoints[i] + (0.9 / (len + 1)) * 3}
						i={i}
						vid={vid}
						screenSize={screenSize}
						activeVid={activeVid}
						setActiveVid={setActiveVid}
						len={len}
					/>
				))}

				{/* CARDS */}
				{scrollVideos.map((vid, i) => (
					<ScrollZoomCard
						key={i}
						// containerRef={containerRef}
						start={scrollPoints[i]}
						// end={i === scrollVideos.length - 1 ? 1 : scrollPoints[i + 3]}
						firstEnd={scrollPoints[i] + (0.9 / (len + 1)) * 1.5}
						mid={scrollPoints[i] + (0.9 / (len + 1)) * 1}
						bgEnd={scrollPoints[i] + (0.9 / (len + 1)) * 0.5}
						end={scrollPoints[i] + (0.9 / (len + 1)) * 3.2}
						i={i}
						vid={vid}
						screenSize={screenSize}
						activeVid={activeVid}
						setActiveVid={setActiveVid}
						len={len}
						// scrollYProgress={scrollYProgress}
					/>
				))}
			</div>
		</div>
	);
};

export default ScrollZoom;
