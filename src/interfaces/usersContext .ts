import { ReactNode } from "react";
import { NutriApprovals, UserApprovals } from "./approvals";
import { Nutri, User } from "./users";

export interface UsersContextType {
    searchValue: string;
    setSearchValue: React.Dispatch<React.SetStateAction<string>>;

    usersList: User[];
    setUsersList: React.Dispatch<React.SetStateAction<User[]>>;
    influencersList: User[];
    setInfluencersList: React.Dispatch<React.SetStateAction<User[]>>;
    nutriList: Nutri[];
    setNutriList: React.Dispatch<React.SetStateAction<Nutri[]>>;
    usersApprovalsList: UserApprovals[];
    setUsersApprovalsList: React.Dispatch<React.SetStateAction<UserApprovals[]>>;
    influencersApprovalsList: UserApprovals[];
    setInfluencersApprovalsList: React.Dispatch<React.SetStateAction<UserApprovals[]>>;
    nutriApprovalsList: NutriApprovals[];
    setNutriApprovalsList: React.Dispatch<React.SetStateAction<NutriApprovals[]>>;

    switchSelected: string;
    setSwitchSelected: React.Dispatch<React.SetStateAction<string>>;
}

export interface UsersProviderProps {
    children: ReactNode;
}
