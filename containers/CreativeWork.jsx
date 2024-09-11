'use client';

import { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
	motion,
	useTransform,
	useSpring,
	useScroll,
	useMotionTemplate,
} from 'framer-motion';
import Lottie from 'lottie-react';
import arrowAnim from '@/public/lottie/arrow.json';

import { Gallery, HeaderText, ClipHeightText, StarsCanvas } from '@/components';
import { images } from '@/utils';
import { useIsDarkStore } from '@/utils/globalStates';

export default function Home() {
	const ref = useRef();
	const darkenTheme = useIsDarkStore((state) => state.darkenTheme);
	const isDark = useIsDarkStore((state) => state.isDark);
	useEffect(() => {
		const handleScroll = () => {
			const scrollTop = window.scrollY;

			if (scrollTop >= ref.current.offsetTop - 60) {
				darkenTheme();
			}
		};

		window.addEventListener('scroll', handleScroll);

		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	return (
		<div ref={ref} className={`w-full relative bg-transparent`}>
			<div className="container pt-[50px] md:pt-[100px] grid grid-cols-1 md:grid-cols-3 gap-3 mb-[-20vh] md:mb-[-100px] items-stat md:absolute top-0">
				<div className="text-[--white] md:col-span-2">
					<h1 className="text-[--white]">
						<HeaderText
							text={`My Creative Works`}
							additionalClass={'gap-2 lg:gap-x-4 lg:gap-y-0'}
						/>
					</h1>
				</div>
				<div className="uppercase text-[--white] text-[3.5vw] md:text-[1.25vw] lg:text-[0.9vw]">
					<ClipHeightText
						text={`Photography and videography are my passions. Through my lens, I capture the beauty and essence of the world around us. Here's a glimpse of my work`}
					/>
				</div>
			</div>
			<div className="w-full h-[90vh] md:h-screen overflow-hidden relative">
				<motion.div
					animate={{ x: ['50vw', 0] }}
					transition={{ duration: 0.85, type: 'tween', ease: 'easeInOut' }}
					className="w-full h-[calc(100%+20px)] pt-[50px]"
				>
					<Gallery />
				</motion.div>
				<div className="hidden md:block absolute w-full bottom-0 left-0 pb-[15px]">
					<div className="container text-[--white] grid grid-cols-3 items-center">
						<div className="flex">
							<motion.div
								whileHover={{ scale: 1.2 }}
								className="flex gap-1 items-center cursor-pointer"
							>
								<div className="w-[130px] h-[40px] rotate-[-90deg] overflow-hidde flex-center">
									<Lottie
										animationData={arrowAnim}
										loop={true}
										style={{
											objectFit: 'cover',
											width: '120px',
											height: '120px',
										}}
									/>
								</div>

								<p className="uppercase">Slide right </p>
							</motion.div>
						</div>
						<div></div>
						<div className="flex flex-col gap-2 items-end">
							<Link href="#contact" className="uppercase">
								<HeaderText
									text={`© Garrett Riggio`}
									additionalClass={'gap-2 gap-y-0'}
									displacement={15}
								/>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
