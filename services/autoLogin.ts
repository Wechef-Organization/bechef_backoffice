import { api } from './api';

export const autoLogin = async () => {
	try {
		const response = await api.post('/adm/auth/autologin');

		return response.data;
	} catch (error) {
		throw error;
	}
};
