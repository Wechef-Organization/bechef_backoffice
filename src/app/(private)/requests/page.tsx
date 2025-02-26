"use client"

import Header from "@/components/Header";

import { useRequests } from "@/context/RequestsContext";
import { Order } from "@/interfaces/orders";
import metricsRequests from "@/mock/Requests/metricsRequests";
import odersList from "@/mock/Requests/odersList";
import FilterHeader from "./components/FilterHeader";
import MetricCard from "./components/MetricCard";
import OrderCard from "./components/OrderCard";
import FilterModal from "./components/modals/FilterModal";


const Requests = () => {

  const { searchValue, filterIsOpen, setFilterIsOpen, dateFilter, statusFilter } = useRequests()

  const filteredPatients = odersList.filter((item: Order) => {
    const matchesSearch = searchValue
      ? item.client.name.toLowerCase().includes(searchValue.toLowerCase())
      : true;

    const matchesDate = dateFilter && dateFilter.length === 2 && dateFilter[0] && dateFilter[1]
      ? new Date(item.date) >= dateFilter[0] && new Date(item.date) <= dateFilter[1]
      : true;

    const matchesStatus = statusFilter
      ? item.status.toLowerCase().includes(statusFilter.toLowerCase())
      : true;

    return matchesSearch && matchesDate && matchesStatus;
  });

  return (
    <div className="w-full px-[60px] pb-11 flex flex-col gap-9">
      <Header title="Pedidos" name="Mateus barbosa" />
      <div className="pt-32">
        <FilterHeader />
      </div>
      <div className="flex flex-row items-center gap-6">
        {metricsRequests.length > 0 && metricsRequests.map((elm, i) => (
          <MetricCard title={elm.title} value={elm.value} percentage={elm.percentage} key={i} />
        ))}
      </div>
      <div className="flex flex-col gap-4">
        {filteredPatients.length > 0 && filteredPatients.map((elm) => (
          <OrderCard order={elm} key={elm.id} />
        ))}
      </div>
      <FilterModal isOpen={filterIsOpen} setIsOpen={setFilterIsOpen} />
    </div>
  )
}
export default Requests