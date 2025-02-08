import React from 'react';
import { Outlet } from 'react-router-dom';
import SideNavigation from '../components/SideNavigation';

const RootLayout = () => {
  return (
    <div className={`min-h-screen flex`}>
      <SideNavigation />
      <div className={`flex-1 p-6`}>
        <Outlet />
      </div>
    </div>
  );
};

export default RootLayout;
