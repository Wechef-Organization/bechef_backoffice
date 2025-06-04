import { User } from "@/interfaces/accesses";
import usersList from "@/mock/Accesses/usersList";

import { sendToast } from '../toasts';
import { api } from '../../../services/api';

interface GetAllClientsParams {
    setLoading?: (value: boolean) => void;
    setUsersList: (clients: User[]) => void;
    setOrdersCount: (count: number) => void;
    search?: string;
    page?: number;
    orderBy?: string;
    sortBy?: 'ASC' | 'DESC';
}

export const getAllAdms = async ({ setLoading, setUsersList, search, page, setOrdersCount, orderBy, sortBy }: GetAllClientsParams) => {
    try {
        setLoading && setLoading(true);

        const queryParams = new URLSearchParams();

        if (search) queryParams.append('search', search);
        if (page) queryParams.append('page', `${page}`);
        if (orderBy) queryParams.append('order', orderBy);
        if (sortBy) queryParams.append('sortBy', sortBy);

        const response = await api.get(`adm/accesses?${queryParams.toString()}`);

        setOrdersCount(response.data.total);
        setUsersList(response.data.users);

        return response.data;
    } catch (error: any) {
        sendToast('error', error?.response?.data?.message || 'Erro ao buscar usuários');
    } finally {
        setLoading && setLoading(false);
    }
};


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

