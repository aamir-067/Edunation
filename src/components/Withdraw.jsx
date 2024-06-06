import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import { useSelector } from "react-redux";
import { withdrawEth } from "../interactions/withdrawls";

export const Withdraw = () => {
	const ownerAddress = useLoaderData();

	const [details, setDetails] = useState({ amount: 0.0, message: "" });

	const signer = useSelector(state => state.web3Api.signer);
	// if (!signer || signer?.address !== ownerAddress) {
	// 	window.location.href = '/donate';
	// }
	const handleInputs = (e) => {
		setDetails((prev) => ({ ...prev, [e.target.name]: e.target.value }));
	}

	const handleSubmit = async (e = undefined) => {
		e?.preventDefault();

		const response = await withdrawEth({
			...details
		});
	}
	return (
		<div className="min-h-screen flex justify-center">
			<div className="w-full px-4 py-12 sm:px-6 sm:py-16 lg:w-1/2 lg:px-8 lg:py-24">
				<div className="mx-auto max-w-lg text-center">
					<h1 className="text-2xl font-bold sm:text-3xl">
						Withdraw Ethers
					</h1>
				</div>

				<form
					onSubmit={(e) => handleSubmit(e)}
					className="mx-auto mb-0 mt-8 max-w-md space-y-4"
				>
					<div className="relative">
						<input
							type="number"
							name="amount"
							step={0.01}
							onChange={(e) => handleInputs(e)}
							className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-md"
							placeholder="Enter donation amount*"
						/>
					</div>

					<div className="relative">
						<textarea
							id="OrderNotes"
							name="message"
							onChange={(e) => handleInputs(e)}
							className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-md resize-none border-none align-top focus:ring-0 sm:text-sm"
							rows="4"
							placeholder="Enter any additional order notes..."
						></textarea>
					</div>

					<div className="w-full flex justify-center">
						<button
							onClick={e => handleSubmit(e)}
							className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
						>
							{"Withdraw"}
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};
