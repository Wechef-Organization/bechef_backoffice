import { ReactNode } from "react";
import { Coupon, Product } from "./products";

export interface ProductsContextType {
    searchValue: string;
    setSearchValue: React.Dispatch<React.SetStateAction<string>>;
    profitFilter: string;
    setProfitFilter: React.Dispatch<React.SetStateAction<string>>;
    categoryFilter: string;
    setCategoryFilter: React.Dispatch<React.SetStateAction<string>>;
    statusFilter: string;
    setStatusFilter: React.Dispatch<React.SetStateAction<string>>;

    couponList: Coupon[];
    setCouponList: React.Dispatch<React.SetStateAction<Coupon[]>>;
    productsList: Product[];
    setProductsList: React.Dispatch<React.SetStateAction<Product[]>>;

    filterIsOpen: boolean;
    setFilterIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
    couponIsOpen: boolean;
    setCouponIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface ProductsProviderProps {
    children: ReactNode;
}
