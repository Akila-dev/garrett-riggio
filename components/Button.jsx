'use client';

import { useState } from 'react';
import { motion, useAnimate } from 'framer-motion';

import { variants } from '@/utils';

const Button = ({ type, dark, text, link, icon }) => {
	const [scope, animate] = useAnimate();

	const animateButton = () => {
		animate(
			'.btn-icon-box',
			{ width: [25, 500], height: [25, 500], x: [0, 250] },
			{ type: 'spring', duration: 1.5, bounce: 0.25, delay: 0.25 }
		);
		animate(
			'.btn-icon',
			{ scale: [0, 1] },
			{ type: 'spring', duration: 1, bounce: 0.5 }
		);
	};

	const returnButton = () => {
		animate(
			'.btn-icon-box',
			{ width: [500, 25], height: [500, 25], x: [250, 0] },
			{ type: 'spring', duration: 1, bounce: 0.1 }
		);
		animate(
			'.btn-icon',
			{ scale: [0, 1] },
			{ type: 'spring', duration: 1, bounce: 0.5 }
		);
	};

	return (
		<motion.a
			ref={scope}
			href={link}
			onMouseEnter={() => animateButton()}
			onMouseLeave={() => returnButton()}
			className={`flex items-center gap-2 font-normal text-sm md:text-base border border-opacity-10 py-2 px-4 rounded-[2rem] relative group overflow-hidden ${
				dark
					? 'border-[--white] bg-transparent'
					: 'border-[--black] bg-[--white]'
			}`}
		>
			<motion.div
				className={`btn-icon-box absolute right-[0.35rem] text-xs w-[25px] h-[25px] flex-center rounded-full ${
					dark ? 'bg-[--white]' : 'bg-[--black]'
				}`}
			/>
			<motion.div
				className={`btn-icon absolute right-3 text-xs ${
					dark ? 'text-[--black]' : 'text-[--brand]'
				}`}
			>
				{icon && icon}
			</motion.div>
			<motion.div
				className={`btn-text blend-text pr-[25px] relative overflow-hidden`}
			>
				{text}
			</motion.div>
		</motion.a>
	);
};

export default Button;
