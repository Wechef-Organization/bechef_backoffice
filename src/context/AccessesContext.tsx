import { createContext, useContext, useState } from "react";

import { User } from "@/interfaces/accesses";
import { AccessesContextType, AccessesProviderProps } from "@/interfaces/accessesContext ";

export const AccessesContext = createContext<AccessesContextType | null>(null);

export const AccessesProvider = ({ children }: AccessesProviderProps) => {
  const [searchValue, setSearchValue] = useState<string>("");
  const [usersList, setUsersList] = useState<User[]>([]);

  const [userSelected, setUserSelected] = useState<User | undefined>()

  const [actionsIsOpen, setActionsIsOpen] = useState<boolean>(false);
  const [deleteOpen, setDeleteOpen] = useState<boolean>(false);
  const [userIsOpen, setUserIsOpen] = useState<boolean>(false);

  const [permissionsOptions, setPermissionsOptions] = useState<string[]>([]);

  return (
    <AccessesContext.Provider
      value={{
        searchValue, setSearchValue,
        usersList, setUsersList,

        userSelected, setUserSelected,

        actionsIsOpen, setActionsIsOpen,
        deleteOpen, setDeleteOpen,
        userIsOpen, setUserIsOpen,

        permissionsOptions, setPermissionsOptions
      }}
    >
      {children}
    </AccessesContext.Provider>
  );
};

export const useAccesses = () => {
  const context = useContext(AccessesContext);

  if (!context) {
    throw new Error("useAccesses must be used within a AccessesProvider");
  }

  return context;
};
