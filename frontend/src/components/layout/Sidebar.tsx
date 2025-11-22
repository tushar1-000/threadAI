import React, { useState } from 'react'
import { 
  Home as HomeIcon, 
  Search, 
  Bell, 
  Mail, 
  User, 
  MoreHorizontal, 
  Sparkles
} from 'lucide-react'
import EditProfileModal from '../profile/EditProfileModal'
import CreatePostModal from '../feed/CreatePostModal'

export default function Sidebar() {
  const [isEditProfileOpen, setIsEditProfileOpen] = useState(false)
  const [isCreatePostOpen, setIsCreatePostOpen] = useState(false)

  const navItems = [
    { icon: HomeIcon, label: 'Home', active: true },
    // { icon: Search, label: 'Explore' },
    // { icon: Bell, label: 'Notifications' },
    // { icon: Mail, label: 'Messages' },
    // { icon: User, label: 'Profile' },
  ]

  return (
    <>
      <div className="hidden md:flex w-64 flex-col sticky top-0 h-screen pt-6 pb-8 justify-between">
        <div className="space-y-8">
          {/* Logo */}
          <div className="px-4">
             <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-gradient-to-br from-primary-600 to-primary-500 text-white shadow-lg shadow-primary-500/30 transition-transform hover:scale-105 duration-300 cursor-pointer">
               <Sparkles className="w-7 h-7" />
             </div>
             <span className="ml-3 text-xl font-bold text-gray-900 tracking-tight align-middle select-none">ThreadAI</span>
          </div>

          {/* Nav Items */}
          <nav className="space-y-2 px-2">
            {navItems.map((item) => (
              <button
                key={item.label}
                className={`flex items-center space-x-4 px-4 py-3.5 w-full rounded-2xl transition-all duration-200 group ${
                  item.active 
                    ? 'bg-white text-primary-600 shadow-sm ring-1 ring-gray-100 font-semibold' 
                    : 'text-gray-600 hover:bg-white hover:text-gray-900 hover:shadow-sm hover:ring-1 hover:ring-gray-50'
                }`}
              >
                <item.icon className={`w-6 h-6 transition-colors ${item.active ? 'fill-current' : 'group-hover:text-primary-500'}`} />
                <span className="text-lg">{item.label}</span>
              </button>
            ))}
          </nav>

          {/* Post Button */}
          <div className="px-2">
            <button 
              onClick={() => setIsCreatePostOpen(true)}
              className="w-full py-4 rounded-2xl bg-gradient-to-r from-primary-600 to-primary-500 text-white font-bold text-lg hover:from-primary-700 hover:to-primary-600 transition-all shadow-lg shadow-primary-500/30 hover:shadow-primary-500/40 active:scale-[0.98] transform group relative overflow-hidden"
            >
              <span className="relative z-10">Post</span>
              <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out"></div>
            </button>
          </div>
        </div>

        {/* User Profile Snippet */}
        <div className="px-2 relative group">
          {/* Decorative background blob for uniqueness */}
          <div className="absolute bottom-0 left-4 right-4 h-16 bg-primary-500/5 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          
          <button 
            onClick={() => setIsEditProfileOpen(true)}
            className="relative flex items-center space-x-3 p-3 w-full rounded-2xl hover:bg-white hover:shadow-lg hover:shadow-gray-100/50 border border-transparent hover:border-gray-100 transition-all duration-300 text-left group"
          >
            <div className="relative">
              <div className="w-10 h-10 rounded-full bg-gray-200 shrink-0 overflow-hidden ring-2 ring-white group-hover:ring-primary-100 transition-all">
                 <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" alt="User" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 bg-green-500 rounded-full border-2 border-white"></div>
            </div>
            
            <div className="flex-1 min-w-0">
              <p className="text-sm font-bold text-gray-900 truncate group-hover:text-primary-600 transition-colors">John Doe</p>
              <p className="text-xs text-gray-500 truncate">@johndoe</p>
            </div>
            <MoreHorizontal className="w-5 h-5 text-gray-400 group-hover:text-primary-500 transition-colors" />
          </button>
        </div>
      </div>

      <EditProfileModal 
        isOpen={isEditProfileOpen} 
        onClose={() => setIsEditProfileOpen(false)} 
      />
      
      <CreatePostModal
        isOpen={isCreatePostOpen}
        onClose={() => setIsCreatePostOpen(false)}
      />
    </>
  )
}
