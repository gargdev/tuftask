import React, { useState, useEffect } from 'react';
import Banner from '../components/Banner';
import Dashboard from '../components/Dashboard';
import Loader from '../components/Loader'; 

function HomePage() {
  const [bannerData, setBannerData] = useState(null);  
  
  const fetchBannerData = async () => {
    const response = await fetch('https://tuftask-r9wd.onrender.com/api/banner');
    const data = await response.json();
    setBannerData(data);
  };

  useEffect(() => {
    fetchBannerData();
  }, []);

  return (
    <div>
      {bannerData === null ? ( 
        <Loader />
      ) : (
        <>
          {bannerData.isVisible && <Banner bannerData={bannerData} />}  
          <Dashboard refreshBanner={fetchBannerData} />
        </>
      )}
    </div>
  );
}

export default HomePage;
