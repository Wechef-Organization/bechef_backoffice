import { sendToast } from '../toasts';
import { api } from '../../../services/api';
import { User } from "@/interfaces/users"

interface GetAllClientsParams {
    setLoading?: (value: boolean) => void;
    setUsersList: (clients: User[]) => void;
    setOrdersCount: (count: number) => void;
    search?: string;
    page?: number;
    orderBy?: string;
    sortBy?: 'ASC' | 'DESC';
    approved?: string
    req_approved?: string
}

export const getAllUsers = async ({ setLoading, setUsersList, search, page, setOrdersCount, orderBy, sortBy, approved, req_approved }: GetAllClientsParams) => {
    try {
        setLoading && setLoading(true);

        const queryParams = new URLSearchParams();

        if (search) queryParams.append('search', search);
        if (page) queryParams.append('page', `${page}`);
        if (orderBy) queryParams.append('order', orderBy);
        if (sortBy) queryParams.append('sortBy', sortBy);
        if (approved) queryParams.append('approved', approved);
        if (req_approved) queryParams.append('req_approved', req_approved);

        const response = await api.get(`adm/users?${queryParams.toString()}`);

        setOrdersCount(response.data.total);
        setUsersList(response.data.users);

        return response.data;
    } catch (error: any) {
        sendToast('error', error?.response?.data?.message || 'Erro ao buscar usuários');
    } finally {
        setLoading && setLoading(false);
    }
};
