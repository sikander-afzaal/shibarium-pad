const Funds = () => {
  return (
    <div className="wrapper  lg:mt-[250px] relative py-[80px] sm:py-[150px]">
      <img
        src="/wave.png"
        className="absolute -z-10 max-h-[8000px] sm:block hidden top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-full  object-cover"
        alt=""
      />
      <div className="contain gap-10 flex-col justify-center items-center text-center">
        <h2 className="title">
          Raised Funds to Build within the{" "}
          <span className="grText bg-yellowGr">Ordinal</span> Ecosystem
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 w-full gap-8">
          <FundBox value={"$0"} desc="Total Raised" />
          <FundBox value={"0"} desc="Tokens Funded" />
          <FundBox value={"$0"} desc="Total MKT Cap" />
          <FundBox value={"0"} desc="Total Participants" />
        </div>
      </div>
    </div>
  );
};

export default Funds;

const FundBox = ({ value, desc }) => {
  return (
    <div className="flex flex-col bg-white bg-opacity-5 min-h-[180px] gap-3 rounded-[10px]  border border-solid border-[#FFC201]  justify-center items-center w-full">
      <h2 className="text-white leading-[1] font-bold text-[58px]">{value}</h2>
      <p className="text-white font-medium leading-[1] text-lg">{desc}</p>
    </div>
  );
};
