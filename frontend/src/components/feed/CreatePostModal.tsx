import React from 'react'
import { X } from 'lucide-react'
import CreatePost from '../feed/CreatePost'

interface CreatePostModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CreatePostModal({ isOpen, onClose }: CreatePostModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start pt-20 justify-center p-4 bg-black/40 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white w-full max-w-xl rounded-2xl shadow-2xl overflow-hidden animate-in zoom-in-95 slide-in-from-top-5 duration-200">
        {/* Header */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-gray-100">
          <button 
            onClick={onClose}
            className="p-2 -ml-2 rounded-full hover:bg-gray-100 transition-colors text-gray-500"
          >
            <X className="w-5 h-5" />
          </button>
          <div className="font-semibold text-primary-600">Drafts</div>
        </div>
        <div className="[&>div]:border-none [&>div]:bg-transparent">
          <CreatePost />
        </div>
      </div>
    </div>
  )
}

