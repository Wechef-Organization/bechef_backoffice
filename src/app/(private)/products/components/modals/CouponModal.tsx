"use client"

import { FC, useEffect } from "react";
import { useFieldArray, useForm } from "react-hook-form";
import Modal from "react-modal";

import Button from "@/components/Button";
import { useProducts } from "@/context/ProductsContext";
import { Coupon } from "@/interfaces/products";
import { getCoupons } from "@/utils/products/coupons";
import Image from "next/image";
import InputsCoupon from "../InputsCoupon";
import { saveChanges } from "@/utils/products/coupons";

const CouponModal: FC<ModalProps> = ({ isOpen, setIsOpen }) => {
  const { setCouponList } = useProducts()
  const {
    control,
    handleSubmit,
    reset
  } =
    useForm<{ coupons: Coupon[] }>({
      defaultValues: {
        coupons: [{ id: "", name: "", value: "" }],
      },
    });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "coupons",
  });

  const onSubmit = (data: { coupons: Coupon[] }) => {
    setCouponList(data.coupons);
    saveChanges({ couponList: data.coupons, setCouponList, reset })
  }

  const addCoupon = () => {
    append({
      id: "",
      name: "",
      value: "",
    });
  };

  const removeCoupons = (index: number) => {
    remove(index);
  };


  useEffect(() => {
    const fetchCategories = async () => {
      await getCoupons({ setCouponList, reset });
    };
    fetchCategories();
  }, []);


  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={() => { setIsOpen(false) }}
      overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
      className="relative w-full max-w-lg p-6 bg-white rounded-[20px] shadow-lg outline-none"
    >
      <div>
        <div className="w-full flex items-center justify-between border-b border-border pb-3">
          <div className="flex items-center gap-5">
            <Image
              className="cursor-pointer"
              src={"images/Global/xClose.svg"}
              alt="Botão de fechar modal"
              width={13}
              height={13}
              onClick={() => { setIsOpen(false) }}
            />
            <h2>Cupons</h2>
          </div>
          <Button
            name="Salvar"
            className="w-20 h-9"
            textColor="text-white"
            backgroundColor="bg-primarycolor"
            type="submit"
            onClick={handleSubmit(onSubmit)}
          />
        </div>
        <div className="w-full h-[390px] py-5 flex flex-col gap-5 overflow-y-auto">
          {fields.map((elm, i) => (
            <InputsCoupon control={control} index={i} key={`${elm.id}-${i}`} removeCoupon={removeCoupons} />
          ))}
        </div>
        <div className="flex items-center gap-2 cursor-pointer" onClick={addCoupon}>
          <Image
            src={"images/Products/plus.svg"}
            alt="Botão de adição"
            width={20}
            height={20}
          />
          <h2 className="text-base font-medium text-primarycolor">Adicionar novo cupom</h2>
        </div>
      </div>
    </Modal>
  )
}
export default CouponModal