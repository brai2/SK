import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

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
        // Save token to localStorage or state management
        localStorage.setItem('userToken', data.token);
        localStorage.setItem('userInfo', JSON.stringify(data));
        navigate('/'); // Redirect to home page
      } else {
        setError(data.message || 'Đăng nhập thất bại.');
      }
    } catch (err) {
      setError('Đã xảy ra lỗi khi kết nối với máy chủ.');
    }
  };

  return (
    <div className="adm-flex adm-min-h-screen adm-bg-surface">
      {/* Left section: Form */}
      <div className="adm-w-full lg:adm-w-1/2 adm-flex adm-items-center adm-justify-center adm-p-8 sm:adm-p-12">
        <div className="adm-w-full adm-max-w-md">
          <div className="adm-text-center adm-mb-10">
            <h1 className="adm-text-3xl adm-font-bold adm-text-on-surface adm-font-headline adm-mb-2">Đăng Nhập</h1>
            <p className="adm-text-on-surface-variant adm-font-body">Mừng bạn quay trở lại với QLSK!</p>
          </div>

          {error && (
            <div className="adm-mb-6 adm-p-4 adm-bg-error/10 adm-text-error adm-rounded-xl adm-text-sm">
              {error}
            </div>
          )}

          <form onSubmit={handleLogin} className="adm-space-y-6">
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
                placeholder="Nhập mật khẩu"
                required
              />
            </div>

            <div className="adm-flex adm-items-center adm-justify-between">
              <div className="adm-flex adm-items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="adm-h-4 adm-w-4 adm-text-primary focus:adm-ring-primary adm-border-outline-variant adm-rounded"
                />
                <label htmlFor="remember-me" className="adm-ml-2 adm-block adm-text-sm adm-text-on-surface-variant">
                  Ghi nhớ đăng nhập
                </label>
              </div>
              
              <div className="adm-text-sm">
                <a href="#" className="adm-font-medium adm-text-primary hover:adm-text-primary-container adm-transition-colors">
                  Quên mật khẩu?
                </a>
              </div>
            </div>

            <button
              type="submit"
              className="adm-w-full adm-flex adm-justify-center adm-py-3 adm-px-4 adm-border adm-border-transparent adm-rounded-xl adm-shadow-sm adm-text-sm adm-font-bold adm-text-on-primary adm-bg-primary hover:adm-bg-primary/90 focus:adm-outline-none focus:adm-ring-2 focus:adm-ring-offset-2 focus:adm-ring-primary adm-transition-colors"
            >
              Đăng Nhập
            </button>
          </form>

          <div className="adm-mt-8">
            <div className="adm-relative">
              <div className="adm-absolute adm-inset-0 adm-flex adm-items-center">
                <div className="adm-w-full adm-border-t adm-border-outline-variant"></div>
              </div>
              <div className="adm-relative adm-flex adm-justify-center adm-text-sm">
                <span className="adm-px-2 adm-bg-surface adm-text-on-surface-variant">Hoặc tiếp tục với</span>
              </div>
            </div>

            <div className="adm-mt-6 adm-grid adm-grid-cols-2 adm-gap-4">
              <button className="adm-w-full adm-inline-flex adm-justify-center adm-py-2.5 adm-px-4 adm-border adm-border-outline-variant adm-rounded-xl adm-bg-surface-container-lowest adm-text-sm adm-font-medium adm-text-on-surface hover:adm-bg-surface-container adm-transition-colors">
                <svg className="adm-w-5 adm-h-5 adm-mr-2" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                </svg>
                Google
              </button>
              <button className="adm-w-full adm-inline-flex adm-justify-center adm-py-2.5 adm-px-4 adm-border adm-border-outline-variant adm-rounded-xl adm-bg-surface-container-lowest adm-text-sm adm-font-medium adm-text-on-surface hover:adm-bg-surface-container adm-transition-colors">
                <svg className="adm-w-5 adm-h-5 adm-mr-2" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" fill="#1877F2" />
                </svg>
                Facebook
              </button>
            </div>
          </div>

          <p className="adm-mt-8 adm-text-center adm-text-sm adm-text-on-surface-variant">
            Chưa có tài khoản?{' '}
            <Link to="/register" className="adm-font-semibold adm-text-primary hover:adm-text-primary-container adm-transition-colors">
              Đăng ký ngay
            </Link>
          </p>
        </div>
      </div>

      {/* Right section: Image/Banner */}
      <div className="adm-hidden lg:adm-block lg:adm-w-1/2 adm-relative">
        <div className="adm-absolute adm-inset-0 adm-bg-primary/20 adm-mix-blend-multiply"></div>
        <div className="adm-absolute adm-inset-0 adm-bg-gradient-to-t adm-from-primary/80 adm-to-transparent"></div>
        <img
          src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
          alt="Event background"
          className="adm-absolute adm-inset-0 adm-h-full adm-w-full adm-object-cover"
        />
        <div className="adm-absolute adm-bottom-0 adm-left-0 adm-right-0 adm-p-12 adm-text-on-primary">
          <h2 className="adm-text-4xl adm-font-bold adm-mb-4 adm-font-headline">Trải Nghiệm Sự Kiện Tuyệt Vời</h2>
          <p className="adm-text-lg adm-opacity-90 adm-font-body">Hàng ngàn sự kiện hấp dẫn đang chờ đón bạn. Tham gia ngay cùng cộng đồng!</p>
        </div>
      </div>
    </div>
  );
};

export default Login;
