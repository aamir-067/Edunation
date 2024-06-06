import React, { useEffect, useState } from "react";
import TopDonation from "./TopDonation";
import { useSelector } from "react-redux";
import { ethers } from "ethers";

const Transactions = () => {

	const { availBalance, transactions } = useSelector(state => state.general);
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
										Message
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
								{
									transactions && transactions.map((trx, index) => {
										if (ethers.formatEther(trx[2]) != 0) {
											return (
												<tr key={index}>
													<td className="whitespace-nowrap px-4 py-2 text-gray-900">
														{`${[...trx[3]].slice(0, 5).join("")}...${[...trx[3]].slice(37, 42).join("")}`}
													</td>
													<td className="whitespace-nowrap px-4 py-2 text-gray-700">
														{trx[1]}
													</td>
													<td className="whitespace-nowrap px-4 py-2 text-gray-700">
														<p className={`${ethers.toNumber(trx[0]) == 0 ? "bg-green-600" : "bg-red-600"} text-white rounded-full text-sm px-2 w-fit`}>
															{ethers.toNumber(trx[0]) == 0 ? "deposit" : "withdraw"}
														</p>
													</td>
													<td className="whitespace-nowrap px-4 py-2 text-gray-700">
														{ethers.formatEther(trx[2])} eth
													</td>
												</tr>
											)
										}
									})
								}

								<tr>
									<td className=""></td>
									<td
										colSpan={2}
										className=" whitespace-nowrap text-center text-lg font-bold"
									>
										Total in charity
									</td>
									<td className="hidden"></td>
									<td className=" whitespace-nowrap text-lg font-bold">
										{availBalance ? availBalance : 0.00} eth
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
