/* eslint-disable import/no-anonymous-default-export */
const BUTTON_VARIANT = {
	tap: { scale: 0.9 },
	hover: {
		scale: 1.1,
		transition: {
			type: 'spring',
			duration: 1.5,
			bounce: 0.75,
		},
	},
};

// COVER TEXT
const TEXT_VARIANT_1 = {
	initial: (size) => ({ height: 0, y: size }),
	intro: (size) => ({
		height: [0, size],
		y: [size, 0],
		transition: {
			type: 'spring',
			duration: 1,
			bounce: 0.2,
		},
	}),
};

// WAVEY TEXT
export const TEXT_VARIANT_2 = {
	initial: { opacity: 0, x: 10, y: -10, rotateY: 25 },
	animate: {
		rotateX: [-25, 0],
		rotateY: [25, 0],
		// rotateZ: [-10, 0],
		opacity: [0, 1],
		x: [10, 0],
		y: [-10, 0],
		transition: {
			type: 'spring',
			duration: 0.75,
			bounce: 0.45,
		},
	},
};

// CLIP HEIGHT TEXT
const TEXT_VARIANT_3 = {
	initial: { clipPath: 'inset(0% 0% 100% 0%)' },
	animate: {
		clipPath: ['inset(0% 0% 100% 0%)', 'inset(0% 0% 0% 0%)'],
		transition: { duration: 2, type: 'spring', bounce: 0.5 },
	},
};

// HEADER TEXT
export const TEXT_VARIANT_4 = {
	initial: (i) => ({ y: i ? i : 50 }),
	animate: (i) => ({
		rotateX: [-25, 0],
		rotateY: [25, 0],
		y: [i ? i : 50, 0],

		transition: {
			type: 'spring',
			duration: 1,
			bounce: 0.45,
		},
	}),
};

export default {
	BUTTON_VARIANT,
	TEXT_VARIANT_1,
	TEXT_VARIANT_2,
	TEXT_VARIANT_3,
	TEXT_VARIANT_4,
};
