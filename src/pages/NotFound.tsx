/* eslint-disable @typescript-eslint/no-unused-expressions */
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const NotFound: React.FC = () => {
  const navigate = useNavigate();
  useEffect(() => {
    drawVisor();
    animateCord();
  }, []);

  const drawVisor = () => {
    const canvas = document.getElementById('visor') as HTMLCanvasElement | null;
    if (canvas) {
      const ctx = canvas.getContext('2d');
      if (ctx) {
        ctx.beginPath();
        ctx.moveTo(5, 45);
        ctx.bezierCurveTo(15, 64, 45, 64, 55, 45);
        ctx.lineTo(55, 20);
        ctx.bezierCurveTo(55, 15, 50, 10, 45, 10);
        ctx.lineTo(15, 10);
        ctx.bezierCurveTo(15, 10, 5, 10, 5, 20);
        ctx.lineTo(5, 45);
        ctx.fillStyle = '#2f3640';
        ctx.strokeStyle = '#f5f6fa';
        ctx.fill();
        ctx.stroke();
      }
    }
  };

  const animateCord = () => {
    const cordCanvas = document.getElementById(
      'cord'
    ) as HTMLCanvasElement | null;
    if (!cordCanvas) return;

    const ctx = cordCanvas.getContext('2d');
    if (!ctx) return;

    let y1 = 160,
      y2 = 100,
      y3 = 100;
    let y1Forward = true,
      y2Forward = false,
      y3Forward = true;

    const animate = () => {
      requestAnimationFrame(animate);
      ctx.clearRect(0, 0, cordCanvas.width, cordCanvas.height);

      ctx.beginPath();
      ctx.moveTo(130, 170);
      ctx.bezierCurveTo(250, y1, 345, y2, 400, y3);
      ctx.strokeStyle = 'white';
      ctx.lineWidth = 8;
      ctx.stroke();

      y1Forward ? (y1 += 1) : (y1 -= 1);
      y2Forward ? (y2 += 1) : (y2 -= 1);
      y3Forward ? (y3 += 1) : (y3 -= 1);

      if (y1 === 100 || y1 === 300) y1Forward = !y1Forward;
      if (y2 === 100 || y2 === 310) y2Forward = !y2Forward;
      if (y3 === 100 || y3 === 317) y3Forward = !y3Forward;
    };

    animate();
  };

  return (
    <div className="h-screen w-screen bg-gradient-to-r from-[#2f3640] to-[#181b20] overflow-hidden relative">
      {/* Moon and craters */}
      <div className="absolute top-[-100px] left-[-300px] w-[900px] h-[900px] rounded-full bg-gradient-to-r from-[#d0d0d0] to-[#919191] shadow-lg">
        <div className="moon__crater moon__crater1 absolute top-[250px] left-[500px] w-[60px] h-[180px] bg-gradient-to-r from-[#7a7a7a] to-[#c3c3c3] rounded-full opacity-60"></div>
        <div className="moon__crater moon__crater2 absolute top-[650px] left-[340px] w-[40px] h-[80px] bg-gradient-to-r from-[#7a7a7a] to-[#c3c3c3] rounded-full opacity-60 transform rotate-55"></div>
        <div className="moon__crater moon__crater3 absolute top-[-20px] left-[40px] w-[65px] h-[120px] bg-gradient-to-r from-[#7a7a7a] to-[#c3c3c3] rounded-full opacity-60 transform rotate-[250deg]"></div>
      </div>

      {/* Stars */}
      <div className="star1 absolute top-[40%] left-[50%] w-4 h-4 rounded-full bg-[#f2911b] opacity-40 animate-pulse"></div>
      <div className="star2 absolute top-[60%] left-[90%] w-4 h-4 rounded-full bg-[#f2911b] opacity-40 animate-pulse delay-300"></div>
      <div className="star3 absolute top-[10%] left-[70%] w-4 h-4 rounded-full bg-[#f2911b] opacity-40 animate-pulse delay-200"></div>
      <div className="star4 absolute top-[90%] left-[40%] w-4 h-4 rounded-full bg-[#f2911b] opacity-40 animate-pulse delay-100"></div>
      <div className="star5 absolute top-[20%] left-[30%] w-4 h-4 rounded-full bg-[#f2911b] opacity-40 animate-pulse delay-500"></div>

      {/* Error text and buttons */}
      <div className="absolute top-[40%] left-[10%] text-gray-700 font-righteous text-center">
        <div className="text-9xl">404</div>
        <div className="text-xl opacity-50">
          It looks like this page does not exists
        </div>
        <div className="mt-8 space-x-4">
          <button
            onClick={() => navigate('/')}
            className="bg-[#f2911b] text-white px-8 py-2 rounded-full"
          >
            HOME
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
