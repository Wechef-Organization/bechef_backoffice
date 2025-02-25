import { createContext, useContext, useState } from "react";

import { Coupon, Product } from "@/interfaces/products";
import { ProductsContextType, ProductsProviderProps } from "@/interfaces/productsContext ";

export const ProductsContext = createContext<ProductsContextType | null>(null);

export const ProductsProvider = ({ children }: ProductsProviderProps) => {
  const [searchValue, setSearchValue] = useState<string>("");
  const [profitFilter, setProfitFilter] = useState<string>("");
  const [categoryFilter, setCategoryFilter] = useState<string>("");
  const [statusFilter, setStatusFilter] = useState<string>("");

  const [couponList, setCouponList] = useState<Coupon[]>([])
  const [productsList, setProductsList] = useState<Product[]>([])

  const [filterIsOpen, setFilterIsOpen] = useState<boolean>(false);
  const [couponIsOpen, setCouponIsOpen] = useState<boolean>(false);

  return (
    <ProductsContext.Provider
      value={{
        searchValue, setSearchValue,
        profitFilter, setProfitFilter,
        categoryFilter, setCategoryFilter,
        statusFilter, setStatusFilter,

        couponList, setCouponList,
        productsList, setProductsList,

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
