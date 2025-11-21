import { authApi } from '@/api/authApi';
import { useApi } from '@/hooks/useApi';
import { Mail, Lock } from 'lucide-react'
import React, { useState } from 'react'

export default function SignIn() {
 const { loading, error, request } = useApi(authApi.signIn);

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  async function handleSubmit(e) {
   e.preventDefault();
    const data = await request({ email, password });
    if (data) {
      console.log("User logged in:", data);
    }
  }

  return (
    <div className="min-h-screen  w-1/2 flex items-center justify-center p-4 bg-gray-50">
      <div className="">

        {/* Heading */}
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold">Welcome Back!</h1>
          <p className="text-gray-500">Sign in to continue your journey</p>
        </div>

        {/* Form */}
        <form className="space-y-4  min-w-md mb-2" onSubmit={handleSubmit}>

          {/* Email */}
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full pl-12 pr-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          {/* Password */}
          <div className="relative">
            <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full pl-12 pr-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full py-2  rounded-lg bg-primary-500 text-white font-medium hover:bg-primary-600 transition"
          >
            Sign In
          </button>
        </form>

        {/* Bottom text */}
        <p className="text-center text-gray-600 text-sm">
          Don’t have an account? <span className="text-black font-medium cursor-pointer hover:underline">Sign Up</span>
        </p>

      </div>
    </div>
  )
}
