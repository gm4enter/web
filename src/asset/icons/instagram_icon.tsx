import React from 'react'

const InsIcon =  (props: {
  onClick?: () => void
  color?: string
}) => {
  const { onClick, color } = props
  return (
    <svg width="28" height="29" viewBox="0 0 28 29" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={onClick}>
      <path d="M19.834 2.3457H8.16732C4.94566 2.3457 2.33398 4.95738 2.33398 8.17904V19.8457C2.33398 23.0674 4.94566 25.679 8.16732 25.679H19.834C23.0556 25.679 25.6673 23.0674 25.6673 19.8457V8.17904C25.6673 4.95738 23.0556 2.3457 19.834 2.3457Z" stroke={color || 'white'} stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M18.6676 13.2771C18.8116 14.248 18.6458 15.2397 18.1937 16.1109C17.7416 16.9822 17.0263 17.6887 16.1495 18.13C15.2728 18.5713 14.2791 18.7249 13.31 18.569C12.3409 18.413 11.4457 17.9555 10.7516 17.2614C10.0575 16.5673 9.59998 15.6721 9.44404 14.703C9.2881 13.7339 9.4417 12.7403 9.88301 11.8635C10.3243 10.9867 11.0308 10.2714 11.9021 9.81935C12.7734 9.36727 13.765 9.20142 14.736 9.3454C15.7264 9.49227 16.6433 9.95378 17.3513 10.6618C18.0593 11.3697 18.5208 12.2867 18.6676 13.2771Z" stroke={color || 'white'} stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M20.416 7.5957H20.4277" stroke={color || 'white'} stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
    </svg>


  )
}

export default InsIcon
