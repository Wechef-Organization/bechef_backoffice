import { Dispatch, SetStateAction } from "react";
import { api } from "../../../services/api";
import { sendToast } from "../toasts";
import { Product } from "@/interfaces/products";

interface getProductsProps {
    setLoading?: (value: boolean) => void;
    setProductsList: Dispatch<SetStateAction<Product[]>>
    setOrdersCount: (count: number) => void;
    search?: string;
    page?: number;
    orderBy?: string;
    sortBy?: 'ASC' | 'DESC';
    profitFilter: string | undefined;
    categoryFilter: string | undefined;
    statusFilter: string | undefined;
}

interface getFilterOptionsProps {
    setCategoryOptions: React.Dispatch<React.SetStateAction<never[]>>;
    setProfitOptions: React.Dispatch<React.SetStateAction<never[]>>
}

export const getProducts = async ({ setLoading, setProductsList, search, page, setOrdersCount, orderBy, sortBy, profitFilter,
    categoryFilter,
    statusFilter, }: getProductsProps) => {
    try {

        setLoading && setLoading(true);

        const queryParams = new URLSearchParams();

        if (search) queryParams.append('search', search);
        if (page) queryParams.append('page', `${page}`);
        if (orderBy) queryParams.append('order', orderBy);
        if (sortBy) queryParams.append('sortBy', sortBy);
        if (profitFilter) queryParams.append('profitFilter', profitFilter);
        if (categoryFilter) queryParams.append('categoryFilter', categoryFilter);
        if (statusFilter) queryParams.append('statusFilter', statusFilter);

        const { data } = await api.get(`/adm/product?${queryParams.toString()}`)

        setOrdersCount(data.total);
        setProductsList(data.products)

    } catch (error: any) {
        sendToast('error', error?.response?.data?.message || 'Erro ao buscar produtos');
    }
    finally {
        setLoading && setLoading(false);
    }
}

export const getFilterOptions = async ({ setCategoryOptions, setProfitOptions }: getFilterOptionsProps) => {
    try {
        const { data } = await api.get("/adm/product/filter");
        setCategoryOptions(data.categories.map((c: any) => ({ value: c, name: c })));
        setProfitOptions(data.profits.map((p: any) => ({ value: p, name: p })));


    } catch (error: any) {
        sendToast('error', error?.response?.data?.message || 'Erro ao buscar produtos');
    }
}