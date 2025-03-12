'use client';
import React from 'react'
import CustomSidebar from '../../common/CustomSidebar'
import Table from '@/app/common/Table';

type Props = {}

function Posts({}: Props) {
  const data = [
    { id: 1, name: 'Usama', age: 26, total_count: 10 },
    { id: 2, name: 'Naruto', age: 26, total_count: 15 },
    { id: 3, name: 'Gojo', age: 26, total_count: 20 },
  ]
  
  // Simple string headers still work for direct property mapping
  // But you can also use objects for more control
  const headers = [
    'name', 
    'age',
    { key: 'total_count', label: 'Total Count' }
  ]
  return (
    <div className='w-[90%] mx-auto flex flex-col gap-6'>
      <div className='p-5 flex items-center border border-gray-300 shadow-lg'>
        <h1 className='text-2xl'>Posts Management</h1>
      </div>
      <div>
          <Table
            data={data}
            headers={headers}
            enableActions={true}
            handleOpenDelete={() => {console.log('working')}}
            handleOpenEdit={() => {console.log('working')}}
            handleOpenView={() => {console.log('working')}}
          />
      </div>
    </div>
  )
}

export default Posts