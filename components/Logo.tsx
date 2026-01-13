
import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'light' | 'dark';
  showText?: boolean;
}

const Logo: React.FC<LogoProps> = ({ className = "", variant = 'light', showText = true }) => {
  return (
    <div className={`flex items-center space-x-4 group ${className}`}>
      {/* The "Pill" design with a high-quality SVG Sample Logo */}
      <div className="bg-white px-3 py-2 rounded-2xl shadow-2xl flex items-center justify-center transform group-hover:scale-105 transition-all duration-500 border border-gray-100 min-w-[70px]">
        <svg viewBox="0 0 120 100" className="w-12 h-10 drop-shadow-sm" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Background Hills */}
          <path d="M10 80C30 70 50 85 70 75C90 65 110 80 110 80" stroke="#006837" strokeWidth="4" strokeLinecap="round" />
          
          {/* Sun */}
          <circle cx="95" cy="25" r="10" fill="#FFDE00">
            <animate attributeName="opacity" values="0.8;1;0.8" dur="3s" repeatCount="indefinite" />
          </circle>
          <g stroke="#FFDE00" strokeWidth="2" strokeLinecap="round">
            <line x1="95" y1="10" x2="95" y2="15" />
            <line x1="95" y1="35" x2="95" y2="40" />
            <line x1="80" y1="25" x2="85" y2="25" />
            <line x1="105" y1="25" x2="110" y2="25" />
          </g>

          {/* Tractor Silhouette */}
          <path d="M35 75V55H55L65 45H85V75H75M35 65H25V75H35" fill="#006837" />
          {/* Wheels */}
          <circle cx="45" cy="75" r="8" fill="#1a1a1a" />
          <circle cx="45" cy="75" r="3" fill="#666" />
          <circle cx="75" cy="75" r="10" fill="#1a1a1a" />
          <circle cx="75" cy="75" r="4" fill="#666" />
          
          {/* Exhaust pipe */}
          <rect x="60" y="35" width="4" height="15" fill="#006837" />
        </svg>
      </div>

      {showText && (
        <div className="flex flex-col">
          <div className="flex items-baseline space-x-1">
            <span className={`text-xl font-black tracking-tighter leading-none italic uppercase ${variant === 'light' ? 'text-white' : 'text-black'}`}>
              Filtros y <span className="text-[#006837]">Lubricantes</span>
            </span>
          </div>
          <span className={`text-[10px] font-black tracking-[0.35em] uppercase mt-1 ${variant === 'light' ? 'text-[#FFDE00]' : 'text-[#006837]'}`}>
            DEL LLANO <span className={variant === 'light' ? 'text-white' : 'text-black opacity-60'}>S.A.S</span>
          </span>
        </div>
      )}
    </div>
  );
};

export default Logo;
