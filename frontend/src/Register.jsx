import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

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
        // Automatically log incoming user in after registration
        localStorage.setItem('userToken', data.token);
        localStorage.setItem('userInfo', JSON.stringify(data));
        navigate('/'); // Redirect to home page
      } else {
        setError(data.message || 'Đăng ký thất bại.');
      }
    } catch (err) {
      setError('Đã xảy ra lỗi khi kết nối với máy chủ.');
    }
  };

  return (
    <div className="adm-flex adm-min-h-screen adm-bg-surface">
      {/* Left section: Image/Banner */}
      <div className="adm-hidden lg:adm-block lg:adm-w-1/2 adm-relative">
        <div className="adm-absolute adm-inset-0 adm-bg-primary/20 adm-mix-blend-multiply"></div>
        <div className="adm-absolute adm-inset-0 adm-bg-gradient-to-t adm-from-primary/80 adm-to-transparent"></div>
        <img
          src="https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
          alt="Event background"
          className="adm-absolute adm-inset-0 adm-h-full adm-w-full adm-object-cover"
        />
        <div className="adm-absolute adm-bottom-0 adm-left-0 adm-right-0 adm-p-12 adm-text-on-primary">
          <h2 className="adm-text-4xl adm-font-bold adm-mb-4 adm-font-headline">Khám Phá Sân Khấu Mới</h2>
          <p className="adm-text-lg adm-opacity-90 adm-font-body">Tạo tài khoản hôm nay để quản lý vé và đừng bỏ lỡ bất cứ show diễn nào!</p>
        </div>
      </div>

      {/* Right section: Form */}
      <div className="adm-w-full lg:adm-w-1/2 adm-flex adm-items-center adm-justify-center adm-p-8 sm:adm-p-12">
        <div className="adm-w-full adm-max-w-md">
          <div className="adm-text-center adm-mb-8">
            <h1 className="adm-text-3xl adm-font-bold adm-text-on-surface adm-font-headline adm-mb-2">Tạo Tài Khoản</h1>
            <p className="adm-text-on-surface-variant adm-font-body">Đăng ký thành viên mới tại QLSK</p>
          </div>

          {error && (
            <div className="adm-mb-6 adm-p-4 adm-bg-error/10 adm-text-error adm-rounded-xl adm-text-sm">
              {error}
            </div>
          )}

          <form onSubmit={handleRegister} className="adm-space-y-5">
            <div>
              <label className="adm-block adm-text-sm adm-font-medium adm-text-on-surface adm-mb-1.5" htmlFor="fullName">
                Họ và Tên
              </label>
              <input
                id="fullName"
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="adm-w-full adm-px-4 adm-py-3 adm-rounded-xl adm-border adm-border-outline-variant adm-bg-surface-container-lowest focus:adm-outline-none focus:adm-ring-2 focus:adm-ring-primary focus:adm-border-transparent adm-transition-all"
                placeholder="Nhập họ tên của bạn"
                required
              />
            </div>

            <div>
              <label className="adm-block adm-text-sm adm-font-medium adm-text-on-surface adm-mb-1.5" htmlFor="email">
                Email
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="adm-w-full adm-px-4 adm-py-3 adm-rounded-xl adm-border adm-border-outline-variant adm-bg-surface-container-lowest focus:adm-outline-none focus:adm-ring-2 focus:adm-ring-primary focus:adm-border-transparent adm-transition-all"
                placeholder="Nhập email của bạn"
                required
              />
            </div>

            <div>
              <label className="adm-block adm-text-sm adm-font-medium adm-text-on-surface adm-mb-1.5" htmlFor="password">
                Mật khẩu
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="adm-w-full adm-px-4 adm-py-3 adm-rounded-xl adm-border adm-border-outline-variant adm-bg-surface-container-lowest focus:adm-outline-none focus:adm-ring-2 focus:adm-ring-primary focus:adm-border-transparent adm-transition-all"
                placeholder="Tạo mật khẩu"
                required
              />
            </div>

            <div>
              <label className="adm-block adm-text-sm adm-font-medium adm-text-on-surface adm-mb-1.5" htmlFor="confirmPassword">
                Xác nhận mật khẩu
              </label>
              <input
                id="confirmPassword"
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="adm-w-full adm-px-4 adm-py-3 adm-rounded-xl adm-border adm-border-outline-variant adm-bg-surface-container-lowest focus:adm-outline-none focus:adm-ring-2 focus:adm-ring-primary focus:adm-border-transparent adm-transition-all"
                placeholder="Nhập lại mật khẩu"
                required
              />
            </div>

            <button
              type="submit"
              className="adm-mt-6 adm-w-full adm-flex adm-justify-center adm-py-3 adm-px-4 adm-border adm-border-transparent adm-rounded-xl adm-shadow-sm adm-text-sm adm-font-bold adm-text-on-primary adm-bg-primary hover:adm-bg-primary/90 focus:adm-outline-none focus:adm-ring-2 focus:adm-ring-offset-2 focus:adm-ring-primary adm-transition-colors"
            >
              Đăng Ký
            </button>
          </form>

          <p className="adm-mt-8 adm-text-center adm-text-sm adm-text-on-surface-variant">
            Đã có tài khoản?{' '}
            <Link to="/login" className="adm-font-semibold adm-text-primary hover:adm-text-primary-container adm-transition-colors">
              Đăng nhập ngay
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
