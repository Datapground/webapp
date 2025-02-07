import React, { useEffect, useState } from 'react';
import OtpInput from 'react-otp-input';

const VerifyOtp: React.FC = () => {
  const [timer, setTimer] = useState(10); // 2 minutes timer
  const [otp, setOtp] = useState('');

  // Countdown Timer
  useEffect(() => {
    if (timer > 0) {
      const interval = setInterval(() => setTimer((prev) => prev - 1), 1000);
      return () => clearInterval(interval);
    }
  }, [timer]);

  // Convert timer to MM:SS format
  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60)
      .toString()
      .padStart(2, '0');
    const seconds = (time % 60).toString().padStart(2, '0');
    return `${minutes}:${seconds}`;
  };

  return (
    <section className="bg-white min-h-screen relative overflow-hidden w-full h-full bg-login flex justify-center items-center xl:px-32 lg:px-16 lg:py-16 sm:p-8 p-4">
      <img
        src="/robot.png"
        alt="robot"
        className="object-contain absolute h-full top-0 -left-[15%] pointer-events-none opacity-90"
      />
      <div className="container w-full h-full bg-white rounded-[40px] lg:grid grid-cols-5 relative">
        <div className="col-span-2 h-full rounded-[40px] flex flex-col justify-center items-start xl:p-16 p-8">
          <img
            src="/logo.png"
            alt="Logo"
            className="h-[50px] w-[250px] object-contain"
          />
          <p className="text-sm font-primary text-[#414042] mt-8">
            Please type 4-digit OTP PIN code that you received in this email
          </p>
          <p className="text-sm font-primary font-semibold text-[#414042] mt-2">
            ahsanjilani62@gmail.com
          </p>

          <div className="mt-8 w-full 2xl:mb-[300px] md:mb-16">
            <OtpInput
              value={otp}
              onChange={setOtp}
              numInputs={4}
              renderSeparator={<span className="text-white">-</span>}
              containerStyle="flex justify-between w-full"
              renderInput={(props) => (
                <input
                  {...props}
                  className="rounded-[16px] border border-[#BCBEC0] h-[60px] w-full text-center text-xl font-semibold outline-[#9541A3]"
                  style={{ flex: 1, margin: '0 5px' }} // Ensures equal width & spacing
                />
              )}
            />
            <button className="text-base font-primary text-white bg-btn rounded-[40px] block w-full md:h-[50px] h-[40px] mt-4">
              Verify
            </button>

            {/* Timer & Resend Button */}
            <div className="flex w-full justify-center items-center flex-col mt-4">
              <p className="text-sm font-primary text-[#414042] mx-auto">
                {formatTime(timer)}
              </p>
              <p className="text-sm font-primary text-[#414042] mx-auto mt-3">
                Did not receive any code?
              </p>
              <button
                className={`text-[#5F5FC9] ${timer > 0 ? 'opacity-50 cursor-not-allowed' : 'hover:underline'}`}
                disabled={timer > 0}
                onClick={() => setTimer(10)} // Reset timer to 2 minutes on resend
              >
                Resend
              </button>
            </div>
          </div>
        </div>

        <div className="col-span-3 w-full h-full relative p-6 lg:block hidden">
          <img
            src="/robot.png"
            alt="robot"
            className="object-contain absolute h-full top-0 left-0 pointer-events-none opacity-90 z-50"
          />
          <div className="bg-login w-[80%] h-full rounded-[40px] shadow-sm relative xl:-right-60 -right-48" />
        </div>
      </div>
    </section>
  );
};

export default VerifyOtp;
