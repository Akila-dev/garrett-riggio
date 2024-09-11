'use client';

import { useState } from 'react';

import { motion } from 'framer-motion';

import { variants } from '@/utils';

const HeaderText = ({ text, additionalClass, displacement }) => {
	const [sentence, setSentence] = useState(text.split(' '));
	return (
		<motion.div
			initial="initial"
			whileInView="animate"
			transition={{ staggerChildren: 0.02 }}
			className={`flex flex-wrap w-full overflow-hidden ${
				additionalClass && additionalClass
			}`}
		>
			{sentence.map((word, i) => (
				<div key={i} className="flex">
					{word.split('').map((char, j) => (
						<motion.div
							variants={variants.TEXT_VARIANT_4}
							key={j}
							custom={displacement}
						>
							{char}
						</motion.div>
					))}
				</div>
			))}
		</motion.div>
	);
};

export default HeaderText;
