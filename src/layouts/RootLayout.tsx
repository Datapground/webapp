import React from 'react';
import { Outlet } from 'react-router-dom';
import SideNavigation from '../components/SideNavigation';
import TopBar from '../components/TopBar';

const RootLayout = () => {
  return (
    <div className={`min-h-screen flex`}>
      <SideNavigation />
      <div className={`flex-1 p-6`}>
        <TopBar />
        <Outlet />
      </div>
    </div>
  );
};

export default RootLayout;
