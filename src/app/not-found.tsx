import NavigationHeader from '@/components/NavigationHeader'
import { House } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const PageNotFound = () => {
  return (
    <div>
        <NavigationHeader/>
        <div className='flex items-center justify-center w-full h-[65vh]'>
            <div className='space-y-5 text-center'>
                <h1 className='text-3xl'>Page Not Found</h1>
                <p>Go back to Home</p>
                <Link
                href="/"
                className="relative group flex items-center mx-auto gap-2 px-4 py-1.5 rounded-lg text-gray-300 bg-gray-800/50 hover:bg-blue-500/10 
                border border-gray-800 hover:border-blue-500/50 transition-all duration-300 shadow-lg overflow-hidden w-fit"
                >
                <div
                    className="absolute inset-0 bg-gradient-to-r from-blue-500/10 
                to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity"
                />
                <House className="w-4 h-4 relative z-10 group-hover:rotate-3 transition-transform" />
                <span className="text-sm font-medium relative z-10 group-hover:text-white transition-colors">
                    Home
                </span>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default PageNotFound