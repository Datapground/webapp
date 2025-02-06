import React from 'react';
import Lottie from 'lottie-react';
import logoAnimation from '../constants/LogoAnimation.json';
import { useForm } from 'react-hook-form';

type LoginFormInputs = {
  email: string;
};

const Recovery: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormInputs>();

  const onSubmit = async (data: LoginFormInputs) => {
    // Handle the login logic here
    console.log(data);
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
          <Lottie
            animationData={logoAnimation}
            loop={true}
            className="h-[60px] w-[250px]"
          />
          <p className="text-sm font-primary text-[#414042] mt-4">
            For Recover password please enter your recovery email address
          </p>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="mt-4 w-full 2xl:mb-[300px] md:mb-36"
          >
            <div>
              <label
                htmlFor="email"
                className="text-[#414042] font-primary text-sm text-start"
              >
                Email <span className="text-red-700">*</span>
              </label>
              <input
                {...register('email', {
                  required: 'Email is required',
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                    message: 'Invalid email address',
                  },
                })}
                type="email"
                name="email"
                id="email"
                className="rounded-[40px] border border-[#BCBEC0] block mt-1 w-full md:h-[50px] h-[40px] placeholder:text-[#BCBEC0] px-4 outline-[#9541A3]"
                placeholder="username@gmail.com"
              />
              {errors.email && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>
            <button className="text-base font-primary text-white bg-btn rounded-[40px] block w-full md:h-[50px] h-[40px] mt-4">
              Send OTP
            </button>
          </form>
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

export default Recovery;
