import React, { useState } from "react";

export default function Spanish(props) {
    const { svg } = props;
    const [showSVG, setShowSVG] = useState(svg);

    return (
        <>
            {showSVG ?
                (
                    <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M0 12c0 1.468.264 2.874.746 4.174L12 17.217l11.254-1.043c.482-1.3.746-2.706.746-4.174 0-1.468-.264-2.874-.746-4.174L12 6.783.746 7.826A11.974 11.974 0 000 12z" fill="#FFDA44"></path><path d="M23.254 7.826C21.558 3.256 17.16 0 12 0 6.84 0 2.442 3.257.747 7.826h22.507zM.747 16.174C2.442 20.744 6.84 24 12 24c5.16 0 9.558-3.256 11.254-7.826H.747z"
                                fill="#D80027"
                            >
                        </path>
                    </svg>
                ) :
                (
                    <span
                        style={{
                            width: "20px",
                            height: "20px",
                            display: "inline-block",
                            backgroundImage: `url("https://unpkg.com/emoji-datasource-twitter@5.0.1/img/twitter/sheets-256/64.png")`,
                            backgroundSize: "5700% 5700%",
                            backgroundPosition: "1.78571% 80.3571%",
                        }}
                    ></span>
                )
            }
        </>
    )
}