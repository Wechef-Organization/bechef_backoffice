
"use client"

import Image from "next/image";
import { useState } from "react";
import { useForm } from "react-hook-form";

import InputSearch from "@/components/InputSearch";
import Select from "@/components/Select";
import optionsSelect from "@/mock/Requests/optionsSelect";

const FilterHeader = () => {
    const {
        handleSubmit,
        control,
        formState: { errors },
    } = useForm({
        defaultValues: {
            select: "",
        }
    });

    const [value, seValue] = useState("")

    const onSubmit = (data: any) => {
        console.log("Valor selecionado:", data.select);
    };

    return (
        <div className="flex items-center gap-3">
            <Select
                width="w-64"
                selectStyle="rounded-full"
                name="select"
                options={optionsSelect}
                control={control}
                handleSubmit={handleSubmit}
                onSubmit={onSubmit}
                error={errors}
                notMargin
                rules={{
                    required: "Campo obrigatório!",
                }}
            />
            <InputSearch width="w-80" heigth="h-11" value={value} setValue={seValue} />
            <Image src={"/images/Global/filter.svg"} alt="Icone de filtro" width={45} height={45} />
        </div>
    )
}
export default FilterHeader