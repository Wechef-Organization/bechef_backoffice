import { api } from "../../../services/api";
import { sendToast } from "../toasts";
import { Dispatch, SetStateAction } from "react";
import { Coupon } from "@/interfaces/products";
import { UseFormReset } from "react-hook-form";


export const getCoupons = async ({ setCouponList, reset }: {
    setCouponList: Dispatch<SetStateAction<Coupon[]>>,
    reset: UseFormReset<{ coupons: Coupon[]; }>
}) => {
    try {
        const response = await api.get(`adm/coupons`);
        const coupons = response.data;

        setCouponList(coupons);
        reset({ coupons })

    } catch (error: any) {
        sendToast('error', error?.response?.data?.message || 'Erro ao buscar categorias');
    }
}

const addCoupons = async (coupons: Coupon[]) => {
    for (const cat of coupons) {
        await api.post(`adm/coupons`, {
            name: cat.name,
            value: cat.value
        });
    }
};

const updateCoupons = async (coupons: Coupon[]) => {
    for (const cat of coupons) {
        await api.patch(`adm/coupons/${cat.id}`, {
            name: cat.name,
            value: cat.value
        });
    }
};

const deleteCoupons = async (coupons: Coupon[]) => {
    for (const cat of coupons) {
        await api.delete(`adm/coupons/${cat.id}`);
    }
};

export const saveChanges = async ({
    couponList,
    setCouponList,
    reset }: {
        couponList: Coupon[],
        setCouponList: Dispatch<React.SetStateAction<Coupon[]>>,
        reset: UseFormReset<{ coupons: Coupon[]; }>
    }) => {
    try {

        const { data: dbCoupons } = await api.get<Coupon[]>(`adm/coupons`);

        const dbMap = new Map(dbCoupons.map(cat => [cat.id, cat]));
        const newMap = new Map(couponList.map(cat => [cat.id, cat]));

        const toAdd = couponList.filter(cat => !cat.id);
        const toUpdate = couponList.filter(cat => {
            if (!cat.id) return false;
            const dbCat = dbMap.get(cat.id);
            return dbCat && (dbCat.name !== cat.name || dbCat.value !== cat.value);
        });
        const toDelete = dbCoupons.filter(cat => !newMap.has(cat.id));

        await addCoupons(toAdd);
        await updateCoupons(toUpdate);
        await deleteCoupons(toDelete);

        const { data: updatedCoupons } = await api.get(`adm/coupons`);
        setCouponList(updatedCoupons);
        reset({ coupons: updatedCoupons })

        sendToast('success', 'Cupons salvas com sucesso!');
    } catch (error: any) {
        sendToast('error', error?.response?.data?.message || 'Erro ao salvar cupons');
    }
}