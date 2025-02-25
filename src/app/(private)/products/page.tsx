"use client"

import Header from "@/components/Header";
import { useProducts } from "@/context/ProductsContext";
import { Product } from "@/interfaces/products";
import { getProducts } from "@/utils/products/products";
import { useEffect } from "react";
import FilterHeader from "./components/FilterHeader";
import CouponModal from "./components/modals/CouponModal";
import FilterModal from "./components/modals/FilterModal";
import ProductCard from "./components/ProductCard";


const Products = () => {
  const { searchValue, filterIsOpen, setFilterIsOpen, couponIsOpen, setCouponIsOpen, profitFilter, categoryFilter, statusFilter, productsList, setProductsList } = useProducts()

  useEffect(() => {
    const fetchCoupons = async () => {
      const response = await getProducts();
      setProductsList(response);
    };

    fetchCoupons();
  }, [])

  const filteredPatients = productsList.filter((item: Product) => {
    const matchesSearch = searchValue
      ? item.name.toLowerCase().includes(searchValue.toLowerCase())
      : true;


    const matchesProfit = profitFilter
      ? item.profit >= Number(profitFilter)
      : true;

    const matchesCategory = categoryFilter
      ? item.category.toLowerCase().includes(categoryFilter.toLowerCase())
      : true;

    const matchesStatus = statusFilter
      ? item.status === (statusFilter === "true")
      : true;

    return matchesProfit && matchesCategory && matchesStatus;
  });

  return (
    <div className="w-full px-[60px] pb-11 flex flex-col gap-11">
      <Header title="Produtos" name="Mateus barbosa" />
      <div className="flex flex-col gap-6 pt-32">
        <FilterHeader />
      </div>
      <div className="flex flex-col gap-4">
        {filteredPatients.length > 0 && filteredPatients.map((elm) => (
          <ProductCard key={elm.id} product={elm} />
        ))}
      </div>
      <FilterModal isOpen={filterIsOpen} setIsOpen={setFilterIsOpen} />
      <CouponModal isOpen={couponIsOpen} setIsOpen={setCouponIsOpen} />
    </div>
  )
}
export default Products