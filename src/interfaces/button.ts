import { CSSProperties, MouseEventHandler } from "react";

export interface ButtonProps {
    backgroundColor?: string;
    textColor?: string;
    fontSize?: string;
    className?: string;
    disabled?: boolean;
    onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
    type?: "button" | "submit" | "reset" | undefined;
    form?: string | undefined;
    style?: CSSProperties | undefined;
    name?: string
    isLoading?: boolean
};