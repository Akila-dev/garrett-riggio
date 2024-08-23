'use client';

import { useEffect, useState } from 'react';
import { useAnimate, stagger, AnimatePresence, motion } from 'framer-motion';

import { BsDot } from 'react-icons/bs';
import { FaPhone } from 'react-icons/fa6';

import { Logo, MenuPopup } from '../components';

const Navbar = () => {
	const [isShowMenu, setIsShowMenu] = useState(false);
	const [scope, animate] = useAnimate();

	const animateMenuLines = () => {
		animate('.menu-lines', { width: [0, 20] }, { delay: stagger(0.1) });
	};
	const animateLetsTalk = () => {
		animate(
			'.lets-talk',
			{ background: 'var(--brand)', scale: 1 },
			{ type: 'spring', duration: 0.25 }
		);
		animate('.hide-icon', { scale: 0, display: 'none' }, { duration: 0.1 });
		animate(
			'.show-icon',
			{ translateX: [-15, 0], width: 15, opacity: 1 },
			{ type: 'spring', duration: 0.5, bounce: 0.75 }
		);
	};
	const returnLetsTalk = () => {
		animate(
			'.lets-talk',
			{ background: 'var(--white)', scale: 1 },
			{ type: 'spring', duration: 0.25 }
		);
		animate('.hide-icon', { scale: 1.25, display: 'block' }, { duration: 0.1 });
		animate(
			'.show-icon',
			{ translateX: -15, width: 0, opacity: 0 },
			{ type: 'spring', duration: 0.5, bounce: 0 }
		);
	};

	return (
		<>
			<div className="w-full fixed top-0 left-0" ref={scope}>
				<div className="container flex items-center justify-between gap-[10vw] h-[120px]">
					<div className="">
						<Logo />
					</div>
					<h2 className="text-[--white] hidden">
						Award Winning Marketing, Sales, Tech & Sustainability Philanthropist
						| Smile Creator
					</h2>
					<motion.div className="flex items-center md:min-w-[230px] md:max-w-[230px] justify-end gap-[15px]">
						<motion.button
							layout
							whileTap={{ scale: 0.9 }}
							transition={{ type: 'spring', bounce: 0.75 }}
							className="btn-1 w-full lets-talk relative !hidden md:!flex"
							onMouseEnter={() => animateLetsTalk()}
							onMouseLeave={() => returnLetsTalk()}
						>
							<div className="show-icon w-0 opacity-0">
								<FaPhone className="" />
							</div>
							<span className="mx-2">{`Let's Talk`}</span>{' '}
							<BsDot className="scale-125 mx-[-5px] hide-icon absolute right-0 mr-4" />
						</motion.button>
						<motion.button
							onMouseEnter={() => animateMenuLines()}
							onClick={() => setIsShowMenu(true)}
							whileTap={{ scale: 0.9 }}
							transition={{ type: 'spring', bounce: 0.75 }}
							whileHover={{ scale: 1.1 }}
							className="flex items-center gap-2 uppercase text-[--white] bg-[--white] w-[40px] h-[40px] rounded-full justify-center md:w-auto md:h-auto md:bg-transparent md:justify-end"
						>
							<span className="hidden md:block">Menu</span>
							<div className="flex flex-col gap-[1px] w-[20px]">
								<span className="menu-lines block h-[4px] w-[20px] border-t-2 md:border-t border-[--black] md:border-[--white]"></span>
								<span className="menu-lines block h-[3px] w-[20px] border-t-2 md:border-t border-[--black] md:border-[--white]"></span>
								<span className="menu-lines block h-[3px] md:h-[2px] w-[20px] border-b-2 md:border-b border-[--black] md:border-[--white]"></span>
							</div>
						</motion.button>
					</motion.div>
				</div>
			</div>
			<AnimatePresence>
				{isShowMenu && <MenuPopup close={() => setIsShowMenu(false)} />}
			</AnimatePresence>
		</>
	);
};

export default Navbar;
