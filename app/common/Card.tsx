import React from 'react'

type Props = {
    title: string
    value: string
}

function Card({ title, value }: Props) {
  return (
    <div className='border border-gray-300 px-4 py-4 w-[20%] shadow-xl'>
        <h1 className='text-gray-700'>{title}</h1>
        <p className='text-2xl font-medium'>{value}</p>
    </div>
  )
}

export default Card