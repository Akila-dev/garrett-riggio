'use client';

import React from 'react';
import Image from 'next/image';
import { GalleryCanvas } from '../components';

// ASSETS
import { IoArrowDown } from 'react-icons/io5';
import { FaArrowDown } from 'react-icons/fa6';
import { images } from '../utils';

const Gallery = () => {
	return (
		<div className="relative h-[400vh]">
			<div className="w-full h-[calc(100vh+15px)] no-scrollbar sticky top-0">
				<GalleryCanvas />
				<div className="h-screen w-full absolute top-0 pointer-events-none flex flex-col justify-between">
					<div href="#main" className="p-5 md:p-[3rem] text-sm">
						<Image
							src={images.garret}
							alt="Garret"
							className="w-[70px] md:w-[100px]"
						/>
						<p className="uppercase">
							{"Hi, I'm"} <br />
							{'Garret Riggio'}
						</p>
					</div>
					<div className="p-5 md:p-[3rem] w-full flex justify-between items-end gap-5">
						<div className="text-xs md:text-sm flex flex-col gap-3">
							<Image src={images.arrow} alt="Garret" className="w-[80px]" />
							<p className="uppercase text-xs md:text-sm">
								Scoll Sideways
								<br /> to rotate
							</p>
						</div>
						<div className="text-xs md:text-sm  flex items-end flex-col gap-2">
							<div className="bg-[--white] w-[35px] h-[35px] rounded-full flex-center">
								<FaArrowDown className="text-[--black] text-lg" />
							</div>
							<p className="uppercase text-right text-xs md:text-sm">
								Scoll Down
								<br /> to continue
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Gallery;
