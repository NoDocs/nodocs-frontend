import React from 'react'

const Twitter = (props) => {
  return (
    <svg
      width={46}
      height={43}
      viewBox="0 0 46 43"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g filter="url(#prefix__filter0_d)">
        <path
          d="M31 12.539a6.839 6.839 0 01-1.89.518c.39-.557 1.199-1.044 1.443-1.813a6.555 6.555 0 01-2.08.794 3.28 3.28 0 00-5.674 2.243c0 .26.022.51.076.748a9.284 9.284 0 01-6.761-3.431 3.285 3.285 0 001.008 4.384 3.24 3.24 0 01-1.482-.404v.036c0 1.594 1.147 2.718 2.628 3.223a3.274 3.274 0 01-.86.108 2.9 2.9 0 01-.621-.056 3.311 3.311 0 003.065 2.285 6.59 6.59 0 01-4.067 1.399c-.269 0-.527-.012-.785-.045A9.234 9.234 0 0020.032 24c6.036 0 9.336-5 9.336-9.334 0-.145-.005-.285-.012-.424A6.544 6.544 0 0031 12.539z"
          fill="#fff"
          fillOpacity={0.1}
        />
        <path
          d="M19.86 20.774a2.901 2.901 0 01-2.43-1.43c.325 0 .644-.04.944-.121l1.256-.344-1.233-.42c-1.17-.4-2.05-1.186-2.291-2.247.32.102.661.163 1.008.17l1.365.026-1.135-.759a2.885 2.885 0 01-1.125-3.32 9.671 9.671 0 006.636 3.1l.527.025-.117-.514a2.98 2.98 0 01-.066-.659 2.88 2.88 0 014.982-1.97l.152.163.218-.044c.26-.051.513-.117.761-.195a4.553 4.553 0 00-.53.593l-.518.74.896-.114c.221-.028.44-.066.655-.113-.215.209-.445.4-.69.575l-.18.127.011.22c.007.134.012.267.012.403 0 4.162-3.167 8.934-8.936 8.934a8.886 8.886 0 01-3.42-.676A6.987 6.987 0 0020.1 21.49l.883-.69-1.121-.025z"
          stroke="#000"
          strokeWidth={0.8}
        />
      </g>
      <defs>
        <filter
          id="prefix__filter0_d"
          x={0}
          y={0}
          width={46}
          height={43}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset dy={4} />
          <feGaussianBlur stdDeviation={7.5} />
          <feColorMatrix values="0 0 0 0 0.207843 0 0 0 0 0.607843 0 0 0 0 0.929412 0 0 0 1 0" />
          <feBlend in2="BackgroundImageFix" result="effect1_dropShadow" />
          <feBlend in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
        </filter>
      </defs>
    </svg>
  )
}

export default Twitter
