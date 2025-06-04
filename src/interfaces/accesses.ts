
interface permissionsAdm {
    permission_name: string
}
interface userpermissionadm {
    permissionsAdm: permissionsAdm
}

export interface User {
    id?: number,
    image: string,
    name: string,
    email: string,
    password: string,
    permissions: string,
    userpermissionsadm: userpermissionadm[]
} 