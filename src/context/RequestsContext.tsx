import { createContext, useContext, useState } from "react";

import { RequestsContextType, RequestsProviderProps } from "@/interfaces/requestsContext";

export const RequestsContext = createContext<RequestsContextType | null>(null);

export const RequestsProvider = ({ children }: RequestsProviderProps) => {
  const [searchValue, setSearchValue] = useState<string>("");
  const [dateFilter, setDateFilter] = useState<[Date | null, Date | null]>([null, null]);
  const [statusFilter, setStatusFilter] = useState<string>("");

  const [filterIsOpen, setFilterIsOpen] = useState<boolean>(false);

  return (
    <RequestsContext.Provider
      value={{
        searchValue, setSearchValue,
        dateFilter, setDateFilter,
        statusFilter, setStatusFilter,

        filterIsOpen, setFilterIsOpen
      }}
    >
      {children}
    </RequestsContext.Provider>
  );
};

export const useRequests = () => {
  const context = useContext(RequestsContext);

  if (!context) {
    throw new Error("useRequests must be used within a RequestsProvider");
  }

  return context;
};
