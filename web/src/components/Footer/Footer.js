import React from "react";
import { Locale } from "../../constants/Locale";
import Select from "../Select/SelectLogo";

export default function Footer() {
    return (
        <footer className="border-slate-600 border-t-2" >
            <section className="max-w-7xl mx-auto px-4 sm:px-6 flex justify-between">
                <section className="py-4 mr-10">

                    <h2 className="text-gray-600 text-lg font-semibold">Features</h2>

                    <ul className="mt-4">
                        <li className="mt-2">
                            <a href="#" className="hover:text-gray-900">
                                <span className="text-gray-600">
                                    Moderation & Security
                                </span>
                            </a>
                        </li>
                        <li className="mt-2">
                            <a href="#" className="hover:text-gray-900">
                                <span className="text-gray-600">
                                    Economy simulation
                                </span>
                            </a>
                        </li>
                        <li className="mt-2">
                            <a href="#" className="hover:text-gray-900">
                                <span className="text-gray-600">
                                    Integrations
                                </span>
                            </a>
                        </li>
                        <li className="mt-2">
                            <a href="#" className="hover:text-gray-900">
                                <span className="text-gray-600">
                                    Automations
                                </span>
                            </a>
                        </li>
                    </ul>
                </section>

                <section className="py-4 mr-10">
                    <h2 className="text-gray-600 text-lg font-semibold">Support</h2>

                    <ul className="mt-4">
                        <li className="mt-2">
                            <a href="#" className="hover:text-gray-900">
                                <span className="text-gray-600">
                                    Pricing
                                </span>
                            </a>
                        </li>
                        <li className="mt-2">
                            <a href="#" className="hover:text-gray-900">
                                <span className="text-gray-600">
                                    Documentation
                                </span>
                            </a>
                        </li>
                        <li className="mt-2">
                            <a href="#" className="hover:text-gray-900">
                                <span className="text-gray-600">
                                    Guides
                                </span>
                            </a>
                        </li>
                        <li className="mt-2">
                            <a href="#" className="hover:text-gray-900">
                                <span className="text-gray-600">
                                    API Status
                                </span>
                            </a>
                        </li>
                    </ul>
                </section>


                <section className="w-56 py-4">

                    <div className="flex items-center ">
                        <img
                            className="h-8 w-auto sm:h-10"
                            src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                        />
                        <span className="text-base ml-4 font-medium">Obelisk</span>
                    </div>

                    <div className="mt-10">
                        <span className="text-sm text-gray-500 text-justify">
                            One of the best discord bots to boost your server to the top.
                        </span>

                        <div className="mt-4">
                            <Select
                                title={'Language'}
                                list={Locale}
                            />
                        </div>

                    </div>

                </section>
            </section>

        </footer>
    )
}