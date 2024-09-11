'use client';

import React, { useRef, useState, useEffect } from 'react';
import { motion, useAnimate, usePresence } from 'framer-motion';

const CYCLES_PER_LETTER = 2;
const SHUFFLE_TIME = 50;
const CHARS = 'abcdefghijklopqrstuvxyz';
const randomChar = Math.floor(Math.random() * CHARS.length);

const ScrambleText = ({ textData }) => {
	const [isPresent, safeToRemove] = usePresence();
	const intervalRef = useRef(null);
	const TARGET_TEXT = textData;

	const [text, setText] = useState(TARGET_TEXT);

	const scramble = () => {
		let pos = 0;

		intervalRef.current = setInterval(() => {
			const scrambled = TARGET_TEXT.split('')
				.map((char, index) => {
					if (pos / CYCLES_PER_LETTER > index) {
						return char;
					}

					const randomCharIndex = Math.floor(Math.random() * CHARS.length);
					const randomChar = CHARS[randomCharIndex];

					return randomChar;
				})
				.join('');

			setText(scrambled);
			pos++;

			if (pos >= TARGET_TEXT.length * CYCLES_PER_LETTER) {
				// stopScramble();
			}
		}, SHUFFLE_TIME);
	};

	const stopScramble = () => {
		clearInterval(intervalRef.current);
		setText(TARGET_TEXT);
	};

	useEffect(() => {
		if (isPresent) {
			const enterAnimation = async () => {
				scramble();
			};
			enterAnimation();
		} else {
			const exitAnimation = async () => {
				stopScramble();
				safeToRemove();
			};

			exitAnimation();
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [isPresent]);

	return <motion.div className="">{text}</motion.div>;
};

export default ScrambleText;
