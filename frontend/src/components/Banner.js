import React, { useState, useEffect } from 'react';

function Banner({ bannerData }) {
  const [timeLeft, setTimeLeft] = useState(bannerData.timer);

  useEffect(() => {
    if (timeLeft <= 0) return;

    const intervalId = setInterval(() => {
      setTimeLeft(timeLeft - 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [timeLeft]);

  if (timeLeft <= 0) return null;

  return (
    <div className="bg-blue-500 text-white p-4">
      <p>{bannerData.description}</p>
      {bannerData.link && <a href={bannerData.link} className="text-yellow-300 underline">Learn More</a>}
      <p className="mt-2">Time left: {timeLeft}s</p>
    </div>
  );
}

export default Banner;
