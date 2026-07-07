import { motion } from 'framer-motion';
import { ArrowRight, Building2, Mail, Eye, EyeOff } from 'lucide-react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import authService from '../services/authService';

export default function LoginPage() {
  const navigate = useNavigate();
  const [mode, setMode] = useState('cp');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [modal, setModal] = useState({ visible: false, title: '', message: '' });

  const showModal = (title, message) => setModal({ visible: true, title, message });
  const closeModal = () => setModal({ visible: false, title: '', message: '' });
  

  const handleLogin = async (event) => {
    event.preventDefault();
    setLoading(true);
    
    try {
      const result = await authService.login(email, password);
      
      if (result.success) {
        // Route based on role
        if (result.role === 'admin') {
          navigate('/admin');
        } else {
          navigate('/cp');
        }
      } else {
        // Show a non-technical in-page modal to avoid exposing backend details
        if (result.code === 'INVALID_CREDENTIALS') {
          showModal('Sign-in failed', 'Invalid email or password.');
        } else if (result.code === 'NETWORK') {
          showModal('Fetching Error', "We couldn't reach the server. try again later.");
        } else {
          showModal('Sign-in failed', 'Unable to sign in. Please try again later.');
        }
      }
    } catch (err) {
      showModal('Sign-in failed', 'Unable to sign in. Please try again later.');
      console.error('Login error:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
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

          {/* Error Message suppressed to avoid exposing backend details; using JS alerts instead */}

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

          {/* Note */}
          <div className="mt-6 rounded-lg bg-transparent border-2 border-blue-500 p-4 text-sm text-black lg:mt-8 lg:p-6">
            <p className="font-bold text-black mb-2 lg:text-lg">Account Assignment</p>
            <p className="text-xs font-semibold lg:text-sm">Accounts are assigned by your system administrator. If you do not have an account, please contact your administrator.</p>
          </div>

          {/* Footer */}
          <p className="text-center text-xs font-semibold text-black mt-6 lg:mt-8 lg:text-sm">
            © 2026 University of Rwanda. All rights reserved.
          </p>
        </div>
      </motion.div>
    </div>
      {modal.visible && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={closeModal} />
          <div className="relative z-10 max-w-md w-full rounded-lg bg-white/95 p-6 shadow-lg">
            <h2 className="text-lg font-bold text-black mb-2">{modal.title}</h2>
            <p className="text-sm text-black mb-4">{modal.message}</p>
            <div className="flex justify-end">
              <button onClick={closeModal} className="rounded px-4 py-2 bg-blue-900 text-white font-bold">OK</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
