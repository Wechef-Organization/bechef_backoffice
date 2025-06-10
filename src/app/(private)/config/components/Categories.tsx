"use client"

import { useConfig } from "@/context/ConfigContext";
import { Category } from "@/interfaces/config";
import { getCategories, saveChanges } from "@/utils/config/categories";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useFieldArray, useForm } from "react-hook-form";
import InputCategory from "./InputCategory";
import { LottieAnimations } from "@/components/LottieAnimations";
import Button from "@/components/Button";

const Categories = () => {
    const { setCategoriesList } = useConfig()
    const [loading, setLoading] = useState(false)

    const {
        control,
        handleSubmit,
        reset
    } = useForm<{ categories: Category[] }>({
        defaultValues: {
            categories: [{ id: "0", title: "", icon: "" }],
        },
    });

    const { fields, append, remove } = useFieldArray({
        control,
        name: "categories",
    });

    const onSubmit = (data: { categories: Category[] }) => {
        setCategoriesList(data.categories);

        saveChanges({ setLoading, categoriesList: data.categories, setCategoriesList, reset })
    }

    const addCategory = () => {
        append({
            id: "",
            title: "",
            icon: "",
        });
    };

    const removeCategory = (index: number) => {
        remove(index);
    };

    useEffect(() => {
        const fetchCategories = async () => {
            await getCategories({ setLoading, setCategoriesList, reset });
        };
        fetchCategories();
    }, []);

    return (
        <div className="w-full flex flex-col items-center gap-5">
            <div className="w-[40%] flex flex-col gap-5">
                {loading ? <div className="w-full h-[calc(100%-45px)] flex items-center justify-center">
                    <LottieAnimations type={'loading'} />
                </div> :
                    <>
                        {fields.map((elm, i) => (
                            <InputCategory control={control} index={i} key={`${elm.id}-${i}`} removeCategory={removeCategory} />
                        ))}</>
                }
            </div>
            <div className="flex items-center gap-2 cursor-pointer" onClick={addCategory}>
                <Image
                    src={"images/Products/plus.svg"}
                    alt="Botão de adição"
                    width={20}
                    height={20}
                />
                <h2 className="text-base font-medium text-primarycolor">Adicionar nova categoria</h2>
            </div>
            <div className="w-1/3" >
                <Button
                    name="Salvar"
                    className="w-full h-12"
                    textColor="text-white"
                    backgroundColor="bg-primarycolor"
                    onClick={handleSubmit(onSubmit)}
                    isLoading={loading}
                />
            </div>
        </div>
    )
}
export default Categories