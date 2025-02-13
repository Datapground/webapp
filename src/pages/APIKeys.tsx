import React from 'react';
import TopBar from '../components/TopBar';
import APIKeyIcon from '../components/Icons/APIKeyIcon';

const APIKeys: React.FC = () => {
  return (
    <div>
      <TopBar containerClassName="justify-between">
        <aside className="flex justify-start items-center gap-3">
          <APIKeyIcon className="stroke-[#414042] w-[26px] h-[23.59px]" />
          <h2 className="text-[26px] font-primary font-medium">API Keys</h2>
        </aside>
      </TopBar>

      <div className="border border-[#E5E5E5] rounded-[5px] mt-4">
        <div className="lg:px-6 md:px-4 px-3 lg:py-6 md:py-2 py-1.5">
          <h3 className="lg:text-[18px] md:text-[16px] text-sm font-semibold text-[#414042] font-primary">
            API Key
          </h3>
          <p className="text-gray-500 font-primary font-semibold lg:text-sm text-xs mt-3">
            Use your API key to authenticate with Datapground API.
          </p>
          <div className="mt-6">
            <button className="lg:px-4 px-3 lg:py-1.5 py-1 lg:text-md text-sm text-white bg-default font-semibold rounded-[5px] flex items-center gap-2">
              <APIKeyIcon className="stroke-[#fff] w-[16px] h-[14px]" />
              Generate API Key
            </button>
            <p className="text-gray-500 font-primary lg:text-sm text-xs mt-2">
              Do not share your API key with anyone. If you believe your API key
              has been exposed to someone else, please refresh to generate new
              API.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default APIKeys;
