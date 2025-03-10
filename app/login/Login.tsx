'use client';
import Link from 'next/link';
import React, { SyntheticEvent, useState } from 'react'
import axiosInstance from '../../utils/axios';
import { useRouter } from 'next/navigation';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { toast, ToastContainer } from 'react-toastify';
import { AxiosError } from 'axios';

type Props = {}

function Login({}: Props) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPass, setShowPass] = useState(false)
  const router = useRouter()
  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault()
    axiosInstance.post('/auth/login', {
      email,
      password
    }).then(({ data }) => {
      if (data?.access_token && data?.user) {
        localStorage.setItem('access_token', data.access_token)
        localStorage.setItem('user', data.user)
        router.push('/dashboard')
      }
    }).catch((err: AxiosError) => {
      console.log(err)
      toast(((err.response?.data) as any).message || err.message, {
        theme: 'dark'
      })
    })
  }
  return (
    <div>
      <h1 className=''>Login</h1>
      <form onSubmit={handleSubmit} className='flex flex-col gap-3 w-[500px] mx-auto'>
        <input
          className='input'
          placeholder='Email'
          value={email}
          onChange={e => setEmail(e.target.value)}
          type='email'
        />
        <div className='relative w-full'>
          <input
            className='input w-full'
            placeholder='Password'
            value={password}
            onChange={e => setPassword(e.target.value)}
            type={`${showPass ? 'text': 'password'}`}
          />
          {
            !showPass ?
            <FaEye
              className='absolute top-[25%] right-3'
              size={24}
              onClick={() => setShowPass(!showPass)}
            /> :
            <FaEyeSlash
              className='absolute top-[25%] right-3'
              size={24}
              onClick={() => setShowPass(!showPass)}
            />
          }
        </div>
        <button className='btn'>Login</button>
        <div className='flex'>
          <p>Dont have an account? </p>
          <Link href={'/signup'}>&nbsp;Signup</Link>
        </div>
      </form>
      <ToastContainer />
    </div>
  )
}

export default Login