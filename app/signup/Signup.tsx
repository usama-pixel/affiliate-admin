'use client';
import Link from 'next/link';
import React, { SyntheticEvent, useState } from 'react'
import axiosInstance from '../../utils/axios';
import { useRouter } from 'next/navigation';
import { toast, ToastContainer } from 'react-toastify';
import { AxiosError } from 'axios';

type Props = {}

function Signup({}: Props) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const router = useRouter()
  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault()
    axiosInstance.post('/auth/signup', {
      email,
      password
    }).then(({ data }) => {
      if (data?.access_token && data?.user) {
        localStorage.setItem('access_token', data.access_token)
        localStorage.setItem('user', data.user)
        toast(data.message, {
          theme: 'dark'
        })
        router.push('/login')
      }
    }).catch((err: AxiosError) => {
      console.log(err)
      toast(((err.response?.data) as any)?.message || err.message, {
        theme: 'dark'
      })
    })
  }
  return (
    <div>
      <h1 className=''>Signup</h1>
      <form onSubmit={handleSubmit} className='flex flex-col gap-3 w-[500px] mx-auto'>
        <input className='input' placeholder='Email' value={email} onChange={e => setEmail(e.target.value)} />
        <input className='input' placeholder='Password' value={password} onChange={e => setPassword(e.target.value)} />
        <button className='btn'>Signup</button>
        <div className='flex'>
          <p>Already have an account?</p>
          <Link href={'/login'}>&nbsp;Login</Link>
        </div>
      </form>
      <ToastContainer />
    </div>
  )
}

export default Signup