/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/alt-text */
import * as THREE from 'three';
import { useLayoutEffect, useMemo, useRef, useState, useEffect } from 'react';
import { Canvas, extend, useFrame } from '@react-three/fiber';
import {
	Image as ImageTexture,
	ScrollControls,
	useScroll,
	Billboard,
	Text,
} from '@react-three/drei';
import { suspend } from 'suspend-react';
import { generate } from 'random-words';
import { easing, geometry } from 'maath';

// assets
import { galleryList } from '../utils/galleryData';
import { images } from '../utils';

extend(geometry);

const getWindowsDimension = () => {
	const { innerWidth: width, innerHeight: height } = window;
	return {
		width,
		height,
	};
};

// Active Card
function ActiveCard({ selected, ...props }) {
	const ref = useRef();
	const name = useMemo(() => generate({ exactly: 2 }).join(' '), [selected]);
	useLayoutEffect(() => void (ref.current.material.zoom = 0.8), [selected]);
	useFrame((state, delta) => {
		easing.damp(ref.current.material, 'zoom', 1, 0.5, delta);
		easing.damp(ref.current.material, 'opacity', selected !== null, 0.3, delta);
	});
	return (
		<Billboard {...props}>
			{/* <Text
				// font={suspend(inter).default}
				fontSize={0.5}
				position={[2.15, 3.85, 0]}
				anchorX="left"
				color="black"
			>
				{selected !== null && `${name}\n${selected}`}
			</Text> */}
			<ImageTexture
				ref={ref}
				transparent
				radius={0.3}
				position={[0, 1.5, 0]}
				scale={[3.75, 1.618 * 3.75, 0.2, 1]}
				url={galleryList[Math.floor(selected % 10) + 1]}
			/>
		</Billboard>
	);
}

// Single Card
function Card({ url, active, hovered, ...props }) {
	const ref = useRef();
	useFrame((state, delta) => {
		const f = hovered ? 1.4 : active ? 1.25 : 1;
		easing.damp3(ref.current.position, [0, hovered ? 0.25 : 0, 0], 0.1, delta);
		easing.damp3(ref.current.scale, [1.618 * f, 1 * f, 1], 0.15, delta);
	});
	return (
		<group {...props}>
			<ImageTexture
				ref={ref}
				transparent
				radius={0.075}
				url={url}
				scale={[1.618, 1, 1]}
				side={THREE.DoubleSide}
			/>
		</group>
	);
}

// Cards List
function Cards({
	category,
	data,
	from = 0,
	len = Math.PI * 2,
	radius = 5.5,
	onClick,
	// onPointerOut,
	...props
}) {
	const [hovered, hover] = useState(null);
	const amount = Math.round(len * 22);
	const textPosition = from + (amount / 2 / amount) * len;
	return (
		<group {...props}>
			<Billboard
				position={[
					Math.sin(textPosition) * radius * 1.4,
					0.5,
					Math.cos(textPosition) * radius * 1.4,
				]}
			>
				<Text
					// font={inter}
					fontSize={0.25}
					anchorX="center"
					color="black"
				>
					{category}
				</Text>
			</Billboard>
			{Array.from(
				{ length: amount - 3 /* minus 3 images at the end, creates a gap */ },
				(_, i) => {
					const angle = from + (i / amount) * len;
					return (
						<Card
							key={angle}
							onClick={(e) => (e.stopPropagation(), hover(i), onClick(i))}
							onPointerOver={(e) => (e.stopPropagation(), hover(i))}
							onPointerOut={() => hover(null)}
							position={[Math.sin(angle) * radius, 0, Math.cos(angle) * radius]}
							rotation={[0, Math.PI / 2 + angle, 0]}
							active={hovered !== null}
							hovered={hovered === i}
							url={galleryList[Math.floor(i % 10) + 1]}
						/>
					);
				}
			)}
		</group>
	);
}

// Screne Setup
function Scene({ children, ...props }) {
	const [screenSize, setScreenSize] = useState(getWindowsDimension());
	const ref = useRef();
	const scroll = useScroll();
	const [selected, select] = useState(null);
	useFrame((state, delta) => {
		ref.current.rotation.y = -scroll.offset * (Math.PI * 2); // Rotate contents
		state.events.update(); // Raycasts every frame rather than on pointer-move
		easing.damp3(
			state.camera.position,
			[-state.pointer.x / 2, state.pointer.y / 2 + 4.5, 9],
			0.3,
			delta
		);
		state.camera.lookAt(0, 0, 0);
	});

	// *UPDATE SCREEN SIZE WHEN SCREEN/VIEW PORT RESIZES
	useEffect(() => {
		const handleResize = () => {
			setScreenSize(getWindowsDimension());
		};

		window.addEventListener('resize', handleResize);

		return () => window.removeEventListener('resize', handleResize);
	}, []);

	return (
		<group {...props}>
			<group ref={ref} position={[0, screenSize.width >= 700 ? 0 : -1, 0]}>
				<Cards
					category="wildlife"
					from={0}
					len={Math.PI / 4}
					onClick={select}
					radius={screenSize.width >= 700 ? 5.5 : 4}
					// onPointerOut={select}
				/>
				<Cards
					category="nature"
					from={Math.PI / 4}
					len={Math.PI / 2}
					position={[0, 0.4, 0]}
					onClick={select}
					radius={screenSize.width >= 700 ? 5.5 : 4}
					// onPointerOut={select}
				/>
				<Cards
					category="travels"
					from={Math.PI / 4 + Math.PI / 2}
					len={Math.PI / 2}
					onClick={select}
					radius={screenSize.width >= 700 ? 5.5 : 4}
					// onPointerOut={select}
				/>
				<Cards
					category="Collaborations"
					from={Math.PI * 1.25}
					len={Math.PI * 2 - Math.PI * 1.25}
					position={[0, -0.4, 0]}
					onClick={select}
					radius={screenSize.width >= 700 ? 5.5 : 4}
					// onPointerOut={select}
				/>
				<ActiveCard selected={selected} />
			</group>
			<Billboard position={[0, screenSize.width >= 700 ? 3 : 2.5, -2]}>
				<Text
					fontSize={screenSize.width >= 700 ? 1.2 : 0.8}
					anchorX="center"
					color="black"
					textAlign="center"
					outlineWidth={0.01}
					lineHeight={1.2}
				>
					{'My Creative\nGallery'}
				</Text>
			</Billboard>
		</group>
	);
}

// Canvas
const GalleryCanvas = () => (
	<Canvas dpr={[1, 1.5]}>
		<ScrollControls pages={4} horizontal maxSpeed={1.5}>
			<Scene position={[0, 1, 0]} />
		</ScrollControls>
	</Canvas>
);

export default GalleryCanvas;
