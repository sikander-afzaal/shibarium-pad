import { Link } from "react-router-dom";
import Button from "../../components/Button";
import ToolTip from "../../components/ToolTip";

const Hero = ({ content }) => {
  return (
    <div className="wrapper relative bg-heroImg bg-contain bg-no-repeat bg-top lg:bg-left mt-[109px]">
      <div className="contain lg:flex-row flex-col justify-between items-start gap-14 xl:gap-20">
        <div className="flex justify-start items-center sm:text-left text-center sm:items-start flex-col gap-5 sm:gap-10 w-full pt-10 lg:pt-20">
          <button className="bg-text dark:bg-white border-none  rounded-[10px] px-6 py-4 uppercase text-white dark:text-text font-medium">
            {content.btn1}
          </button>
          <h2 className="leading-[1.3] text-[30px] sm:text-[46px] xl:text-[56px] font-bold dark:text-white text-primary-bg">
            {content.title}{" "}
            <span className=" bg-yellowGr grText ">{content.titleGr}</span>
          </h2>
          <p className="leading-[1] text-black dark:text-[rgba(255,255,255,0.8)] text-lg ">
            {content.sub}{" "}
            <span className="grText bg-yellowGr font-semibold">
              {content.subGr}
            </span>
          </p>
          <div className="flex justify-start w-full sm:flex-row flex-col items-center gap-5">
            <Button classes={"w-full sm:w-auto relative group"}>
              <ToolTip direction="up" /> {content.btn2}
            </Button>
            <a href="https://t.me/ordinalpadpresales" target={"blank"}>
              <Button classes={"w-full sm:w-auto"}>{content.btn3}</Button>
            </a>
          </div>
          <div className="flex justify-start sm:flex-row flex-col items-center gap-5">
            <div className="flex justify-start gap-2  items-center sm:items-start flex-col">
              <h3 className="text-[46px] font-bold text-yellow leading-[1]">
                0
              </h3>
              <p className="text-base uppercase font-medium dark:text-white text-primary-bg">
                {content.value1}
              </p>
            </div>
            <div className="flex justify-start gap-2  items-center sm:items-start flex-col">
              <h3 className="text-[46px] font-bold text-yellow leading-[1]">
                0
              </h3>
              <p className="text-base uppercase font-medium dark:text-white text-primary-bg">
                {content.value2}
              </p>
            </div>
            <div className="flex justify-start gap-2  items-center sm:items-start flex-col">
              <h3 className="text-[46px] font-bold text-yellow leading-[1]">
                0
              </h3>
              <p className="text-base uppercase font-medium dark:text-white text-primary-bg">
                {content.value3}
              </p>
            </div>
          </div>
        </div>
        <div className="flex pt-0 sm:pt-20 justify-start items-center flex-col relative isolate w-full ">
          <div className="w-full  h-full absolute sm:block hidden -z-20 left-0 top-0 bg-heroRight opacity-50"></div>
          <div className=" bg-rotatedCard dark:sm:block hidden opacity-50 rounded-[15px] -rotate-[5.81deg] h-full w-full max-w-[442px] absolute top-20 -z-10 left-1/2 -translate-x-1/2"></div>
          <div className="bg-white bg-opacity-5 border-2 border-solid border-[#FFC300]  rounded-[15px]  w-full max-w-[442px] p-2 flex justify-start items-start flex-col gap-3 overflow-hidden">
            <div className="relative w-full">
              <img
                src="/question.jpg"
                className="w-full rounded-[10px] aspect-square sm:aspect-video object-cover"
                alt=""
              />
              <p className="w-full max-w-[271px] absolute z-10 bottom-0 left-1/2 -translate-x-1/2 backdrop-blur-[42px] bg-whiteBg  flex justify-center text-lg items-center py-3 rounded-tr-[5px] rounded-tl-[5px]">
                {content.cardText.imgText}
              </p>
            </div>
            <div className="flex pb-3 px-2 justify-start items-start flex-col  gap-4">
              <div className="flex sm:flex-row flex-col justify-between items-start sm:items-center gap-2 w-full">
                <h4 className="text-yellow text-[26px] font-bold">
                  Ordinal Pad #01
                </h4>
                <p className="dark:text-white text-primary-bg text-lg">
                  {content.cardText.date}: <strong>04.01.2023</strong>
                </p>
              </div>
              <h5 className="flex justify-start items-center gap-2 dark:text-white text-primary-bg text-[22px] font-semibold">
                $OPAD{" "}
                <img
                  src="/check.png"
                  className="w-[21px] aspect-square object-contain"
                  alt=""
                />
              </h5>
              <p className="text-base leading-[1.4] sm:text-lg dark:text-white text-primary-bg opacity-80">
                {content.cardText.desc}
              </p>
              <div className="flex w-full flex-col sm:flex-row justify-start items-center gap-4">
                <Link to={"/details"}>
                  <Button classes={"w-full sm:w-auto h-[50px]"}>
                    {content.cardText.btn1}
                  </Button>
                </Link>
                <Button disabled classes={"w-full sm:w-auto h-[50px]"}>
                  {content.cardText.btn2}
                </Button>
              </div>{" "}
              <div className="flex sm:items-center justify-between items-start flex-col sm:flex-row gap-2 w-full">
                <p className="dark:text-white text-primary-bg opacity-80 text-lg">
                  {content.cardText.price}: <strong> $0.004</strong>
                </p>
                <p className="dark:text-white text-primary-bg opacity-80 text-lg">
                  {content.cardText.allocation}: NO
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
