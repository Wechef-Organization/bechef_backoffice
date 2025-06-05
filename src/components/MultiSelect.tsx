'use client';

import { MultiSelect } from 'primereact/multiselect';
import { Tag } from 'primereact/tag';

import { FC } from "react";
import { Controller, ControllerRenderProps } from "react-hook-form";

import { MultiSelectProps } from "@/interfaces/multSelect";
import Image from 'next/image';


const MultiSelectChip: FC<MultiSelectProps> = ({ label, control, rules, name, width, placeHolder, error, options }) => {

    const selectedItemTemplate = (item: { id: string, permission_name: string }, field: ControllerRenderProps<any, string>) => {
        if (!item) {
            return <p className='text-sm text-gray-400'>Selecione as variáveis</p>;
        }

        return (
            <Tag className="bg-primarycolor text-white px-2" value={item.permission_name} rounded>
                <div
                    className="w-5 cursor-pointer pl-2"
                    onClick={(e) => {
                        e.stopPropagation();
                        field.onChange(field.value.filter((variable: { permission_name: string }) => variable.permission_name !== item.permission_name));
                    }}
                >
                    <Image alt="Caixa de seleção" src={"/images/Accesses/closeIcon.svg"} width={10} height={10} />
                </div>
            </Tag>
        );
    };

    return (
        <div className={`flex flex-col items-start ${width || "w-full"}`}>
            <label className="mb-2 font-mediumc text-[15px] w-full text-sm">
                {label}
            </label>

            <Controller
                name={name}
                control={control}
                rules={rules}
                render={({ field }) => (
                    <MultiSelect
                        className={`w-full h-12 border-[1px] rounded-xl ${error ? 'border-red-500' : 'border-gray-300'}`}
                        value={field.value}
                        onChange={(e) => field.onChange(e.value)}
                        options={options}
                        display="chip"
                        filter
                        optionLabel="permission_name"
                        placeholder={field.value.length === 0 ? placeHolder : ""}
                        maxSelectedLabels={undefined}
                        selectedItemTemplate={(item) => selectedItemTemplate(item, field)}
                    />

                )}
            />
            {error?.message && (
                <span className="min-h-[10px] mt-[4px] text-[11px] font-semiboldc text-red1">
                    {error?.message}
                </span>
            )}
        </div>
    )
}
export default MultiSelectChip