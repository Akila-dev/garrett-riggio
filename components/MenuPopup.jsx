'use client';

import Link from 'next/link';
import { FaRegEnvelope, FaPhone } from 'react-icons/fa6';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { useEffect, useState } from 'react';
import { useAnimate, stagger, usePresence, motion } from 'framer-motion';

import { variants } from '../utils';

const contactIcons = [
	<FaRegEnvelope key={1} className="inline-flex items-center mr-1 mb-1" />,
	<FaPhone key={2} className="inline-flex items-center mr-1 mb-1" />,
	<FaMapMarkerAlt key={3} className="inline-flex items-center mr-1 mb-1" />,
];

import { FOOTERLINKLIST } from '../utils/data';
import { CloseBtn } from '../components';

const MenuPopup = ({ close }) => {
	const [isPresent, safeToRemove] = usePresence();
	const [scope, animate] = useAnimate();

	useEffect(() => {
		if (isPresent) {
			const enterAnimation = async () => {
				animate(
					scope.current,
					{ width: [0, '100%'] },
					{ type: 'spring', duration: 1, bounce: 0.1 }
				);
				await animate(
					'.menu-link',
					{
						opacity: [0, 1],
						x: [50, 0],
						y: [50, 0],
					},
					{ delay: stagger(0.1), type: 'spring', duration: 0.8, bounce: 0.3 }
				);
			};
			enterAnimation();
		} else {
			const exitAnimation = async () => {
				animate(
					'.menu-link',
					{
						opacity: [1, 0],
						x: [0, 50],
					},
					{ delay: stagger(0.015), type: 'spring', duration: 0.5, bounce: 0.3 }
				);
				await animate(
					scope.current,
					{ width: ['100%', 0] },
					{ type: 'spring', duration: 1, bounce: 0.1 }
				);
				safeToRemove();
			};

			exitAnimation();
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [isPresent]);

	const menu = [
		{
			link: 'Home',
		},
		{
			link: 'About',
		},
		{
			link: 'Services',
		},
		{
			link: 'Contact',
		},
	];

	return (
		<div
			ref={scope}
			className="fixed top-0 right-0 w-full sm:max-w-[375px] !z-[100] h-full overflow-hidden "
		>
			<motion.div className="bg-[--white] text-[--bg] w-full h-full overflow-y-auto flex flex-col lg:gap-10 justify-between text-xs overflow-hidden">
				<div className="px-5 md:px-[2rem] ">
					<CloseBtn onClick={() => close()} />
				</div>

				<div className="w-full px-5 md:px-[2rem] pb-[5vh] md:pb-0">
					<div className="space-y-4">
						{menu.map((item, id) => (
							<motion.div
								key={id}
								whileTap="tap"
								whileHover="hover"
								variants={variants.BUTTON_VARIANT}
							>
								<Link
									key={id}
									href={'/' + item.link}
									className="block uppercase text-2xl link text-[--black] font-thin menu-link hover:text-[--brand2]"
								>
									{item.link}
								</Link>
							</motion.div>
						))}
					</div>
				</div>
				<div className="grid grid-cols-5 pb-[10vh] md:pb-[15vh] gap-2 w-full overflow-hidden px-5 md:px-[2rem] ">
					<div className="space-y-4 col-span-2">
						{FOOTERLINKLIST.slice(0, 3).map((link, id) => (
							<motion.div
								key={id}
								whileTap="tap"
								whileHover="hover"
								variants={variants.BUTTON_VARIANT}
							>
								<Link
									key={id}
									href={'/' + link.link}
									className="block capitalize text-base link text-[--black] font-thin menu-link hover:text-[--brand2]"
								>
									{link.label}
								</Link>
							</motion.div>
						))}
					</div>
					<div className="space-y-4 col-span-3 w-full h-auto">
						{FOOTERLINKLIST.slice(3, 6).map((link, id) => (
							<motion.div
								key={id}
								whileTap="tap"
								whileHover="hover"
								variants={variants.BUTTON_VARIANT}
							>
								<Link
									key={id}
									href={'/' + link.link}
									className="block capitalize text-base link text-[--black] font-thin menu-link hover:text-[--brand2]"
								>
									{contactIcons[id]} {link.label}
								</Link>
							</motion.div>
						))}
					</div>
				</div>
			</motion.div>
		</div>
	);
};

export default MenuPopup;
