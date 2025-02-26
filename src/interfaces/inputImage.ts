import { Control, FieldError, FieldValues, RegisterOptions } from "react-hook-form";

export interface InputImageProps {
    name: string;
    control: Control<any>;
    rules?: Omit<RegisterOptions<FieldValues, string>, "disabled" | "valueAsNumber" | "valueAsDate" | "setValueAs"> | undefined;
    error?: FieldError;

};