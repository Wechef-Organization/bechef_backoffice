
import React from "react";

import { MetricCardsProps } from "@/interfaces/orders";

const MetricCard: React.FC<MetricCardsProps> = ({
  title,
  value,
  percentage,
}) => {
  const isPositive = percentage ? percentage >= 0 : undefined;

  return (
    <li className="border border-border rounded-lg p-4 shadow-sm w-[25%]">
      <p className="text-gray-500 text-[15px] font-regularc">{title}</p>
      <div className="flex items-center gap-2 mt-2">
        <span className="text-[21px] font-semiboldc text-gray-900">
          {value}
        </span>
        {percentage &&
          <span
            className={`px-2 py-1 text-[11px] font-semiboldc rounded-full ${isPositive
              ? "bg-green-100 text-green-600"
              : "bg-red-100 text-red-600"
              }`}
          >
            {isPositive ? `+${percentage}%` : `${percentage}%`}
          </span>}
      </div>
    </li>
  );
};

export default MetricCard;