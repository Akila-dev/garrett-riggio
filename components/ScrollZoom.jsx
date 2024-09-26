'use client';

import { useRef, useState, useEffect } from 'react';

import { useTransform, useScroll, useMotionValueEvent } from 'framer-motion';

const ScrollZoom = ({ scrollVideos, containerRef }) => {
	const [len, setLen] = useState(scrollVideos.length);
	const [scrollPoints, setScrollPoints] = useState(
		Array.from(
			{ length: len + 1 },
			(_, index) => ((index + 1) / (len + 1)) * 0.9
		)
	);

	useEffect(() => {
		// const interval = setInterval(() => {
		// 	console.log(containerRef);
		// }, 500);
		// setPoints();
	}, []);

	return (
		<div className="text-white w-full h-screen">
			<p className="!text-white">ScrollZoom</p>
		</div>
	);
};

export default ScrollZoom;
