import React from 'react';

type Props = object;

const Login: React.FC<Props> = () => {
  return (
    <section className="bg-white min-h-screen relative overflow-hidden">
      {/* robot */}
      <img
        src="/robot.png"
        alt="robot"
        className="object-contain absolute h-full -left-[15%] pointer-events-none"
      />
      {/* Content box */}
      <section className="absolute left-0 top-0 w-full h-full bg-login p-16">
        <div className="w-full h-full bg-white rounded-[40px] p-16">
          {/* Your content here */}
        </div>
      </section>
    </section>
  );
};

export default Login;
