import { Control } from "react-hook-form";

export interface InputCategoryProps {
    index: number;
    control: Control<any>;
    removeCategory: (index: number) => void
};
