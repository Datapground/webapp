import React, { useState } from 'react';
import { IoEyeOffOutline, IoEyeOutline } from 'react-icons/io5';
import { FcGoogle } from 'react-icons/fc';
import { FaGithub } from 'react-icons/fa';
import { useForm } from 'react-hook-form';
import { IoIosCheckmark } from 'react-icons/io';
import { Link } from 'react-router-dom';

type RegisterFormInputs = {
  name: string;
  surname: string;
  email: string;
  password: string;
  cPassword: string;
  agree: boolean;
};

const Register: React.FC = () => {
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

          <form onSubmit={handleSubmit(onSubmit)} className="mt-8 w-full">
            {/* Name */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-[#414042] text-sm">
                  Name <span className="text-red-700">*</span>
                </label>
                <input
                  {...register('name', {
                    required: 'Name is required',
                    minLength: {
                      value: 2,
                      message: 'Name must be at least 2 characters',
                    },
                  })}
                  type="text"
                  className="rounded-[40px] border border-[#BCBEC0] text-sm block bg-transparent mt-1 w-full md:h-[50px] h-[40px] px-4 outline-[#9541A3]"
                  placeholder="Enter your name"
                />
                {errors.name && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.name.message}
                  </p>
                )}
              </div>

              {/* Surname */}
              <div>
                <label className="text-[#414042] text-sm">
                  Surname <span className="text-red-700">*</span>
                </label>
                <input
                  {...register('surname', {
                    required: 'Surname is required',
                    minLength: {
                      value: 2,
                      message: 'Surname must be at least 2 characters',
                    },
                  })}
                  type="text"
                  className="rounded-[40px] border border-[#BCBEC0] text-sm block bg-transparent mt-1 w-full md:h-[50px] h-[40px] px-4 outline-[#9541A3]"
                  placeholder="Enter your surname"
                />
                {errors.surname && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.surname.message}
                  </p>
                )}
              </div>
            </div>

            {/* Email */}
            <div className="mt-4">
              <label className="text-[#414042] text-sm">
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
                className="rounded-[40px] border border-[#BCBEC0] text-sm block bg-transparent mt-1 w-full md:h-[50px] h-[40px] px-4 outline-[#9541A3]"
                placeholder="username@gmail.com"
              />
              {errors.email && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* Password */}
            <div className="mt-4">
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
            <div className="mt-4 flex items-center gap-2">
              <input
                {...register('agree', {
                  required: 'You must agree to the terms',
                })}
                type="checkbox"
                id="agree"
                className="hidden peer"
              />
              <label
                htmlFor="agree"
                className="w-5 h-5 flex items-center justify-center rounded-full border border-[#BCBEC0] cursor-pointer peer-checked:bg-[#5F5FC9] peer-checked:border-[#5F5FC9] transition-all"
              >
                <IoIosCheckmark className="text-white text-xl opacity-0 peer-checked:opacity-100 transition-opacity" />
              </label>
              <span className="text-sm text-[#414042]">
                I agree to the{' '}
                <a href="#" className="text-[#5F5FC9]">
                  terms and conditions
                </a>
              </span>
            </div>
            {errors.agree && (
              <p className="text-red-500 text-xs mt-1">
                {errors.agree.message}
              </p>
            )}

            {/* Submit Button */}
            <button className="text-base font-primary text-white bg-btn rounded-[40px] block w-full md:h-[50px] h-[40px] mt-4">
              Register
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
            Already have an account?{' '}
            <Link to={'/auth/login'} className="text-[#5F5FC9]">
              Login
            </Link>
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
