import { Controller } from "react-hook-form";

const InputText = (props) => {
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

export default InputText;
