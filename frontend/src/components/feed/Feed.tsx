import React from 'react'
import { Sparkles } from 'lucide-react'
import CreatePost from './CreatePost'
import PostCard from './PostCard'

export default function Feed() {
  return (
    <div className="flex-1 max-w-2xl w-full bg-white min-h-screen border-x border-gray-100">
      {/* Header */}
      <div className="sticky top-0 z-10 bg-white/80 backdrop-blur-md border-b border-gray-100 px-4 py-3 flex justify-between items-center cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
        <h1 className="text-xl font-bold text-gray-900">Home</h1>
        <Sparkles className="w-5 h-5 text-primary-500" />
      </div>

      {/* Compose Box */}
      <CreatePost />

      {/* Feed Items */}
      <div className="divide-y divide-gray-100 pb-20">
        {/* Post 1 */}
        <PostCard 
          user={{
            name: "Jane Smith",
            handle: "@janesmith",
            avatar: "Jane"
          }}
          time="2h"
          content="Just finished a great book on design systems. Highly recommend it to anyone in the field! It's amazing how a well-structured system can streamline the entire product development process. #design #uiux"
          stats={{
            comments: 12,
            reposts: 4,
            likes: 88
          }}
        />

        {/* Post 2 */}
        <PostCard 
          user={{
            name: "Tech Weekly",
            handle: "@techweekly",
            avatar: "Tech"
          }}
          time="5h"
          content="Exciting news from the world of AI! A new model was just released that can generate photorealistic images from simple text prompts. The future is now."
          image="https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2832&auto=format&fit=crop"
          stats={{
            comments: 152,
            reposts: 98,
            likes: "1.2k"
          }}
        />
        
        {/* Post 3 */}
         <PostCard 
          user={{
            name: "Alex Johnson",
            handle: "@alexj",
            avatar: "Alex"
          }}
          time="8h"
          content="Trying out the new ThreadAI features. The UI is looking pretty clean! 🔥 what do you all think?"
          stats={{
            comments: 42,
            reposts: 12,
            likes: 340
          }}
        />
      </div>
    </div>
  )
}

