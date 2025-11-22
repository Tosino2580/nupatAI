import React, { useState } from 'react';

const Login = () => {
  const [phoneOrEmail, setPhoneOrEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // Save a fake token to simulate login
    localStorage.setItem('userToken', 'fakeToken123');
    window.location.reload(); // Refresh to show MainPage
  };

  return (
    <div className="main-page-bg min-h-screen flex items-center justify-center font-montserrat relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-grid-pattern opacity-30"></div>
        <div className="absolute top-0 left-0 w-96 h-96 bg-purple-900/50 rounded-full blur-3xl animate-blob"></div>
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-pink-900/50 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-blue-900/50 rounded-full blur-3xl animate-blob animation-delay-4000"></div>
      </div>

      {/* Login Form */}
      <div className="relative z-10 w-full max-w-md p-8 bg-black/30 backdrop-blur-md rounded-2xl border border-gray-800">
        <h1 className="text-4xl font-bold text-white text-center mb-4">Welcome Back</h1>
        <p className="text-gray-400 text-center mb-8">Login with any details to access the app</p>

        <form onSubmit={handleLogin} className="flex flex-col gap-6">
          <input
            type="text"
            placeholder="Phone or Email"
            value={phoneOrEmail}
            onChange={(e) => setPhoneOrEmail(e.target.value)}
            className="w-full p-3 bg-gray-800/50 border border-gray-600/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50 backdrop-blur-sm"
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-3 bg-gray-800/50 border border-gray-600/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50 backdrop-blur-sm"
            required
          />
          <button
            type="submit"
            className="w-full px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl font-medium hover:from-purple-500 hover:to-pink-500 transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
