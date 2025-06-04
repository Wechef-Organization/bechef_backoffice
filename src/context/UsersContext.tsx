import { createContext, useContext, useState } from "react";

import { NutriApprovals, UserApprovals } from "@/interfaces/approvals";
import { Nutri, User } from "@/interfaces/users";
import { UsersContextType, UsersProviderProps } from "@/interfaces/usersContext ";

export const UsersContext = createContext<UsersContextType | null>(null);

export const UsersProvider = ({ children }: UsersProviderProps) => {
  const [searchValue, setSearchValue] = useState<string>("");

  const [usersList, setUsersList] = useState<User[]>([])
  const [influencersList, setInfluencersList] = useState<User[]>([])
  const [nutriList, setNutriList] = useState<Nutri[]>([])

  const [usersApprovalsList, setUsersApprovalsList] = useState<User[]>([])
  const [influencersApprovalsList, setInfluencersApprovalsList] = useState<User[]>([])
  const [nutriApprovalsList, setNutriApprovalsList] = useState<Nutri[]>([])

  const [switchSelected, setSwitchSelected] = useState<string>("users")

  return (
    <UsersContext.Provider
      value={{
        searchValue, setSearchValue,

        usersList, setUsersList,
        influencersList, setInfluencersList,
        nutriList, setNutriList,
        usersApprovalsList, setUsersApprovalsList,
        influencersApprovalsList, setInfluencersApprovalsList,
        nutriApprovalsList, setNutriApprovalsList,

        switchSelected, setSwitchSelected,
      }}
    >
      {children}
    </UsersContext.Provider>
  );
};

export const useUsers = () => {
  const context = useContext(UsersContext);

  if (!context) {
    throw new Error("useUsers must be used within a UsersProvider");
  }

  return context;
};
