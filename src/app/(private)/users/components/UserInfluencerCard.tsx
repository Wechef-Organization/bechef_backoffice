import { User } from "@/interfaces/users"
import Image from "next/image"

const UserInfluencerCard = ({ user }: { user: User }) => {
    return (
        <div className="w-full border border-border rounded-xl p-4">
            <div className="w-full h-20 flex items-center justify-between">
                <div className="w-[25%] flex items-center gap-4">
                    <Image alt="Usuário" src={user.image} width={44} height={44} className="rounded-xl" />
                    <div>
                        <p className="text-[14px] font-semibold">{user.name}</p>
                        <p className="text-[13px] font-semibold text-grey7 ">CPF: {user.document}</p>
                    </div>
                </div>
                <div className="min-w-[1px] min-h-[60%] bg-border mx-3" />
                <div className="w-[55%] flex items-center justify-between">
                    <div className="flex flex-col items-center">
                        <p className="text-[13px] font-medium text-center">{user.date}</p>
                        <span className="text-[10px] font-medium text-grey7 text-center">Data de cadastro</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <p className="text-[13px] font-medium text-center">@{user.nick_name}</p>
                        <span className="text-[10px] font-medium text-grey7 text-center">Nome usuário</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <p className="text-[13px] font-medium text-center">{user.email}</p>
                        <span className="text-[10px] font-medium text-grey7 text-center">E-mail</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <p className="text-[13px] font-medium text-center">{user.number}</p>
                        <span className="text-[10px] font-medium text-grey7 text-center">WhatsApp</span>
                    </div>

                </div>
                <div className="min-w-[1px] min-h-[60%] bg-border mx-3" />
                <div className="flex flex-col items-center gap-2">
                    {
                        user.status ?

                            <Image alt="Switch Ligado" src={"images/Products/switchOn.svg"} width={35} height={16} />
                            :
                            <Image alt="Switch Ligado" src={"images/Products/switchOff.svg"} width={35} height={16} />

                    }
                    <span className="text-[10px] font-medium text-grey7 text-center">Status</span>
                </div>
                <Image alt="Três pontos" src={"images/Global/treePoints.svg"} width={5} height={18} />
            </div>
        </div>
    )
}

export default UserInfluencerCard