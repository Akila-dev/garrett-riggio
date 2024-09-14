'use client';
import { useState, useEffect } from 'react';
import { Footer } from '@/containers';

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
				<Footer />
			)}
		</main>
	);
}
