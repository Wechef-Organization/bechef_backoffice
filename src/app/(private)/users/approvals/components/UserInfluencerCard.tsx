"use client"

import { useForm } from "react-hook-form";

import Button from "@/components/Button";
import InputText from "@/components/InputText";
import { User } from "@/interfaces/users";
import Image from "next/image";
import { approveUser, rejectUser } from "@/utils/users/approvals";

const UserInfluencerCard = ({ user, fetchData }: { user: User, fetchData: () => Promise<void> }) => {
    const {
        control,
        formState: { errors },
    } = useForm({
        defaultValues: {
            name: user.name,
            cpf: user.cpf || "Não cadastrado",
            nickname: user.nickname,
            whatsapp: user.whatsapp || "Não cadastrado",
            email: user.email,
            rg_photo: user.rg_photo,
            holding_rg_photo: user.holding_rg_photo,
        }
    });

    const handleClick = async () => {
        await approveUser({ id: user.id, type: "user", fetchData })
    }

    const reject = async () => {
        await rejectUser({ id: user.id, type: "user", fetchData })
    }

    return (
        <div className="w-[31%] border border-border p-5 rounded-xl flex flex-col gap-5">
            <h2 className="text-lg font-medium">Dados pessoais</h2>
            <div className="flex flex-col gap-5">
                <InputText
                    label="Nome completo"
                    name="name"
                    control={control}
                    placeHolder=""
                    error={errors.name}
                    disabled
                />
                <InputText
                    label="CPF"
                    name="cpf"
                    control={control}
                    placeHolder=""
                    error={errors.cpf}
                    disabled
                />
                <InputText
                    label="Instagram"
                    name="nickname"
                    control={control}
                    placeHolder=""
                    error={errors.nickname}
                    disabled
                />
                <InputText
                    label="WhatsApp"
                    name="whatsapp"
                    control={control}
                    placeHolder=""
                    error={errors.whatsapp}
                    disabled
                />
                <InputText
                    label="E-mail"
                    name="email"
                    control={control}
                    placeHolder=""
                    error={errors.email}
                    disabled
                />
            </div>
            <div className="flex flex-col gap-5">
                <h2 className="text-lg font-medium">Documentos pessoais</h2>
                <div className="p-5 border border-dashed border-border rounded-xl flex flex-col gap-5">
                    <p className="text-[13px] font-medium">Upload do RG ou CNH aberto</p>
                    <div className="w-full flex items-center justify-center">
                        {/* <Image src={user.rg_photo} alt="Documento" width={252} height={99} /> */}
                    </div>
                </div>
                <div className="p-5 border border-dashed border-border rounded-xl flex flex-col gap-5">
                    <p className="text-[13px] font-medium">Upload segurando documento</p>
                    <div className="w-full flex items-center justify-center">
                        {/* <Image src={user.holding_rg_photo} alt="Usuário" width={81} height={108} /> */}
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-4">
                <Button
                    name="Aprovar"
                    className="w-full h-12"
                    textColor="text-white"
                    backgroundColor="bg-primarycolor"
                    type="submit"
                    onClick={handleClick}
                />
                <Button
                    name="Recusar"
                    className="w-full h-12"
                    textColor="text-red5"
                    backgroundColor="bg-red4"
                    type="submit"
                    onClick={reject}
                />
            </div>
        </div>
    )
}

export default UserInfluencerCard