import { ReactNode } from "react";

export interface GlobalContextType {
    exampleValue?: string;
}

export interface GlobalProviderProps {
    children: ReactNode;
}