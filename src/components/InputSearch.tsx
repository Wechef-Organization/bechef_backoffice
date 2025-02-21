import { InputSearchProps } from "@/interfaces/dashboard"
import Image from "next/image"
import React from "react"

const InputSearch: React.FC<InputSearchProps> = ({ value, setValue, width, heigth }) => {

    return (
        <div className={`${width || "w-56"} ${heigth || "h-9"} px-3 border border-border rounded-full flex flex-row items-center`}>
            <Image src={"/images/Dashboard/search.svg"} alt="Icone de pesquisa" width={15} height={15} />
            <input
                className={`text-sm font-regularc w-full rounded-xl bg-offWhite p-[10px] h-8 outline-transparent`}
                value={value}
                onChange={(e) => { setValue(e.target.value) }}
                placeholder="Pesquisar"
                type={"text"}
            />
        </div>
    )
}
export default InputSearch