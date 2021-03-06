import React from 'react';

function Logo() {
    return (
        <svg
            height="100%" 
            width="100%" 
            viewBox="0 0 100 100"
            xmlns="http://www.w3.org/2000/svg"
        >
            <g filter="url(#prefix__filter0_d)" stroke="#000" strokeWidth={2}>
                <path
                    className="inner-fill"
                    d="M46.398 63.577l.002.998H58.992l-.003-1.002-.14-59.45-.001-.998H47.957l-.274.562-17.086 35.11L13.244 3.683l-.276-.557H2.01v61.45H14.6V32.912l12.39 24.825.277.553h6.33l.274-.56 12.464-25.517.062 31.364z"
                    fill="url(#prefix__paint0_radial)"
                />
                <path
                    className="inner-fill"
                    d="M53.24 33.677l-.577.663.582.657 25.898 29.241.299.337h17.663l-1.473-1.663L70.316 34.33l25.75-29.547 1.445-1.657H79.866l-.299.343-26.327 30.21z"
                    fill="url(#prefix__paint1_diamond)"
                />
            </g>
            <defs>
                <radialGradient
                    id="prefix__paint0_radial"
                    cx={0}
                    cy={0}
                    r={1}
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="matrix(-74.9997 54.50047 -50.40188 -69.3595 41.5 17)"
                >
                    <stop stopColor="#F7F7F7" />
                    <stop offset={1} stopColor="#AFC6FF" stopOpacity={0} />
                </radialGradient>
                <radialGradient
                    id="prefix__paint1_diamond"
                    cx={0}
                    cy={0}
                    r={1}
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="matrix(102.49987 144.9996 -100.77623 71.23848 69 25)"
                >
                    <stop stopColor="#FF000F" />
                    <stop offset={0.217} stopColor="#EB2530" stopOpacity={0.783} />
                    <stop offset={1} stopColor="#954949" stopOpacity={0} />
                    <stop offset={1} stopColor="#B13539" stopOpacity={0.264} />
                </radialGradient>
                <filter
                    id="prefix__filter0_d"
                    x={0.01}
                    y={0.125}
                    width={106.699}
                    height={71.451}
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                >
                    <feFlood floodOpacity={0} result="BackgroundImageFix" />
                    <feColorMatrix
                        in="SourceAlpha"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    />
                    <feOffset dx={3} dy={2} />
                    <feGaussianBlur stdDeviation={2} />
                    <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.75 0" />
                    <feBlend in2="BackgroundImageFix" result="effect1_dropShadow" />
                    <feBlend in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
                </filter>
            </defs>
        </svg>
    )
}

export default Logo;