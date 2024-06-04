import React from "react";

export const AboutUs = () => {
	return (
		<div className="w-full">
			{/* About section */}
			<div className="mx-auto max-w-7xl px-2 mt-20 lg:px-0">
				<h1 className="mt-8 max-w-4xl text-3xl font-bold tracking-tight text-black md:text-4xl lg:text-6xl">
					About Us
				</h1>
				<section className="md:flex mt-10 justify-between min-h-96">
					<div className="md:w-1/2 p-4">
						<p className="mb-4">
							We are a team of passionate individuals driven to ensure every child has access to quality education. We believe education is the foundation for a brighter future, and no child should be denied the opportunity to learn and reach their full potential.
						</p>
						<p className="mb-4">
							Our innovative platform leverages the power of Ethereum blockchain technology. This ensures secure, transparent donations. You can be confident that your contributions go directly towards supporting educational initiatives that empower children around the world.
						</p>
						<p>
							Donate today and be a part of something transformative. Together, we can unlock a world where every child has the chance to learn, grow, and achieve their dreams.
						</p>
					</div>
					<div className="md:w-1/2 bg-green-200">
						<img
							className="w-full h-full object-cover"
							src="https://www.unicef.org/rosa/sites/unicef.org.rosa/files/styles/press_release_feature/public/UN0754222.webp?itok=DC_DMVgR"
							alt=""
						/>
					</div>
				</section>
				{/* Team section */}
				<section className="my-20">
					<div className="mx-auto max-w-3xl text-center">
						<h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl lg:leading-tight">
							Get to Know Our Staff
						</h2>
						<p className="mx-auto mt-4 max-w-2xl text-xl text-gray-600">
							Meet our Team, which helps kids educate who are not able to get a quality education from around the world
						</p>
					</div>

					<div className="flex md:flex-row flex-col justify-center lg:gap-0 gap-y-10 mt-16">
						<div className="w-10/12 md:w-3/12 mx-auto">
							<img
								className="h-[300px] w-full rounded-md object-cover"
								src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
								alt=""
							/>
						</div>
						<div className="w-10/12 md:w-3/12 mx-auto">
							<img
								className="h-[300px] w-full rounded-md object-cover"
								src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
								alt=""
							/>
						</div>
						<div className="w-10/12 md:w-3/12 mx-auto">
							<img
								className="h-[300px] w-full rounded-md object-cover"
								src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
								alt=""
							/>
						</div>
					</div>
				</section>
			</div>
		</div>
	);
};
