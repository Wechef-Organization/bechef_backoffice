import { User } from "@/interfaces/accesses";
import usersList from "@/mock/Accesses/usersList";

export const getUsers = () => {
    return usersList
}

export const deleteUser = ({ setUsers, list, id }: { setUsers: React.Dispatch<React.SetStateAction<User[]>>, list: User[], id: number | undefined }) => {
    setUsers(list.filter(user => user.id !== id));
}

export const editUser = ({ setUsers, list, id, updatedUser }: { setUsers: React.Dispatch<React.SetStateAction<User[]>>, list: User[], id: number | undefined, updatedUser: Partial<typeof list[0]> }) => {
    setUsers(list.map(user => (user.id === id ? { ...user, ...updatedUser } : user)));
};

export const addUser = ({ setUsers, list, newUser }: { setUsers: React.Dispatch<React.SetStateAction<User[]>>, list: User[], newUser: Omit<typeof list[0], "id"> }) => {
    const newUserWithId = { ...newUser, id: list.length + 1 };
    setUsers([...list, newUserWithId]);
};

