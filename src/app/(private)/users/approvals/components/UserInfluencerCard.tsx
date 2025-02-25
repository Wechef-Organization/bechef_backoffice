"use client"

import { useForm } from "react-hook-form";

import Button from "@/components/Button";
import InputText from "@/components/InputText";
import { UserApprovals } from "@/interfaces/approvals";
import Image from "next/image";

const UserInfluencerCard = ({ user }: { user: UserApprovals }) => {
    const {
        control,
        formState: { errors },
    } = useForm({
        defaultValues: {
            name: user.name,
            document: user.document,
            nick_name: user.nick_name,
            number: user.number,
            email: user.email,
        }
    });

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
                    name="document"
                    control={control}
                    placeHolder=""
                    error={errors.document}
                    disabled
                />
                <InputText
                    label="Instagram"
                    name="nick_name"
                    control={control}
                    placeHolder=""
                    error={errors.nick_name}
                    disabled
                />
                <InputText
                    label="WhatsApp"
                    name="number"
                    control={control}
                    placeHolder=""
                    error={errors.number}
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
                        <Image src={user.document_image} alt="Documento" width={252} height={99} />
                    </div>
                </div>
                <div className="p-5 border border-dashed border-border rounded-xl flex flex-col gap-5">
                    <p className="text-[13px] font-medium">Upload segurando documento</p>
                    <div className="w-full flex items-center justify-center">
                        <Image src={user.image} alt="Usuário" width={81} height={108} />
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
                />
                <Button
                    name="Recusar"
                    className="w-full h-12"
                    textColor="text-red5"
                    backgroundColor="bg-red4"
                    type="submit"
                />
            </div>
        </div>
    )
}

export default UserInfluencerCard