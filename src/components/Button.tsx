import { ButtonProps } from "@/interfaces/button";
import ReactLoading from "react-loading";

const Button: React.FC<ButtonProps> = ({ backgroundColor, textColor, fontSize, className, disabled, onClick, type, form, style, name }) => {
  return (
    <button
      className={`${backgroundColor || "bg-primarycolor"
        } ${textColor} ${fontSize}  h-[40px] rounded-full transition-opacity duration-300 hover:opacity-80 px-2 flex justify-center items-center ${className}`}
      disabled={disabled}
      onClick={onClick}
      type={type}
      form={form}
      style={style}
    >
      {disabled ? (
        <ReactLoading type={"spin"} color={"white"} height={20} width={20} />
      ) : (
        name
      )}
    </button>
  );
};

export default Button;
