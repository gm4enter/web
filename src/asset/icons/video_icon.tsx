import React from 'react'

const VideoIcon = (props: {color?: string}) => {
  return (
    <svg
      width='25'
      height='24'
      viewBox='0 0 25 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M9.83333 6.66667L17.8333 12L9.83333 17.3333V6.66667ZM24.5 0V24H0.5V0H24.5ZM23.1667 1.33333H1.83333V22.6667H23.1667V1.33333Z'
        fill={props.color ? props.color : 'black'}
      />
    </svg>
  )
}

export default VideoIcon
