import { Dispatch, SetStateAction } from 'react';
import { api } from './api';
import { sendToast } from '@/utils/toasts';
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';

interface AutoLogin {
	email?: string;
	password?: string;
	setIsLoading: Dispatch<SetStateAction<boolean>>,
	router: AppRouterInstance

}

export const autoLogin = async ({ setIsLoading, router }: AutoLogin) => {
	try {
		setIsLoading(true);
		const response = await api.post('/adm/auth/autologin');

		const { permissions } = response.data;

		if (permissions.length < 1) {
			sendToast('error', 'Seu usuário não tem permissão para acessar a plataforma.');
		} else {
			router.push(`/${permissions[0].permission_name}`)
		}
	} catch (error: any) {
		sendToast('error', error?.response?.data?.message || 'Erro ao fazer autologin');
	} finally {
		setIsLoading(false);
	}
};
