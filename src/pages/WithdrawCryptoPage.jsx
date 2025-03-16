// src/pages/WithdrawCryptoPage.jsx

import React from 'react';
import { FaCopy } from 'react-icons/fa';
import usdtIcon from "../assets/wallet/usdt_14446252.png"
import Header from '../components/Header/Header';

const WithdrawCryptoPage = () => {
  return (
    <div className="min-h-screen bg-binanceBackground text-white font-regular p-2">
        <Header/>
      <div className="max-w-3xl mx-auto">
      
        {/* Tiêu đề */}
        <h1 className="text-2xl font-semibold mb-6">Rút tiền điện tử</h1>

        {/* Loại tiền */}
        <div className="mb-6">
          <label className="block text-md font-regular mb-2">Loại tiền</label>
          <div className="flex items-center bg-gray-800 p-4 rounded">
            <img src={usdtIcon} alt="USDT" className="w-6 h-6 mr-2" />
            <span className="text-lg font-regular">USDT Tether US</span>
          </div>
        </div>

        {/* Điều hướng rút tiền */}
        <div className="mb-6">
          <div className="flex border-b-2 border-gray-800">
            <button className="text-lg px-4 py-2 border-b-2 border-yellow-500 focus:outline-none">Địa chỉ</button>
            <button className="text-lg px-4 py-2 border-b-2 border-transparent focus:outline-none">Người dùng Binance</button>
          </div>
        </div>

        {/* Nhập địa chỉ */}
        <div className="mb-6">
          <label className="block text-sm font-medium mb-2">Địa chỉ</label>
          <div className="relative">
            <input
              type="text"
              placeholder="Nhập địa chỉ"
              className="w-full p-4 bg-gray-800 rounded focus:outline-none"
            />
            <FaCopy className="absolute right-4 top-4 text-yellow-500 cursor-pointer" />
          </div>
        </div>

        {/* Chọn mạng lưới */}
        <div className="mb-6">
          <label className="block text-sm font-medium mb-2">Mạng lưới</label>
          <select className="w-full p-4 bg-gray-800 rounded focus:outline-none">
            <option value="">Chọn mạng lưới để rút tiền</option>
            {/* Thêm các tùy chọn khác ở đây */}
          </select>
        </div>

        {/* Thông tin số dư và phí */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="bg-gray-800 p-4 rounded">
            <div className="text-sm">Số dư USDT</div>
            <div className="text-lg">0 USDT</div>
          </div>
          <div className="bg-gray-800 p-4 rounded">
            <div className="text-sm">Số tiền rút tối thiểu</div>
            <div className="text-lg">0.29 USDT</div>
          </div>
          <div className="bg-gray-800 p-4 rounded">
            <div className="text-sm">Phí mạng lưới</div>
            <div className="text-lg">0.15 - 8 USDT</div>
          </div>
          <div className="bg-gray-800 p-4 rounded">
            <div className="text-sm">Giới hạn rút tiền hàng ngày</div>
            <div className="text-lg">8 000 000,0 USDT/8 000 000,0 USDT</div>
          </div>
        </div>

        {/* Lịch sử rút tiền gần đây */}
        <div className="mb-6">
          <h2 className="text-lg font-semibold mb-4">Lịch sử rút tiền gần đây</h2>
          <div className="bg-gray-800 p-4 rounded mb-4">
            <input type="checkbox" id="hideErrors" className="mr-2" />
            <label htmlFor="hideErrors" className="text-sm">Ẩn thông báo lỗi</label>
          </div>
          <div className="flex items-center bg-gray-800 p-4 rounded mb-4">
            <button className="bg-yellow-500 px-4 py-2 rounded text-black mr-4">Địa chỉ ví</button>
            <span className="text-lg">Người dùng Binance</span>
          </div>
          <div className="text-center">
            <img src="/path/to/no-records-icon.png" alt="Không có bản ghi" className="w-12 h-12 mx-auto mb-2" />
            <div className="text-sm">Không có bản ghi rút tiền gần đây.</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WithdrawCryptoPage;