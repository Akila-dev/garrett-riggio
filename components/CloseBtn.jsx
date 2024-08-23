'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useAnimate, motion } from 'framer-motion';

import { RiCloseLargeLine } from 'react-icons/ri';

const CloseBtn = ({ onClick, right }) => {
	const [isShowMenu, setIsShowMenu] = useState(false);
	const [scope, animate] = useAnimate();

	const spinIn = () => {
		animate(
			'.menu-icon',
			{ rotateZ: [0, 90] },
			{ duration: 0.5, ease: 'circOut' }
		);
		animate(
			scope.current,
			{ scale: [1, 1.1], color: ['var(--black)', 'var(--brand2)'] },
			{ duration: 0.5, ease: 'circOut' }
		);
	};

	const spinOut = () => {
		animate(
			'.menu-icon',
			{ rotateZ: [90, 0] },
			{ duration: 0.5, ease: 'circOut' }
		);
		animate(
			scope.current,
			{ scale: [1.1, 1], color: ['var(--brand2)', 'var(--black)'] },
			{ duration: 0.5, ease: 'circOut' }
		);
	};

	return (
		<div
			className={`h-[60px] min-h-[80px] max-h-[80px] flex items-center ${
				right && 'justify-end'
			}`}
		>
			<motion.button
				ref={scope}
				onClick={onClick}
				onMouseEnter={() => spinIn()}
				onMouseLeave={() => spinOut()}
				className="flex gap-2 items-center font-medium text-[--black]"
				layout
			>
				<RiCloseLargeLine className="!text-xl menu-icon" />
				<span className={'text-xs' + '' + right && 'hidden md:block'}>
					CLOSE
				</span>
			</motion.button>
		</div>
	);
};

export default CloseBtn;
