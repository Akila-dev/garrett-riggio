'use client';

import React from 'react';
import Lottie from 'lottie-react';
import { motion } from 'framer-motion';

import anim from '@/public/lottie/handshake.json';
import { DotGrid, ScrambleText } from '@/components';
import { variants } from '@/utils';

const tags = [
	'Sales Enablement',
	'CRM Systems (Salesforce)',
	'Sales Operations',
];

const LottieCard = () => {
	return (
		<div className="border rounded-xl">
			<div className="w-full h-[175px] relative flex-center">
				<DotGrid id={1} />
				<div className="w-[175px] h-[175px] overflow-hidden flex-center">
					<div className="">
						<Lottie
							animationData={anim}
							loop={true}
							style={{
								objectFit: 'cover',
								width: '225px',
								height: '225px',
							}}
						/>
					</div>
				</div>
			</div>
			<div className="px-5 space-y-2 py-5">
				<motion.h1 className="text-[1.5vw]">
					<motion.div className="">
						<ScrambleText textData="Sales Management" />
					</motion.div>
				</motion.h1>
				{/* <h1 className="text-[1.5vw]">
                    Sales Management</h1> */}
				<p className="text-[--neutral] text-xs">
					Boost performance and efficiency by implementing cutting-edge
					marketing technologies
				</p>
				<div className="flex flex-wrap gap-1 pt-3">
					{tags.map((tag, i) => (
						<div
							className="text-[0.7vw] text-nowrap py-1 px-2 bg-[--brand] rounded-[2rem]"
							key={i}
						>
							{tag}
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default LottieCard;
