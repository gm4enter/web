import React from 'react'

const YtIcon = (props: {
  onClick?: () => void
  color?: string
}) => {
  const { onClick, color } = props
  return (
    <svg width="28" height="29" viewBox="0 0 28 29" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={onClick}>
      <g clip-path="url(#clip0_436_10107)">
        <path d="M26.2967 7.50107C26.1581 6.94738 25.8758 6.44007 25.4784 6.03037C25.081 5.62068 24.5826 5.32312 24.0334 5.16773C22.0267 4.67773 14 4.67773 14 4.67773C14 4.67773 5.97335 4.67773 3.96668 5.2144C3.41747 5.36978 2.91899 5.66735 2.52159 6.07704C2.12418 6.48673 1.84194 6.99405 1.70335 7.54773C1.3361 9.58422 1.15646 11.6501 1.16668 13.7194C1.15359 15.8043 1.33324 17.8859 1.70335 19.9377C1.85614 20.4742 2.14471 20.9622 2.54118 21.3546C2.93766 21.747 3.42864 22.0305 3.96668 22.1777C5.97335 22.7144 14 22.7144 14 22.7144C14 22.7144 22.0267 22.7144 24.0334 22.1777C24.5826 22.0224 25.081 21.7248 25.4784 21.3151C25.8758 20.9054 26.1581 20.3981 26.2967 19.8444C26.6611 17.8233 26.8407 15.7731 26.8334 13.7194C26.8464 11.6345 26.6668 9.55288 26.2967 7.50107V7.50107Z" stroke={color || 'white'} stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M11.375 17.5343L18.0833 13.7193L11.375 9.9043V17.5343Z" stroke={color || 'white'} stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
      </g>
      <defs>
        <clipPath id="clip0_436_10107">
          <rect width="28" height="28" fill={color || 'white'} transform="translate(0 0.0117188)" />
        </clipPath>
      </defs>
    </svg>


  )
}

export default YtIcon
