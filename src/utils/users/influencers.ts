import { sendToast } from '../toasts';
import { api } from '../../../services/api';
import { User } from "@/interfaces/users"

interface GetAllClientsParams {
    setLoading?: (value: boolean) => void;
    setInfluencersList: (clients: User[]) => void;
    setOrdersCount: (count: number) => void;
    search?: string;
    page?: number;
    orderBy?: string;
    sortBy?: 'ASC' | 'DESC';
}

export const getAllInfluencers = async ({ setLoading, setInfluencersList, search, page, setOrdersCount, orderBy, sortBy }: GetAllClientsParams) => {
    try {
        setLoading && setLoading(true);

        const queryParams = new URLSearchParams();

        if (search) queryParams.append('search', search);
        if (page) queryParams.append('page', `${page}`);
        if (orderBy) queryParams.append('order', orderBy);
        if (sortBy) queryParams.append('sortBy', sortBy);

        const response = await api.get(`adm/users/influencers?${queryParams.toString()}`);

        setOrdersCount(response.data.total);
        setInfluencersList(response.data.users);

        return response.data;
    } catch (error: any) {
        sendToast('error', error?.response?.data?.message || 'Erro ao buscar clientes');
    } finally {
        setLoading && setLoading(false);
    }
};
