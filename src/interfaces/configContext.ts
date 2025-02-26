import { ReactNode } from "react";
import { Category } from "./config";

export interface ConfigContextType {
    switchSelected: string;
    setSwitchSelected: React.Dispatch<React.SetStateAction<string>>;

    categoriesList: Category[];
    setCategoriesList: React.Dispatch<React.SetStateAction<Category[]>>;
}

export interface ConfigProviderProps {
    children: ReactNode;
}
