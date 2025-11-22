import React from 'react'
import Sidebar from '@/components/layout/Sidebar'
import RightSidebar from '@/components/layout/RightSidebar'
import Feed from '@/components/feed/Feed'

export default function Home() {
  return (
    <div className="min-h-screen bg-white md:bg-gray-50 flex justify-center">
      <div className="w-full max-w-[1300px] flex gap-6 md:px-6 lg:px-8 justify-center">
        
        {/* Left Sidebar */}
        <Sidebar />

        {/* Main Feed */}
        <Feed />

        {/* Right Sidebar */}
        {/* <RightSidebar />
         */}
      </div>
    </div>
  )
}
