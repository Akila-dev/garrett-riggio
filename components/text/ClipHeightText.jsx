'use client';

import React from 'react';

import { motion } from 'framer-motion';

import { variants } from '@/utils';

const ClipHeightText = ({ text }) => {
	return (
		<motion.div
			className=""
			initial="initial"
			whileInView="animate"
			variants={variants.TEXT_VARIANT_3}
		>
			<motion.div className="">{text}</motion.div>
		</motion.div>
	);
};

export default ClipHeightText;
