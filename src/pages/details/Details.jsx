import Button from "../../components/Button";

const Details = () => {
  return (
    <div className="wrapper lg:bg-detailsHero bg-cover bg-left mt-[140px] xl:mt-[130px] ">
      <div className="contain flex-col justify-start items-center xl:items-start gap-8">
        <h2 className="grTitle">Project Details</h2>
        <div className="grid place-items-center grid-cols-1 grid-rows-[auto__1fr] xl:grid-rows-1 xl:grid-cols-2 w-full gap-10">
          <div className="w-full xl:max-w-none max-w-[600px] h-full border border-solid border-yellow rounded-[15px] bg-white bg-opacity-5 p-3">
            <img
              src="/details-nft.png"
              className="w-full  object-cover h-full rounded-[15px]"
              alt=""
            />
          </div>
          <div className="flex justify-start items-center text-center xl:text-left xl:items-start flex-col w-full max-w-[550px] gap-5">
            <h2 className="grTitle">Ordinal Pad #001</h2>
            <p className="text-lg dark:text-white text-black opacity-80">
              The Ultimate Launchpad Designed Exclusively For The Ordinal
              Ecosystem
            </p>
            <div className="grid gap-3 grid-cols-1 sm:grid-cols-3 sm:grid-rows-2 my-5 w-full">
              <div className="flex justify-center bg-white bg-opacity-5 text-center border border-solid border-yellow rounded-[10px] w-full py-3 items-center flex-col gap-2 h-full">
                <p className="text-lg dark:text-white text-black leading-[1] font-semibold opacity-80">
                  Owner:
                </p>
                <p className="text-lg dark:text-white text-black leading-[1] font-normal opacity-80">
                  Ordinal Pad
                </p>
              </div>
              <div className="flex justify-center bg-white bg-opacity-5 text-center border border-solid border-yellow rounded-[10px] w-full py-3 items-center flex-col gap-2 h-full">
                <p className="text-lg dark:text-white text-black leading-[1] font-semibold opacity-80">
                  Blockchain:
                </p>
                <p className="text-lg dark:text-white text-black leading-[1] font-normal opacity-80">
                  Ethereum
                </p>
              </div>
              <div className="flex justify-center bg-white bg-opacity-5 text-center border border-solid border-yellow rounded-[10px] w-full py-3 items-center flex-col gap-2 h-full">
                <p className="text-lg dark:text-white text-black leading-[1] font-semibold opacity-80">
                  Contact Address:
                </p>
                <p className="text-lg dark:text-white text-black leading-[1] font-normal opacity-80">
                  0xc9090....859235
                </p>
              </div>
              <div className="flex justify-center bg-white bg-opacity-5 text-center border border-solid border-yellow rounded-[10px] w-full py-3 items-center flex-col gap-2 h-full">
                <p className="text-lg dark:text-white text-black leading-[1] font-semibold opacity-80">
                  Token ID:
                </p>
                <p className="text-lg dark:text-white text-black leading-[1] font-normal opacity-80">
                  0001
                </p>
              </div>
              <div className="flex justify-center bg-white bg-opacity-5 text-center border border-solid border-yellow rounded-[10px] w-full py-3 items-center flex-col gap-2 h-full">
                <p className="text-lg dark:text-white text-black leading-[1] font-semibold opacity-80">
                  Token Standard:
                </p>
                <p className="text-lg dark:text-white text-black leading-[1] font-normal opacity-80">
                  ERC20
                </p>
              </div>
              <div className="flex justify-center bg-white bg-opacity-5 text-center border border-solid border-yellow rounded-[10px] w-full py-3 items-center flex-col gap-2 h-full">
                <p className="text-lg dark:text-white text-black leading-[1] font-semibold opacity-80">
                  Contract Fees:
                </p>
                <p className="text-lg dark:text-white text-black leading-[1] font-normal opacity-80">
                  3% Buy & Sell
                </p>
              </div>
            </div>
            <div className="flex justify-start items-center gap-5">
              <a
                href="#"
                target={"blank"}
                className="flex justify-start items-center gap-2"
              >
                <img
                  src="/twitter-gold.png"
                  className="w-5 object-contain"
                  alt=""
                />
                <p className="text-lg dark:text-white text-black opacity-80">
                  Twitter
                </p>
              </a>
              <a
                href="#"
                target={"blank"}
                className="flex justify-start items-center gap-2"
              >
                <img
                  src="/telegram-gold.png"
                  className="w-5 object-contain"
                  alt=""
                />
                <p className="text-lg dark:text-white text-black opacity-80">
                  Telegram
                </p>
              </a>
            </div>
            <p className="dark:text-white text-black font-medium text-lg">
              Launch Time -{" "}
              <span className="grText bg-yellowGr font-semibold">
                04.01.2023
              </span>
            </p>
            <div className="flex justify-start items-center gap-4">
              <Button>Chart</Button>
              <Button>Buy Now</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
