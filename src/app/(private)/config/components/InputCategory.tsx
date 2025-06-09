import InputText from "@/components/InputText"
import { InputCategoryProps } from "@/interfaces/InputCategory"
import Image from "next/image"
import { FC } from "react"
import ImageInput from "./ImageInput"

const InputCategory: FC<InputCategoryProps> = ({ index, control, removeCategory }) => {
    return (

        <div className="w-full flex items-end justify-between gap-2">
            <ImageInput
                name={`categories.${index}.icon`}
                control={control}
            />
            <InputText
                width="w-[80%]"
                label="Nome da categoria"
                name={`categories.${index}.title`}
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
                    removeCategory(index)
                }}
            />
        </div>

    )
}
export default InputCategory