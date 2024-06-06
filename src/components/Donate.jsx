import React, { useState } from "react";
import { donateEth } from "../interactions/donations";
import { getRecentTransactions } from "../interactions/helpers";
import toast from "react-hot-toast";

export const Donate = () => {
	const [details, setDetails] = useState({
		name: "",
		amount: 0,
		message: "",
		img: null
	});

	const handleImageChange = (event) => {
		const file = event.target.files[0];
		if (file && file.type.startsWith('image/')) {
			setDetails(prev => {
				return { ...prev, img: file }
			}); // Create a temporary URL for preview

		} else {
			setDetails(prev => { return { ...prev, img: null } }); // Clear preview if invalid file
			toast.error("Invalid file type");
			return;
		}
	};


	const handleChange = (e) => {
		const newObject = {
			...details,
			[e.target.name]: e.target.value
		}
		setDetails(newObject)
	}

	const handleSubmit = async (e = undefined) => {
		e?.preventDefault();
		const response = await donateEth({
			...details
		})

		if (response) {
			await getRecentTransactions();
		}
	}

	return (
		<div className="relative w-full bg-white">
			<div className="mx-auto max-w-7xl lg:px-8">
				<section className="relative flex flex-wrap mb-10 lg:h-screen lg:items-center">
					<div className="w-full px-4 py-12 sm:px-6 sm:py-16 lg:w-1/2 lg:px-8 lg:py-24">
						<div className="mx-auto max-w-lg text-center">
							<h1 className="text-2xl font-bold sm:text-3xl">
								Make Children Life Easy and Bright
							</h1>

							<p className="mt-4 text-gray-500">
								Your donation directly empowers children in need
								through secure Ethereum blockchain transactions.
							</p>
						</div>

						<form
							onSubmit={(e) => handleSubmit(e)}
							className="mx-auto mb-0 mt-8 max-w-md space-y-4"
						>
							<div>
								<div className="relative">
									<input
										onChange={(e) => handleChange(e)}
										type="text"
										name="name"
										className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-md"
										placeholder="Your Name*"
									/>
								</div>
							</div>

							<div>
								<div className="relative">
									<input
										type="number"
										onChange={(e) => handleChange(e)}
										name="amount"
										step={0.01}
										className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-md"
										placeholder="Donation amount*"
									/>
								</div>
							</div>

							<input
								onChange={handleImageChange}
								accept="image/*"
								className="block w-full text-lg border cursor-pointer shadow-md focus:outline-none"
								id="large_size"
								type="file"
							/>

							<div>
								<div className="relative">
									<textarea
										id="OrderNotes"
										name="message"
										onChange={(e) => handleChange(e)}
										className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-md resize-none border-none align-top focus:ring-0 sm:text-sm"
										rows="4"
										placeholder="Your message..."
									></textarea>
								</div>
							</div>


							<button
								type="button"
								onClick={handleSubmit}
								className="rounded-md bg-black px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
							>
								{"Donate"}
							</button>
						</form>
					</div>

					<div className="relative h-64 w-11/12 mx-auto md:h-96 lg:h-full lg:w-1/2">
						<img
							alt=""
							src={"https://images.unsplash.com/photo-1630450202872-e0829c9d6172?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"}
							className="absolute inset-0 h-full w-full object-cover"
						/>
					</div>
				</section>
			</div>
		</div>
	);
};
