import { motion } from 'framer-motion';
import { ArrowRight, Building2, Mail, Eye, EyeOff } from 'lucide-react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function LoginPage() {
  const navigate = useNavigate();
  const [mode, setMode] = useState('cp');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleLogin = async (event) => {
    event.preventDefault();
    setLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    if (mode === 'admin') {
      if (email.includes('admin')) {
        navigate('/admin');
      } else {
        alert('Use an admin email to sign in.');
      }
    } else {
      if (email.includes('ur.ac.rw') || email.includes('@')) {
        navigate('/cp');
      } else {
        alert('Use a CP email to sign in.');
      }
    }
    setLoading(false);
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center px-4 py-10 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 bg-cover bg-center opacity-90"
        style={{
          backgroundImage: 'url(https://www.teachhub.com/wp-content/uploads/2020/05/Classroom-Management-for-an-Effective-Learning-Environment-768x512.jpg)',
          backgroundAttachment: 'fixed'
        }}
      />
      
      {/* Centered Login Form */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }} 
        animate={{ opacity: 1, y: 0 }} 
        className="relative z-10 w-full max-w-md px-6 lg:max-w-2xl"
      >
        <div className="p-8 sm:p-10 lg:p-16">
          {/* Header */}
          <div className="mb-8 flex flex-col items-center lg:mb-12">
            <div className="mb-4 w-14 h-14 bg-blue-900 rounded-lg flex items-center justify-center lg:w-20 lg:h-20">
              <Building2 size={28} className="text-white lg:w-8 lg:h-8" />
            </div>
            <h1 className="text-2xl font-bold text-black lg:text-4xl">Welcome Back</h1>
            <p className="text-sm font-semibold text-black mt-2 lg:text-lg">University of Rwanda</p>
          </div>

          {/* Role Tabs */}
          <div className="mb-6 flex rounded-full bg-transparent border-2 border-blue-500 p-1 lg:mb-8">
            <button 
              type="button" 
              onClick={() => setMode('cp')} 
              className={`w-1/2 rounded-full px-4 py-2 text-sm font-bold transition lg:px-6 lg:py-3 lg:text-base ${mode === 'cp' ? 'bg-blue-700 text-white shadow-sm' : 'text-black'}`}
            >
              CP Login
            </button>
            <button 
              type="button" 
              onClick={() => setMode('admin')} 
              className={`w-1/2 rounded-full px-4 py-2 text-sm font-bold transition lg:px-6 lg:py-3 lg:text-base ${mode === 'admin' ? 'bg-blue-700 text-white shadow-sm' : 'text-black'}`}
            >
              Admin Login
            </button>
          </div>

          {/* Login Form */}
          <form onSubmit={handleLogin} className="space-y-4 lg:space-y-6">
            <div>
              <label className="block text-sm font-bold text-black mb-2 lg:text-lg">
                Email address
              </label>
              <div className="flex items-center gap-3 rounded-lg border-2 border-blue-500 px-4 py-3 bg-transparent focus-within:border-blue-300 transition lg:px-6 lg:py-4">
                <Mail size={18} className="text-blue-600 lg:w-6 lg:h-6" />
                <input 
                  value={email} 
                  onChange={(e) => setEmail(e.target.value)} 
                  type="email" 
                  placeholder="name@ur.ac.rw" 
                  className="w-full bg-transparent outline-none text-black placeholder-slate-500 font-semibold lg:text-lg" 
                  required 
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-bold text-black mb-2 lg:text-lg">
                Password
              </label>
              <div className="flex items-center gap-3 rounded-lg border-2 border-blue-500 px-4 py-3 bg-transparent focus-within:border-blue-300 transition lg:px-6 lg:py-4">
                <input 
                  value={password} 
                  onChange={(e) => setPassword(e.target.value)} 
                  type={showPassword ? 'text' : 'password'} 
                  placeholder="Enter your password" 
                  className="w-full bg-transparent outline-none text-black placeholder-slate-500 font-semibold lg:text-lg" 
                  required 
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="text-blue-600 hover:text-blue-800 lg:w-6 lg:h-6"
                >
                  {showPassword ? <EyeOff size={18} className="lg:w-6 lg:h-6" /> : <Eye size={18} className="lg:w-6 lg:h-6" />}
                </button>
              </div>
            </div>

            <button 
              type="submit" 
              disabled={loading}
              className="w-full flex items-center justify-center gap-2 rounded-lg bg-blue-900 px-5 py-3 text-sm font-bold text-white shadow-sm hover:bg-blue-800 transition disabled:opacity-70 disabled:cursor-not-allowed border-2 border-blue-700 lg:px-8 lg:py-4 lg:text-lg"
            >
              {loading ? 'Signing in...' : 'Sign In'} {!loading && <ArrowRight size={16} className="lg:w-6 lg:h-6" />}
            </button>
          </form>

          {/* Demo Info */}
          <div className="mt-6 rounded-lg bg-transparent border-2 border-blue-500 p-4 text-sm text-black lg:mt-8 lg:p-6">
            <p className="font-bold text-black mb-2 lg:text-lg">Demo Credentials:</p>
            <div className="space-y-1 text-xs font-semibold lg:text-sm lg:space-y-2">
              <p><strong>CP:</strong> alice@ur.ac.rw</p>
              <p><strong>Admin:</strong> admin@ur.ac.rw</p>
            </div>
          </div>

          {/* Footer */}
          <p className="text-center text-xs font-semibold text-black mt-6 lg:mt-8 lg:text-sm">
            © 2026 University of Rwanda. All rights reserved.
          </p>
        </div>
      </motion.div>
    </div>
  );
}
