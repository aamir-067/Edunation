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
							Lorem ipsum dolor sit amet consectetur adipisicing
							elit. Eum illo, non quam velit corrupti quia quis.
							Error officiis assumenda temporibus tempore modi, ea
							ab eos pariatur unde eum deleniti blanditiis dolorum
							animi voluptatum ut consectetur exercitationem dicta
							neque esse soluta?
						</p>
						<p className="mb-4">
							Lorem ipsum, dolor sit amet consectetur adipisicing
							elit. Itaque similique saepe quas voluptatem
							perferendis, dolore, alias reiciendis exercitationem
							quam, ipsa velit iure. Atque placeat tempore quod
							delectus architecto quo quasi ab esse sunt?
							Doloribus, provident.
						</p>
						<p>
							Lorem ipsum dolor sit, amet consectetur adipisicing
							elit. Nulla ipsa itaque dolore adipisci molestias
							similique!
						</p>
					</div>
					<div className="md:w-1/2 bg-green-200">
						<img
							className="w-full h-full object-cover"
							src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTc1fHx0ZWFtfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
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
							Meet our Team, which helps kids educate which are not able to get a quality education from around the world
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
