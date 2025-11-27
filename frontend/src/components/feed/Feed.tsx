import { Sparkles } from 'lucide-react'
import CreatePost from './CreatePost'
import PostCard from './PostCard'
import { getPostApi } from '@/api/postApi'
import { useApi } from '@/hooks/useApi'
import { useEffect, useState } from 'react'
import { timeAgo } from '@/lib/utils';

interface Post{
  _id: string,
  content:string,
  likes: string[],
  dislikes: string[],
  repostOf: string[],
  user: {name:string},
  commentCount: number,
  createdAt: string
}

export default function Feed() {
  const { request} =  useApi(getPostApi);
  const [posts,setPosts] =  useState<Post[]>([])

  useEffect( ()=>{
      const fetchPosts =  async()=>{
          const response = await request({page:1,limit:10});
          if(response && response.posts){
            console.log(response.posts)
            setPosts(response.posts)
          }
      }
      fetchPosts();
  } , [])

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

        {posts.map((post)=>{
      
          return (
      
             <PostCard 
             key={post._id}
          user={{
            name:  post.user.name
          }}
          time = { timeAgo(post.createdAt || String(  5 ))}
          content= {post.content}
          stats={{
            comments: post?.commentCount,
            reposts: post?.repostOf?.length,
            likes: post?.likes?.length,
            dislikes: post?.dislikes?.length
          }}
        />

          )
        })}
      </div>
    </div>
  )
}

