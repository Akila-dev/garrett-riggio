'use client';

import { useRef, useState, useEffect } from 'react';
import { useIsDarkStore } from '@/utils/globalStates';
import { SKILLSLIST } from '@/utils/data';
import { Button } from '@/components';

import { FaPaperPlane } from 'react-icons/fa6';

const About = () => {
	const aboutContainer = useRef();
	const lightenTheme = useIsDarkStore((state) => state.lightenTheme);
	const darkenTheme = useIsDarkStore((state) => state.darkenTheme);
	const isDark = useIsDarkStore((state) => state.isDark);
	// console.log(aboutContainer);

	useEffect(() => {
		const handleScroll = () => {
			const scrollTop = window.scrollY;

			if (scrollTop >= aboutContainer.current.offsetTop - 120) {
				lightenTheme();
			} else {
				darkenTheme();
			}
		};

		window.addEventListener('scroll', handleScroll);

		return () => window.removeEventListener('scroll', handleScroll);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<div
			ref={aboutContainer}
			className={`relative min-h-screen transition duration-500 ${
				isDark
					? 'bg-transparent text-[--white]'
					: '!bg-[--white] text-[--black]'
			}`}
		>
			<div className="w-full flex-center">
				<Button
					type={1}
					text="Get in Touch"
					dark={isDark}
					link="/#contact"
					icon={<FaPaperPlane />}
				/>
			</div>
			<div className={`inset-0 flex items-center select-none overflow-hidden`}>
				<div className={`relative`}>
					<div
						className={`animate-horizontal-scroll flex items-center gap-5 px-5`}
					>
						{SKILLSLIST.map((skill, i) => (
							<div
								className={`text-nowrap ${
									i % 2
										? ` text-transparent text-[9vw] md:text-[6vw] lg:text-[3.5vw] ${
												isDark ? 'outline-text' : 'outline-text-black'
										  }`
										: 'text-[11vw] md:text-[7vw] lg:text-[4vw]'
								}`}
								key={i}
							>
								{skill}
							</div>
						))}
					</div>
					<div
						className={`animate-horizontal-scroll-2 flex items-center gap-5 px-5 absolute top-0 left-0`}
					>
						{SKILLSLIST.map((skill, i) => (
							<div
								className={`text-nowrap ${
									i % 2
										? ` text-transparent text-[9vw] md:text-[6vw] lg:text-[3.5vw] ${
												isDark ? 'outline-text' : 'outline-text-black'
										  }`
										: 'text-[11vw] md:text-[7vw] lg:text-[4vw]'
								}`}
								key={i}
							>
								{skill}
							</div>
						))}
					</div>
				</div>
			</div>
			{/* <div>
				<video autoPlay muted loop className="w-full h-screen object-cover">
					<source src="/videos/terum.mp4" type="video/mp4" />
					Your browser does not support the video tag.
				</video>
			</div> */}
		</div>
	);
};

export default About;
