import React from 'react';
import { Outlet } from 'react-router-dom';
import SideNavigation from '../components/SideNavigation';

const RootLayout = () => {
  return (
    <div className="flex h-screen">
      <SideNavigation />
      <div className="flex-1 p-6">
        <Outlet />
      </div>
    </div>
  );
};

export default RootLayout;
