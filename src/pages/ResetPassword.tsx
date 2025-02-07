import React, { useState } from 'react';
import { IoEyeOffOutline, IoEyeOutline } from 'react-icons/io5';
import { useForm } from 'react-hook-form';

type RegisterFormInputs = {
  password: string;
  cPassword: string;
};

const ResetPassword: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showCPassword, setShowCPassword] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<RegisterFormInputs>();

  const onSubmit = async (data: RegisterFormInputs) => {
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
          <img
            src="/logo.png"
            alt="Logo"
            className="h-[50px] w-[250px] object-contain"
          />
          <p className="text-sm font-primary text-[#414042] mt-8">
            You have successfully enter correct OTP and now you able to change
            password, now type your new password and keep it safe
          </p>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="mt-4 w-full md:mb-16"
          >
            {/* Password */}
            <div>
              <label className="text-[#414042] text-sm">
                Password <span className="text-red-700">*</span>
              </label>
              <div className="relative">
                <input
                  {...register('password', {
                    required: 'Password is required',
                    minLength: {
                      value: 6,
                      message: 'Password must be at least 6 characters',
                    },
                    pattern: {
                      value: /^(?=.*[0-9])(?=.*[!@#$%^&*])/,
                      message: 'Must include a number and special character',
                    },
                  })}
                  type={showPassword ? 'text' : 'password'}
                  className="rounded-[40px] border border-[#BCBEC0] text-sm block bg-transparent mt-1 w-full md:h-[50px] h-[40px] px-4 pr-10 outline-[#9541A3]"
                  placeholder="Password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 md:top-4 top-2.5 text-[#BCBEC0] text-xl"
                >
                  {showPassword ? <IoEyeOffOutline /> : <IoEyeOutline />}
                </button>
              </div>
              {errors.password && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.password.message}
                </p>
              )}
            </div>

            {/* Confirm Password */}
            <div className="mt-4">
              <label className="text-[#414042] text-sm">
                Confirm Password <span className="text-red-700">*</span>
              </label>
              <div className="relative">
                <input
                  {...register('cPassword', {
                    required: 'Confirm Password is required',
                    validate: (value) =>
                      value === watch('password') || 'Passwords do not match',
                  })}
                  type={showCPassword ? 'text' : 'password'}
                  className="rounded-[40px] border border-[#BCBEC0] text-sm block bg-transparent mt-1 w-full md:h-[50px] h-[40px] px-4 pr-10 outline-[#9541A3]"
                  placeholder="Confirm Password"
                />
                <button
                  type="button"
                  onClick={() => setShowCPassword(!showCPassword)}
                  className="absolute right-4 md:top-4 top-2.5 text-[#BCBEC0] text-xl"
                >
                  {showCPassword ? <IoEyeOffOutline /> : <IoEyeOutline />}
                </button>
              </div>
              {errors.cPassword && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.cPassword.message}
                </p>
              )}
            </div>

            {/* Submit Button */}
            <button className="text-base font-primary text-white bg-btn rounded-[40px] block w-full md:h-[50px] h-[40px] mt-4">
              Change Password
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

export default ResetPassword;
