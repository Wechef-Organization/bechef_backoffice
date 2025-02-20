import React from "react";
import Image from "next/image";

import { MetricCardProps } from "@/interfaces/dashboard";

const MetricCard: React.FC<MetricCardProps> = ({
  title,
  value,
  percentage,
  icon
}) => {
  const isPositive = percentage >= 0;

  return (
    <li className="border border-border rounded-lg p-4 shadow-sm min-w-[222px] w-[232px]">
      <Image
        className="mb-4"
        src={`/images/Dashboard/metricIcon${icon}.svg`}
        alt="Sidebar logo"
        width={40}
        height={40}
      />
      <p className="text-gray-500 text-[15px] font-regularc">{title}</p>
      <div className="flex items-center justify-between mt-2">
        <span className="text-[21px] font-semiboldc text-gray-900">
          {value}
        </span>
        <span
          className={`px-2 py-1 text-[11px] font-semiboldc rounded-full ${isPositive
            ? "bg-green-100 text-green-600"
            : "bg-red-100 text-red-600"
            }`}
        >
          {isPositive ? `+${percentage}%` : `${percentage}%`}
        </span>
      </div>
    </li>
  );
};

export default MetricCard;