"use client"

import { User } from "@/interfaces/users"
import formatDate from "@/utils/formatDate"
import { updateStatus } from "@/utils/users/updateStatus"
import Image from "next/image"
import { useState } from "react"

const UserInfluencerCard = ({ user, fetchData }: { user: User, fetchData: () => Promise<void> }) => {

    const [loading, setLoading] = useState(false);

    const update = async (status: boolean) => {
        if (loading) return;
        await updateStatus({ id: user.id, type: "user", status, fetchData, setLoading })
    }

    return (
        <div className="w-full border border-border rounded-xl p-4">
            <div className="w-full h-20 flex items-center justify-between">
                <div className="w-[25%] flex items-center gap-4">
                    {/* {user?.profile_photo ?
                                        <Image alt="Usuário" src={user?.profile_photo} width={44} height={44} className="rounded-xl" />
                                        :
                                    } */}
                    <div className="w-11 h-11 rounded-xl bg-gray-200 flex items-center justify-center">
                        <Image alt="Usuário" src={"images/Users/userDefault.svg"} width={24} height={24} className="rounded-xl" />
                    </div>
                    <div>
                        <p className="text-[14px] font-semibold">{user.name}</p>
                        <p className="text-[13px] font-semibold text-grey7 ">CPF: {user.cpf ? user.cpf : "Não cadastrado"}</p>
                    </div>
                </div>
                <div className="min-w-[1px] min-h-[60%] bg-border mx-3" />
                <div className="w-[55%] flex items-center justify-between">
                    <div className="flex flex-col items-center">
                        <p className="text-[13px] font-medium text-center">{formatDate(user?.createdAt)}</p>
                        <span className="text-[10px] font-medium text-grey7 text-center">Data de cadastro</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <p className="text-[13px] font-medium text-center">@{user.nickname}</p>
                        <span className="text-[10px] font-medium text-grey7 text-center">Nome usuário</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <p className="text-[13px] font-medium text-center">{user.email}</p>
                        <span className="text-[10px] font-medium text-grey7 text-center">E-mail</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <p className="text-[13px] font-medium text-center">{user.whatsapp ? user.whatsapp : "Não cadastrado"}</p>
                        <span className="text-[10px] font-medium text-grey7 text-center">WhatsApp</span>
                    </div>

                </div>
                <div className="min-w-[1px] min-h-[60%] bg-border mx-3" />
                <div className="flex flex-col items-center gap-2 cursor-pointer">
                    {
                        user.status ?

                            <Image alt="Switch Ligado" src={"images/Products/switchOn.svg"} width={35} height={16} onClick={() => { update(false) }} />
                            :
                            <Image alt="Switch Ligado" src={"images/Products/switchOff.svg"} width={35} height={16} onClick={() => { update(true) }} />

                    }
                    <span className="text-[10px] font-medium text-grey7 text-center">Status</span>
                </div>
                <Image alt="Três pontos" src={"images/Global/treePoints.svg"} width={5} height={18} />
            </div>
        </div>
    )
}

export default UserInfluencerCard