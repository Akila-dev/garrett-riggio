'use client';

import React from 'react';

import { motion } from 'framer-motion';

import { variants } from '@/utils';

const ClipHeightText = ({ sm, md, text, lg }) => {
	return (
		<motion.div
			initial="initial"
			whileInView="intro"
			transition={{ staggerChildren: 0.15 }}
		>
			{sm && (
				<motion.div
					className="overflow-hidden md:hidden"
					variants={variants.TEXT_VARIANT_3}
					custom={sm}
				>
					<motion.div className="">{text}</motion.div>
				</motion.div>
			)}
			{md && (
				<motion.div
					className="overflow-hidden hidden md:inline-block lg:hidden"
					variants={variants.TEXT_VARIANT_3}
					custom={md}
				>
					<motion.div className="">{text}</motion.div>
				</motion.div>
			)}
			{lg && (
				<motion.div
					className="overflow-hidden hidden lg:inline-block"
					variants={variants.TEXT_VARIANT_3}
					custom={lg}
				>
					<motion.div className="">{text}</motion.div>
				</motion.div>
			)}
		</motion.div>
	);
};

export default ClipHeightText;
