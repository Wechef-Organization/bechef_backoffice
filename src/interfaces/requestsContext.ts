import { ReactNode } from "react";

export interface RequestsContextType {
    searchValue: string;
    setSearchValue: React.Dispatch<React.SetStateAction<string>>;
    dateFilter: [Date | null, Date | null];
    setDateFilter: React.Dispatch<React.SetStateAction<[Date | null, Date | null]>>;
    statusFilter: string;
    setStatusFilter: React.Dispatch<React.SetStateAction<string>>;

    filterIsOpen: boolean;
    setFilterIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface RequestsProviderProps {
    children: ReactNode;
}
