import { Control, FieldErrors, FieldValues, RegisterOptions, UseFormHandleSubmit } from "react-hook-form";

interface Option {
    value: string;
    name: string
}

export interface SelectProps {
    label?: string | undefined;
    LabelStyle?: string | undefined;
    name: string;
    options: Option[];
    control: Control<any>;
    rules?: Omit<RegisterOptions<FieldValues, string>, "disabled" | "valueAsNumber" | "valueAsDate" | "setValueAs"> | undefined;
    error?: FieldErrors<{ select: string; }>;
    required?: boolean | undefined;
    height?: string | undefined;
    width?: string | undefined;
    handleSubmit?: UseFormHandleSubmit<{ select: string }, undefined>;
    onSubmit?: (data: any) => void;
    optionKey?: keyof Option,
    optionValue?: keyof Option,
    notMargin?: boolean | undefined;
    selectStyle?: string | undefined,
};
