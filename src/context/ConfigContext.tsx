import { createContext, useContext, useState } from "react";

import { Category } from "@/interfaces/config";
import { ConfigContextType, ConfigProviderProps } from "@/interfaces/configContext";

export const ConfigContext = createContext<ConfigContextType | null>(null);

export const ConfigProvider = ({ children }: ConfigProviderProps) => {
  const [switchSelected, setSwitchSelected] = useState<string>("categorys");

  const [categoriesList, setCategoriesList] = useState<Category[]>([]);


  return (
    <ConfigContext.Provider
      value={{
        switchSelected, setSwitchSelected,

        categoriesList, setCategoriesList
      }}
    >
      {children}
    </ConfigContext.Provider>
  );
};

export const useConfig = () => {
  const context = useContext(ConfigContext);

  if (!context) {
    throw new Error("useConfig must be used within a ConfigProvider");
  }

  return context;
};
