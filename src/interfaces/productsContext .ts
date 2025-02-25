import { ReactNode } from "react";
import { Coupon } from "./products";

export interface ProductsContextType {
    searchValue: string;
    setSearchValue: React.Dispatch<React.SetStateAction<string>>;
    dateFilter: [Date | null, Date | null];
    setDateFilter: React.Dispatch<React.SetStateAction<[Date | null, Date | null]>>;
    statusFilter: string;
    setStatusFilter: React.Dispatch<React.SetStateAction<string>>;
    couponList: Coupon[];
    setCouponList: React.Dispatch<React.SetStateAction<Coupon[]>>;

    filterIsOpen: boolean;
    setFilterIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
    couponIsOpen: boolean;
    setCouponIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface ProductsProviderProps {
    children: ReactNode;
}
