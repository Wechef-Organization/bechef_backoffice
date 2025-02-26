import { Control, FieldError, FieldValues, Merge, RegisterOptions } from "react-hook-form";

export interface InputChipsProps {
    label: string;
    name: string;
    control: Control<any>;
    rules?: Omit<RegisterOptions<FieldValues, string>, "disabled" | "valueAsNumber" | "valueAsDate" | "setValueAs"> | undefined;
    width?: string | undefined;
    height?: string | undefined;
    error?: Merge<FieldError, (FieldError | undefined)[]> | undefined;
    placeHolder: string;
    disabled?: boolean | undefined;
};
