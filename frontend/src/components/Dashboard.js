import React, { useState } from 'react';

function Dashboard({ refreshBanner }) {
  const [description, setDescription] = useState('');
  const [link, setLink] = useState('');
  const [timer, setTimer] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [updateMessage, setUpdateMessage] = useState(''); // State for the success message

  const updateBanner = async () => {
    const response = await fetch('https://tuftask-r9wd.onrender.com/api/banner', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ description, link, timer, isVisible }),
    });

    if (response.ok) {
      setUpdateMessage('Banner updated successfully. Please refresh the page to see the changes.');
      refreshBanner();
    } else {
      setUpdateMessage('Failed to update banner. Please try again.');
    }

    // Clear the message after a delay (optional)
    setTimeout(() => setUpdateMessage(''), 5000);
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

      {updateMessage && (
        <div className="mt-4 p-2 bg-green-200 text-green-700 rounded">
          {updateMessage}
        </div>
      )}
    </div>
  );
}

export default Dashboard;
