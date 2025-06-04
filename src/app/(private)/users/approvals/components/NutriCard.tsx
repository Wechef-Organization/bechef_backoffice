"use client"

import { useForm } from "react-hook-form";

import Button from "@/components/Button";
import InputText from "@/components/InputText";
import { Nutri } from "@/interfaces/users";
import Image from "next/image";
import { approveUser, rejectUser } from "@/utils/users/approvals";

const NutriCard = ({ nutri, fetchData }: { nutri: Nutri, fetchData: () => Promise<void> }) => {
    const {
        control,
        formState: { errors },
    } = useForm({
        defaultValues: {
            name: nutri.name,
            cpf: nutri.cpf,
            whatsapp: nutri.whatsapp,
            email: nutri.email,
        }
    });

    const handleClick = async () => {
        await approveUser({ id: nutri.id, type: "nutri", fetchData })
    }

    const reject = async () => {
        await rejectUser({ id: nutri.id, type: "nutri", fetchData })
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
                        {/* <Image src={nutri.rg_photo} alt="Documento" width={252} height={99} /> */}
                    </div>
                </div>
                <div className="p-5 border border-dashed border-border rounded-xl flex flex-col gap-5">
                    <p className="text-[13px] font-medium">Upload segurando documento</p>
                    <div className="w-full flex items-center justify-center">
                        {/* <Image src={nutri.holding_rg_photo} alt="Usuário" width={81} height={108} /> */}
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

export default NutriCard