/* eslint-disable import/no-anonymous-default-export */
const BUTTON_VARIANT = {
	tap: { scale: 0.9 },
	hover: {
		scale: 1.1,
		transition: {
			type: 'spring',
			duration: 1,
			bounce: 0.2,
		},
	},
};

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

export default { BUTTON_VARIANT, TEXT_VARIANT_1 };
