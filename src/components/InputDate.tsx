import { InputDateProps } from "@/interfaces/inputDate";
import Image from "next/image";
import { FC } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const InputDate: FC<InputDateProps> = ({ label, width, ...props }) => {
  return (
    <div className="flex flex-col items-start w-full">
      <label className="mb-2 font-mediumc text-[15px] w-full text-sm">
        {label}
      </label>
      <div className="w-full relative border border-border rounded-lg">
        <DatePicker
          selectsRange
          dateFormat="dd/MM/yyyy"
          placeholderText="Selecione"
          className={`${width || "w-full"} h-11 text-sx text-grey3 font-regularc px-3 cursor-pointer`}
          {...props}
        />
        <div className="absolute top-1/2 right-3 -translate-y-1/2 flex items-center">
          <Image
            src={"images/Global/calendary.svg"}
            alt="Caledáro"
            width={16}
            height={16}
          />
        </div>
      </div>
    </div>
  );
};
export default InputDate;
