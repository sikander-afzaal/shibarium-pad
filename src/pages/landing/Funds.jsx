const Funds = ({ content }) => {
  return (
    <div className="wrapper  lg:mt-[130px] relative py-[80px] sm:py-[150px]">
      <img
        src="/wave.png"
        className="absolute -z-10 max-h-[8000px] sm:block hidden top-1/2  xl:top-0 -translate-y-1/2 xl:-translate-y-[10%] left-1/2 -translate-x-1/2 w-full  object-cover"
        alt=""
      />
      <div className="contain gap-10 flex-col justify-center items-center text-center">
        <h2 className="title">
          {content.title}{" "}
          <span className="grText bg-yellowGr">{content.titleGr}</span>{" "}
          {content.titleEnd}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 w-full gap-8">
          <FundBox value={"$0"} desc={content.box1} />
          <FundBox value={"0"} desc={content.box2} />
          <FundBox value={"$0"} desc={content.box3} />
          <FundBox value={"0"} desc={content.box4} />
        </div>
      </div>
    </div>
  );
};

export default Funds;

const FundBox = ({ value, desc }) => {
  return (
    <div className="flex flex-col bg-white bg-opacity-5 min-h-[180px] gap-3 rounded-[10px]  border border-solid border-[#FFC201]  justify-center items-center w-full">
      <h2 className="dark:text-white text-primary-bg leading-[1] font-bold text-[58px]">
        {value}
      </h2>
      <p className="dark:text-white text-primary-bg font-medium leading-[1] text-lg">
        {desc}
      </p>
    </div>
  );
};
