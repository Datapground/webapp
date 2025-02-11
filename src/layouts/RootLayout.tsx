import React from 'react';
import { Outlet } from 'react-router-dom';
import SideNavigation from '../components/SideNavigation';

const RootLayout = () => {
  return (
    <div className={`min-h-screen flex max-w-[1650px] mx-auto`}>
      <SideNavigation />
      <div className={`flex-1 px-6 pb-6`}>
        <Outlet />
      </div>
    </div>
  );
};

export default RootLayout;
