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
										Name
									</th>
									<th className="whitespace-nowrap px-4 py-2 font-medium text-black">
										Date of Birth
									</th>
									<th className="whitespace-nowrap px-4 py-2 font-medium text-black">
										Role
									</th>
									<th className="whitespace-nowrap px-4 py-2 font-medium text-black">
										Salary
									</th>
								</tr>
							</thead>

							<tbody className="divide-y divide-gray-200">
								<tr>
									<td className="whitespace-nowrap px-4 py-2 text-gray-900">
										John Doe
									</td>
									<td className="whitespace-nowrap px-4 py-2 text-gray-700">
										24/05/1995
									</td>
									<td className="whitespace-nowrap px-4 py-2 text-gray-700">
										Web Developer
									</td>
									<td className="whitespace-nowrap px-4 py-2 text-gray-700">
										$120,000
									</td>
								</tr>

								<tr>
									<td className="whitespace-nowrap px-4 py-2  text-gray-900">
										Jane Doe
									</td>
									<td className="whitespace-nowrap px-4 py-2 text-gray-700">
										04/11/1980
									</td>
									<td className="whitespace-nowrap px-4 py-2 text-gray-700">
										Web Designer
									</td>
									<td className="whitespace-nowrap px-4 py-2 text-gray-700">
										$100,000
									</td>
								</tr>

								<tr>
									<td className="whitespace-nowrap px-4 py-2 text-gray-900">
										Gary Barlow
									</td>
									<td className="whitespace-nowrap px-4 py-2 text-gray-700">
										24/05/1995
									</td>
									<td className="whitespace-nowrap px-4 py-2 text-gray-700">
										Singer
									</td>
									<td className="whitespace-nowrap px-4 py-2 text-gray-700">
										$20,000
									</td>
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
