import Image from "next/image";
import { useState } from "react";
import { Controller } from "react-hook-form";

import { InputPassProps } from "@/interfaces/inputPass";


const InputPassword: React.FC<InputPassProps> = ({ label, name, control, rules, height, error, placeHolder, disabled, type, }) => {
  const [seePassword, setseePassword] = useState(true);

  return (
    <div className="flex flex-col items-start w-full">
      <label className="mb-2 font-mediumc text-[15px] w-full text-sm">
        {label}
      </label>
      <Controller
        name={name}
        control={control}
        rules={rules}
        render={({ field }) => (
          <div className="w-full relative">
            <input
              className={`text-sm font-regularc w-full rounded-xl border bg-offWhite p-[10px]
            ${height ?? "h-12"}
        ${error ? "border-red1 outline-red1" : "border-border outline-grey1"}
        `}
              id={field.name}
              value={field.value}
              onChange={field.onChange}
              placeholder={placeHolder}
              disabled={disabled}
              type={type}
            />
            <button
              className="absolute top-4 right-4 w-5"
              onClick={() => setseePassword((prevState) => !prevState)}
            >
              {seePassword ? (
                <Image
                  src={"/images/Login/EyeOpen.svg"}
                  alt="Olho aberto"
                  width={26}
                  height={22}
                />
              ) : (
                <Image
                  src={"/images/Login/EyeClose.svg"}
                  alt="Olho fechado"
                  width={26}
                  height={22}
                />
              )}
            </button>
          </div>
        )}
      />
      {error?.message && (
        <span className="min-h-[10px] mt-[4px] text-[11px] font-semiboldc text-red1">
          {error?.message}
        </span>
      )}
    </div>
  );
};

export default InputPassword;
