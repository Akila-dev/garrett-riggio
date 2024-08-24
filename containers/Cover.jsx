'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
	motion,
	useTransform,
	useSpring,
	useScroll,
	useMotionTemplate,
	AnimatePresence,
} from 'framer-motion';

import { FaArrowDown } from 'react-icons/fa6';

import { variants, useDeviceSize, images } from '../utils';
import { ScrambleText } from '../components';
const coverVideoUrl = '/videos/cover.mp4';
const textList = [
	'Marketing Specialist',
	'Sales Specialist',
	'Tech Specialist',
	'Sustainability Specialist',
	'Philantropist',
];

const Cover = ({ scrollYProgress }) => {
	const [activeIndex, setActiveIndex] = useState(0);
	const { width, height } = useDeviceSize();

	useEffect(() => {
		setTimeout(() => {
			if (activeIndex < textList.length - 1) {
				setActiveIndex((prev) => prev + 1);
			} else {
				setActiveIndex(0);
			}
		}, 5000);
	}, [activeIndex]);

	// const { scrollY } = useScroll();

	const translateTop = useTransform(
		scrollYProgress,
		[0, 0.25],
		[0, -height / 2]
	);
	const springTranslateTop = useSpring(translateTop, { damping: 18 });

	const translateBottom = useTransform(
		scrollYProgress,
		[0, 0.25],
		[0, height / 2]
	);
	const springTranslateBottom = useSpring(translateBottom, { damping: 18 });

	return (
		<div className="w-full h-screen relative">
			<video autoPlay muted loop className="w-full h-full object-cover">
				<source src={coverVideoUrl} type="video/mp4" />
				Your browser does not support the video tag.
			</video>
			<div className="w-full h-full absolute top-0 left-0 cover-overlay" />
			<motion.div
				initial="initial"
				animate="intro"
				transition={{ duration: 0, staggerChildren: 0.15 }}
				className="absolute top-0 left-0 w-full h-screen p-5 md:p-7 !pt-[120px] radial-gradient flex flex-col justify-between"
			>
				{/* MOBILE  */}
				<motion.div className="lg:hidden pointer-events-none">
					<motion.h1
						className="cover-text"
						variants={variants.TEXT_VARIANT_1}
						custom={'9vw'}
					>
						<motion.div className="">Award Winning</motion.div>
					</motion.h1>
					<motion.h1
						className="cover-text"
						variants={variants.TEXT_VARIANT_1}
						custom={'9vw'}
					>
						<motion.div className="">
							{textList.map(
								(text, i) =>
									i === activeIndex && (
										<ScrambleText key={i} textData={textList[activeIndex]} />
									)
							)}{' '}
						</motion.div>
					</motion.h1>
					<motion.h1
						className="cover-text"
						variants={variants.TEXT_VARIANT_1}
						custom={'9vw'}
					>
						<motion.div className="">And Smile Creator</motion.div>
					</motion.h1>
				</motion.div>
				{/* DESKTOP */}
				<motion.div
					layout
					style={{ y: springTranslateTop }}
					className="hidden lg:block pointer-events-non"
				>
					<motion.h1
						className="cover-text"
						variants={variants.TEXT_VARIANT_1}
						custom={'4.75vw'}
					>
						<motion.div className="">Award Winning</motion.div>
					</motion.h1>
					<motion.h1
						className="cover-text"
						variants={variants.TEXT_VARIANT_1}
						custom={'4.75vw'}
					>
						<motion.div className="">
							{textList.map(
								(text, i) =>
									i === activeIndex && (
										<ScrambleText key={i} textData={textList[activeIndex]} />
									)
							)}{' '}
						</motion.div>
					</motion.h1>
					<motion.h1
						className="cover-text"
						variants={variants.TEXT_VARIANT_1}
						custom={'4.75vw'}
					>
						<motion.div className="">And Smile Creator</motion.div>
					</motion.h1>
				</motion.div>

				<motion.h1 className="absolute bottom-[50px] lg:top-[120px] lg:bottom-0 right-0 blend-text text-[20vw] lg:text-[15vw] [writing-mode:vertical-lr] uppercase hidden lg:block pointer-events-none">
					Garrett
				</motion.h1>

				{/* AWARDS */}
				<motion.div
					style={{ y: springTranslateBottom }}
					className="flex gap-4 justify-between items-end "
				>
					<Link
						href="/red-road-foundation"
						className="hidden lg:flex flex-col gap-3"
					>
						<motion.div
							variants={variants.TEXT_VARIANT_1}
							custom={115}
							className="overflow-hidden"
						>
							<Image
								src={images.growthAward}
								alt="Award"
								width={500}
								height={500}
								className="w-[165px] h-[115px] object-cover"
							/>
						</motion.div>
						<motion.p
							variants={variants.TEXT_VARIANT_1}
							custom={20}
							className="blend-text block overflow-hidden"
						>
							THE RED ROAD FOUNDATION
						</motion.p>
					</Link>
					<div className="lg:hidden" />
					<div className="flex-center flex-col gap-2">
						<motion.p
							variants={variants.TEXT_VARIANT_1}
							custom={15}
							className="text-[--white] overflow-hidden"
						>
							SCROLL FOR MORE
						</motion.p>
						<motion.div
							className="bg-[--white] w-[40px] h-[40px] rounded-full flex-center overflow-hidden"
							variants={variants.TEXT_VARIANT_1}
							custom={40}
						>
							<motion.span
								animate={{ y: [-10, 0] }}
								transition={{
									type: 'spring',
									bounce: 0.75,
									duration: 1.5,
									repeat: Infinity,
									repeatDelay: 1,
								}}
							>
								<FaArrowDown className="text-[--black]" />
							</motion.span>
						</motion.div>
					</div>
					<div className="lg:w-[165px]"></div>
				</motion.div>
			</motion.div>
		</div>
	);
};

export default Cover;
