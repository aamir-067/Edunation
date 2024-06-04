import React from "react";

export const Withdraw = () => {
	return (
		<div className="min-h-screen flex justify-center">
			<div className="w-full px-4 py-12 sm:px-6 sm:py-16 lg:w-1/2 lg:px-8 lg:py-24">
				<div className="mx-auto max-w-lg text-center">
					<h1 className="text-2xl font-bold sm:text-3xl">
						Withdraw Ethers
					</h1>
				</div>

				<form
					action="#"
					className="mx-auto mb-0 mt-8 max-w-md space-y-4"
				>
					<div className="relative">
						<input
							type="number"
							step={0.01}
							className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-md"
							placeholder="Enter donation amount*"
						/>
					</div>

					<div className="relative">
						<textarea
							id="OrderNotes"
							className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-md resize-none border-none align-top focus:ring-0 sm:text-sm"
							rows="4"
							placeholder="Enter any additional order notes..."
						></textarea>
					</div>

					<div className="w-full flex justify-center">
						<button
							type="button"
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
