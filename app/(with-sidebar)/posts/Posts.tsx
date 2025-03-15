'use client';
import React, { useEffect, useState } from 'react'
import CustomSidebar from '../../common/CustomSidebar'
import Table from '@/app/common/Table';
import axiosInstance from '@/utils/axios';
import { toast, ToastContainer } from 'react-toastify';

type Props = {}

function Posts({}: Props) {
  const data = [
    { id: 1, name: 'Usama', age: 26, total_count: 10 },
    { id: 2, name: 'Naruto', age: 26, total_count: 15 },
    { id: 3, name: 'Gojo', age: 26, total_count: 20 },
  ]
  const [posts, setPosts] = useState([])
  useEffect(() => {
    axiosInstance.get('/blog-posts')
    .then((res) => {
      setPosts(res.data)
      console.log(res.data)
    }).catch((err) => {
      console.log(err)
      toast(((err.response?.data) as any).message || err.message, {
        theme: 'dark'
      })
    })
  }, [])
  // Because the empty post gives error on Object.key()
  const headers = posts.length === 0 ? posts : Object.keys(posts?.[0])?.map(key => {
    if (key.includes('content')) return '';
    if (key.includes('image_url')) return '';
    if (key.includes('deleted')) return '';
    if (key.includes('_')) {
     return { key, label: key.replace('_', ' ') }
    }
    return key
  }).filter(key => key)
  
  console.log(headers)
  console.log(posts)
  // const headers = Object.keys(posts?.[0])?.map(key => {
  //   if (key.includes('_')) {
  //    return { key, label: key.replace('_', ' ') }
  //   }
  //   return key
  // })
  return (
    <div className='w-[90%] mx-auto flex flex-col gap-6'>
      <div className='p-5 flex items-center border border-gray-300 shadow-lg'>
        <h1 className='text-2xl'>Posts Management</h1>
      </div>
      <div>
          <Table
            data={posts}
            headers={headers}
            enableActions={true}
            handleOpenDelete={() => {console.log('working')}}
            handleOpenEdit={() => {console.log('working')}}
            handleOpenView={() => {console.log('working')}}
          />
      </div>
      <ToastContainer />
    </div>
  )
}

export default Posts