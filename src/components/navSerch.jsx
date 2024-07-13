'use client';

import { useState } from 'react';

export default function NavSerch() {
  const [destination, setDestination] = useState('');
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [guests, setGuests] = useState('');

  return (
    <div className="flex items-center justify-between rounded-lg shadow-md px-4 py-3 bg-white">
      <div className="flex flex-col mx-2">
        <label className="text-gray-500 text-sm">สถานที่</label>
        <input
          type="text"
          placeholder="ค้นหาปลายทาง"
          className="outline-none text-black"
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
        />
      </div>

      <div className="flex flex-col mx-2">
        <label className="text-gray-500 text-sm">เช็คอิน</label>
        <input
          type="date"
          className="outline-none text-black"
          value={checkIn}
          onChange={(e) => setCheckIn(e.target.value)}
        />
      </div>

      <div className="flex flex-col mx-2">
        <label className="text-gray-500 text-sm">เช็คเอาท์</label>
        <input
          type="date"
          className="outline-none text-black"
          value={checkOut}
          onChange={(e) => setCheckOut(e.target.value)}
        />
      </div>

      <div className="flex flex-col mx-2">
        <label className="text-gray-500 text-sm">จำนวนผู้เข้าพัก</label>
        <input
          type="number"
          placeholder="เพิ่มผู้เข้าพัก"
          className="outline-none text-black"
          value={guests}
          onChange={(e) => setGuests(e.target.value)}
        />
      </div>

      <button className="bg-red-500 text-white p-3 rounded-full ml-2">
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M21 21l-6-6m2-5A7 7 0 1 1 5 5a7 7 0 0 1 12 5z"
          ></path>
        </svg>
      </button>
    </div>
  );
}
