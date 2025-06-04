export interface User {
    id: number,
    profile_photo: string,
    name: string,
    cpf: string,
    createdAt: string,
    nickname: string,
    email: string,
    whatsapp: string,
    approved: boolean,
};

export interface Nutri {
    id: number,
    profile_photo: string,
    name: string,
    cpf: string,
    createdAt: string,
    email: string,
    whatsapp: string,
    status: boolean,
};