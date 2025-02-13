import React from 'react';
import { Outlet } from 'react-router-dom';
import SideNavigation from '../components/SideNavigation';
import Footer from '../components/Footer';

const RootLayout = () => {
  return (
    <div className={`min-h-screen lg:flex`}>
      <SideNavigation />
      <div className={`lg:flex-1 md:px-6 px-4 mb-4`}>
        <div className={`min-h-[calc(100vh-76px)]`}>
          <Outlet />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default RootLayout;
