import { InputTextProps } from "@/interfaces/inputText";
import { FC } from "react";
import { Controller } from "react-hook-form";

const InputPercent: FC<InputTextProps> = ({
  label,
  name,
  control,
  rules,
  width,
  height,
  error,
  placeHolder,
  disabled,
}) => {
  return (
    <div className={`flex flex-col items-start ${width || "w-full"}`}>
      <label className="mb-2 font-mediumc text-[15px] w-full text-sm">
        {label}
      </label>

      <Controller
        name={name}
        control={control}
        rules={{
          ...rules,
          pattern: {
            value: /^\d{1,3}(\.\d{0,2})?$/,
            message: "Digite no formato 000.00",
          },
          validate: (value) => {
            const num = parseFloat(value);
            return num <= 100.00 || "Valor máximo é 100%";
          },
        }}
        render={({ field }) => {
          const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
            let rawValue = e.target.value;

            // Substitui vírgula por ponto
            rawValue = rawValue.replace(",", ".");

            // Remove caracteres não numéricos ou ponto
            rawValue = rawValue.replace(/[^0-9.]/g, "");

            // Garante apenas um ponto
            const parts = rawValue.split(".");
            let intPart = parts[0].slice(0, 3);
            let decimalPart = parts[1]?.slice(0, 2) || "";

            // Constrói valor formatado
            let formatted = intPart;
            if (rawValue.includes(".") || decimalPart) {
              formatted += `.${decimalPart}`;
            }

            // Valida limite
            const numericValue = parseFloat(formatted);
            if (!isNaN(numericValue) && numericValue > 100) {
              return;
            }

            field.onChange(formatted);
          };

          return (
            <div className="relative w-full">
              <input
                className={`text-sm font-regularc w-full rounded-xl border bg-offWhite p-[10px] pr-10
                ${disabled && "bg-[#F5F5F5]"}
                ${height ?? "h-12"} 
                ${error ? "border-red1 outline-red1" : "border-border outline-grey1"}`}
                id={field.name}
                value={field.value ?? ""}
                onChange={handleChange}
                placeholder={placeHolder}
                disabled={disabled}
                type="text"
                inputMode="decimal"
              />
              <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 text-sm pointer-events-none">
                %
              </span>
            </div>
          );
        }}
      />

      {error?.message && (
        <span className="min-h-[10px] mt-[4px] text-[11px] font-semiboldc text-red1">
          {error?.message}
        </span>
      )}
    </div>
  );
};

export default InputPercent;
