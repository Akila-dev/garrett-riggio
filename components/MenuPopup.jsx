'use client';

import Link from 'next/link';

import { FOOTERLINKLIST } from '../utils/data';
import { CloseBtn } from '../components';

const MenuPopup = ({ close }) => {
	const menu = [
		{
			link: 'about',
		},
		{
			link: 'technology',
		},
		{
			link: 'diamonds',
		},
		{
			link: 'applications',
		},
		// {
		// 	link: 'news',
		// },
	];

	return (
		<div className="fixed top-0 left-0 w-full sm:max-w-[375px] !z-[100] h-full">
			<div className="bg-[--white] text-[--bg] w-full h-full overflow-y-auto flex flex-col gap-10 justify-between px-5 md:px-[2rem] text-xs">
				<CloseBtn onClick={() => close()} />

				<div>
					<div className="space-y-4">
						{menu.map((item, id) => (
							<Link
								key={id}
								href={'/' + item.link}
								className="block uppercase text-2xl text-medium link"
							>
								{item.link}
							</Link>
						))}
					</div>
				</div>
				<div className="grid grid-cols-5 pb-[15vh] gap-2">
					<div className="space-y-4 col-span-2">
						{FOOTERLINKLIST.slice(0, 3).map((link, id) => (
							<Link
								key={id}
								href={'/' + link.link}
								className="block capitalize text-base link"
							>
								{link.label}
							</Link>
						))}
					</div>
					<div className="space-y-4 col-span-3">
						{FOOTERLINKLIST.slice(3, 6).map((link, id) => (
							<Link
								key={id}
								href={'/' + link.link}
								className="block capitalize text-base link"
							>
								{link.label}
							</Link>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default MenuPopup;
