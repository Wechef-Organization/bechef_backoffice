import { HTMLInputTypeAttribute } from "react";
import { Control, FieldError, FieldValues, RegisterOptions } from "react-hook-form";

export interface InputTextProps {
    label: string;
    name: string;
    control: Control<any>;
    rules?: Omit<RegisterOptions<FieldValues, string>, "disabled" | "valueAsNumber" | "valueAsDate" | "setValueAs"> | undefined;
    height?: string | undefined;
    error?: FieldError;
    placeHolder: string;
    disabled?: boolean | undefined;
    type?: HTMLInputTypeAttribute | undefined;
};
