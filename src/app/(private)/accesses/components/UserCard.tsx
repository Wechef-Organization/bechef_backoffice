import { User } from "@/interfaces/accesses"
import Image from "next/image"

const UserCard = ({ user, setUserSelected, setActionsIsOpen }: { user: User, setUserSelected: React.Dispatch<React.SetStateAction<User | undefined>>, setActionsIsOpen: React.Dispatch<React.SetStateAction<boolean>> }) => {

    const namePermissions = () => {
        let names = ""
        user.userpermissionsadm.map((elm, i) => {
            if (i == 0) {
                names += `${elm.permissionsAdm.permission_name}`
            } else {

                names += `, ${elm.permissionsAdm.permission_name}`
            }
        })
        return names
    }

    return (
        <div className="w-full h-14 border border-border rounded-xl flex items-center p-5">
            <div className="w-[10%] flex items-center gap-10 pr-4">
                <Image alt="Caixa de seleção" src={"/images/Global/checkBoxOff.svg"} width={15} height={15} />
                {/* <Image alt="Usuário" src={user.image} width={35} height={35} className="rounded-full" /> */}
                <div className="w-11 h-11 rounded-full bg-gray-200 flex items-center justify-center">
                    <Image alt="Usuário" src={"images/Users/userDefault.svg"} width={24} height={24} className="rounded-xl" />
                </div>
            </div>
            <div className="w-[30%]">
                <p className="text-sm font-medium">{user.name}</p>
            </div>
            <div className="w-[30%]">
                <p className="text-sm font-medium">{user.email}</p>
            </div>
            <div className="w-[30%] flex items-center justify-between gap-4">
                <p className="text-sm font-medium">{namePermissions()}</p>
                <Image
                    className="cursor-pointer"
                    alt="Três pontos"
                    src={"/images/Global/treePoints.svg"}
                    width={4}
                    height={18}
                    onClick={() => {
                        setUserSelected(user)
                        setActionsIsOpen(true)
                    }}
                />
            </div>
        </div>
    )
}
export default UserCard