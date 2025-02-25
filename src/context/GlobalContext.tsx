import { createContext } from "react";

import { GlobalContextType, GlobalProviderProps } from "@/interfaces/globalContext";
import { DashboardProvider } from "./DashboardContext";
import { ProductsProvider } from "./ProductsContext";
import { RequestsProvider } from "./RequestsContext";

export const GlobalContext = createContext<GlobalContextType | null>(null);

function GlobalProvider({ children }: GlobalProviderProps) {
  return (
    <GlobalContext.Provider value={{}}>
      <DashboardProvider>
        <RequestsProvider>
          <ProductsProvider>
            {children}
          </ProductsProvider>
        </RequestsProvider>
      </DashboardProvider>
    </GlobalContext.Provider>
  );
}

export default GlobalProvider;
