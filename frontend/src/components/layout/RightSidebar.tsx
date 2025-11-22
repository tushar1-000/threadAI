import React from 'react'
import { Search, MoreHorizontal } from 'lucide-react'

export default function RightSidebar() {
  return (
    <div className="hidden lg:flex w-80 flex-col sticky top-0 h-screen pt-6 pb-8 space-y-6 overflow-y-auto no-scrollbar">
      
      {/* Search */}
      <div className="relative group">
        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400 group-focus-within:text-primary-500 transition-colors">
          <Search className="h-5 w-5" />
        </div>
        <input
          type="text"
          placeholder="Search ThreadAI"
          className="block w-full pl-11 pr-4 py-3.5 border border-transparent rounded-2xl bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 focus:bg-white shadow-sm transition-all"
        />
      </div>

      {/* Trending */}
      <div className="bg-white rounded-3xl p-5 shadow-sm border border-gray-100/50">
        <h2 className="font-bold text-xl mb-5 text-gray-900">Trending for you</h2>
        <div className="space-y-1">
          {[
            { category: 'Design', tag: '#UIUXDesign', posts: '35.4K' },
            { category: 'Technology', tag: '#TailwindCSS', posts: '18.1K' },
            { category: 'Business', tag: '#StartupLife', posts: '9,876' },
          ].map((trend) => (
            <div key={trend.tag} className="hover:bg-gray-50 -mx-5 px-5 py-3 transition-colors cursor-pointer group">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-xs font-medium text-gray-500 group-hover:text-primary-600 transition-colors">{trend.category}</p>
                  <p className="font-bold text-gray-900 mt-0.5">{trend.tag}</p>
                  <p className="text-xs text-gray-400 mt-0.5">{trend.posts} posts</p>
                </div>
                <button className="text-gray-300 hover:text-primary-500 p-1 opacity-0 group-hover:opacity-100 transition-all">
                  <MoreHorizontal className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
          
          <button className="text-primary-600 text-sm font-medium hover:text-primary-700 hover:underline w-full text-left pt-3 pl-1">
            Show more
          </button>
        </div>
      </div>

      {/* Who to Follow */}
      <div className="bg-white rounded-3xl p-5 shadow-sm border border-gray-100/50">
        <h2 className="font-bold text-xl mb-5 text-gray-900">Who to follow</h2>
        <div className="space-y-5">
            {[
              { name: 'Sarah Lee', handle: '@sarahcodes', img: 'Sarah' },
              { name: 'Mike P.', handle: '@mikeproduct', img: 'Mike' },
            ].map((user) => (
              <div key={user.handle} className="flex items-center justify-between group">
                <div className="flex items-center space-x-3 overflow-hidden cursor-pointer">
                  <div className="w-11 h-11 rounded-full bg-gray-200 shrink-0 overflow-hidden ring-2 ring-transparent group-hover:ring-primary-100 transition-all">
                      <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${user.img}`} alt={user.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="min-w-0">
                    <p className="font-bold text-sm truncate text-gray-900 group-hover:underline">{user.name}</p>
                    <p className="text-xs text-gray-500 truncate">{user.handle}</p>
                  </div>
                </div>
                <button className="bg-gray-900 text-white text-sm font-bold px-4 py-1.5 rounded-full hover:bg-primary-600 hover:shadow-lg hover:shadow-primary-500/20 transition-all shrink-0">
                  Follow
                </button>
              </div>
            ))}

            <button className="text-primary-600 text-sm font-medium hover:text-primary-700 hover:underline w-full text-left pl-1">
            Show more
          </button>
        </div>
      </div>

      {/* Footer Links */}
      <div className="px-4 text-xs text-gray-400 flex flex-wrap gap-x-4 gap-y-2 leading-relaxed">
        <a href="#" className="hover:underline hover:text-gray-600 transition-colors">Terms</a>
        <a href="#" className="hover:underline hover:text-gray-600 transition-colors">Privacy</a>
        <a href="#" className="hover:underline hover:text-gray-600 transition-colors">Cookies</a>
        <a href="#" className="hover:underline hover:text-gray-600 transition-colors">More</a>
        <span>© 2025 ThreadAI, Inc.</span>
      </div>

    </div>
  )
}

