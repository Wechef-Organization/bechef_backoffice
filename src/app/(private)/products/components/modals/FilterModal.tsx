"use client"

import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Modal from "react-modal";

import Button from "@/components/Button";
import Select from "@/components/Select";
import { useProducts } from "@/context/ProductsContext";
import { getFilterOptions } from "@/utils/products/products";

interface FilterFormData {
  select_profit: string;
  select_category: string;
  select_status: string;
}

interface FilterParams {
  profitFilter?: string;
  categoryFilter?: string;
  statusFilter?: string;
}

interface FilterModalProps extends ModalProps {
  fetchData: (filters?: FilterParams) => Promise<void>;
}

const FilterModal: React.FC<FilterModalProps> = ({ isOpen, setIsOpen, fetchData }) => {
  const { setProfitFilter, setCategoryFilter, setStatusFilter } = useProducts()

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

  const [profitOptions, setProfitOptions] = useState([]);
  const [categoryOptions, setCategoryOptions] = useState([]);
  const [statusOptions, setStatusOptions] = useState([
    { value: "true", name: "Ligado" },
    { value: "false", name: "Desligado" },
  ]);

  const clearFilter = async () => {
    setProfitFilter("")
    setCategoryFilter("")
    setStatusFilter("")
    reset()
    setIsOpen(false)
    await fetchData({
      profitFilter: "",
      categoryFilter: "",
      statusFilter: "",
    })
  }

  const onSubmit = async (data: FilterFormData) => {
    setProfitFilter(data.select_profit);
    setCategoryFilter(data.select_category);
    setStatusFilter(data.select_status);
    setIsOpen(false);
    await fetchData({
      profitFilter: data.select_profit,
      categoryFilter: data.select_category,
      statusFilter: data.select_status,
    });
  };

  useEffect(() => {
    Modal.setAppElement(document.body);
  }, []);

  useEffect(() => {
    if (isOpen) {
      getFilterOptions({ setCategoryOptions, setProfitOptions });
    }
  }, [isOpen]);
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
            options={profitOptions}
            control={control}
            error={errors}
            notMargin
          />
          <Select
            width="w-full"
            selectStyle="rounded-lg"
            label="Categoria"
            name="select_category"
            options={categoryOptions}
            control={control}
            error={errors}
            notMargin
          />
          <Select
            width="w-full"
            selectStyle="rounded-lg"
            label="Status"
            name="select_status"
            options={statusOptions}
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