import React from 'react'

const FbIcon = (props: {
  onClick?: () => void
  color?: string
}) => {
  const { onClick, color } = props
  return (
    <svg width="17" height="26" viewBox="0 0 17 26" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={onClick}>
      <path d="M14.9993 1.3457H11.4993C9.95225 1.3457 8.46852 1.96028 7.37456 3.05425C6.2806 4.14821 5.66602 5.63194 5.66602 7.17904V10.679H2.16602V15.3457H5.66602V24.679H10.3327V15.3457H13.8327L14.9993 10.679H10.3327V7.17904C10.3327 6.86962 10.4556 6.57287 10.6744 6.35408C10.8932 6.13529 11.1899 6.01237 11.4993 6.01237H14.9993V1.3457Z"
        stroke={color ? color : 'white'}
        stroke-width="2.5"
        stroke-linecap="round"
        stroke-linejoin="round" />
    </svg>

  )
}

export default FbIcon
