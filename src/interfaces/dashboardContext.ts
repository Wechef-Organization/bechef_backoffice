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

export interface DashboardContextType {
    ranckingList: RankingItem[];
    setRanckingList: React.Dispatch<React.SetStateAction<RankingItem[]>>;
    influencersList: Influencer[];
    setInfluencersList: React.Dispatch<React.SetStateAction<Influencer[]>>;
}

export interface DashboardProviderProps {
    children: ReactNode;
}
