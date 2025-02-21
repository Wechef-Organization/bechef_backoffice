import { createContext, useContext, useState } from "react";

import { ClientItem, DashboardContextType, DashboardProviderProps, Influencer, RankingItem, RecipieItem } from "@/interfaces/dashboardContext";

export const DashboardContext = createContext<DashboardContextType | null>(null);

export const DashboardProvider = ({ children }: DashboardProviderProps) => {
  const [ranckingList, setRanckingList] = useState<RankingItem[]>([]);
  const [influencersList, setInfluencersList] = useState<Influencer[]>([]);
  const [recipiesList, setRecipiesList] = useState<RecipieItem[]>([]);
  const [clientsList, setClientsList] = useState<ClientItem[]>([]);

  return (
    <DashboardContext.Provider
      value={{
        ranckingList, setRanckingList,
        influencersList, setInfluencersList,
        recipiesList, setRecipiesList,
        clientsList, setClientsList
      }}
    >
      {children}
    </DashboardContext.Provider>
  );
};

export const useDashboard = () => {
  const context = useContext(DashboardContext);

  if (!context) {
    throw new Error("useDashboard must be used within a DashboardProvider");
  }

  return context;
};
