import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div>
      <footer className="flex items-center justify-between w-[70%] mx-auto mt-[60px] text-gray-500 font-primary text-center lg:text-sm text-xs font-light">
        <Link to={``} className="text-gray-500">
          Copyright © 2024 - 2025 Datapground S.L.
        </Link>
        <Link to="">Terms</Link>
        <Link to="">Privacy</Link>
        <Link to="">Contact</Link>
        <Link to="" className="flex items-center">
          API Status
          <div className="w-3 h-3 bg-green-500 rounded-full inline-block ml-2"></div>
        </Link>
        <Link to="consent">Consent Preferences</Link>
      </footer>
    </div>
  );
};

export default Footer;
