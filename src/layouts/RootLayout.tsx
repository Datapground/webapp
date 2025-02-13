import React from 'react';
import { Outlet } from 'react-router-dom';
import SideNavigation from '../components/SideNavigation';

const RootLayout = () => {
  return (
    <div className={`min-h-screen lg:flex max-w-[1600px] mx-auto`}>
      <SideNavigation />
      <div className={`lg:flex-1 md:px-6 px-4 mb-4`}>
        <Outlet />
      </div>
    </div>
  );
};

export default RootLayout;
