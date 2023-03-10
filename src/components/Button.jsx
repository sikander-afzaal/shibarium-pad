const Button = ({ disabled, classes, children, rest }) => {
  return (
    <button
      {...rest}
      disabled={disabled}
      className={`bg-yellowGr disabled:cursor-not-allowed flex justify-center items-center leading-[1] rounded-[10px] p-5 text-dark border-none font-semibold text-lg  disabled:opacity-50 ${classes}`}
    >
      {children}
    </button>
  );
};

export default Button;
