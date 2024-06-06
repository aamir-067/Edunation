import { ethers } from 'ethers'
import React from 'react'
import { useSelector } from 'react-redux'
export const TopDonation = () => {
    const { topDonation } = useSelector(state => state.general);

    return (
        <div className="rounded-xl border-2 border-gray-100 bg-white">
            <div className="flex items-start gap-4 p-4 sm:p-6 lg:p-8">
                <a
                    href="#"
                    className="block shrink-0"
                >
                    <img
                        alt=""
                        src={topDonation && topDonation[3] !== "" ? `https://gateway.pinata.cloud/ipfs/${topDonation[3]}` : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZpUJhFwB85GyHaxths8hBLh6L9kSmttcgOQ&usqp=CAU"}
                        className="size-14 rounded-lg object-cover"
                    />
                </a>

                <div className='p-2'>
                    <h3 className="line-clamp-2 whitespace-nowrap text-sm text-gray-700">
                        <span className='font-medium sm:text-lg w-fit'>Name</span> : {topDonation && topDonation[0] ? topDonation[0] : "Unknown"}
                    </h3>

                    <p className="line-clamp-2 whitespace-nowrap text-sm text-gray-700">
                        <span className='font-medium sm:text-lg w-fit'>Account</span> : {topDonation && topDonation[1] ? `${[...topDonation[1]].slice(0, 8).join("")}...${[...topDonation[1]].slice(30, 42).join("")}` : "UnKnown"}
                    </p>

                    <div className="mt-2 sm:flex sm:items-center sm:gap-2">
                        <div className="flex items-center gap-1 text-gray-500">
                            {/* ether image */}

                            <p className="text-md">donated <span className='text-lg'>{topDonation && ethers.formatEther(topDonation[2])}</span> ethereum</p>
                        </div>

                        <span
                            className="hidden sm:block"
                            aria-hidden="true"
                        >
                            &middot;
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TopDonation