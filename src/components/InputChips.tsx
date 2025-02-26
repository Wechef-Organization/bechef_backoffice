import { Chips } from 'primereact/chips';
import { FC } from "react";
import { Controller } from "react-hook-form";

import { InputChipsProps } from "@/interfaces/inputChips";


const InputChips: FC<InputChipsProps> = ({ label, control, rules, disabled, name, width, height, placeHolder, error }) => {

    const customChip = (item: string) => {
        return (
            <div className='bg-primarycolor rounded-full py-[2px] px-1 mr-1'>
                <span className='text-white'>{item}</span>
            </div>
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
                    <Chips
                        className={`w-full rounded-xl border bg-offWhite p-[10px] text-sm flex items-start overflow-y-auto
                                ${disabled && "bg-[#F5F5F5]"}
                                ${height ?? "h-12"}
                                ${error ? "border-red1 outline-red1" : "border-border outline-grey1"}
                            `}
                        value={field.value}
                        onChange={(e) => field.onChange(e.value)}
                        placeholder={field.value.length === 0 ? placeHolder : ""}
                        itemTemplate={customChip}
                        separator=','
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
export default InputChips