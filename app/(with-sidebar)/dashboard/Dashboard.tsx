import React from 'react'
import Card from '../../common/Card'

type Props = {}

function Dashboard({}: Props) {
  return (
    <div className='w-[90%] mx-auto flex flex-col gap-6'>
      <div className='p-5 flex items-center border border-gray-300 shadow-lg'>
        <h1 className='text-2xl'>Overview</h1>
      </div>
      <div className='flex flex-row justify-between'>
          <Card title='Total Posts' value='42' />
          <Card title='Total Views' value='42' />
          <Card title='Conversion Rate' value='42%' />
      </div>
    </div>
  )
}

export default Dashboard