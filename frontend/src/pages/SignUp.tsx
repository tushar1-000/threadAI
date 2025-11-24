import { Mail, Lock, User, ArrowRight, Loader2, AlertCircle } from 'lucide-react'
import { Link } from 'react-router'
import { useForm } from "react-hook-form"
import type { SubmitHandler } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import { signupSchema } from '@/schema/signup.schema'
import { useNavigate } from 'react-router';
import { useAuthStore } from '@/store/authStore';

type Inputs = {
  name: string
  email: string
  password: string
  confirmPassword: string
}

export default function SignUp() {
   const { signUp, loading, error } = useAuthStore();
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({ resolver: yupResolver(signupSchema) })

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
      const response = await signUp(data);
      if (response) {
          navigate("/");
      }
  }

  return (
    <div className="w-full">
      {/* Header */}
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900">Create an account</h2>
        <p className="mt-2 text-sm text-gray-600">
          Enter your details below to get started
        </p>
      </div>

      {/* Form */}
      <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
        
        <div className="space-y-4">
          {/* Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">Full Name</label>
            <div className="relative group">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none transition-colors">
                <User className={`h-5 w-5 ${errors.name ? "text-red-400" : "text-gray-400"}`} />
              </div>
              <input
                type="text"
                placeholder="John Doe"
                className={`block w-full pl-10 pr-3 py-2.5 border rounded-xl bg-gray-50/50 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 transition-all duration-200 ease-in-out sm:text-sm ${
                  errors.name 
                    ? "border-red-300 focus:border-red-500 focus:ring-red-500/20" 
                    : "border-gray-200 focus:border-primary-500 focus:ring-primary-500/20"
                }`}
                {...register("name")}
              />
            </div>
            {errors.name && (
              <div className="mt-1.5 flex items-center text-red-500 text-xs animate-in slide-in-from-top-1 duration-200">
                <AlertCircle className="w-3 h-3 mr-1" />
                <span>{errors.name.message}</span>
              </div>
            )}
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">Email Address</label>
            <div className="relative group">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none transition-colors">
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
            <label className="block text-sm font-medium text-gray-700 mb-1.5">Password</label>
            <div className="relative group">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none transition-colors">
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

          {/* Confirm Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">Confirm Password</label>
            <div className="relative group">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none transition-colors">
                <Lock className={`h-5 w-5 ${errors.confirmPassword ? "text-red-400" : "text-gray-400"}`} />
              </div>
              <input
                type="password"
                placeholder="••••••••"
                className={`block w-full pl-10 pr-3 py-2.5 border rounded-xl bg-gray-50/50 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 transition-all duration-200 ease-in-out sm:text-sm ${
                  errors.confirmPassword
                    ? "border-red-300 focus:border-red-500 focus:ring-red-500/20" 
                    : "border-gray-200 focus:border-primary-500 focus:ring-primary-500/20"
                }`}
                {...register("confirmPassword")}
              />
            </div>
            {errors.confirmPassword && (
              <div className="mt-1.5 flex items-center text-red-500 text-xs animate-in slide-in-from-top-1 duration-200">
                <AlertCircle className="w-3 h-3 mr-1" />
                <span>{errors.confirmPassword.message}</span>
              </div>
            )}
          </div>
        </div>

        {/* API Error Message */}
        {error && (
          <div className="p-3 rounded-lg bg-red-50 border border-red-100 text-red-600 text-sm flex items-center animate-in fade-in zoom-in-95 duration-200">
            <AlertCircle className="w-4 h-4 mr-2 shrink-0" />
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
              Create Account
              <ArrowRight className="ml-2 h-4 w-4" />
            </>
          )}
        </button>

        {/* Footer */}
        <p className="mt-8 text-center text-sm text-gray-600">
          Already have an account?{' '}
          <Link to="/auth/signin" className="font-semibold text-primary-600 hover:text-primary-500 hover:underline transition-colors">
            Sign in
          </Link>
        </p>
      </form>
    </div>
  )
}
