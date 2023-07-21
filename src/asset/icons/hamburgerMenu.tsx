import React from 'react'

const HamburgerIcon = (props: {
  onClick?: () => void
  color?: string
}) => {
  const { onClick, color } = props
  return (
    <svg width="29" height="28" viewBox="0 0 29 28" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3.12891 22.75H26.0977M3.12891 14H26.0977M3.12891 5.25H26.0977" stroke={color ? color : 'white'} stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
    

  )
}

export default HamburgerIcon
