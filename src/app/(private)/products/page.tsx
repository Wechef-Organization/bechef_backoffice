"use client"

import Header from "@/components/Header";
import { useProducts } from "@/context/ProductsContext";
import { Product } from "@/interfaces/products";
import productsList from "@/mock/Products/productsList";
import FilterHeader from "./components/FilterHeader";
import CouponModal from "./components/modals/CouponModal";
import FilterModal from "./components/modals/FilterModal";


const Products = () => {
  const { searchValue, filterIsOpen, setFilterIsOpen, couponIsOpen, setCouponIsOpen, dateFilter, statusFilter } = useProducts()


  const filteredPatients = productsList.filter((item: Product) => {
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
    <div className="w-full px-[60px] pb-11 flex flex-col gap-11">
      <Header title="Produtos" name="Mateus barbosa" />
      <div className="flex flex-col gap-6 pt-32">
        <FilterHeader />
      </div>
      <FilterModal isOpen={filterIsOpen} setIsOpen={setFilterIsOpen} />
      <CouponModal isOpen={couponIsOpen} setIsOpen={setCouponIsOpen} />
    </div>
  )
}
export default Products