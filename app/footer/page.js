'use client';

import Footer from '../../components/Footer';

export default function Home() {
	return (
		<main className="relative w-full h-screen">
			<Footer />
			<div className="absolute top-0 left-0 w-full h-full bg-black/50 flex-center">
				<h1 className="text-white scale-150 !font-medium ">Hi There</h1>
			</div>
		</main>
	);
}
