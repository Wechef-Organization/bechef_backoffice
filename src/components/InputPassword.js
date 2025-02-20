import Image from "next/image";
import { useState } from "react";

import { Controller } from "react-hook-form";

const InputPassword = (props) => {
  const [seePassword, setseePassword] = useState(true);

  return (
    <div className="flex flex-col items-start w-full">
      <label className="mb-2 font-mediumc text-[15px] w-full text-sm">
        {props.label}
      </label>
      <Controller
        name={props.name}
        control={props.control}
        rules={props.rules}
        render={({ field }) => (
          <div className="w-full relative">
            <input
              className={`text-sm font-regularc w-full rounded-xl border bg-offWhite p-[10px]
            ${props.height ?? "h-12"}
        ${props.error ? "border-red1 outline-red1" : "border-grey3 outline-grey1"}
        `}
              id={field.name}
              value={field.value}
              onChange={field.onChange}
              placeholder={props.placeHolder}
              disabled={props.disabled}
              type={props.type}
            />
            <button
              className="absolute top-4 right-4 w-5"
              onClick={() => setseePassword((prevState) => !prevState)}
            >
              {seePassword ? (
                <Image
                  src={"/Login/EyeOpen.svg"}
                  alt="Sidebar logo"
                  width={26}
                  height={22}
                />
              ) : (
                <Image
                  src={"/Login/EyeClose.svg"}
                  alt="Sidebar logo"
                  width={26}
                  height={22}
                />
              )}
            </button>
          </div>
        )}
      />
      {props.error?.message && (
        <span className="min-h-[10px] mt-[4px] text-[11px] font-semiboldc text-red1">
          {props.error?.message}
        </span>
      )}
    </div>
  );
};

export default InputPassword;
