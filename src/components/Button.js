import ReactLoading from "react-loading";

const Button = (props) => {
  return (
    <button
      className={`${
        props.backgroundColor || "bg-primarycolor"
      } ${props.textColor} ${props.fontSize}  h-[40px] rounded-full transition-opacity duration-300 hover:opacity-80 px-2 flex justify-center items-center ${props.className}`}
      disabled={props.disabled}
      onClick={props.onClick}
      type={props.type}
      form={props.form}
      style={props.style}
    >
      {props.disabled ? (
        <ReactLoading type={"spin"} color={"white"} height={20} width={20} />
      ) : (
        props.name
      )}
    </button>
  );
};

export default Button;
