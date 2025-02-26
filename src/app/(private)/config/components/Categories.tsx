"use client"

import { useConfig } from "@/context/ConfigContext";
import { Category } from "@/interfaces/config";
import { getCategories } from "@/utils/config/categories";
import Image from "next/image";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import InputCategory from "./InputCategory";

const Categories = () => {
    const { categoriesList, setCategoriesList } = useConfig()

    const {
        control,
        handleSubmit,
        setValue,
        reset,
        watch
    } = useForm<{ categories: Category[] }>({
        defaultValues: {
            categories: [{ id: 0, name: "", image: "" }],
        },
    });

    const onSubmit = (data: { categories: Category[] }) => {

        setCategoriesList(data.categories);
    }

    const addCategory = () => {
        const newCategory: Category = {
            id: Date.now(),
            name: "",
            image: "",
        };

        setCategoriesList((prev) => [...prev, newCategory]);
    };

    useEffect(() => {
        categoriesList.forEach((category, index) => {
            setValue(`categories.${index}.id`, category.id);
            setValue(`categories.${index}.image`, category.image);
            setValue(`categories.${index}.name`, category.name);
        });
    }, [categoriesList, setValue]);

    const removeCategory = (index: number) => {
        setCategoriesList((prev) => {
            const updatedList = prev.filter((_, i) => i !== index);


            setTimeout(() => {
                reset({ categories: updatedList });
            }, 0);

            return updatedList;
        });
    };

    useEffect(() => {
        const fetchCategories = async () => {
            const response = await getCategories();
            setCategoriesList(response);

            response.forEach((elm, i) => {
                setValue(`categories.${i}.id`, i);
                setValue(`categories.${i}.image`, elm.image);
                setValue(`categories.${i}.name`, elm.name);
            });
        };

        fetchCategories();
    }, []);

    const watchedCoupons = watch("categories");

    useEffect(() => {
        handleSubmit(onSubmit)();
    }, [watchedCoupons, handleSubmit]);

    return (
        <div className="w-full flex flex-col items-center gap-5">
            <div className="w-[40%] flex flex-col gap-5">
                {categoriesList.length > 0 && categoriesList.map((elm, i) => (
                    <InputCategory control={control} index={i} key={`${elm.id}-${i}`} removeCategory={removeCategory} />
                ))}
            </div>
            <div className="flex items-center gap-2 cursor-pointer" onClick={addCategory}>
                <Image
                    src={"images/Products/plus.svg"}
                    alt="Botão de adição"
                    width={20}
                    height={20}
                />
                <h2 className="text-base font-medium text-primarycolor">Adicionar novo cupom</h2>
            </div>
        </div>
    )
}
export default Categories