import Button from "../../components/Button";

const Hero = () => {
  return (
    <div className="wrapper relative bg-heroImg bg-contain bg-no-repeat bg-top lg:bg-left mt-[109px]">
      <div className="contain lg:flex-row flex-col justify-between items-start gap-14 xl:gap-20">
        <div className="flex justify-start items-center sm:text-left text-center sm:items-start flex-col gap-5 sm:gap-10 w-full pt-10 lg:pt-20">
          <button className="bg-white border-none  rounded-[10px] px-6 py-4 uppercase text-text font-medium">
            Launchpad
          </button>
          <h2 className="leading-[1.3] text-[30px] sm:text-[46px] xl:text-[56px] font-bold text-white">
            Get early access to the best projects within the{" "}
            <span className=" bg-yellowGr grText ">Ordinal Ecosystem</span>
          </h2>
          <p className="leading-[1] text-[rgba(255,255,255,0.8)] text-lg ">
            Vetted projects that will drive the future the of{" "}
            <span className="grText bg-yellowGr font-semibold">
              Bitcoin Ordinal Ecosystem
            </span>
          </p>
          <div className="flex justify-start w-full sm:flex-row flex-col items-center gap-5">
            <Button classes={"w-full sm:w-[182px]"}>Submit Project</Button>
            <Button disabled classes={"w-full sm:w-[182px]"}>
              Join Presales
            </Button>
          </div>
          <div className="flex justify-start sm:flex-row flex-col items-center gap-5">
            <div className="flex justify-start gap-2  items-center sm:items-start flex-col">
              <h3 className="text-[46px] font-bold text-yellow leading-[1]">
                0
              </h3>
              <p className="text-base font-medium text-white">
                PROJECTS FUNDED
              </p>
            </div>
            <div className="flex justify-start gap-2  items-center sm:items-start flex-col">
              <h3 className="text-[46px] font-bold text-yellow leading-[1]">
                0
              </h3>
              <p className="text-base font-medium text-white">
                PROJECTS MKT CAP
              </p>
            </div>
            <div className="flex justify-start gap-2  items-center sm:items-start flex-col">
              <h3 className="text-[46px] font-bold text-yellow leading-[1]">
                0
              </h3>
              <p className="text-base font-medium text-white">
                UNIQUE PARTCIPANTS
              </p>
            </div>
          </div>
        </div>
        <div className="flex pt-0 sm:pt-20 justify-start items-center flex-col relative isolate w-full ">
          <div className="w-full  h-full absolute sm:block hidden -z-20 left-0 top-0 bg-heroRight opacity-50"></div>
          <div className="bg-rotatedCard sm:block hidden opacity-50 rounded-[15px] -rotate-[5.81deg] h-full w-full max-w-[442px] absolute top-20 -z-10 left-1/2 -translate-x-1/2"></div>
          <div className="bg-white bg-opacity-5 border-2 border-solid border-[#FFC300]  rounded-[15px]  w-full max-w-[442px] p-2 flex justify-start items-start flex-col gap-3 overflow-hidden">
            <div className="relative w-full">
              <img
                src="/hero-nft.png"
                className="w-full rounded-[10px] aspect-square sm:aspect-video object-cover"
                alt=""
              />
              <p className="w-full max-w-[271px] absolute z-10 bottom-0 left-1/2 -translate-x-1/2 backdrop-blur-[42px] bg-whiteBg  flex justify-center text-lg items-center py-3 rounded-tr-[5px] rounded-tl-[5px]">
                Featured Project
              </p>
            </div>
            <div className="flex pb-3 px-2 justify-start items-start flex-col  gap-4">
              <div className="flex sm:flex-row flex-col justify-between items-start sm:items-center gap-2 w-full">
                <h4 className="text-yellow text-[26px] font-bold">
                  Ordinal Pad #01
                </h4>
                <p className="text-white text-lg">
                  Starting: <strong>04.01.2023</strong>
                </p>
              </div>
              <h5 className="flex justify-start items-center gap-2 text-white text-[22px] font-semibold">
                $OPAD{" "}
                <img
                  src="/check.png"
                  className="w-[21px] aspect-square object-contain"
                  alt=""
                />
              </h5>
              <p className="text-base leading-[1.4] sm:text-lg text-white opacity-80">
                The Ultimate Launchpad Created Exclusively For The Bitcoin
                Ordinal Ecosystem.
              </p>
              <div className="flex w-full flex-col sm:flex-row justify-start items-center gap-4">
                <Button classes={"w-full sm:w-[152px] h-[50px]"}>
                  Token Sale
                </Button>
                <Button disabled classes={"w-full sm:w-[152px] h-[50px]"}>
                  Buy Here
                </Button>
              </div>{" "}
              <div className="flex sm:items-center justify-between items-start flex-col sm:flex-row gap-2 w-full">
                <p className="text-white opacity-80 text-lg">
                  Price per Token: <strong> $0.004</strong>
                </p>
                <p className="text-white opacity-80 text-lg">Allocation: NO</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
