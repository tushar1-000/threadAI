import { authApi } from '@/api/authApi';
import { useApi } from '@/hooks/useApi';
import { Mail, Lock, ArrowRight, Loader2, AlertCircle } from 'lucide-react'
import { Link } from 'react-router'
import { useForm } from "react-hook-form"
import type { SubmitHandler } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import {signinSchema} from '@/schema/signin.schema'


type Inputs = {
  email: string
  password: string
}


export default function SignIn() {
  const { loading, error, request } = useApi(authApi.signIn);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({resolver: yupResolver(signinSchema)})
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const response = await request(data);
    if (response) {
        console.log("User logged in:", response);
    }
  }

 
  return (
    <div className="w-full">
      {/* Header */}
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900">Welcome back</h2>
        <p className="mt-2 text-sm text-gray-600">
          Please sign in to your account
        </p>
      </div>

      {/* Form */}
      <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
        
        <div className="space-y-4">
          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">Email Address</label>
            <div className="relative group">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400 group-focus-within:text-primary-500 transition-colors">
                <Mail className={`h-5 w-5 ${errors.email ? "text-red-400" : "text-gray-400"}`} />
              </div>
              <input
                type="email"
                placeholder="name@example.com"
                className={`block w-full pl-10 pr-3 py-2.5 border rounded-xl bg-gray-50/50 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 transition-all duration-200 ease-in-out sm:text-sm ${
                  errors.email 
                    ? "border-red-300 focus:border-red-500 focus:ring-red-500/20" 
                    : "border-gray-200 focus:border-primary-500 focus:ring-primary-500/20"
                }`}
                {...register("email")} 
              />
            </div>
            {errors.email && (
              <div className="mt-1.5 flex items-center text-red-500 text-xs animate-in slide-in-from-top-1 duration-200">
                <AlertCircle className="w-3 h-3 mr-1" />
                <span>{errors.email.message}</span>
              </div>
            )}
          </div>

          {/* Password */}
          <div>
            <div className="flex items-center justify-between mb-1.5">
              <label className="block text-sm font-medium text-gray-700">Password</label>
              {/* <a href="#" className="text-sm font-medium text-primary-600 hover:text-primary-500 hover:underline">
                Forgot password?
              </a> */}
            </div>
            <div className="relative group">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400 group-focus-within:text-primary-500 transition-colors">
                <Lock className={`h-5 w-5 ${errors.password ? "text-red-400" : "text-gray-400"}`} />
              </div>
              <input
                type="password"
                placeholder="••••••••"
                className={`block w-full pl-10 pr-3 py-2.5 border rounded-xl bg-gray-50/50 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 transition-all duration-200 ease-in-out sm:text-sm ${
                  errors.password
                    ? "border-red-300 focus:border-red-500 focus:ring-red-500/20" 
                    : "border-gray-200 focus:border-primary-500 focus:ring-primary-500/20"
                }`}
                {...register("password")} 
              />
            </div>
            {errors.password && (
               <div className="mt-1.5 flex items-center text-red-500 text-xs animate-in slide-in-from-top-1 duration-200">
               <AlertCircle className="w-3 h-3 mr-1" />
               <span>{errors.password.message}</span>
             </div>
            )}
          </div>
        </div>

        {/* API Error Message */}
        {error && (
          <div className="p-3 rounded-lg bg-red-50 border border-red-100 text-red-600 text-sm flex items-center animate-in fade-in zoom-in-95 duration-200">
            <AlertCircle className="w-4 h-4 mr-2 flex-shrink-0" />
            <span>{error}</span>
          </div>
        )}

        {/* Submit Button */}
        <button
          type="submit"
          disabled={loading}
          className="relative w-full flex items-center justify-center py-3 px-4 border border-transparent rounded-xl text-sm font-semibold text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 disabled:opacity-70 disabled:cursor-not-allowed transition-all shadow-lg shadow-primary-500/30 hover:shadow-primary-500/40 active:scale-[0.98]"
        >
          {loading ? (
            <Loader2 className="w-5 h-5 animate-spin" />
          ) : (
            <>
              Sign In
              <ArrowRight className="ml-2 h-4 w-4" />
            </>
          )}
        </button>

        {/* Divider */}
        {/* <div className="relative my-6">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-200"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 bg-white text-gray-500">Or continue with</span>
          </div>
        </div> */}

        {/* Social Buttons */}
        {/* <div className="grid grid-cols-2 gap-4">
          <button type="button" className="flex items-center justify-center px-4 py-2.5 border border-gray-200 rounded-xl bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-gray-200 transition-colors">
            <Github className="h-5 w-5 mr-2" />
            Github
          </button>
          <button type="button" className="flex items-center justify-center px-4 py-2.5 border border-gray-200 rounded-xl bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-gray-200 transition-colors">
            <svg className="h-5 w-5 mr-2" aria-hidden="true" viewBox="0 0 24 24">
              <path d="M12.0003 20.45C16.667 20.45 20.5836 17.2753 20.5836 13.367C20.5836 12.892 20.542 12.4253 20.467 11.967H12.0003V14.9753H16.9086C16.7 16.0836 15.592 17.5503 12.0003 17.5503C9.17533 17.5503 6.80033 15.2003 6.80033 12.0003C6.80033 8.80033 9.17533 6.45033 12.0003 6.45033C13.5086 6.45033 14.8586 6.97533 15.9253 7.85866L18.0253 5.75866C16.442 4.27533 14.3836 3.55033 12.0003 3.55033C7.33366 3.55033 3.55033 7.33366 3.55033 12.0003C3.55033 16.667 7.33366 20.45 12.0003 20.45Z" fill="#4285F4" />
            </svg>
            Google
          </button>
        </div> */}

        {/* Footer */}
        <p className="mt-8 text-center text-sm text-gray-600">
          Don't have an account?{' '}
          <Link to="/auth/signup" className="font-semibold text-primary-600 hover:text-primary-500 hover:underline transition-colors">
            Sign up
          </Link>
        </p>
      </form>
    </div>
  )
}
