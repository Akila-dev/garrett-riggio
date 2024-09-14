'use client';

import { useState } from 'react';

import { motion } from 'framer-motion';

import { variants } from '@/utils';

const WavyText = ({ text, additionalClass }) => {
	const [sentence, setSentence] = useState(text.split(' '));
	return (
		<motion.div
			initial="initial"
			whileInView="animate"
			transition={{ staggerChildren: 0.1 }}
			className={`flex flex-wrap w-full ${
				additionalClass ? additionalClass : 'gap-2'
			}`}
		>
			{sentence.map((word, i) => (
				<span key={i} className="flex">
					{word.split('').map((char, j) => (
						<motion.span
							variants={variants.TEXT_VARIANT_2}
							key={j}
							// className={i != 2 && i != 4 ? 'text-[--black] block' : ''}
						>
							{char}
						</motion.span>
					))}
				</span>
			))}
		</motion.div>
	);
};

export default WavyText;
