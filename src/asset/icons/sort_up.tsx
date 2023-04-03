import React from 'react'

const SortUp = (props: {color?: string}) => {
  return (
    <svg
      width='9'
      height='19'
      viewBox='0 0 9 19'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        opacity='0.5'
        d='M7.40002 7.75L2.15002 7.75L2.15002 17.5C2.15002 17.9142 1.81424 18.25 1.40002 18.25C0.985811 18.25 0.650024 17.9142 0.650024 17.5L0.650022 1.5C0.650022 1.20258 0.825777 0.933251 1.09803 0.813489C1.37027 0.693728 1.68757 0.746157 1.90682 0.947135L7.90681 6.44713C8.13481 6.65613 8.21113 6.98364 8.099 7.27189C7.98688 7.56014 7.70931 7.75 7.40002 7.75Z'
        fill={props.color ? props.color : '#3B71FE'}
      />
    </svg>
  )
}

export default SortUp
