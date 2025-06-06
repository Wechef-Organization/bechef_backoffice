import secureLocalStorage from 'react-secure-storage';
import { sendToast } from '../src/utils/toasts';
import { api } from '../services/api';
import { Dispatch, SetStateAction } from 'react';

interface Login {
	email?: string;
	password?: string;
	setIsLoading: Dispatch<SetStateAction<boolean>>
}

export const login = async ({ email, password, setIsLoading }: Login) => {
	try {
		setIsLoading(true);

		const response = await api.post('/adm/auth/login', {
			email,
			password,
		});

		secureLocalStorage.setItem('@ADMINTOKEN', response.data);
	} catch (error: any) {
		sendToast('error', error?.response?.data?.message || 'Erro ao fazer login.');
	} finally {
		setIsLoading(false);
	}
};
