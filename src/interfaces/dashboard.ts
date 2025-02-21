import { Dispatch, SetStateAction } from "react";

export interface MetricCardProps {
    title: string;
    value: string;
    percentage: number;
    icon: number
};

export interface InputSearchProps {
    value: string;
    setValue: Dispatch<SetStateAction<string>>;
    width?: string
    heigth?: string
};