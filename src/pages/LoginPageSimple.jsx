import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Eye, EyeOff, Building2, Users, ClipboardList } from 'lucide-react';

export default function LoginPageSimple() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    setError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!formData.email || !formData.password) {
      setError('Please fill in all fields');
      return;
    }

    setLoading(true);
    
    setTimeout(() => {
      if (formData.email.includes('admin')) {
        navigate('/admin');
      } else if (formData.email.includes('@ur.ac.rw') || formData.email.includes('@')) {
        navigate('/cp');
      } else {
        setError('Invalid email format');
      }
      setLoading(false);
    }, 500);
  };

  return (
    <div className="min-h-screen flex">
      {/* Left Panel - Branding with Background Image */}
      <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white p-12 flex-col justify-between relative overflow-hidden">
        
        {/* Background Image with Blur and Overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center blur-sm opacity-30"
          style={{
            backgroundImage: 'url(https://www.teachhub.com/wp-content/uploads/2020/05/Classroom-Management-for-an-Effective-Learning-Environment-768x512.jpg)',
            backgroundAttachment: 'fixed'
          }}
        />
        
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 via-blue-800/80 to-blue-700/80" />
        
        {/* Content */}
        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-12">
            <div className="w-14 h-14 bg-white/20 rounded-lg flex items-center justify-center backdrop-blur">
              <Building2 size={28} className="text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold">University of Rwanda</h1>
              <p className="text-blue-100 text-sm">Room Booking System</p>
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold mb-2">CP Room Booking System</h2>
              <p className="text-blue-100 text-lg leading-relaxed">
                Manage classroom bookings efficiently with our modern, secure portal designed for Class Representatives and Administrators.
              </p>
            </div>

            {/* Features */}
            <div className="space-y-4 pt-8">
              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0 backdrop-blur">
                  <ClipboardList size={20} />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Easy Booking</h3>
                  <p className="text-blue-100 text-sm">Request and manage classroom bookings in seconds</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0 backdrop-blur">
                  <Users size={20} />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Role-Based Access</h3>
                  <p className="text-blue-100 text-sm">Separate dashboards for CPs and administrators</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0 backdrop-blur">
                  <Building2 size={20} />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Conflict Prevention</h3>
                  <p className="text-blue-100 text-sm">Automatic detection of overlapping bookings</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Info */}
        <div className="text-blue-100 text-sm border-t border-white/10 pt-8 relative z-10">
          <p className="mb-1">For support: <span className="font-medium text-white">ict@ur.ac.rw</span></p>
          <p>Tel: +250 250 252 595 000</p>
        </div>
      </div>

      {/* Right Panel - Login Form */}
      <div className="w-full lg:w-1/2 bg-white flex items-center justify-center px-6 py-12 sm:px-12">
        <div className="w-full max-w-md">
          
          {/* Mobile Header */}
          <div className="lg:hidden mb-8 flex items-center gap-3 pb-6 border-b border-gray-200">
            <div className="w-10 h-10 bg-blue-900 rounded-lg flex items-center justify-center">
              <Building2 size={24} className="text-white" />
            </div>
            <div>
              <h1 className="text-lg font-bold text-gray-900">UR</h1>
              <p className="text-xs text-gray-600">Room Booking</p>
            </div>
          </div>

          {/* Title */}
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              Welcome Back
            </h2>
            <p className="text-gray-600">
              Sign in to your account to continue
            </p>
          </div>

          {/* Error Message */}
          {error && (
            <div className="mb-5 bg-red-50 border border-red-300 text-red-800 px-4 py-3 rounded-lg text-sm">
              {error}
            </div>
          )}

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            
            {/* Email Input */}
            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-2">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="example@ur.ac.rw"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition"
              />
            </div>

            {/* Password Input */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="block text-sm font-semibold text-gray-900">
                  Password
                </label>
                <a href="#" className="text-sm text-blue-600 hover:text-blue-700 font-medium">
                  Forgot?
                </a>
              </div>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Enter your password"
                  className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-3.5 text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? (
                    <EyeOff className="w-5 h-5" />
                  ) : (
                    <Eye className="w-5 h-5" />
                  )}
                </button>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white font-semibold py-3 rounded-lg transition text-sm mt-8"
            >
              {loading ? 'Signing in...' : 'Sign In'}
            </button>
          </form>

          {/* Demo Credentials */}
          <div className="mt-8 bg-gray-50 border border-gray-200 rounded-lg p-5">
            <p className="text-xs font-semibold text-gray-900 mb-4">Demo Credentials</p>
            <div className="grid grid-cols-2 gap-4 text-xs">
              <div>
                <p className="font-medium text-gray-900 mb-1">CP Login</p>
                <p className="text-gray-600">alice@ur.ac.rw</p>
              </div>
              <div>
                <p className="font-medium text-gray-900 mb-1">Admin</p>
                <p className="text-gray-600">admin@ur.ac.rw</p>
              </div>
            </div>
            <p className="text-xs text-gray-500 mt-3">Any password works in demo mode</p>
          </div>

          {/* Footer */}
          <p className="text-center text-xs text-gray-600 mt-8">
            © 2024 University of Rwanda. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}
