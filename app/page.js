import Image from 'next/image';
import { Gallery } from '../containers';

import { images } from '../utils';
import { galleryList } from '../utils/galleryData';

export default function Home() {
	return (
		<main className="">
			<div>
				<Gallery />
			</div>
			{/* <div className="h-screen"></div> */}
		</main>
	);
}
