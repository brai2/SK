import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { User, Mail, Lock, Key } from 'lucide-react';

const Register = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    setError('');

    if (password !== confirmPassword) {
      return setError('Mật khẩu nhập lại không khớp.');
    }
    
    try {
      const response = await fetch('http://localhost:3000/api/users/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ fullName, email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem('userToken', data.token);
        localStorage.setItem('userInfo', JSON.stringify(data));
        navigate('/');
      } else {
        setError(data.message || 'Đăng ký thất bại.');
      }
    } catch (err) {
      setError('Đã xảy ra lỗi khi kết nối với máy chủ.');
    }
  };

  return (
    <div className="adm-min-h-screen adm-font-body adm-flex adm-flex-col adm-items-center adm-py-6" style={{ backgroundColor: '#FCF7FC' }}>
      
      {/* Navbar */}
      <nav className="adm-w-full adm-max-w-6xl adm-mx-auto adm-flex adm-justify-between adm-items-center adm-px-8 adm-mb-10">
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

      {/* Main Card */}
      <div className="adm-w-full adm-max-w-[1000px] adm-bg-white adm-rounded-[36px] adm-shadow-sm adm-flex adm-overflow-hidden adm-min-h-[580px]">
        
        {/* Left Side - Solid Purple */}
        <div className="adm-hidden md:adm-flex adm-w-1/2 adm-bg-[#8B5CF6] adm-p-14 adm-flex-col adm-justify-between">
          <div className="adm-text-white adm-mt-8">
            <h1 className="adm-text-5xl adm-font-bold adm-leading-[1.1] adm-mb-4 adm-tracking-tight">Xây dựng<br/>sự kiện<br/>đẳng cấp.</h1>
          </div>
          <div className="adm-mb-6">
            <p className="adm-text-white/80 adm-text-sm adm-leading-relaxed adm-tracking-wide">Tham gia cộng đồng những nhà tổ<br/>chức sự kiện chuyên nghiệp nhất.</p>
          </div>
        </div>

        {/* Right Side - Form */}
        <div className="adm-w-full md:adm-w-1/2 adm-py-12 adm-px-14 adm-flex adm-flex-col adm-justify-center">
          <h2 className="adm-text-[26px] adm-font-bold adm-text-[#374151] adm-mb-1.5 adm-tracking-tight">Tạo tài khoản</h2>
          <p className="adm-text-[#6B7280] adm-mb-8 adm-text-[13px]">Bắt đầu hành trình kiến tạo cùng chúng tôi.</p>
          
          {error && (
            <div className="adm-mb-4 adm-p-3 adm-bg-red-50 adm-text-red-500 adm-rounded-lg adm-text-xs">
              {error}
            </div>
          )}

          <form onSubmit={handleRegister} className="adm-space-y-4">
            <div>
               <label className="adm-block adm-text-[11px] adm-font-bold adm-text-gray-500 adm-mb-1.5">Họ tên</label>
               <div className="adm-relative">
                 <User strokeWidth={2.5} size={15} className="adm-absolute adm-left-4 adm-top-1/2 -adm-translate-y-1/2 adm-text-gray-400" />
                 <input type="text" value={fullName} onChange={(e) => setFullName(e.target.value)} required placeholder="Nguyễn Văn A" className="adm-w-full adm-pl-11 adm-pr-4 adm-py-3.5 adm-bg-[#F8F5FF] adm-rounded-xl adm-text-[13px] adm-font-medium adm-text-gray-700 placeholder-gray-400 focus:adm-outline-none focus:adm-ring-1 focus:adm-ring-[#8B5CF6]" />
               </div>
            </div>

            <div>
               <label className="adm-block adm-text-[11px] adm-font-bold adm-text-gray-500 adm-mb-1.5">Email</label>
               <div className="adm-relative">
                 <Mail strokeWidth={2.5} size={15} className="adm-absolute adm-left-4 adm-top-1/2 -adm-translate-y-1/2 adm-text-gray-400" />
                 <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required placeholder="example@architect.com" className="adm-w-full adm-pl-11 adm-pr-4 adm-py-3.5 adm-bg-[#F8F5FF] adm-rounded-xl adm-text-[13px] adm-font-medium adm-text-gray-700 placeholder-gray-400 focus:adm-outline-none focus:adm-ring-1 focus:adm-ring-[#8B5CF6]" />
               </div>
            </div>

            <div className="adm-grid adm-grid-cols-2 adm-gap-4">
               <div>
                 <label className="adm-block adm-text-[11px] adm-font-bold adm-text-gray-500 adm-mb-1.5">Mật khẩu</label>
                 <div className="adm-relative">
                    <Lock strokeWidth={2.5} size={15} className="adm-absolute adm-left-4 adm-top-1/2 -adm-translate-y-1/2 adm-text-gray-400" />
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required placeholder="••••••••" className="adm-w-full adm-pl-11 adm-pr-4 adm-py-3.5 adm-bg-[#F8F5FF] adm-rounded-xl adm-text-[13px] adm-font-medium adm-text-gray-700 placeholder-gray-400 focus:adm-outline-none focus:adm-ring-1 focus:adm-ring-[#8B5CF6]" />
                 </div>
               </div>
               <div>
                 <label className="adm-block adm-text-[11px] adm-font-bold adm-text-gray-500 adm-mb-1.5">Xác nhận</label>
                 <div className="adm-relative">
                    <Key strokeWidth={2.5} size={15} className="adm-absolute adm-left-4 adm-top-1/2 -adm-translate-y-1/2 adm-text-gray-400" />
                    <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required placeholder="••••••••" className="adm-w-full adm-pl-11 adm-pr-4 adm-py-3.5 adm-bg-[#F8F5FF] adm-rounded-xl adm-text-[13px] adm-font-medium adm-text-gray-700 placeholder-gray-400 focus:adm-outline-none focus:adm-ring-1 focus:adm-ring-[#8B5CF6]" />
                 </div>
               </div>
            </div>

            <button type="submit" className="adm-w-full adm-mt-8 adm-py-3.5 adm-bg-[#9061F9] hover:adm-bg-[#7C3AED] adm-text-white adm-font-semibold adm-rounded-xl adm-transition-colors adm-shadow-sm adm-text-[13px]">
              Đăng ký ngay
            </button>
          </form>

          <div className="adm-text-center adm-mt-6 adm-text-[12px] adm-text-gray-500 adm-font-medium">
             Đã có tài khoản? <Link to="/login" className="adm-text-[#8B5CF6] adm-font-bold hover:adm-underline">Đăng nhập</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
