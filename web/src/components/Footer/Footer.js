import React from "react";
import { Locale } from "../../constants/Locale";
import Select from "../Select/SelectLogo";

export default function Footer() {
    return (
        <footer className="max-w-7xl mx-auto px-4 sm:px-6">

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

                    <Select 
                        title={'Language'}
                        list={Locale}
                    />

                </div>

            </section>

        </footer>
    )
}