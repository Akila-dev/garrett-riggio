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

const ScrollZoom = ({ screenSize, scrollVideos, scrollYProgress }) => {
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
						opacityStart={scrollPoints[i] + 0.9 / (len + 1) / 2} // scrollpoint for initiating opacity of new background
						firstOpacityStart={scrollPoints[i] + (0.9 / (len + 1)) * 0} // scrollpoint for initiating opacity of new background for the first item
						firstOpacityEnd={scrollPoints[i] + (0.9 / (len + 1)) * 0.5} // scrollpoint for full opacity of new background for the first item
						opacityEnd={scrollPoints[i] + (0.9 / (len + 1)) * 2} // scrollpoint for initiating opacity of new background
						exitStart={scrollPoints[i + 1] + (0.9 / (len + 1)) * 1.7} // scrollpoint for initiating transparency of current backround for new background to be displayed
						exitEnd={scrollPoints[i + 1] + (0.9 / (len + 1)) * 2} // scrollpoint for transparency=0 of current backround for new background to be displayed
						start={scrollPoints[i]}
						mid={scrollPoints[i] + (0.9 / (len + 1)) * 1.7}
						end={scrollPoints[i] + (0.9 / (len + 1)) * 3}
						i={i}
						vid={vid}
						screenSize={screenSize}
						activeVid={activeVid}
						setActiveVid={setActiveVid}
						len={len}
						scrollYProgress={scrollYProgress}
					/>
				))}

				{/* CARDS */}
				{scrollVideos.map((vid, i) => (
					<ScrollZoomCard
						key={i}
						start={scrollPoints[i]}
						firstEnd={scrollPoints[i] + (0.9 / (len + 1)) * 1.5} // scroll point for full opacity of the first element
						mid={scrollPoints[i] + (0.9 / (len + 1)) * 1}
						end={scrollPoints[i] + (0.9 / (len + 1)) * 3.2}
						i={i}
						vid={vid}
						screenSize={screenSize}
						activeVid={activeVid}
						setActiveVid={setActiveVid}
						len={len}
						scrollYProgress={scrollYProgress}
					/>
				))}
			</div>
		</div>
	);
};

export default ScrollZoom;
