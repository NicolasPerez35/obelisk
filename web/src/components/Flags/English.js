import React, { useState } from "react";

export default function English(props) {
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
                        className="sc-m9d8o3-0 VxccK sc-1mmyzoa-1 jbvDHa">
                        <path d="M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12z" fill="#F0F0F0"></path>
                        <path d="M2.48 4.694A11.956 11.956 0 00.413 8.87h6.243L2.48 4.694zM23.586 8.87a11.957 11.957 0 00-2.067-4.176L17.344 8.87h6.242zM.413 15.13a11.958 11.958 0 002.067 4.176l4.176-4.176H.413zM19.305 2.48A11.957 11.957 0 0015.13.414v6.243l4.175-4.175zM4.694 21.52a11.957 11.957 0 004.175 2.067v-6.243l-4.175 4.175zM8.87.413a11.957 11.957 0 00-4.176 2.068l4.175 4.175V.413zM15.13 23.587a11.96 11.96 0 004.175-2.068l-4.175-4.175v6.242zM17.344 15.13l4.175 4.176a11.957 11.957 0 002.067-4.176h-6.242z" fill="#0052B4"></path><path d="M23.898 10.435H13.565V.102a12.12 12.12 0 00-3.13 0v10.333H.102a12.12 12.12 0 000 3.13h10.333v10.333a12.12 12.12 0 003.13 0V13.565h10.333a12.12 12.12 0 000-3.13z" fill="#D80027"></path><path d="M15.13 15.13l5.355 5.355c.247-.246.481-.503.706-.77l-4.585-4.585H15.13zM8.87 15.13l-5.355 5.355c.246.247.503.482.77.706l4.585-4.585V15.13zM8.87 8.87L3.513 3.515c-.246.246-.48.503-.705.77L7.394 8.87h1.475zM15.13 8.87l5.355-5.355a11.996 11.996 0 00-.77-.706L15.13 7.394V8.87z" fill="#D80027"></path>
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
                            backgroundPosition: "7.14286% 76.7857%",
                        }}
                    ></span>
                )
            }
        </>
    )
}