"use client"
import React,{useState,useEffect} from 'react'
import { useSession, signIn,signOut } from 'next-auth/react';
import { useRouter } from 'next/navigation';

const Dashboard = () => {
    const { data: session } = useSession()
    const router = useRouter()
    const [form, setform] = useState({})

    useEffect(() => {
        if(!session) {
            router.push('/login')
        }
    }, [router,session])

    const handlechange = (e) => {
        setform({ ...form, [e.target.name]: e.target.value })
    }
  return (
    <div className="container mx-auto py-5">
        <h1 className="text-3xl font-bold text-center my-5">Dashboard</h1>
        <form className='max-w-2xl mx-auto'>
            <div className="my-2">
                <label htmlFor="name" className='block mb-2 text-gray-900 dark:text-white'>Name</label>
                <input value={form.name?form.name:" "} type="text" id='name' name='name' onChange={handlechange} className='block w-full border dark:border-gray-600 border-gray-300 text-gray-900 p-2 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'  required />
            </div>
            {/* input forusername */}
            <div className="my-2">
                <label htmlFor="email" className='block mb-2 text-gray-900 dark:text-white'>Email</label>
                <input value={form.email?form.email:" "} type="email" id='email' name='email' onChange={handlechange} className='block w-full border dark:border-gray-600 border-gray-300 text-gray-900 p-2 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'  required />
            </div>
            <div className="my-2">
                <label htmlFor="username" className='block mb-2 text-gray-900 dark:text-white'>Username</label>
                <input value={form.username?form.username:" "} type="email" id='username' name='username' onChange={handlechange} className='block w-full border dark:border-gray-600 border-gray-300 text-gray-900 p-2 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'  required />
            </div>
            <div className="my-2">
                <label htmlFor="profilepic" className='block mb-2 text-gray-900 dark:text-white'>Profile Picture</label>
                <input value={form.profilepic?form.profilepic:" "} type="text" id='profilepic' name='profilepic' onChange={handlechange} className='block w-full border dark:border-gray-600 border-gray-300 text-gray-900 p-2 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'  required />
            </div>
            <div className="my-2">
                <label htmlFor="coverpic" className='block mb-2 text-gray-900 dark:text-white'>Cover Picture</label>
                <input value={form.coverpic?form.coverpic:" "} type="text" id='coverpic' name='coverpic' onChange={handlechange} className='block w-full border dark:border-gray-600 border-gray-300 text-gray-900 p-2 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'  required />
            </div>
            <div className="my-2">
                <label htmlFor="razorpayid" className='block mb-2 text-gray-900 dark:text-white'>RazorPay ID</label>
                <input value={form.razorpayid?form.razorpayid:" "} type="text" id='razorpayid' name='razorpayid' onChange={handlechange} className='block w-full border dark:border-gray-600 border-gray-300 text-gray-900 p-2 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'  required />
            </div>
            <div className="my-2">
                <label htmlFor="razorpaysecreat" className='block mb-2 text-gray-900 dark:text-white'>RazorPay ID</label>
                <input value={form.razorpaysecreat?form.razorpaysecreat:" "} type="text" id='razorpaysecreat' name='razorpaysecreat' onChange={handlechange} className='block w-full border dark:border-gray-600 border-gray-300 text-gray-900 p-2 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'  required />
            </div>
            <div className="my-4">
                <button type="submit" className='block w-full p-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:ring-blue-500 focus:ring-4 focus:outline-none dark:focus:ring-blue-800 font-medium text-sm'>Save</button>
            </div>
        </form>
    </div>
  )
}

export default Dashboard

