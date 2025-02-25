import { createContext, useContext, useState } from "react";

import { Coupon } from "@/interfaces/products";
import { ProductsContextType, ProductsProviderProps } from "@/interfaces/productsContext ";

export const ProductsContext = createContext<ProductsContextType | null>(null);

export const ProductsProvider = ({ children }: ProductsProviderProps) => {
  const [searchValue, setSearchValue] = useState<string>("");
  const [dateFilter, setDateFilter] = useState<[Date | null, Date | null]>([null, null]);
  const [statusFilter, setStatusFilter] = useState<string>("");
  const [couponList, setCouponList] = useState<Coupon[]>([])

  const [filterIsOpen, setFilterIsOpen] = useState<boolean>(false);
  const [couponIsOpen, setCouponIsOpen] = useState<boolean>(false);

  return (
    <ProductsContext.Provider
      value={{
        searchValue, setSearchValue,
        dateFilter, setDateFilter,
        statusFilter, setStatusFilter,
        couponList, setCouponList,

        filterIsOpen, setFilterIsOpen,
        couponIsOpen, setCouponIsOpen
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

export const useProducts = () => {
  const context = useContext(ProductsContext);

  if (!context) {
    throw new Error("useProducts must be used within a ProductsProvider");
  }

  return context;
};
