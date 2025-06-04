import { sendToast } from "@/utils/toasts";
import { api } from "../../../services/api";
import { Dispatch, SetStateAction } from "react";

interface ApproveUserProps {
    id: string,
    type: string,
    status: boolean,
    fetchData: () => Promise<void>
    setLoading: Dispatch<SetStateAction<boolean>>
}

export const updateStatus = async ({ id, type, status, fetchData, setLoading }: ApproveUserProps) => {
    try {
        setLoading(true)
        await api.patch(`adm/users/status`, { id, type, status });
        await fetchData()
        sendToast('success', 'Status atualizado com sucesso!');

    } catch (error: any) {
        sendToast('error', error?.response?.data?.message || 'Erro ao atualizar status.');
    } finally {
        setLoading(false)
    }
}
