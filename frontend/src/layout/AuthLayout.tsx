import { Outlet, useLocation } from 'react-router'
import { Sparkles } from 'lucide-react'

export default function AuthLayout() {
  const location = useLocation();
  const isSignUp = location.pathname.includes('signup');

  return (
    <div className="flex min-h-screen w-full bg-gray-50">
      {/* Left Side - Artistic/Brand Section */}
      <div className="hidden lg:flex lg:w-1/2 relative bg-primary-600 overflow-hidden items-center justify-center">
        {/* Background decorative elements */}
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop')] bg-cover bg-center opacity-20 mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-gradient-to-tr from-primary-900/90 to-primary-500/90"></div>
        
        {/* Content */}
        <div className="relative z-10 max-w-xl px-12 text-white">
          <div className="mb-8 inline-flex items-center justify-center w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm border border-white/30">
            <Sparkles className="w-6 h-6 text-white" />
          </div>
          <h1 className="text-5xl font-bold mb-6 leading-tight tracking-tight">
            {isSignUp ? "Join our creative community." : "Welcome back to ThreadAI."}
          </h1>
          <p className="text-lg text-primary-100 leading-relaxed">
            Connect, share, and inspire. Experience the next generation of social networking powered by artificial intelligence.
          </p>
          
          {/* Testimonial or extra decoration */}
          <div className="mt-12 p-6 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20">
            <p className="italic text-primary-50">"The most intuitive platform I've used for sharing ideas. The AI features are game-changing."</p>
            <div className="mt-4 flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-primary-300"></div>
              <div className="text-sm font-medium">Sarah Jenkins, Digital Artist</div>
            </div>
          </div>
        </div>
        
        {/* Abstract shapes */}
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-primary-400/30 rounded-full blur-3xl"></div>
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-primary-300/20 rounded-full blur-3xl"></div>
      </div>

      {/* Right Side - Auth Forms */}
      <div className="flex-1 flex items-center justify-center p-4 sm:p-8 lg:p-12 bg-white">
        <div className="w-full max-w-md space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
          <Outlet />
        </div>
      </div>
    </div>
  )
}
