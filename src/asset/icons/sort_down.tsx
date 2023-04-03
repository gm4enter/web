import React from 'react'

const SortDown = (props: {color?: string}) => {
  return (
    <svg
      width='9'
      height='19'
      viewBox='0 0 9 19'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M1.40005 11.25C1.09077 11.25 0.813196 11.4398 0.701072 11.7281C0.588948 12.0163 0.665267 12.3439 0.89326 12.5529L6.89326 18.0529C7.11251 18.2538 7.4298 18.3063 7.70205 18.1865C7.9743 18.0667 8.15005 17.7974 8.15005 17.5L8.15005 1.49998C8.15005 1.08577 7.81427 0.749985 7.40005 0.749985C6.98584 0.749985 6.65005 1.08577 6.65005 1.49998L6.65005 11.25L1.40005 11.25Z'
        fill={props.color ? props.color : '#3B71FE'}
      />
    </svg>
  )
}

export default SortDown
