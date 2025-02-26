import { createContext } from "react";

import { GlobalContextType, GlobalProviderProps } from "@/interfaces/globalContext";
import { AccessesProvider } from "./AccessesContext";
import { ConfigProvider } from "./ConfigContext";
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
              <AccessesProvider>
                <ConfigProvider>
                  {children}
                </ConfigProvider>
              </AccessesProvider>
            </UsersProvider>
          </ProductsProvider>
        </RequestsProvider>
      </DashboardProvider>
    </GlobalContext.Provider>
  );
}

export default GlobalProvider;
