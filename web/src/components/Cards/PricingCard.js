import React from "react";
import { CheckIcon, XIcon } from '@heroicons/react/outline';
export default function PricingCard(props) {
    const { bg_color, title, price, billed, isMostCommon, buyButton, summaryFeatures, styles } = props;
    return (
        <section className={`
            ${bg_color} relative shadow-lg shadow-gray-400 h-fit min-w-fit m-2 rounded-lg px-4 ${styles.paddingY} ${styles.fitOnScreen}
            hover:scale-110 ${isMostCommon ? 'z-10' : 'z-0'}
        `}>
            {
                isMostCommon &&
                <section className={`
                    absolute -top-4 right-1/2 translate-x-1/2 
                    bg-gray-100 rounded-full p-2.5 shadow-md shadow-neutral-500
                `}>
                    <h2
                        className={`
                            text-xs font-bold text-indigo-500
                            uppercase tracking-wide
                        `}
                    >
                        MOST POPULAR
                    </h2>
                </section>

            }
            <section>
                <h4 className={`${styles.textColor} my-2 font-semibold uppercase`}>{title}</h4>

                <section className="flex mb-5 items-center flex-wrap">
                    <h2 className={`${styles.textColor}  mr-5 text-3xl font-black`}>${price}</h2>
                    <div>
                        <h4 className={`${styles.textColor} text-sm`}>USD / {billed.billingPeriod}</h4>
                        <h5 className={`${styles.textColor} text-xs`}>{billed.displayWithBilling}</h5>
                    </div>
                </section>

                <a
                    type="button"
                    href={buyButton.href}
                    className={`${buyButton.bg_color} ${buyButton.color} rounded-lg px-4 py-2 w-full text-center`}
                >
                    {buyButton.title}
                </a>
            </section>

            <section className="mt-3">

                <p className={`${styles.textColor} text-base font-semibold`}>Summary of what's included</p>

                <table className="min-w-full divide-y divide-gray-200">
                    <tbody className={`divide-y ${styles.tableDivideColor}`}>
                        {summaryFeatures.map((feature, index) => (
                            <tr key={index}>
                                <td className="py-3 whitespace-nowrap">
                                    <div className="flex items-center">
                                        {
                                            feature.has ? <CheckIcon className={`h-6 w-6 mr-3 ${styles.textColor}`} /> :
                                                <XIcon className={`h-6 w-6 text-red-500 mr-3 ${styles.textColor}`} />
                                        }
                                        <p className={`${styles.textColor} text-sm`}>{feature.title}</p>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>

            </section>
        </section>
    )
}