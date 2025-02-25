import { InputTextProps } from "@/interfaces/inputText";
import { Controller } from "react-hook-form";

const InputText: React.FC<InputTextProps> = ({ label, name, control, rules, width, height, error, placeHolder, disabled, type, }) => {
  return (
    <div className={`flex flex-col items-start ${width || "w-full"}`}>
      <label className="mb-2 font-mediumc text-[15px] w-full text-sm">
        {label}
      </label>
      <Controller
        name={name}
        control={control}
        rules={rules}
        render={({ field }) => (
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

export default InputText;
