'use client';

import { useState } from 'react';
import Image from 'next/image';
import { images } from '../utils';

const Logo = ({ isDark }) => {
	// const [logoColor, setLogoColor] = useState(color ? color : 'white');
	return (
		<div className="logo-img">
			<Image
				src={isDark ? images.garretWhite : images.garretBlack}
				alt="Garret Riggio"
				w={150}
				h={50}
				className="w-[70px] max-w-[70px] min-w-[70px] md:w-[100px] md:max-w-[100px] md:min-w-[100px]"
			/>
		</div>
	);
};

export default Logo;
