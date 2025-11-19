import React from 'react'
import { Outlet } from 'react-router'

export default function AuthLayout() {
  return (
    <div className=' flex h-screen w-screen'>
         {/* Left Side */}
      <div className="flex  w-1/2 bg-[linear-gradient(to_top,#fdcbf1_0%,#fdcbf1_1%,#e6dee9_100%)] 
                      items-center justify-center p-8">
        
        <div className="text-center max-w-md">
          <h1 className="text-4xl font-bold mb-4">ThreadAI</h1>
          <p className="text-lg text-gray-700">
            Join our community to explore what's happening in the world
            and share your moments.
          </p>
        </div>

      </div>

      {/* Right Side = Auth Forms */}
        <Outlet/>
    </div>
  )
}



