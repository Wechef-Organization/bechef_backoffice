import { ReactNode } from "react";
import { User } from "./accesses";

export interface AccessesContextType {
    searchValue: string;
    setSearchValue: React.Dispatch<React.SetStateAction<string>>;
    usersList: User[];
    setUsersList: React.Dispatch<React.SetStateAction<User[]>>;

    userSelected: User | undefined;
    setUserSelected: React.Dispatch<React.SetStateAction<User | undefined>>;

    actionsIsOpen: boolean;
    setActionsIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
    deleteOpen: boolean;
    setDeleteOpen: React.Dispatch<React.SetStateAction<boolean>>;
    userIsOpen: boolean;
    setUserIsOpen: React.Dispatch<React.SetStateAction<boolean>>;

    permissionsOptions: string[]
    setPermissionsOptions: React.Dispatch<React.SetStateAction<string[]>>;
}

export interface AccessesProviderProps {
    children: ReactNode;
}
