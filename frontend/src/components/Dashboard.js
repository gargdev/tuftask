import React, { useState } from 'react';

function Dashboard({ refreshBanner }) {
  const [description, setDescription] = useState('');
  const [link, setLink] = useState('');
  const [timer, setTimer] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const updateBanner = async () => {
    await fetch('https://tuftask-five.vercel.app/api/banner', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ description, link, timer, isVisible }),
    });
    refreshBanner();
  };

  return (
    <div className="p-4 border rounded-md bg-gray-100">
      <div className="mb-4">
        <label className="block text-gray-700">Banner Description</label>
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="border p-2 w-full"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Banner Link</label>
        <input
          type="text"
          value={link}
          onChange={(e) => setLink(e.target.value)}
          className="border p-2 w-full"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Banner Timer (seconds)</label>
        <input
          type="number"
          value={timer}
          onChange={(e) => setTimer(e.target.value)}
          className="border p-2 w-full"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Banner Visibility</label>
        <input
          type="checkbox"
          checked={isVisible}
          onChange={(e) => setIsVisible(e.target.checked)}
        />
      </div>
      <button
        onClick={updateBanner}
        className="bg-blue-500 text-white p-2 rounded"
      >
        Update Banner
      </button>
    </div>
  );
}

export default Dashboard;
