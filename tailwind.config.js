/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./containers/**/*.{js,ts,jsx,tsx,mdx}',
		'./wrappers/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic':
					'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
			},
			fontSize: {
				'10xl': '10rem',
				'11xl': '11rem',
				'12xl': '12rem',
				'13xl': '13rem',
			},
			animation: {
				'horizontal-scroll': 'horizontal-scroll linear 16s infinite ',
				'horizontal-scroll-2': 'horizontal-scroll-2 linear 16s infinite ',
			},
			keyframes: {
				'horizontal-scroll': {
					from: { transform: 'translateX(0)' },
					to: { transform: 'translateX(-100%)' },
				},
				'horizontal-scroll-2': {
					from: { transform: 'translateX(100%)' },
					to: { transform: 'translateX(0)' },
				},
			},
		},
	},
	plugins: [],
};
