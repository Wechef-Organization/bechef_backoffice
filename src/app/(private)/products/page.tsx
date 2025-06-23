"use client"

import Header from "@/components/Header";
import { useProducts } from "@/context/ProductsContext";
import { Product } from "@/interfaces/products";
import { getProducts } from "@/utils/products/products";
import { useEffect, useState } from "react";
import FilterHeader from "./components/FilterHeader";
import CouponModal from "./components/modals/CouponModal";
import FilterModal from "./components/modals/FilterModal";
import ProductCard from "./components/ProductCard";
import { LottieAnimations } from "@/components/LottieAnimations";
import { Pagination } from "@/components/Pagination";
import Image from "next/image";


const Products = () => {
  const { searchValue, filterIsOpen, setFilterIsOpen, couponIsOpen, setCouponIsOpen, profitFilter, categoryFilter, statusFilter, productsList, setProductsList } = useProducts()

  const [loading, setLoading] = useState(true);
  const [pageOrders, setPageOrders] = useState<number>(1);
  const [ordersCount, setOrdersCount] = useState(0);
  const [orderBy, setOrderBy] = useState('');
  const [sortBy, setSortBy] = useState<'ASC' | 'DESC'>();
  const totalPages = Math.ceil(ordersCount / 50);

  const fetchData = async ({
    profitFilter,
    categoryFilter,
    statusFilter,
  }: {
    profitFilter?: string;
    categoryFilter?: string;
    statusFilter?: string;
  } = {}) => {
    await getProducts({
      setLoading,
      setProductsList,
      search: searchValue,
      page: pageOrders,
      setOrdersCount,
      orderBy,
      sortBy,
      profitFilter,
      categoryFilter,
      statusFilter,
    });
  };

  useEffect(() => {
    fetchData();
  }, [])


  const existItemList = () => {
    if (productsList?.length > 0) {
      return true
    }
    return false
  }


  return (
    <div className="w-full px-[60px] pb-11 flex flex-col gap-9">
      <Header title="Produtos" name="Mateus barbosa" />
      <div className="pt-32">
        <FilterHeader fetchData={fetchData} />
      </div>
      {
        loading ? <div className="w-full h-[calc(100%-45px)] flex items-center justify-center">
          <LottieAnimations type={'loading'} />
        </div> :
          <>
            {existItemList() ?
              <>
                <div className="flex flex-col gap-4">
                  {productsList?.length > 0 && productsList?.map((elm) => (
                    <ProductCard key={elm.id} product={elm} />
                  ))}
                </div>
                <div className="w-full flex justify-center items-center py-3">
                  <Pagination currentPage={pageOrders} setCurrentPage={setPageOrders} totalPages={totalPages} />
                </div>
              </>
              :
              <div className="flex flex-col gap-4 items-center justify-center">
                <Image
                  src={"images/Global/emptyList.svg"}
                  alt="Lista vazia"
                  width={400}
                  height={420}
                />
                <p>Ainda não existem produtos cadastrados</p>
              </div>}
          </>
      }
      <FilterModal isOpen={filterIsOpen} setIsOpen={setFilterIsOpen} fetchData={fetchData} />
      <CouponModal isOpen={couponIsOpen} setIsOpen={setCouponIsOpen} />
    </div>
  )
}
export default Products