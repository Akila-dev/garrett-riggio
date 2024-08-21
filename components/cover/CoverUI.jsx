'use client';

import { atom, useAtom } from 'jotai';
import { useEffect } from 'react';
import Image from 'next/image';

import { galleryList } from '../../utils/galleryData';
import { images } from '../../utils';

const pictures = [...galleryList];

export const pageAtom = atom(1);

export const pages = [
	{
		front: 'book-cover.jpg',
		back: pictures[0],
	},
];
for (let i = 1; i < pictures.length - 1; i += 2) {
	pages.push({
		front: pictures[i % pictures.length],
		back: pictures[(i + 1) % pictures.length],
	});
}

pages.push({
	front: pictures[pictures.length - 1],
	back: 'book-back.jpg',
});

const CoverUI = () => {
	const [page, setPage] = useAtom(pageAtom);

	useEffect(() => {
		const audio = new Audio('/audios/page-flip-01a.mp3');
		audio.play();
	}, [page]);

	return (
		<>
			<main className=" pointer-events-none select-none z-10 fixed  inset-0  flex justify-between flex-col">
				<a className="pointer-events-auto mt-10 ml-10" href="/">
					{/* <img className="w-20" src="/images/wawasensei-white.png" /> */}
					<Image
						src={images.garret}
						alt="Garret"
						className="w-[70px] md:w-[100px]"
					/>
				</a>
				{/* <div className="w-full overflow-auto pointer-events-auto flex justify-center">
					<div className="overflow-auto flex items-center gap-4 max-w-full p-10">
						{[...pages].map((_, index) => (
							<button
								key={index}
								className={`border-transparent hover:border-white transition-all duration-300  px-4 py-3 rounded-full  text-lg uppercase shrink-0 border ${
									index === page
										? 'bg-white/90 text-black'
										: 'bg-black/30 text-white'
								}`}
								onClick={() => setPage(index)}
							>
								{index === 0 ? 'Cover' : `Page ${index}`}
							</button>
						))}
						<button
							className={`border-transparent hover:border-white transition-all duration-300  px-4 py-3 rounded-full  text-lg uppercase shrink-0 border ${
								page === pages.length
									? 'bg-white/90 text-black'
									: 'bg-black/30 text-white'
							}`}
							onClick={() => setPage(pages.length)}
						>
							Back Cover
						</button>
					</div>
				</div> */}
			</main>

			<div className="fixed inset-0 flex items-center -rotate-2 select-none">
				<div className="relative">
					<div className="bg-white/0  animate-horizontal-scroll flex items-center gap-8 w-max px-8">
						<h1 className="shrink-0 text-white text-10xl font-semibold ">
							Garrett Riggio
						</h1>
						<h2 className="shrink-0 text-white text-8xl italic font-light">
							Award Winning
						</h2>
						<h2 className="shrink-0 text-white text-12xl font-semibold">
							Marketing,
						</h2>
						<h2 className="shrink-0 text-transparent text-12xl font-semibold italic outline-text">
							Sales, Tech
						</h2>
						{/* <h2 className="shrink-0 text-white text-9xl font-medium">Tech</h2> */}
						<h2 className="shrink-0 text-white text-9xl font-extralight italic">
							& Sustainability |
						</h2>
						<h2 className="shrink-0 text-white text-13xl font-semibold">
							Philanthropist
						</h2>
						<h2 className="shrink-0 text-transparent text-13xl font-semibold outline-text italic">
							| Smile Creator
						</h2>
					</div>
					<div className="absolute top-0 left-0 bg-white/0 animate-horizontal-scroll-2 flex items-center gap-8 px-8 w-max">
						<h1 className="shrink-0 text-white text-10xl font-semibold ">
							Garrett Riggio
						</h1>
						<h2 className="shrink-0 text-white text-8xl italic font-light">
							Award Winning
						</h2>
						<h2 className="shrink-0 text-white text-12xl font-semibold">
							Marketing,
						</h2>
						<h2 className="shrink-0 text-transparent text-12xl font-semibold italic outline-text">
							Sales, Tech
						</h2>
						{/* <h2 className="shrink-0 text-white text-9xl font-medium">
							Tutorials
						</h2> */}
						<h2 className="shrink-0 text-white text-9xl font-extralight italic">
							& Sustainability |
						</h2>
						<h2 className="shrink-0 text-white text-13xl font-semibold">
							Philanthropist
						</h2>
						<h2 className="shrink-0 text-transparent text-13xl font-semibold outline-text italic">
							| Smile Creator
						</h2>
					</div>
				</div>
			</div>
		</>
	);
};

export default CoverUI;
