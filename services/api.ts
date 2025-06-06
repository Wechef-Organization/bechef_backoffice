import axios from 'axios';
import secureLocalStorage from 'react-secure-storage';
import { sendToast } from '../src/utils/toasts';

export const api = axios.create({
    baseURL: 'http://localhost:8080',
    // baseURL: 'https://backoffice-api-tsjvi.ondigitalocean.app/',
    timeout: 400000,
});

api.interceptors.request.use(
    async (config) => {
        const adminToken = secureLocalStorage.getItem('@ADMINTOKEN');

        if (adminToken) config.headers['Authorization'] = `Bearer ${adminToken}`;

        return config;
    },
    (error) => {
        return Promise.reject(error);
    },
);

// Req para Refresh Token
let isRefreshing = false;
let refreshSubscribers: Array<(token: string) => void> = [];


const forceLogout = () => {
    secureLocalStorage.removeItem('@ADMINTOKEN');
    // if (router) {
    //     router.push('/');
    // } else {
    setTimeout(() => {
        window.location.href = '/';
    }, 100);
    // }
};

const onRefreshed = (newToken: string) => {
    refreshSubscribers.forEach((callback) => callback(newToken));
    refreshSubscribers = [];
};

const onFailedRefresh = () => {
    refreshSubscribers = [];
};

api.interceptors.request.use((config) => {
    const token = secureLocalStorage.getItem('@ADMINTOKEN');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

api.interceptors.response.use(
    (response) => response,
    async (error) => {

        const originalRequest = error.config;

        if (originalRequest.url === '/adm/auth/refresh') {
            forceLogout();
            return Promise.reject(error);
        }

        if (error.response?.status === 401 && !originalRequest._retry) {
            originalRequest._retry = true;

            const accessToken = secureLocalStorage.getItem('@ADMINTOKEN');

            if (!accessToken) {
                forceLogout();
                return Promise.reject(error);
            }

            if (!isRefreshing) {
                isRefreshing = true;

                try {
                    const refreshResponse = await api.post('/adm/auth/refresh', {
                        accessToken,
                    });

                    const newAccessToken = refreshResponse.data.accessToken;

                    secureLocalStorage.setItem('@ADMINTOKEN', newAccessToken);
                    isRefreshing = false;
                    onRefreshed(newAccessToken);
                } catch (error) {
                    isRefreshing = false;
                    onFailedRefresh();
                    sendToast('error', 'Seu usuário não tem permissão para acessar a plataforma.');
                    forceLogout();
                    return Promise.reject(error);
                }
            }

            return new Promise((resolve) => {
                refreshSubscribers.push((newAccessToken: string) => {
                    originalRequest.headers['Authorization'] = `Bearer ${newAccessToken}`;
                    resolve(api.request(originalRequest));
                });
            });
        }

        return Promise.reject(error);
    },
);
