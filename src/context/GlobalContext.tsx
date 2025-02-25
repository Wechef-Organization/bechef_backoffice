import { createContext } from "react";

import { GlobalContextType, GlobalProviderProps } from "@/interfaces/globalContext";
import { DashboardProvider } from "./DashboardContext";
import { ProductsProvider } from "./ProductsContext";
import { RequestsProvider } from "./RequestsContext";
import { UsersProvider } from "./UsersContext";

export const GlobalContext = createContext<GlobalContextType | null>(null);

function GlobalProvider({ children }: GlobalProviderProps) {
  return (
    <GlobalContext.Provider value={{}}>
      <DashboardProvider>
        <RequestsProvider>
          <ProductsProvider>
            <UsersProvider>
              {children}
            </UsersProvider>
          </ProductsProvider>
        </RequestsProvider>
      </DashboardProvider>
    </GlobalContext.Provider>
  );
}

export default GlobalProvider;
