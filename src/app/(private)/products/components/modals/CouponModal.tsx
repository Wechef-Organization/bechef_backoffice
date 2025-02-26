"use client"

import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import Modal from "react-modal";

import Button from "@/components/Button";
import { useProducts } from "@/context/ProductsContext";
import { Coupon } from "@/interfaces/products";
import { getCoupons } from "@/utils/products/coupons";
import Image from "next/image";
import InputsCoupon from "../InputsCoupon";

const CouponModal: React.FC<ModalProps> = ({ isOpen, setIsOpen }) => {
  const { control, handleSubmit, setValue, reset } = useForm<{ coupons: Coupon[] }>({
    defaultValues: {
      coupons: [],
    },
  });

  const { couponList, setCouponList } = useProducts()

  const onSubmit = (data: { coupons: Coupon[] }) => {
    const filteredCoupons = data.coupons.filter((coupon) => coupon.name.trim() !== "");

    setCouponList(filteredCoupons);
  }

  const addCoupon = () => {
    const newCoupon: Coupon = {
      id: Date.now(),
      name: "",
      value: 0,
    };

    setCouponList((prev) => {
      const updatedList = [...prev, newCoupon];

      setValue(`coupons.${updatedList.length - 1}.name`, newCoupon.name);
      setValue(`coupons.${updatedList.length - 1}.value`, newCoupon.value);

      return updatedList;
    });
  };

  const removeCoupon = (index: number) => {
    setCouponList((prev) => {
      const updatedList = prev.filter((_, i) => i !== index);


      setTimeout(() => {
        reset({ coupons: updatedList });
      }, 0);

      return updatedList;
    });
  };


  useEffect(() => {
    Modal.setAppElement(document.body);

    const fetchCoupons = async () => {
      const response = await getCoupons();
      setCouponList(response);

      response.forEach((elm, i) => {
        setValue(`coupons.${i}.id`, i);
        setValue(`coupons.${i}.name`, elm.name);
        setValue(`coupons.${i}.value`, elm.value);
      });
    };

    fetchCoupons();
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
          {couponList.length > 0 && couponList.map((elm, i) => (
            <InputsCoupon control={control} index={i} key={`${elm.id}-${i}`} removeCoupon={removeCoupon} />
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