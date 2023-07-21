import React from 'react'

const TwitterIcon = (props: {
  onClick?: () => void
  color?: string
}) => {
  const { onClick, color } = props
  return (
    <svg width="28" height="29" viewBox="0 0 28 29" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={onClick}>
    <g clip-path="url(#clip0_436_10110)">
    <path d="M26.8327 3.51173C25.7155 4.29979 24.4785 4.90253 23.1694 5.29673C22.4667 4.48883 21.5329 3.91621 20.4942 3.65631C19.4555 3.39642 18.3621 3.46179 17.3618 3.84359C16.3615 4.22539 15.5025 4.9052 14.9012 5.79107C14.2998 6.67694 13.985 7.72612 13.9993 8.79673V9.9634C11.9491 10.0166 9.9175 9.56185 8.08553 8.63975C6.25355 7.71766 4.67805 6.35681 3.49935 4.6784C3.49935 4.6784 -1.16732 15.1784 9.33268 19.8451C6.92996 21.476 4.0677 22.2938 1.16602 22.1784C11.666 28.0117 24.4994 22.1784 24.4994 8.76173C24.4983 8.43676 24.467 8.11259 24.406 7.7934C25.5967 6.61914 26.437 5.13656 26.8327 3.51173V3.51173Z" stroke={color || 'white'} stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
    </g>
    <defs>
    <clipPath id="clip0_436_10110">
    <rect width="28" height="28" fill={color || 'white'} transform="translate(0 0.0117188)"/>
    </clipPath>
    </defs>
    </svg>
    
    
  )
}

export default TwitterIcon
