const Join = () => {
  return (
    <div className="wrapper">
      <div className="contain mt-[80px] xl:mt-[150px] isolate flex-col justify-center items-center gap-8 text-center rounded-[15px] px-2 bg-yellowGr relative py-[50px]">
        <img
          src="/sale.png"
          className="w-full h-full absolute left-1/2 -translate-x-1/2 top-0 object-cover -z-10"
          alt=""
        />
        <h2 className="text-[30px] xl:text-[46px]  font-bold text-white">
          Never want to miss a sale?
        </h2>
        <button
          className={
            "bg-white disabled:cursor-not-allowed flex justify-center items-center leading-[1] rounded-[10px] p-5 text-dark border-none font-semibold text-lg  "
          }
        >
          Join Our Community
        </button>
      </div>
    </div>
  );
};

export default Join;
