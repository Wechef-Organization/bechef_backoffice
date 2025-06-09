import { api } from "../../services/api";
import { sendToast } from "./toasts";

export const getPermissionsSidebar = async (
) => {
    try {
        const { data } = await api.get(`adm/permissions/sidebar`);

        return data
    } catch (error: any) {
        sendToast('error', error?.response?.data?.message || 'Erro ao buscar categorias');
    }
}