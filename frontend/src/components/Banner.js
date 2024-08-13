import React, { useState, useEffect } from 'react';

function Banner({ bannerData }) {
  const [timeLeft, setTimeLeft] = useState(bannerData.timer);
  const [bannerHidden, setBannerHidden] = useState(false); 

  useEffect(() => {
    if (timeLeft <= 0) {
      setBannerHidden(true);
      return;
    }

    const intervalId = setInterval(() => {
      setTimeLeft(timeLeft - 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [timeLeft]);

  if (bannerHidden) {
    return (
      <div className="bg-gray-100 text-gray-700 p-4">
        <p>The banner has expired. Please refresh the page to see the banner again.</p>
      </div>
    );
  }

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
