
interface permissionsAdm {
    permission_name: string
}
interface userpermissionadm {
    permissionsAdm: permissionsAdm
}

export interface User {
    id?: number,
    profile_photo: string,
    name: string,
    email: string,
    password: string,
    permissions: string,
    userpermissionsadm: userpermissionadm[]
} 