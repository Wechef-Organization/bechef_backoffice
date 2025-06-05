
export interface permissionsAdm {
    id: string
    permission_name: string
}
export interface userpermissionadm {
    permissionsAdm: permissionsAdm
}

export interface User {
    id: string,
    profile_photo: string,
    name: string,
    email: string,
    password: string,
    permissions: string,
    userpermissionsadm: userpermissionadm[]
} 