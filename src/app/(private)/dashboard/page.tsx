"use client";

import Header from "@/components/Header";
import Influencers from "./components/Influencers";
import MetricCard from "./components/MetricCard";
import Ranking from "./components/Ranking";

import metricsBilling from "@/mock/Dashboard/metricsBilling";
import Clients from "./components/Clients";
import Recipies from "./components/Recipies";

const Dashboard = () => {
  return (
    <div className="w-full px-[60px] pb-11 flex flex-col gap-11">
      <Header title="Dashboard" name="Mateus barbosa" />
      <div className="flex flex-col gap-6 pt-32">
        <div className="flex flex-row items-center gap-6">
          {metricsBilling.map((elm, i) => (
            <MetricCard title={elm.title} value={elm.value} percentage={elm.percentage} icon={i} key={i} />
          ))}
        </div>
        <div className="w-full flex flex-row items-center justify-between ">
          <Ranking />
          <Influencers />
        </div>
        <div className="w-full flex flex-row items-center justify-between ">
          <Recipies />
          <Clients />
        </div>
      </div>
    </div>
  )
}
export default Dashboard