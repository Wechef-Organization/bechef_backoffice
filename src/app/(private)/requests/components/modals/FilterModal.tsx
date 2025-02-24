"use client"

import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Modal from "react-modal";

import Button from "@/components/Button";
import InputDate from "@/components/InputDate";
import Select from "@/components/Select";
import { useRequests } from "@/context/RequestsContext";

const FilterModal: React.FC<ModalProps> = ({ isOpen, setIsOpen }) => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      select: "",
    }
  });

  const { setDateFilter, setStatusFilter } = useRequests()
  const [date, setDate] = useState<[Date | null, Date | null]>([null, null]);


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

  const clearFilter = () => {
    setDateFilter([null, null])
    setDate([null, null])
    setStatusFilter("")
    setIsOpen(false)
  }

  const onSubmit = (data: { select: string }) => {
    if (data.select != "") {
      setStatusFilter(data.select)
    }
    if (date[0] && date[1]) {
      setDateFilter(date);
    }

    setIsOpen(false)
  }

  const onChangeData = (dates: [Date | null, Date | null]) => {
    const [start, end] = dates;
    setDate([start, end]);

  }

  useEffect(() => {
    Modal.setAppElement(document.body);
  }, []);

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={() => { setIsOpen(false) }}
      overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
      className="relative w-full max-w-lg p-6 bg-white rounded-lg shadow-lg outline-none"
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
          <InputDate
            label={"Data"}
            width="w-[465px]"
            onChange={onChangeData}
            selected={date[0]}
            startDate={date[0]}
            endDate={date[1]}
          />
          <Select
            width="w-full"
            selectStyle="rounded-lg"
            label="Status"
            name="select"
            options={optionsSelect}
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