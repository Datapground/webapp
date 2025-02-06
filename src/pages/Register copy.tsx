import React, { useState } from 'react';
import Lottie from 'lottie-react';
import logoAnimation from '../constants/LogoAnimation.json';
import { IoEyeOffOutline, IoEyeOutline } from 'react-icons/io5';
import { FcGoogle } from 'react-icons/fc';
import { FaGithub } from 'react-icons/fa';
import { useForm } from 'react-hook-form';

type LoginFormInputs = {
  email: string;
  password: string;
};

const Register: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);

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
      <div className="w-full h-full sm:bg-white bg-white/70 rounded-[40px] lg:grid grid-cols-5 relative">
        <div className="col-span-2 h-full rounded-[40px] flex flex-col justify-center items-start xl:p-16 p-8">
          <Lottie
            animationData={logoAnimation}
            loop={true}
            className="h-[60px] w-[250px]"
          />

          <form onSubmit={handleSubmit(onSubmit)} className="mt-4 w-full">
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
            <div className="mt-4">
              <label
                htmlFor="password"
                className="text-[#414042] font-primary text-sm text-start"
              >
                Password <span className="text-red-700">*</span>
              </label>
              <div className="relative">
                <input
                  {...register('password', {
                    required: 'Password is required',
                  })}
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  id="password"
                  className="rounded-[40px] border border-[#BCBEC0] block mt-1 w-full md:h-[50px] h-[40px] placeholder:text-[#BCBEC0] pl-4 pr-10 outline-[#9541A3]"
                  placeholder="Password"
                />
                <button
                  onClick={() => setShowPassword(!showPassword)}
                  type="button"
                  className="absolute right-4 top-4 text-[#BCBEC0] text-xl"
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
            <button
              type="button"
              className="font-primary text-sm my-3 text-[#5F5FC9]"
            >
              Forgot Password?
            </button>
            <button className="text-base font-primary text-white bg-btn rounded-[40px] block w-full md:h-[50px] h-[40px]">
              Sign in
            </button>
          </form>

          <p className="text-center text-sm text-[#414042]/50 font-primary my-6 self-center">
            or continue with
          </p>

          <div className="grid grid-cols-2 gap-4 w-full">
            <button className="md:h-[50px] h-[40px] w-full rounded-[40px] border border-[#BCBEC0] flex justify-center items-center text-xl">
              <FcGoogle />
            </button>
            <button className="md:h-[50px] h-[40px] w-full rounded-[40px] border border-[#BCBEC0] flex justify-center items-center text-xl">
              <FaGithub />
            </button>
          </div>

          <p className="text-center text-sm text-[#414042]/50 font-primary my-4 self-center mt-6">
            Don’t have an account yet?{' '}
            <span className="text-[#5F5FC9]">Register for free</span>
          </p>
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

export default Register;
