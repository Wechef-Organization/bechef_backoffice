import { sendToast } from "@/utils/toasts";
import { api } from "../../../../services/api";

interface ApproveUserProps {
    id: string,
    type: string,
    fetchData: () => Promise<void>
}

export const approveUser = async ({ id, type, fetchData }: ApproveUserProps) => {
    try {
        await api.patch(`adm/users/approve`, { id, type });
        await fetchData()
        sendToast('success', 'Usuário aprovado com sucesso! .');

    } catch (error: any) {
        sendToast('error', error?.response?.data?.message || 'Erro ao aprovadar usuário.');
    }
}

export const rejectUser = async ({ id, type, fetchData }: ApproveUserProps) => {
    try {
        await api.patch(`adm/users/reject`, { id, type });
        await fetchData()
        sendToast('success', 'Usuário recusado com sucesso!');

    } catch (error: any) {
        sendToast('error', error?.response?.data?.message || 'Erro ao recusar usuário.');
    }
}
