import React, { useState, useEffect } from 'react';
import Banner from '../components/Banner';
import Dashboard from '../components/Dashboard';

function HomePage() {
  const [bannerData, setBannerData] = useState(null);  // Initialize as null
  
  const fetchBannerData = async () => {
    const response = await fetch('http://localhost:5000/api/banner');
    const data = await response.json();
    setBannerData(data);
  };

  useEffect(() => {
    fetchBannerData();
  }, []);

  return (
    <div>
      {bannerData && bannerData.isVisible && <Banner bannerData={bannerData} />}  
      <Dashboard refreshBanner={fetchBannerData} />
    </div>
  );
}

export default HomePage;
