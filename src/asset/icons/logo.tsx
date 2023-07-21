import React from 'react'

const LogoIcon = (props: {
  onClick?: () => void
  color?: string
  width?: string
  height?: string
}) => {
  const { onClick, color, width, height } = props
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width || 32} height={height || 32} viewBox="0 0 32 33" fill="none" onClick={onClick}>
    <g clip-path="url(#clip0_436_10096)">
      <path d="M32 2.01172L2.39146 2.01172L17.1957 28.0604L20.4413 22.2139L18.4484 18.7987L17.1957 20.8825L9.33808 6.98991L11.8434 6.98991L17.1957 16.4832L18.9609 13.3574L16.7402 9.18958L21.2954 9.18958L22.548 6.98991L25.0534 6.98991L20.3843 15.2097L22.4342 18.7987L32 2.01172Z" fill="url(#paint0_linear_436_10096)"/>
      <path d="M32 2.01172L2.39146 2.01172L17.1957 28.0604L20.4413 22.2139L18.4484 18.7987L17.1957 20.8825L9.33808 6.98991L11.8434 6.98991L17.1957 16.4832L18.9609 13.3574L16.7402 9.18958L21.2954 9.18958L22.548 6.98991L25.0534 6.98991L20.3843 15.2097L22.4342 18.7987L32 2.01172Z" fill={color || 'white'}/>
      <path d="M0 2.01172L1.30961 2.01172L16.6833 29.0445L16 30.2022L0 2.01172Z" fill="url(#paint1_linear_436_10096)"/>
      <path d="M0 2.01172L1.30961 2.01172L16.6833 29.0445L16 30.2022L0 2.01172Z" fill={color || 'white'}/>
    </g>
    <defs>
      <linearGradient id="paint0_linear_436_10096" x1="2.96661" y1="10.6193" x2="29.3312" y2="9.49907" gradientUnits="userSpaceOnUse">
        <stop stop-color="#2B54E4" stop-opacity="0.71"/>
        <stop offset="1" stop-color="#502BE4" stop-opacity="0.58"/>
      </linearGradient>
      <linearGradient id="paint1_linear_436_10096" x1="2.96661" y1="10.6193" x2="29.3312" y2="9.49907" gradientUnits="userSpaceOnUse">
        <stop stop-color="#2B54E4" stop-opacity="0.71"/>
        <stop offset="1" stop-color="#502BE4" stop-opacity="0.58"/>
      </linearGradient>
      <clipPath id="clip0_436_10096">
        <rect width="32" height="32" fill="white" transform="translate(0 0.0117188)"/>
      </clipPath>
    </defs>
  </svg>
    
  )
}

export default LogoIcon
