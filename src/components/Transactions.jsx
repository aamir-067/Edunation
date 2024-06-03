import React from "react";
import TopDonation from "./TopDonation";

const Transactions = () => {
	return (
		<div className="w-full">
			<div className="max-w-7xl mx-auto min-h-screen">
				<h1 className="mt-20 text-center text-3xl font-bold tracking-tight text-black md:text-4xl lg:text-5xl">
					Meet Our Top Donator
				</h1>
				<div className="lg:w-6/12 md:w-8/12 w-11/12 mt-8  mx-auto">
					<TopDonation />
				</div>

				<h1 className="mt-40 text-center text-3xl font-bold tracking-tight text-black md:text-4xl lg:text-5xl">
					Recent Transactions
				</h1>
				<div className="lg:w-8/12 md:w-10/12 w-11/12 mt-8  mx-auto">
					<div className="overflow-x-auto">
						<table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
							<thead className="">
								<tr className="bg-gray-200 text-left font-bold">
									<th className="whitespace-nowrap px-4 py-2 font-medium text-black">
										Address
									</th>
									<th className="whitespace-nowrap px-4 py-2 font-medium text-black">
										Massage
									</th>
									<th className="whitespace-nowrap px-4 py-2 font-medium text-black">
										Type
									</th>
									<th className="whitespace-nowrap px-4 py-2 font-medium text-black">
										Amount
									</th>
								</tr>
							</thead>

							<tbody className="divide-y divide-gray-200">
								<tr>
									<td className="whitespace-nowrap px-4 py-2 text-gray-900">
										0x42c234a9dca435
									</td>
									<td className="whitespace-nowrap px-4 py-2 text-gray-700">
										God bless everyone
									</td>
									<td className="whitespace-nowrap px-4 py-2 text-gray-700">
										<p className="bg-green-600 text-white rounded-full text-sm px-2 w-fit">
											deposit
										</p>
									</td>
									<td className="whitespace-nowrap px-4 py-2 text-gray-700">
										0.05 eth
									</td>
								</tr>

								<tr>
									<td className="whitespace-nowrap px-4 py-2 text-gray-900">
										0x426969696969
									</td>
									<td className="whitespace-nowrap px-4 py-2 text-gray-700">
										All is well
									</td>
									<td className="whitespace-nowrap px-4 py-2 text-gray-700">
										<p className="bg-red-600 rounded-full text-sm px-2 text-white w-fit">
											withdraw
										</p>
									</td>
									<td className="whitespace-nowrap px-4 py-2 text-gray-700">
										0.5 eth
									</td>
								</tr>

								<tr>
									<td className=" bg-red-200 text-center text-lg font-bold">
										Total in charity
									</td>
									<td className="bg-green-200">1.2 eth</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Transactions;
