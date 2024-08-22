import React from 'react';
import Link from 'next/link';
import { IoLocationOutline } from 'react-icons/io5';

import { ZoomingCardsBG } from '../components';

const Footer = () => {
	return (
		<main className="relative w-full h-screen">
			<ZoomingCardsBG />
			<div className="absolute top-0 left-0 w-full h-full bg-black/50 flex-center">
				<Link href="#" className="mb-[50px]">
					<h1 className="text-white text-[20vw] lg:text-[10vw] !font-medium ">{`Let's Talk`}</h1>
				</Link>
			</div>
			<div className="absolute bottom-0 left-0 w-full p-5 md:p-[3rem]">
				<div className="grid grid-cols-2 md:grid-cols-4 gap-5">
					<div className=" flex flex-col gap-2 md:grid md:grid-cols-2 md:gap-5 md:col-span-2">
						<div className="flex flex-col gap-2">
							<Link
								href="#"
								className="flex items-center w-full gap-1 text-[14px] md:text-lg text-gray-200 font-thin underline md:no-underline underline-offset-[5px]"
							>
								<IoLocationOutline /> Location 1
							</Link>
							<p className="hidden md:flex items-center w-full gap-1 text-[14px] md:text-lg text-gray-200 font-thin ">
								Gran Vía de les Corts, 682 <br />
							</p>
							<p className="hidden md:flex items-center w-full gap-1 text-[14px] md:text-lg text-gray-200 font-thin">
								08010
							</p>
						</div>
						<div className="flex flex-col gap-2">
							<Link
								href="#"
								className="flex items-center w-full gap-1 text-[14px] md:text-lg text-gray-200 font-thin underline md:no-underline underline-offset-[5px]"
							>
								<IoLocationOutline /> Location 2
							</Link>
							<p className="hidden md:flex items-center w-full gap-1 text-[14px] md:text-lg text-gray-200 font-thin">
								Gran Vía de les Corts, 682
							</p>
							<p className="hidden md:flex items-center w-full gap-1 text-[14px] md:text-lg text-gray-200 font-thin">
								08010
							</p>
						</div>
					</div>
					{/* <div className="grid grid-cols-1 lg:grid-cols-2 gap-5"> */}
					<div className="flex flex-col gap-2">
						<Link
							href="#"
							className="flex items-center w-full gap-1 text-[14px] md:text-lg text-gray-200 font-thin underline underline-offset-[5px]"
						>
							Instagram
						</Link>
						<Link
							href="#"
							className="flex items-center w-full gap-1 text-[14px] md:text-lg text-gray-200 font-thin underline underline-offset-[5px]"
						>
							LinkedIn
						</Link>
						<Link
							href="#"
							className="flex items-center w-full gap-1 text-[14px] md:text-lg text-gray-200 font-thin underline underline-offset-[5px]"
						>
							Twitter
						</Link>
					</div>
					<div className="flex flex-col gap-2">
						<Link
							href="#"
							className="hidden md:flex items-center w-full gap-1 text-[14px] md:text-lg text-gray-200 font-thin "
						>
							Business Inquiries
						</Link>
						<Link
							href="#"
							className="flex items-center w-full gap-1 text-[14px] md:text-lg text-gray-200 font-thin underline md:no-underline underline-offset-[5px]"
						>
							hello@mail.com
						</Link>
					</div>
				</div>
				{/* </div> */}
			</div>
		</main>
	);
};

export default Footer;
