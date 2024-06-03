import React from 'react'

export const TopDonation = () => {
    return (

        <div className="rounded-xl border-2 border-gray-100 bg-white">
            <div className="flex items-start gap-4 p-4 sm:p-6 lg:p-8">
                <a
                    href="#"
                    className="block shrink-0"
                >
                    <img
                        alt=""
                        src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
                        className="size-14 rounded-lg object-cover"
                    />
                </a>

                <div>
                    <h3 className="font-medium sm:text-lg hover:underline w-fit">
                        John Doe
                    </h3>

                    <p className="line-clamp-2 text-sm text-gray-700">
                        Lorem ipsum dolor, sit amet consectetur
                        adipisicing elit. Accusamus, accusantium
                        temporibus iure delectus ut totam natus nesciunt
                        ex? Ducimus, enim.
                    </p>

                    <div className="mt-2 sm:flex sm:items-center sm:gap-2">
                        <div className="flex items-center gap-1 text-gray-500">
                            {/* ether image */}

                            <p className="text-md">donated <span className='text-lg'>0.5</span> ethereum</p>
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