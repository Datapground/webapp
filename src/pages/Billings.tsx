import React from 'react';
import TopBar from '../components/TopBar';
import BillingIcon from '../components/Icons/BillingIcon';
import QuestionIcon from '../components/Icons/QuestionIcon';

const Billings: React.FC = () => {
  return (
    <div>
      <TopBar containerClassName="justify-between">
        <aside className="flex justify-start items-center gap-3">
          <BillingIcon className="stroke-[#414042] w-[26px] h-[23.59px]" />
          <h2 className="text-[26px] font-primary font-medium">Billing</h2>
        </aside>
      </TopBar>

      <div className="mt-4">
        <h2 className="lg:text-[22px] md:text-[20px] text-[16px] text-xs font-semibold text-[#414042] font-primary">
          Usage
        </h2>

        <div className="w-full flex items-center mt-4 mb-10">
          <div className="flex flex-grow flex-col justify-between space-y-2 p-2 border-r border-b ">
            <div className="flex items-center justify-between gap-2 md:text-sm text-xs text-gray-500 font-primary font-semibold">
              Free credits
              <QuestionIcon className="stroke-[#414042] lg:w-[16px] w-[14px] lg:h-[16px] h-[14px]" />
            </div>
            <div className="md:text-sm text-xs text-gray-500 font-primary font-semibold">
              <span className="lg:text-[18px] md:text-base text-sm font-semibold text-[#414042] font-primary">
                0
              </span>
              /15
            </div>
          </div>

          {/** payment */}
          <div className="flex flex-grow flex-col justify-between space-y-3 p-2 border-r border-b ">
            <div className="flex items-center justify-between gap-2 md:text-sm text-xs text-gray-500 font-primary font-semibold">
              <p className="flex items-center font-semibold font-primary">
                Additional Credits{' '}
                <span className="ml-1 rounded-md bg-gray-100 text-[#414042] font-medium">
                  {' '}
                  disabled
                </span>
              </p>
              <QuestionIcon className="stroke-[#414042] lg:w-[16px] w-[14px] lg:h-[16px] h-[14px]" />
            </div>
            <p className="lg:text-sm text-xs font-semibold text-gray-500 font-primary">
              <span className="text-default ">Add a payment method</span> to
              enable
            </p>
          </div>
          <div className="flex flex-grow flex-col justify-between space-y-2 p-2 border-r border-b ">
            <div className="flex items-center justify-between gap-2 md:text-sm text-xs text-gray-500 font-primary font-semibold">
              Credits reset
            </div>
            <div className="lg:text-[18px] md:text-base text-sm font-semibold text-gray-500 font-primary">
              12 / 12 / 2025
            </div>
          </div>
        </div>

        <h2 className="lg:text-[22px] md:text-[20px] text-[16px] text-xs font-semibold text-[#414042] font-primary mt-4">
          My Current Plan
        </h2>

        <div className="mt-4 border border-[#E5E5E5] rounded-[5px] ">
          <div className="flex flex-col justify-between gap-3 lg:p-6 md:p-4 p-3 ">
            <h3 className="lg:text-[18px] md:text-[16px] text-sm font-semibold text-[#414042] font-primary">
              Developer
            </h3>
            <div className="flex items-center justify-between gap-2 lg:text-sm text-xs text-gray-500 font-primary font-semibold">
              <p>Get Started</p>
              <p>15 monthly credits</p>
            </div>
            <div className="flex items-start justify-between gap-3 lg:text-sm text-xs text-gray-500 font-primary font-base">
              <p className="text-gray-500">
                Start full featured free tiered, then pay for only what you use
                as you grow up.
              </p>
              <p>FREE</p>
            </div>
            <div className="p-3 bg-gray-100 flex flex-col gap-2 lg:text-sm text-xs text-gray-500 font-primary font-semibold">
              <p className="text-[#414042]">Need more credits?</p>
              <p>
                <span className="text-default">Add a payment method</span> to
                enable extra credits, you will be charged automatically for
                additional credits used.
              </p>
            </div>
          </div>
          <div className="flex justify-between items-center lg:px-6 md:px-4 px-3 lg:py-3 md:py-2 py-1.5 border-t border-[#E5E5E5]">
            <div className="flex items-center gap-2 ">
              <button className="lg:px-4 px-3 lg:py-1.5 py-1 lg:text-md text-sm text-white bg-default font-semibold mx-auto rounded-[5px]">
                Change plan
              </button>
              <button className="lg:text-sm text-xs text-default font-bold">
                view all pricing plans
              </button>
            </div>
          </div>
        </div>

        <div className="mt-6 mb-8 border border-[#E5E5E5] rounded-[5px] ">
          <div className="lg:p-6 md:p-4 p-3 flex flex-col gap-3">
            <h3 className="lg:text-[18px] md:text-[16px] text-sm font-semibold text-[#414042] font-primary">
              Support{' '}
            </h3>
            <p className="flex items-center justify-between gap-2 lg:text-sm text-xs text-gray-500 font-primary font-base">
              Get help from our community support channel. If you need
              additional support, please upgrade your plan
            </p>
          </div>
          <div className="lg:px-6 md:px-4 px-3 lg:py-3 md:py-2 py-1.5 border-t border-[#E5E5E5] bg-gray-100">
            <button className="text-default font-primary font-semibold lg:text-md text-sm">
              link here
            </button>
          </div>
        </div>

        <h2 className="lg:text-[22px] md:text-[20px] text-[16px] text-xs font-semibold text-[#414042] font-primary">
          Payment Method
        </h2>

        <div className="mt-6 border border-[#E5E5E5] rounded-[5px]">
          <div className="lg:px-6 md:px-4 px-3 lg:py-3 md:py-2 py-1.5 lg:space-y-3 space-y-2">
            <p className="text-gray-500 font-primary font-semibold lg:text-sm text-xs">
              You haven&apos;t added payment method. Adding a credit card will
              allow you to purchase more credits.
            </p>
            <button className="lg:px-4 px-3 lg:py-1.5 py-1 lg:text-md text-sm text-white bg-default font-semibold rounded-[5px] ">
              Add payment method
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Billings;
