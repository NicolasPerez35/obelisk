import React from "react";
import PricingCard from "../components/Cards/PricingCard";

const PRICING_LIST = [
    {
        styles: {
            fitOnScreen: "w-4/12",
            textColor: "text-indigo-500",
            paddingY: "py-4",
            tableDivideColor: "divide-indigo-500",
            border: "",
        },
        bg_color: "bg-gray-100",
        title: "Free",
        price: "0",
        billed: {
            billingPeriod: "Always free",
            displayWithBilling: "No billing",
        },
        isMostCommon: false,
        buyButton: {
            title: "Get started",
            href: "#",
            bg_color: "bg-indigo-500",
            color: "text-white",
        },
        summaryFeatures: [
            {
                has: true,
                title: "Transferrable between servers",
            },
            {
                has: true,
                title: "Basic moderation tools",
            },
            {
                has: true,
                title: "Base economy system",
            },
        ]
    },
    {
        styles: {
            fitOnScreen: "w-4/12",
            textColor: "text-white",
            paddingY: "py-4",
            tableDivideColor: "divide-white",
            border: "border-gray-200 border-solid border-2",
        },
        bg_color: "bg-indigo-500",
        title: "Life time",
        price: "54.99",
        billed: {
            billingPeriod: "Single payment",
            displayWithBilling: "Lifetime purchase",
        },
        isMostCommon: true,
        buyButton: {
            title: "Buy now",
            href: "#",
            bg_color: "bg-white",
            color: "text-indigo-500",
        },
        summaryFeatures: [
            {
                has: true,
                title: "Up to 2 servers you want",
            },
            {
                has: true,
                title: "Advanced moderation tools",
            },
            {
                has: true,
                title: "Advanced economy system",
            },
            {
                has: true,
                title: "Customizable bot included",
            },
        ]
    },
    {
        styles: {
            fitOnScreen: "w-4/12",
            textColor: "text-indigo-500",
            paddingY: "py-4",
            tableDivideColor: "divide-indigo-500",
            border: "",
        },
        bg_color: "bg-gray-100",
        title: "Monthly",
        price: "9.99",
        billed: {
            billingPeriod: "Monthly",
            displayWithBilling: "Monthly billing",
        },
        isMostCommon: false,
        buyButton: {
            title: "Buy now",
            href: "#",
            bg_color: "bg-indigo-500",
            color: "text-white",
        },
        summaryFeatures: [
            {
                has: true,
                title: "Up to 5 servers you want",
            },
            {
                has: true,
                title: "Advanced moderation tools",
            },
            {
                has: true,
                title: "Advanced economy system",
            },
        ]
    }
]

export default function Pricing(props) {
    return (
        <section>
            <section className="max-w-7xl mx-auto">
                <div className="py-10">
                    <h1 className="text-center text-5xl font-bold text-indigo-500 my-4">
                        Simple pricing, no commitment.
                    </h1>
                    <h2 className="text-center text-lg text-gray-400">
                        Everything you need, nothing you don't. Pick a plan that best suits your server.
                    </h2>
                </div>

                <div className="flex h-auto">
                    {
                        PRICING_LIST.map((item, index) => {
                            return <PricingCard key={index} {...item} />
                        })
                    }
                </div>
            </section>
        </section>
    )
}