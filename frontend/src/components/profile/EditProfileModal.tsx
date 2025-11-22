import React, { useState } from 'react'
import { X, Camera, MapPin, User as UserIcon, Image as ImageIcon } from 'lucide-react'

interface EditProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function EditProfileModal({ isOpen, onClose }: EditProfileModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white w-full max-w-lg rounded-3xl shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200 border border-white/20">
        
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100 bg-white/80 backdrop-blur-xl z-10 relative">
          <div className="flex items-center space-x-2">
            <button onClick={onClose} className="p-2 -ml-2 rounded-full hover:bg-gray-100 transition-colors text-gray-500">
              <X className="w-5 h-5" />
            </button>
            <h2 className="text-xl font-bold text-gray-900">Edit Profile</h2>
          </div>
          <button className="px-5 py-1.5 bg-black text-white text-sm font-bold rounded-full hover:bg-gray-800 transition-colors shadow-lg shadow-gray-200">
            Save
          </button>
        </div>

        <div className="overflow-y-auto max-h-[80vh]">
          {/* Cover Photo */}
          <div className="relative h-48 bg-gradient-to-r from-blue-100 via-indigo-100 to-purple-100 group cursor-pointer">
            <div className="absolute inset-0 flex items-center justify-center bg-black/0 group-hover:bg-black/10 transition-colors">
               <div className="w-10 h-10 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity transform scale-90 group-hover:scale-100 duration-200">
                 <Camera className="w-5 h-5" />
               </div>
            </div>
          </div>

          {/* Avatar */}
          <div className="relative px-6 -mt-16 mb-6">
            <div className="relative w-32 h-32 rounded-full border-4 border-white shadow-sm group cursor-pointer bg-white">
               <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" alt="Avatar" className="w-full h-full rounded-full object-cover" />
               <div className="absolute inset-0 flex items-center justify-center rounded-full bg-black/0 group-hover:bg-black/10 transition-colors">
                 <div className="w-10 h-10 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity transform scale-90 group-hover:scale-100 duration-200">
                   <Camera className="w-5 h-5" />
                 </div>
               </div>
            </div>
          </div>

          {/* Form Fields */}
          <div className="px-6 pb-8 space-y-6">
            
            {/* Name */}
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-gray-500 uppercase tracking-wider ml-1">Name</label>
              <div className="relative group">
                 <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400 group-focus-within:text-primary-500 transition-colors">
                    <UserIcon className="w-5 h-5" />
                 </div>
                 <input 
                   type="text" 
                   defaultValue="John Doe"
                   className="block w-full pl-11 pr-4 py-3 bg-gray-50 border border-transparent rounded-xl text-gray-900 placeholder-gray-400 focus:bg-white focus:border-primary-500 focus:ring-4 focus:ring-primary-500/10 transition-all outline-none font-medium"
                 />
              </div>
            </div>

            {/* Bio */}
            <div className="space-y-1.5">
               <label className="text-xs font-bold text-gray-500 uppercase tracking-wider ml-1">Bio</label>
               <div className="relative group">
                 <textarea 
                   className="block w-full p-4 bg-gray-50 border border-transparent rounded-xl text-gray-900 placeholder-gray-400 focus:bg-white focus:border-primary-500 focus:ring-4 focus:ring-primary-500/10 transition-all outline-none min-h-[100px] resize-none font-medium"
                   placeholder="Add a bio to your profile"
                   defaultValue="Digital nomad, tech enthusiast, and coffee lover. Building the future of social networking. 🚀"
                 />
               </div>
            </div>

            {/* Location */}
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-gray-500 uppercase tracking-wider ml-1">Location</label>
              <div className="relative group">
                 <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400 group-focus-within:text-primary-500 transition-colors">
                    <MapPin className="w-5 h-5" />
                 </div>
                 <input 
                   type="text" 
                   defaultValue="San Francisco, CA"
                   className="block w-full pl-11 pr-4 py-3 bg-gray-50 border border-transparent rounded-xl text-gray-900 placeholder-gray-400 focus:bg-white focus:border-primary-500 focus:ring-4 focus:ring-primary-500/10 transition-all outline-none font-medium"
                 />
              </div>
            </div>
            
            {/* Website */}
             <div className="space-y-1.5">
              <label className="text-xs font-bold text-gray-500 uppercase tracking-wider ml-1">Website</label>
              <div className="relative group">
                 <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400 group-focus-within:text-primary-500 transition-colors">
                    <ImageIcon className="w-5 h-5" />
                 </div>
                 <input 
                   type="text" 
                   placeholder="https://yourwebsite.com"
                   className="block w-full pl-11 pr-4 py-3 bg-gray-50 border border-transparent rounded-xl text-gray-900 placeholder-gray-400 focus:bg-white focus:border-primary-500 focus:ring-4 focus:ring-primary-500/10 transition-all outline-none font-medium"
                 />
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

