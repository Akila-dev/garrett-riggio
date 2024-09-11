'use client';

import { useRef } from 'react';
import Image from 'next/image';

import {
	motion,
	useTransform,
	useSpring,
	useScroll,
	useMotionTemplate,
} from 'framer-motion';

const WorkCard = ({ data, last }) => {
	const container = useRef();
	const { scrollYProgress } = useScroll({
		target: container,
		offset: ['start end', 'end start'],
		layoutEffect: false,
	});

	const scale = useTransform(scrollYProgress, [0, 0.4, 0.6, 1], [0, 1, 1, 0]);
	const width = useTransform(
		scrollYProgress,
		[0, 0.4, 0.6, 1],
		[0, 800, 800, 0]
	);

	return (
		<div ref={container} className="h-[150vh] relative">
			<div className="h-[125vh] w-full flex-center top-0 left-0">
				<motion.div className="sticky top-0 lg:w-[45vw] lg:h-[100vh] overflow-hidden flex-center">
					<motion.div
						// style={{ scale: innerScale }}
						style={{ width }}
						className="lg:w-[45vw] lg:h-[70vh]"
					>
						<Image
							src={data.img}
							alt={data.title}
							width={750}
							height={750}
							className="w-full h-full object-cover"
						/>
					</motion.div>
				</motion.div>
			</div>
		</div>
	);
};

export default WorkCard;
