'use client';

import { useEffect, useState } from 'react';

const useDeviceSize = () => {
	const [deviceSize, setDeviceSize] = useState({
		width: window.innerWidth,
		height: window.innerHeight,
	});

	useEffect(() => {
		function handleResize() {
			setDeviceSize({
				width: window.innerWidth,
				height: window.innerHeight,
			});
		}
		handleResize();
		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);
	}, []); // Empty array ensures that effect is only run on mount

	return deviceSize;
};

export default useDeviceSize;
