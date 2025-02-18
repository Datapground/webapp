import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="flex items-center justify-center gap-4 rounded-tl-[30px] rounded-tr-[30px] border-none px-4 py-4 shadow-footer">
      <Link
        to={'#'}
        className="text-gray-500 font-primary text-center lg:text-sm text-xs"
      >
        Copyright © 2024 - 2025 Datapground S.L.
      </Link>
      <Link
        to="#"
        className="text-gray-500 font-primary text-center lg:text-sm text-xs"
      >
        Terms
      </Link>
      <Link
        to="#"
        className="text-gray-500 font-primary text-center lg:text-sm text-xs"
      >
        Privacy
      </Link>
      <Link
        to="#"
        className="text-gray-500 font-primary text-center lg:text-sm text-xs"
      >
        Contact
      </Link>
      <Link
        to="#"
        className="text-gray-500 font-primary text-center lg:text-sm text-xs flex justify-center items-center"
      >
        API Status
        <div className="w-2 h-2 bg-green-500 rounded-full inline-block ml-2" />
      </Link>
      <Link
        to="#"
        className="text-gray-500 font-primary text-center lg:text-sm text-xs"
      >
        Consent Preferences
      </Link>
    </footer>
  );
};

export default Footer;
