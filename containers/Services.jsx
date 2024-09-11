import React from 'react';
import { LottieCard, ClipHeightText, HeaderText } from '@/components';
const Services = () => {
	return (
		<div className="bg-white w-full relative flex flex-col justify-center h-full min-h-screen py-[50px] lg:py-[75px]">
			<div className="container space-y-[50px]">
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-[50px] lg:gap-[100px]">
					<div>
						<h1 className="">
							<HeaderText
								text={`Services`}
								additionalClass={'gap-2 lg:gap-x-4 lg:gap-y-0'}
							/>
						</h1>
						<div className="text-[1vw] text-[--neutral] pt-3">
							<ClipHeightText
								text={`14+ years in marketing, digital strategy, and
							business development, I excel at creating innovative solutions and
							empowering brands. Explore my journey, expertise, and creative
							projects. With`}
							/>
						</div>
					</div>
				</div>
				<div className="grid grid-cols-4 gap-10">
					<LottieCard />
					<LottieCard />
					<LottieCard />
					<LottieCard />
				</div>
			</div>
		</div>
	);
};

export default Services;
