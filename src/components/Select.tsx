import { SelectProps } from "@/interfaces/select";
import React from "react";
import { Controller } from "react-hook-form";

const Select: React.FC<SelectProps> = ({
    label,
    LabelStyle,
    name,
    options,
    control,
    rules,
    error,
    required = true,
    height,
    width,
    handleSubmit,
    onSubmit,
    defaultValue = "",
    optionKey,
    optionValue,
    notMargin,
    selectStyle,
    ...rest
}) => {
    return (
        <div className={`${width || "w-full"}`}>
            <div
                className={`flex flex-col items-start w-full  ${notMargin ? "my-0" : "my-2.5"
                    }`}>
                {label && (
                    <label
                        className={`${LabelStyle} text-sm mb-2 font-mediump text-font `}>
                        {label}
                    </label>
                )}

                <Controller
                    name={name}
                    control={control}
                    rules={rules}
                    render={({ field }) => (
                        <select
                            className={`${selectStyle} text-sm font-regularc p-2 w-full ${height || "h-11"}  
                            rounded-[10px] bg-white border border-${error?.message ? "red1" : "border"} `}
                            id={field.name}
                            value={field.value}
                            onChange={(value) => {
                                field.onChange(value);
                                handleSubmit(onSubmit)();
                            }}
                            defaultValue={defaultValue}
                            required={required}
                            {...rest}>
                            <option
                                value=""
                                disabled
                                className="font-regularc text-[#495057] text-sm">
                                Selecione
                            </option>

                            {options.map((option, index) => (
                                <option
                                    key={index}
                                    value={optionKey ? option[optionKey] : option.value}
                                    className="text-sm font-regularc text-[#000] ">
                                    {optionValue ? option[optionValue] : option.name}
                                </option>
                            ))}
                        </select>
                    )}
                />

                {error?.message && (
                    <p className="min-h-5 mt-1 text-xs font-semiboldc text-red1">
                        {error?.message}
                    </p>
                )}
            </div>
        </div>
    );
};

export default Select;
