'use client';

import { useState } from 'react';
import anime from 'animejs';

const WaterDropGrid = ({ w, h, id, largeDots }) => {
	return (
		<div className="absolute top-0 left-0 w-full h-full grid place-content-center overflow-hidden">
			<DotGrid
				width={w ? w : 25}
				height={h ? h : 20}
				id={id}
				largeDots={largeDots}
			/>
		</div>
	);
};

const DotGrid = ({ width, height, id, largeDots }) => {
	const [isAnimating, setIsAnimating] = useState(false);
	const handleDotClick = (e) => {
		if (!isAnimating) {
			setIsAnimating(true);

			anime({
				targets: `.dot-point-${id}`,
				scale: [
					{ value: 1.35, easing: 'easeOutSine', duration: 250 },
					{ value: 1, easing: 'easeInOutQuad', duration: 500 },
				],
				translateY: [
					{ value: -15, easing: 'easeOutSine', duration: 250 },
					{ value: 0, easing: 'easeInOutQuad', duration: 500 },
				],
				opacity: [
					{ value: 1, easing: 'easeOutSine', duration: 250 },
					{ value: 0.5, easing: 'easeInOutQuad', duration: 500 },
				],
				delay: anime.stagger(100, {
					grid: [width, height],
					from: e.target.dataset.index,
				}),
			});
			setTimeout(() => {
				setIsAnimating(false);
			}, 4000);
		}
	};

	const dots = [];
	let index = 0;

	for (let i = 0; i < width; i++) {
		for (let j = 0; j < height; j++) {
			dots.push(
				<div
					className="group rounded-full p-2 transition-colors duration-500"
					data-index={index}
					key={`${i}-${j}`}
				>
					<div
						className={`dot-point-${id} ${
							largeDots ? 'size-[7px]' : 'size-[2px]'
						} rounded-full bg-gradient-to-b from-slate-700 to-[--white] opacity-70 group-hover:from-[--brand] group-hover:to-white`}
						data-index={index}
					/>
				</div>
			);
			index++;
		}
	}

	return (
		<div
			onMouseOver={handleDotClick}
			style={{ gridTemplateColumns: `repeat(${width}, 1fr)` }}
			className="grid w-fit"
		>
			{dots}
		</div>
	);
};

export default WaterDropGrid;
