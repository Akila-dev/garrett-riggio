'use client';
import { useState, useEffect } from 'react';
import { Hero } from '@/containers';
import { heroImages, scrollVideos } from '@/utils'; // This is just a list of the images that would be used

export default function Home() {
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		setIsLoading(false);
	}, []);

	return (
		<main className="">
			{isLoading ? (
				<div className="w-full h-screen flex items-center justify-center text-white text-base">
					Loading...
				</div>
			) : (
				<>
					<Hero heroImages={heroImages} scrollVideos={scrollVideos} />
				</>
			)}
		</main>
	);
}
