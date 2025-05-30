import { ButtonProps } from "@/interfaces/button";


const Button: React.FC<ButtonProps> = ({ backgroundColor, textColor, fontSize, className, disabled, onClick, type, form, style, name, isLoading }) => {
  return (
    <button
      className={`${backgroundColor || "bg-primarycolor"
        } ${textColor} ${fontSize} ${disabled && "bg-gray-300"} h-[40px] rounded-full transition-opacity duration-300 hover:opacity-80 px-2 flex justify-center items-center ${className}`}
      disabled={disabled}
      onClick={onClick}
      type={type}
      form={form}
      style={style}
    >
      {isLoading ? (
        <div
          className={
            'inline-block size-6 animate-spin rounded-full border-[4px] border-current border-t-transparent'
          }
          role="status"
          aria-label="loading"
        >
          <span className="sr-only">Loading...</span>
        </div>
      ) : (
        name
      )}
    </button>
  );
};

export default Button;
