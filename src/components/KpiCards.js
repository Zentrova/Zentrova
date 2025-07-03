'use client';
import React from 'react';
import CountUp from 'react-countup';

const KpiCard = ({ icon, value, label, description }) => {
  return (
    <div className="group flex flex-col lg:flex-row items-center lg:items-start gap-4 p-6 rounded-2xl shadow-md bg-[#121212] hover:shadow-xl transition-all duration-300 hover:scale-[1.03] w-full min-h-[10px]">
      {/* Icon */}
      <div className="w-14 h-14 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center text-white group-hover:rotate-6 transition-transform duration-300 shadow-inner shrink-0">
        <div className="w-7 h-7">
          {React.cloneElement(icon, { className: "w-full h-full" })}
        </div>
      </div>

      {/* Text */}
      <div className="flex flex-col text-center lg:text-left justify-center">
        <div className="text-2xl sm:text-3xl font-bold text-white leading-tight">
          <CountUp end={value} duration={2} separator="," />+
        </div>
        <div className="text-sm sm:text-base font-medium text-gray-400">{label}</div>
        {description && (
          <div className="text-xs sm:text-sm text-gray-500 mt-1">{description}</div>
        )}
      </div>
    </div>
  );
};

export default KpiCard;
