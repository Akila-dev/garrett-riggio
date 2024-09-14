'use client';

import React from 'react';
import Link from 'next/link';
import { IoLocationOutline } from 'react-icons/io5';
import { motion } from 'framer-motion';

import {
	ZoomingCardsBG,
	WavyText,
	HeaderText,
	ClipHeightText,
} from '../components';
import { variants } from '@/utils';

const Footer = () => {
	return (
		<main className="relative w-full h-screen">
			{/* <ZoomingCardsBG /> */}
			<ZoomingCardsBG />
			<div className="absolute top-0 left-0 w-full h-full bg-black/50 flex-center">
				<motion.div
					variants={variants.BUTTON_VARIANT}
					whileTap="tap"
					whileHover="hover"
					className="cursor-pointer"
				>
					<Link href="#" className="mb-[50px]">
						<div className="text-white text-[20vw] lg:text-[10vw] !font-medium ">
							<WavyText text={`Let's Talk`} />
						</div>
					</Link>
				</motion.div>
			</div>
			<div className="absolute bottom-0 left-0 w-full p-5 md:p-[3rem]">
				<div className="grid grid-cols-2 md:grid-cols-4 gap-5">
					<div className=" flex flex-col gap-2 md:grid md:grid-cols-2 md:gap-5 md:col-span-2">
						<div className="flex flex-col gap-2">
							<Link
								href="#"
								className="flex items-center w-full gap-1 text-[14px] md:text-lg text-gray-200 font-thin underline md:no-underline underline-offset-[5px] overflow-hidden"
							>
								<motion.div
									initial="initial"
									animate="animate"
									variants={variants.TEXT_VARIANT_4}
									className="overflow-hidden"
								>
									<IoLocationOutline />
								</motion.div>{' '}
								<HeaderText text="Location 1" />
							</Link>
							<div className="hidden md:flex items-center w-full gap-1 text-[14px] md:text-lg text-gray-200 font-thin ">
								<ClipHeightText text="Gran Vía de les Corts, 682" />
							</div>
							<div className="hidden md:flex items-center w-full gap-1 text-[14px] md:text-lg text-gray-200 font-thin">
								<ClipHeightText text="08010" />
							</div>
						</div>
						<div className="flex flex-col gap-2">
							<Link
								href="#"
								className="flex items-center w-full gap-1 text-[14px] md:text-lg text-gray-200 font-thin underline md:no-underline underline-offset-[5px] overflow-hidden"
							>
								<motion.div
									initial="initial"
									animate="animate"
									variants={variants.TEXT_VARIANT_4}
									className="overflow-hidden"
								>
									<IoLocationOutline />
								</motion.div>
								<HeaderText text="Location 2" />
							</Link>
							<div className="hidden md:flex items-center w-full gap-1 text-[14px] md:text-lg text-gray-200 font-thin">
								<ClipHeightText text="Gran Vía de les Corts, 682" />
							</div>
							<div className="hidden md:flex items-center w-full gap-1 text-[14px] md:text-lg text-gray-200 font-thin">
								<ClipHeightText text="08010" />
							</div>
						</div>
					</div>
					<div className="flex flex-col gap-2">
						<Link
							href="#"
							className="flex items-center w-full gap-1 text-[14px] md:text-lg text-gray-200 font-thin underline underline-offset-[5px]"
						>
							<ClipHeightText text="Instagram" />
						</Link>
						<Link
							href="#"
							className="flex items-center w-full gap-1 text-[14px] md:text-lg text-gray-200 font-thin underline underline-offset-[5px]"
						>
							<ClipHeightText text="LinkedIn" />
						</Link>
						<Link
							href="#"
							className="flex items-center w-full gap-1 text-[14px] md:text-lg text-gray-200 font-thin underline underline-offset-[5px]"
						>
							<ClipHeightText text="Twitter" />
						</Link>
					</div>
					<div className="flex flex-col gap-2">
						<Link
							href="#"
							className="hidden md:flex items-center w-full gap-1 text-[14px] md:text-lg text-gray-200 font-thin "
						>
							<HeaderText text="Business Inquiries" />
						</Link>
						<Link
							href="#"
							className="flex items-center w-full gap-1 text-[14px] md:text-lg text-gray-200 font-thin underline md:no-underline underline-offset-[5px]"
						>
							<ClipHeightText text="hello@mail.com" />
						</Link>
					</div>
				</div>
			</div>
		</main>
	);
};

export default Footer;
