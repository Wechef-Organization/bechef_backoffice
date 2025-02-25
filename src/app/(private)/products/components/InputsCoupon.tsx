import InputText from "@/components/InputText"
import { InputsCouponProps } from "@/interfaces/InputsCoupon"
import Image from "next/image"
import { FC } from "react"

const InputsCoupon: FC<InputsCouponProps> = ({ index, control, removeCoupon }) => {
    return (
        <div className="w-full flex flex-col gap-3">
            <div className="flex items-end justify-between">
                <div className="w-8 h-8 flex items-center justify-center bg-primarycolor rounded-full mb-[9px]">
                    <p className="text-xl font-medium text-white">{index + 1}</p>
                </div>
                <InputText
                    width="w-[80%]"
                    label="Nome do cupom"
                    name={`coupons.${index}.name`}
                    control={control}
                    placeHolder="Insira o nome"
                    rules={{
                        required: "Campo obrigatório!",
                    }}
                />
                <Image
                    src={"images/Products/trash.svg"}
                    alt="Lixeira"
                    width={19}
                    height={24}
                    className="mb-3 cursor-pointer"
                    onClick={() => {
                        removeCoupon(index)
                    }}
                />
            </div>
            <div className="w-full pl-14">
                <InputText
                    width="w-[90%]"
                    label="Valor de desconto"
                    name={`coupons.${index}.value`}
                    control={control}
                    placeHolder="Insira o valor"
                    rules={{
                        required: "Campo obrigatório!",
                    }}
                />
            </div>
        </div>
    )
}
export default InputsCoupon