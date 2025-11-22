import React from 'react'
import { 
  Image as ImageIcon, 
  Smile, 
  Calendar, 
  BarChart2
} from 'lucide-react'

export default function CreatePost() {
  return (
    <div className="p-4 border-b border-gray-100 bg-white">
      <div className="flex space-x-4">
        <div className="w-11 h-11 rounded-full bg-gray-100 shrink-0 overflow-hidden">
           <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" alt="User" className="w-full h-full object-cover" />
        </div>
        <div className="flex-1">
          <textarea 
            placeholder="What's happening?" 
            className="w-full min-h-[100px] p-2 bg-transparent border-none focus:ring-0 resize-none text-lg placeholder-gray-400"
          ></textarea>
          
          <div className="flex items-center justify-between mt-2 pt-2 border-t border-gray-50">
            <div className="flex space-x-1 text-primary-500">
              {[ImageIcon, BarChart2, Smile, Calendar].map((Icon, i) => (
                <button key={i} className="p-2 rounded-full hover:bg-primary-50 text-primary-500 hover:text-primary-600 transition-colors">
                  <Icon className="w-5 h-5" />
                </button>
              ))}
            </div>
            <button className="px-6 py-2 rounded-full bg-primary-600 text-white font-bold hover:bg-primary-700 transition-colors shadow-md shadow-primary-500/20 disabled:opacity-50 disabled:cursor-not-allowed">
              Post
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

