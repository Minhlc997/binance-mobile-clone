import React, { useState } from 'react';
import { FaFilter, FaCopy, FaLink } from 'react-icons/fa';  // Import các biểu tượng

const TransactionsPage = () => {
  const [transactions, setTransactions] = useState([
    {
      id: 1,
      time: '2024-02-05 01:03',
      type: 'Nạp',
      wallet: 'Ví giao ngay',
      amount: 211,
      recipient: 'TLCXU4...1k9eF',
      txid: '2831a4...07c1ce',
      status: 'Hoàn thành'
    },
    {
      id: 2,
      time: '2024-02-04 13:35',
      type: 'Nạp',
      wallet: 'Ví giao ngay',
      amount: 1148,
      recipient: 'TLCXU4...1k9eF',
      txid: '981467...6b2db1',
      status: 'Hoàn thành'
    },
    {
      id: 3,
      time: '2024-02-02 15:05',
      type: 'Nạp',
      wallet: 'Ví giao ngay',
      amount: 402.46,
      recipient: 'TLCXU4...1k9eF',
      txid: '...6b2db1',
      status: 'Hoàn thành'
    }
  ]);

  const [balance, setBalance] = useState(1000); // Số dư ban đầu
  const [orderType, setOrderType] = useState(''); // Loại lệnh (Mua/Bán)
  const [orderAmount, setOrderAmount] = useState(0); // Số lượng lệnh

  const handlePlaceOrder = () => {
    if (orderType === 'Mua') {
      setBalance(balance + orderAmount);
    } else if (orderType === 'Bán') {
      setBalance(balance - orderAmount);
    }
    setOrderType('');
    setOrderAmount(0);
  };

  return (
    <div className="min-h-screen bg-binanceBackground text-white font-regular p-4">
      <div className="max-w-3xl mx-auto">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold">Lịch sử giao dịch</h2>
          <FaFilter className="text-yellow-500" />  {/* Biểu tượng bên phải */}
        </div>
        <div className="mb-4">
          <div className="text-lg">Số dư hiện tại: {balance} USDT</div>
        </div>
        <div className="mb-4">
          <label className="block text-sm mb-2">Loại lệnh</label>
          <select
            value={orderType}
            onChange={(e) => setOrderType(e.target.value)}
            className="w-full p-2 bg-gray-800 rounded"
          >
            <option value="">Chọn loại lệnh</option>
            <option value="Mua">Mua</option>
            <option value="Bán">Bán</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-sm mb-2">Số lượng</label>
          <input
            type="number"
            value={orderAmount}
            onChange={(e) => setOrderAmount(Number(e.target.value))}
            className="w-full p-2 bg-gray-800 rounded"
          />
        </div>
        <button
          onClick={handlePlaceOrder}
          className="w-full py-2 bg-yellow-500 text-black rounded"
        >
          Đặt lệnh
        </button>
        <div className="flex space-x-4 mb-4 mt-4">
          <button className="px-3 py-1 bg-zinc-800 rounded text-yellow-500">Tiền mã hóa</button>
          <button className="px-3 py-1 bg-zinc-800 rounded">Chuyển khoản</button>
          <button className="px-3 py-1 bg-zinc-800 rounded">Phân phối</button>
          {/* <button className="px-3 py-1 bg-zinc-800 rounded">Chuyển đổi</button> */}
        </div>
        <div className="flex justify-start mb-4">
          <button className="px-3 py-1 bg-zinc-700 rounded text-white">Tiền chưa tới?</button>
        </div>
        <div className="space-y-4">
          {transactions.map((transaction) => (
            <div key={transaction.id} className="bg-binanceBackground p-4 rounded-lg shadow-">
              <div className="text-white mb-4">USDT</div>
              <div className="grid grid-cols-2 gap-2">
                <div className="text-sm text-gray-400">Thời gian</div>
                <div className="text-sm flex justify-end">{transaction.time}</div>
                <div className="text-sm text-gray-400">Số lượng</div>
                <div className="text-sm flex justify-end">{transaction.amount}</div>
                <div className="text-sm text-gray-400">Loại</div>
                <div className="text-sm flex justify-end">{transaction.type}</div>
                <div className="text-sm text-gray-400">Ví nhận</div>
                <div className="text-sm flex justify-end">{transaction.wallet}</div>
                <div className="text-sm text-gray-400">Người nhận</div>
                <div className="text-sm flex items-center flex justify-end">
                  {transaction.recipient} 
                  <FaLink className="ml-2 cursor-pointer" title="Sao chép liên kết" /><FaCopy className="ml-2 cursor-pointer" title="Sao chép" />
                </div>
                <div className="text-sm text-gray-400">TxID</div>
                <div className="text-sm flex items-center flex justify-end">
                  {transaction.txid} 
                  <FaLink className="ml-2 cursor-pointer" title="Sao chép liên kết" /><FaCopy className="ml-2 cursor-pointer" title="Sao chép" />
                </div>
                <div className="text-sm text-gray-400">Trạng thái</div>
                <div className="text-sm flex justify-end">{transaction.status}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TransactionsPage;