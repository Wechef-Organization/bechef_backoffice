"use client"

import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import Modal from "react-modal";

import Button from "@/components/Button";
import Select from "@/components/Select";
import { useProducts } from "@/context/ProductsContext";

const FilterModal: React.FC<ModalProps> = ({ isOpen, setIsOpen }) => {
  const {
    handleSubmit,
    control,
    formState: { errors },
    reset
  } = useForm({
    defaultValues: {
      select_profit: "",
      select_category: "",
      select_status: "",
    }
  });

  const { setProfitFilter, setCategoryFilter, setStatusFilter } = useProducts()


  const optionsSelect = [
    {
      value: "rota",
      name: "Em rota de entrega",
    },
    {
      value: "entrege",
      name: "Entrege",
    },
  ];

  const optionsCategory = [
    {
      value: "Proteína",
      name: "Proteína",
    },
    {
      value: "Massas",
      name: "Massas",
    },
  ];

  const optionsStatus = [
    {
      value: "true",
      name: "Ligado",
    },
    {
      value: "false",
      name: "Desligado",
    },
  ];


  const clearFilter = () => {
    setProfitFilter("")
    setCategoryFilter("")
    setStatusFilter("")
    reset()
    setIsOpen(false)
  }

  const onSubmit = (data: {
    select_profit: string,
    select_category: string,
    select_status: string,
  }) => {
    if (data.select_profit != "") {
      setProfitFilter(data.select_profit)
    }
    if (data.select_category != "") {
      setCategoryFilter(data.select_category)
    }
    if (data.select_status != "") {
      setStatusFilter(data.select_status)
    }

    setIsOpen(false)
  }

  useEffect(() => {
    Modal.setAppElement(document.body);
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
          <h2>Filtros</h2>
          <Button
            name="Limpar filtros"
            className="w-32 h-8 border border-border rounded-full"
            textColor="text-grey7"
            backgroundColor="bg-white"
            type="submit"
            onClick={clearFilter}
          />
        </div>
        <div className="w-full py-5 flex flex-col gap-5">
          <Select
            width="w-full"
            selectStyle="rounded-lg"
            label="Lucro por venda"
            name="select_profit"
            options={optionsSelect}
            control={control}
            error={errors}
            notMargin
          />
          <Select
            width="w-full"
            selectStyle="rounded-lg"
            label="Categoria"
            name="select_category"
            options={optionsCategory}
            control={control}
            error={errors}
            notMargin
          />
          <Select
            width="w-full"
            selectStyle="rounded-lg"
            label="Status"
            name="select_status"
            options={optionsStatus}
            control={control}
            error={errors}
            notMargin
          />
        </div>
        <Button
          name="Salvar filtros"
          className="w-full h-12"
          textColor="text-white"
          backgroundColor="bg-primarycolor"
          type="submit"
          onClick={handleSubmit(onSubmit)}
        />
      </div>
    </Modal>
  )
}
export default FilterModal