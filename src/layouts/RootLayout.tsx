import React, { useEffect, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import SideNavigation from '../components/SideNavigation';

const RootLayout = () => {
  const location = useLocation();
  const [bgColor, setBgColor] = useState<string>('generator');
  useEffect(() => {
    const path = location.pathname;

    if (path === '/generator' || path === '/extender') {
      setBgColor('bg-extenderBackground');
    } else if (path === '/predictor') {
      setBgColor('bg-predictorBackground');
    } else {
      setBgColor('bg-white');
    }
  }, [location]);
  return (
    <div className={`min-h-screen flex ${bgColor} `}>
      <SideNavigation />
      <div className={`flex-1 p-6`}>
        <Outlet />
      </div>
    </div>
  );
};

export default RootLayout;
