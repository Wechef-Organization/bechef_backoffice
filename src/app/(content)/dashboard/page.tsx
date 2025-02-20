"use client";

import metricsBilling from "@/mock/Dashboard/metricsBilling"
import MetricCard from "./components/MetricCard";
import Header from "@/components/Header";
import Ranking from "./components/Ranking";

const Dashboard = () => {
  return (
    <div className="px-[60px] py-11 flex flex-col gap-11">
      <Header title="Dashboard" name="Mateus barbosa" />
      <div className="flex flex-col gap-6">
        <div className="flex flex-row items-center gap-6">
          {metricsBilling.map((elm, i) => (
            <MetricCard title={elm.title} value={elm.value} percentage={elm.percentage} icon={i} key={i} />
          ))}
        </div>
        <div className="w-full flex flex-row items-center justify-between ">
          <Ranking />
          <Ranking />
        </div>
      </div>
    </div>
  )
}
export default Dashboard