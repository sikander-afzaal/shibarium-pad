import { useState } from "react";
import Button from "../../components/Button";

const Description = ({ content }) => {
  const [tab, setTab] = useState("desc");
  return (
    <div className="mt-[100px]  bg-descBg bg-cover lg:bg-contain bg-center lg:mb-[13vw] 2xl:mb-[350px] wrapper relative isolate">
      <img
        src="/desc-wave.png"
        className="absolute lg:block hidden top-0 left-1/2 -translate-x-1/2 object-cover w-full -z-10"
        alt=""
      />
      <div className="contain  flex-col gap-5 justify-start items-center md:text-left text-center md:items-start">
        <div className="w-full mb-5 flex justify-center md:justify-start items-center border-b border-solid border-[#737373]">
          <button
            onClick={() => setTab("desc")}
            className={`relative isolate bg-transparent text-2xl sm:text-[28px] font-medium px-5 sm:px-7 pb-3 dark:text-white text-primary-bg ${
              tab === "desc"
                ? "border-b-2 border-solid border-[#FFC101]"
                : "border-none"
            } `}
          >
            {tab === "desc" && (
              <span className="w-full h-full bg-tab opacity-10 absolute left-0 bottom-0 -z-10"></span>
            )}
            {content.tab1}
          </button>
          <button
            onClick={() => setTab("token")}
            className={`relative isolate bg-transparent text-2xl sm:text-[28px] font-medium px-5 sm:px-7 pb-3 dark:text-white text-primary-bg ${
              tab === "token"
                ? "border-b-2 border-solid border-[#FFC101]"
                : "border-none"
            } `}
          >
            {tab === "token" && (
              <span className="w-full h-full bg-tab opacity-10 absolute left-0 bottom-0 -z-10"></span>
            )}
            {content.tab2}
          </button>
        </div>
        <h2 className="title leading-[1.4]">
          <span className="grText bg-yellowGr">{content.titleGr}</span>{" "}
          {content.title}
        </h2>
        <p className="dark:text-white text-primary-bg opacity-80 text-lg">
          {content.para1}
        </p>
        <p className="dark:text-white text-primary-bg opacity-80 text-lg">
          {content.para2}
        </p>
        <p className="dark:text-white text-primary-bg opacity-80 text-lg">
          {content.para3}
        </p>
        <Button>{content.btn1}</Button>
        <div className="flex md:flex-row flex-col justify-between gap-3 md:gap-0 items-center w-full">
          <p className="dark:text-white text-primary-bg font-semibold text-lg">
            {content.tags}:{" "}
            <span className="grText bg-yellowGr">
              #featured #ordinal #bone #launchpad #artnft
            </span>
          </p>
          <div className="flex justify-start items-center gap-5">
            <p className="dark:text-white text-primary-bg font-semibold text-lg">
              {content.social}:
            </p>
            <a href="#" target="blank" className="w-5 object-contain">
              <img src="/twitter-gold.png" alt="" />
            </a>
            <a href="#" target="blank" className="w-5 object-contain">
              <img src="/telegram-gold.png" alt="" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Description;
