import React from "react";
import { INDEX, ADD_PAGE_REQUEST } from "../../constants/Paths";

export default function NotFound(props) {
    const location = window.location.pathname;

    return (
        <section>
            <section className="max-w-7xl mx-auto">
                <div className="lg:px-24 lg:py-24 md:py-20 md:px-44 px-4 py-24 items-center flex justify-center flex-col-reverse lg:flex-row md:gap-28 gap-16">
                    <div className="xl:pt-24 w-full xl:w-1/2 relative pb-12 lg:pb-0">
                        <div className="relative">
                            <div className="absolute">
                                <div className="">
                                    <h1 className="my-2 text-gray-800 font-bold text-2xl">
                                        You're a wizard Harry! <br />
                                        This page doesn't exist yet.
                                    </h1>
                                    <div>
                                        <span className="my-2 text-gray-800">Sorry about that! Please visit our homepage to get where you need to go or tell us why {' '}</span>
                                        <span className="bg-slate-300 px-1 py-0.5 rounded-md w-auto mx-1">{location}</span>
                                        <span className="my-2 text-gray-800">should exist.</span>
                                    </div>
                                    <div className="flex w-auto justify-evenly mt-2">
                                        <a href={INDEX} className="cursor-pointer sm:w-full lg:w-auto my-2 border rounded md py-3 px-6 text-center bg-indigo-600 text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-700 focus:ring-opacity-50">Go to homepage!</a>
                                        <a href={`${ADD_PAGE_REQUEST}?pageToRequest=${location.slice(1, location.length)}`} className="cursor-pointer sm:w-full lg:w-auto my-2 border rounded md py-3 px-6 text-center bg-indigo-100 text-indigo-600 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-indigo-700 focus:ring-opacity-50">Request adding it!</a>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <img src={require("../../common/assets/404NotFound.png")} />
                            </div>
                        </div>
                    </div>
                    <div>
                        <img src={require("../../common/assets/Disconnected.png")} />
                    </div>
                </div>
            </section>
        </section>
    )
}