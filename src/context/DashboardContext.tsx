import { createContext, useContext, useState } from "react";

import { DashboardContextType, DashboardProviderProps, Influencer, RankingItem } from "@/interfaces/dashboardContext";

export const DashboardContext = createContext<DashboardContextType | null>(null);

export const DashboardProvider = ({ children }: DashboardProviderProps) => {
  const [ranckingList, setRanckingList] = useState<RankingItem[]>([]);
  const [influencersList, setInfluencersList] = useState<Influencer[]>([]);

  return (
    <DashboardContext.Provider
      value={{
        ranckingList, setRanckingList,
        influencersList, setInfluencersList,
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
