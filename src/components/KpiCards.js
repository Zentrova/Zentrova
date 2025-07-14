'use client';
import React from 'react';
import CountUp from 'react-countup';

const KpiCard = ({  value, label, description }) => {

  return (
    <div className="bg-background2 dark:bg-transparent text-center border border-border p-6 rounded-xl shadow-sm hover:shadow-md transition">
      <div className="text-3xl font-bold text-primary">
        <CountUp end={value} duration={2} separator="," />+
      </div>
      <div className="text-sm sm:text-base font-medium text-gray-400">{label}</div>
      {description && (
        <div className="text-xs sm:text-sm text-gray-500 mt-1">{description}</div>
      )}
    </div>


  );
};

export default KpiCard;
