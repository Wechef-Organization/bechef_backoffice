import { User } from "@/interfaces/accesses";
import usersList from "@/mock/Accesses/usersList";

import { sendToast } from '../toasts';
import { api } from '../../../services/api';
import { Dispatch, SetStateAction } from "react";

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

export const getAllPermissions = async ({ setPermissionsOptions }: { setPermissionsOptions: Dispatch<SetStateAction<string[]>> }) => {
    try {
        const response = await api.get(`adm/accesses/permissions`);
        setPermissionsOptions(response.data)
    } catch (error: any) {
        sendToast('error', error?.response?.data?.message || 'Erro ao buscar permissões');
    }
};

export const deleteUser = ({ setUsers, list, id }: { setUsers: React.Dispatch<React.SetStateAction<User[]>>, list: User[], id: number | undefined }) => {
    setUsers(list.filter(user => user.id !== id));
}

export const editUser = ({ setUsers, list, id, updatedUser }: { setUsers: React.Dispatch<React.SetStateAction<User[]>>, list: User[], id: number | undefined, updatedUser: Partial<typeof list[0]> }) => {
    setUsers(list.map(user => (user.id === id ? { ...user, ...updatedUser } : user)));
};

export const addUser = async ({ fetchData, newUser }: { fetchData: () => Promise<void>, newUser: { profile_photo: string; name: string; email: string; password: string; permissions: string[] } }) => {
    try {
        await api.post(`adm`, newUser);
        sendToast('success', 'Usuário adicionado com sucesso');
        fetchData()
    } catch (error: any) {
        sendToast('error', error?.response?.data?.message || 'Erro ao adicionar usuário');
    }
};

