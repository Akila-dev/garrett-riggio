'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

import { DotGrid } from '../components';

const Loader = ({ loaded }) => {
	return !loaded ? (
		<motion.div className="w-full h-screen flex-center bg-[--white] text-[--black]">
			<motion.div className="relative w-[100vw] h-full overflow-hidden flex">
				{/* <DotGrid largeDots w={50} h={30} /> */}
			</motion.div>
		</motion.div>
	) : (
		<div>Loaded</div>
	);
};

export default Loader;
