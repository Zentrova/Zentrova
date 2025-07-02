'use client';
import React from 'react';
import CountUp from 'react-countup';

const KpiCard = ({ icon, value, label, description }) => {
  return (
    <div className="group flex flex-col sm:flex-row items-start sm:items-center gap-4 p-4 sm:p-5 rounded-2xl shadow-md bg-background hover:shadow-xl transition-all duration-300 hover:scale-[1.02] w-full">
      
      {/* Icon */}
      <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center text-white group-hover:rotate-6 transition-transform duration-300 shadow-inner shrink-0">
        <div className="w-6 h-6 sm:w-7 sm:h-7">{icon}</div>
      </div>

      {/* Text */}
      <div className="flex flex-col justify-center">
        <div className="text-2xl sm:text-3xl font-bold text-foreground leading-tight">
          <CountUp end={value} duration={2} />+
        </div>
        <div className="text-sm sm:text-base font-medium text-muted-foreground">{label}</div>
        {description && (
          <div className="text-xs sm:text-sm text-muted-foreground/70">{description}</div>
        )}
      </div>
    </div>
  );
};

export default KpiCard;
