import { Control } from "react-hook-form";

export interface InputsCouponProps {
    index: number;
    control: Control<any>;
    removeCoupon: (index: number) => void
};
