import { createContext } from "react";

import { GlobalContextType, GlobalProviderProps } from "@/interfaces/globalContext";
import { DashboardProvider } from "./DashboardContext";

export const GlobalContext = createContext<GlobalContextType | null>(null);

function GlobalProvider({ children }: GlobalProviderProps) {
  return (
    <GlobalContext.Provider value={{}}>
      <DashboardProvider>{children}</DashboardProvider>
    </GlobalContext.Provider>
  );
}

export default GlobalProvider;
