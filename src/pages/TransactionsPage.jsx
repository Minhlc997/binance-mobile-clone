// src/pages/TransactionsPage.jsx

import React, { useState } from 'react';
import { FaFilter, FaCopy, FaLink } from 'react-icons/fa';  // Nhập các biểu tượng

const TransactionsPage = () => {
  const [transactions, setTransactions] = useState([
    {
      id: 1,
      time: '2024-02-05 01:03',
      type: 'Nạp',
      wallet: 'Ví Spot',
      amount: 211,
      recipient: 'TLCXU4...1k9eF',
      txid: '2831a4...07c1ce',
      status: 'Hoàn thành'
    },
    {
      id: 2,
      time: '2024-02-04 13:35',
      type: 'Nạp',
      wallet: 'Ví Spot',
      amount: 1148,
      recipient: 'TLCXU4...1k9eF',
      txid: '981467...6b2db1',
      status: 'Hoàn thành'
    },
    {
      id: 3,
      time: '2024-02-02 15:05',
      type: 'Nạp',
      wallet: 'Ví Spot',
      amount: 402.46,
      recipient: 'TLCXU4...1k9eF',
      txid: '...6b2db1',
      status: 'Hoàn thành'
    }
  ]);

  return (
    <div className="min-h-screen bg-binanceBackground text-white font-regular p-4">
      <div className="max-w-3xl mx-auto">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold">Lịch sử giao dịch</h2>
          <FaFilter className="text-yellow-500" />  {/* Biểu tượng lọc */}
        </div>
        <div className="flex space-x-4 mb-4">
          <button className="px-3 py-1 bg-zinc-800 rounded text-yellow-500">Tiền điện tử</button>
          <button className="px-3 py-1 bg-zinc-800 rounded">Chuyển</button>
          <button className="px-3 py-1 bg-zinc-800 rounded">Phân phối</button>
          {/* <button className="px-3 py-1 bg-zinc-800 rounded">Chuyển đổi</button> */}
        </div>
        <div className="flex justify-start mb-4">
          <button className="px-3 py-1 bg-zinc-700 rounded text-white">Tiền chưa về?</button>
        </div>
        <div className="space-y-4">
          {transactions.map((transaction) => (
            <div key={transaction.id} className="bg-binanceBackground p-4 rounded-lg shadow-">
              <div className="text-white mb-4">USDT</div>
              <div className="grid grid-cols-2 gap-2">
                <div className="text-sm text-gray-400">Thời gian</div>
                <div className="text-sm flex justify-end">{transaction.time}</div>
                <div className="text-sm text-gray-400">Số tiền</div>
                <div className="text-sm flex justify-end">{transaction.amount}</div>
                <div className="text-sm text-gray-400">Loại giao dịch</div>
                <div className="text-sm flex justify-end">{transaction.type}</div>
                <div className="text-sm text-gray-400">Ví nhận</div>
                <div className="text-sm flex justify-end">{transaction.wallet}</div>
                <div className="text-sm text-gray-400">Người nhận</div>
                <div className="text-sm flex items-center justify-end">
                  {transaction.recipient} 
                  <FaLink className="ml-2 cursor-pointer" title="Sao chép liên kết" /><FaCopy className="ml-2 cursor-pointer" title="Sao chép" />
                </div>
                <div className="text-sm text-gray-400">TxID</div>
                <div className="text-sm flex items-center justify-end">
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