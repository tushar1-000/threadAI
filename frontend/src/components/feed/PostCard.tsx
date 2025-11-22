import React from 'react'
import { 
  MoreHorizontal, 
  MessageSquare,
  Repeat,
  Heart,
  Share
} from 'lucide-react'

interface PostProps {
  user: {
    name: string;
    handle: string;
    avatar: string;
  };
  content: string;
  image?: string;
  time: string;
  stats: {
    comments: string | number;
    reposts: string | number;
    likes: string | number;
  };
}

export default function PostCard({ user, content, image, time, stats }: PostProps) {
  return (
    <div className="p-4 border-b border-gray-100 hover:bg-gray-50/50 transition-colors cursor-pointer bg-white">
      <div className="flex space-x-4">
        {/* Avatar */}
        <div className="w-11 h-11 rounded-full bg-gray-200 shrink-0 overflow-hidden ring-2 ring-transparent hover:ring-primary-100 transition-all">
           <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${user.avatar}`} alt={user.name} className="w-full h-full object-cover" />
        </div>
        
        <div className="flex-1 min-w-0">
          {/* Header */}
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-1.5 text-sm overflow-hidden">
              <span className="font-bold text-gray-900 hover:underline truncate">{user.name}</span>
              <span className="text-gray-500 truncate">{user.handle}</span>
              <span className="text-gray-400">·</span>
              <span className="text-gray-500 hover:underline whitespace-nowrap">{time}</span>
            </div>
            <button className="text-gray-400 hover:text-primary-500 rounded-full p-1.5 hover:bg-primary-50 transition-colors">
              <MoreHorizontal className="w-4 h-4" />
            </button>
          </div>

          {/* Content */}
          <p className="text-gray-900 mt-1 leading-relaxed whitespace-pre-wrap break-words text-[15px]">
            {content.split(' ').map((word, i) => (
               word.startsWith('#') || word.startsWith('@') 
               ? <span key={i} className="text-primary-600 hover:underline cursor-pointer">{word} </span> 
               : word + ' '
            ))}
          </p>

          {/* Image Attachment */}
          {image && (
            <div className="mt-3 rounded-2xl overflow-hidden border border-gray-200 shadow-sm">
              <img 
                src={image} 
                alt="Post content" 
                className="w-full max-h-[500px] object-cover hover:scale-[1.01] transition-transform duration-500 ease-out" 
              />
            </div>
          )}

          {/* Interaction Bar */}
          <div className="mt-3 flex items-center justify-between max-w-md text-gray-500">
            <button className="flex items-center space-x-2 group hover:text-primary-500 transition-colors">
              <div className="p-2 rounded-full group-hover:bg-primary-50 transition-colors">
                <MessageSquare className="w-4.5 h-4.5" />
              </div>
              <span className="text-xs font-medium">{stats.comments}</span>
            </button>
            
            <button className="flex items-center space-x-2 group hover:text-green-500 transition-colors">
              <div className="p-2 rounded-full group-hover:bg-green-50 transition-colors">
                <Repeat className="w-4.5 h-4.5" />
              </div>
              <span className="text-xs font-medium">{stats.reposts}</span>
            </button>
            
            <button className="flex items-center space-x-2 group hover:text-pink-500 transition-colors">
              <div className="p-2 rounded-full group-hover:bg-pink-50 transition-colors">
                <Heart className="w-4.5 h-4.5" />
              </div>
              <span className="text-xs font-medium">{stats.likes}</span>
            </button>
            
            <button className="flex items-center space-x-2 group hover:text-primary-500 transition-colors">
              <div className="p-2 rounded-full group-hover:bg-primary-50 transition-colors">
                <Share className="w-4.5 h-4.5" />
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

