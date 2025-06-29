
"use client"

import Image from "next/image";
import { useForm } from "react-hook-form";

import InputSearch from "@/components/InputSearch";
import Select from "@/components/Select";
import { useProducts } from "@/context/ProductsContext";
import optionsSelect from "@/mock/Requests/optionsSelect";

const FilterHeader = ({ fetchData }: { fetchData: () => Promise<void> }) => {
    const {
        handleSubmit,
        control,
        formState: { errors },
    } = useForm({
        defaultValues: {
            select: "",
        }
    });

    const { searchValue, setSearchValue, setFilterIsOpen, setCouponIsOpen } = useProducts()

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
            <InputSearch width="w-80" heigth="h-11" value={searchValue} setValue={setSearchValue}
                onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                        fetchData();
                    }
                }}
            />
            <Image
                src={"/images/Global/filter.svg"}
                alt="Icone de filtro"
                width={45} height={45}
                onClick={() => { setFilterIsOpen(true) }}
                className="cursor-pointer"
            />
            <Image
                src={"/images/Global/coupon.svg"}
                alt="Icone de cupom"
                width={45} height={45}
                onClick={() => { setCouponIsOpen(true) }}
                className="cursor-pointer"
            />
        </div>
    )
}
export default FilterHeader