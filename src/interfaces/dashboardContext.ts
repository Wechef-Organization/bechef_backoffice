import { ReactNode } from "react";

export interface Influencer {
    id: number;
    image: string;
    name: string;
}

export interface RankingItem extends Influencer {
    sales_number: number;
    total: number;
}

export interface RecipieItem {
    id: number;
    image: string;
    description: string;
    nick_name: string;
    user_image: string;
    sales_number: number;
    total: number;
}

export interface ClientItem {
    id: number;
    image: string;
    name: string;
    CPF: string;
    sales_number: number;
    total: number;
}

export interface DashboardContextType {
    ranckingList: RankingItem[];
    setRanckingList: React.Dispatch<React.SetStateAction<RankingItem[]>>;
    influencersList: Influencer[];
    setInfluencersList: React.Dispatch<React.SetStateAction<Influencer[]>>;
    recipiesList: RecipieItem[];
    setRecipiesList: React.Dispatch<React.SetStateAction<RecipieItem[]>>;
    clientsList: ClientItem[];
    setClientsList: React.Dispatch<React.SetStateAction<ClientItem[]>>;
}

export interface DashboardProviderProps {
    children: ReactNode;
}
