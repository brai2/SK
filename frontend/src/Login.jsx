import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Eye } from 'lucide-react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    
    try {
      const response = await fetch('http://localhost:3000/api/users/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem('userToken', data.token);
        localStorage.setItem('userInfo', JSON.stringify(data));
        navigate('/');
      } else {
        setError(data.message || 'Đăng nhập thất bại.');
      }
    } catch (err) {
      setError('Đã xảy ra lỗi khi kết nối với máy chủ.');
    }
  };

  return (
    <div className="adm-min-h-screen adm-font-body adm-flex adm-flex-col adm-items-center adm-py-6" style={{ backgroundColor: '#FCF7FC' }}>
      
      {/* Navbar */}
      <nav className="adm-w-full adm-max-w-6xl adm-mx-auto adm-flex adm-justify-between adm-items-center adm-px-8 adm-mb-16">
        <Link to="/" className="adm-text-2xl adm-font-black adm-text-[#4A1D96] adm-tracking-tight adm-no-underline">QLSK</Link>
        <div className="adm-hidden md:adm-flex adm-space-x-12 adm-text-[13px] adm-font-semibold adm-text-[#937EB1]">
           <Link to="/" className="hover:adm-text-primary adm-transition-colors">Home</Link>
           <Link to="/events" className="hover:adm-text-primary adm-transition-colors">Events</Link>
           <Link to="/about" className="hover:adm-text-primary adm-transition-colors">About</Link>
           <Link to="/contact" className="hover:adm-text-primary adm-transition-colors">Contact</Link>
        </div>
        <div className="adm-flex adm-items-center adm-space-x-6">
           <Link to="/login" className="adm-text-[13px] adm-font-bold adm-text-[#8B5CF6] hover:adm-opacity-80">Login</Link>
           <Link to="/register" className="adm-px-6 adm-py-2.5 adm-rounded-full adm-bg-[#8B5CF6] hover:adm-bg-[#7C3AED] adm-text-white adm-text-[13px] adm-font-bold adm-transition-colors">Sign Up</Link>
        </div>
      </nav>

      {/* Main Layout */}
      <div className="adm-w-full adm-max-w-[1000px] adm-mx-auto adm-flex adm-flex-col md:adm-flex-row adm-justify-around adm-items-center adm-px-8">
        
        {/* Left Sub-Container */}
        <div className="adm-w-full md:adm-w-[420px] adm-flex adm-flex-col adm-mb-10 md:adm-mb-0">
           <div className="adm-inline-block adm-px-3 adm-py-1 adm-bg-[#DCE7FF] adm-text-[#4A72FF] adm-text-[10px] adm-font-extrabold adm-rounded-full adm-w-max adm-mb-3 adm-tracking-wider">
              WELCOME BACK
           </div>
           <h1 className="adm-text-[42px] adm-font-black adm-text-[#38274C] adm-mb-6 adm-tracking-tighter">QLSK</h1>
           <div className="adm-rounded-[20px] adm-overflow-hidden adm-shadow-lg">
              <img src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Event Hall" className="adm-w-full adm-h-[240px] adm-object-cover" />
           </div>
        </div>

        {/* Right Form Card */}
        <div className="adm-bg-white adm-rounded-[36px] adm-p-10 adm-w-full md:adm-w-[420px] adm-shadow-sm">
           <h2 className="adm-text-[22px] adm-font-bold adm-text-[#374151] adm-mb-1.5 adm-tracking-tight">Đăng nhập</h2>
           <p className="adm-text-gray-500 adm-text-[12px] adm-font-medium adm-mb-8">Chào mừng bạn quay trở lại với QLSK</p>

           {error && (
            <div className="adm-mb-4 adm-p-3 adm-bg-red-50 adm-text-red-500 adm-rounded-lg adm-text-xs">
              {error}
            </div>
           )}

           <form onSubmit={handleLogin} className="adm-space-y-5">
             <div>
                <label className="adm-block adm-text-[11px] adm-font-bold adm-text-gray-600 adm-mb-1.5">Email</label>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required placeholder="email@example.com" className="adm-w-full adm-px-4 adm-py-3.5 adm-bg-[#F8F5FF] adm-rounded-xl adm-text-[13px] adm-font-medium adm-text-gray-700 placeholder-gray-400 focus:adm-outline-none focus:adm-ring-1 focus:adm-ring-[#8B5CF6]" />
             </div>

             <div>
                <div className="adm-flex adm-justify-between adm-items-center adm-mb-1.5">
                   <label className="adm-block adm-text-[11px] adm-font-bold adm-text-gray-600">Mật khẩu</label>
                   <a href="#" className="adm-text-[10px] adm-font-bold adm-text-[#4A72FF] hover:adm-underline">Quên mật khẩu?</a>
                </div>
                <div className="adm-relative">
                  <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required placeholder="••••••••" className="adm-w-full adm-px-4 adm-py-3.5 adm-bg-[#F8F5FF] adm-rounded-xl adm-text-[13px] adm-font-medium adm-text-gray-700 placeholder-gray-400 focus:adm-outline-none focus:adm-ring-1 focus:adm-ring-[#8B5CF6]" />
                  <Eye strokeWidth={2.5} size={15} className="adm-absolute adm-right-4 adm-top-1/2 -adm-translate-y-1/2 adm-text-gray-400 adm-cursor-pointer hover:adm-text-gray-600" />
                </div>
             </div>

             <div className="adm-flex adm-items-center">
                 <input type="checkbox" id="remember" className="adm-w-[14px] adm-h-[14px] adm-text-[#8B5CF6] adm-border-none adm-rounded focus:adm-ring-[#8B5CF6] adm-bg-[#F5F0FF] adm-cursor-pointer" />
                 <label htmlFor="remember" className="adm-ml-2 adm-text-[11px] adm-font-semibold adm-text-gray-500 adm-cursor-pointer">Ghi nhớ đăng nhập</label>
             </div>

             <button type="submit" className="adm-w-full adm-py-3.5 adm-mt-2 adm-bg-[#9061F9] hover:adm-bg-[#7C3AED] adm-text-white adm-font-bold adm-text-[13px] adm-rounded-xl adm-transition-colors adm-shadow-sm">
                Đăng nhập
             </button>
           </form>

           <div className="adm-relative adm-my-7">
               <div className="adm-absolute adm-inset-0 adm-flex adm-items-center">
                  <div className="adm-w-full adm-border-t adm-border-gray-100"></div>
               </div>
               <div className="adm-relative adm-flex adm-justify-center adm-text-[10px]">
                  <span className="adm-bg-white adm-px-3 adm-text-gray-400 adm-font-bold adm-tracking-widest">HOẶC TIẾP TỤC VỚI</span>
               </div>
           </div>

           <div className="adm-grid adm-grid-cols-2 adm-gap-4">
               {/* Google */}
               <button className="adm-flex adm-items-center adm-justify-center adm-py-3 adm-bg-[#F8F5FF] hover:adm-bg-[#F0E8FF] adm-transition-colors adm-rounded-full">
                  <svg className="adm-w-3.5 adm-h-3.5 adm-mr-2" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                  </svg>
                  <span className="adm-text-[12px] adm-font-bold adm-text-[#4B5563]">Google</span>
               </button>
               {/* Facebook */}
               <button className="adm-flex adm-items-center adm-justify-center adm-py-3 adm-bg-[#F8F5FF] hover:adm-bg-[#F0E8FF] adm-transition-colors adm-rounded-full">
                  <svg className="adm-w-3.5 adm-h-3.5 adm-mr-2" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" fill="#1877F2" />
                  </svg>
                  <span className="adm-text-[12px] adm-font-bold adm-text-[#4B5563]">Facebook</span>
               </button>
           </div>

           <div className="adm-text-center adm-mt-8 adm-text-[12px] adm-text-gray-500 adm-font-medium">
               Chưa có tài khoản? <Link to="/register" className="adm-text-[#8B5CF6] adm-font-bold hover:adm-underline">Đăng ký ngay</Link>
           </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
