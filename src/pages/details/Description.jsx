import { useState } from "react";
import Button from "../../components/Button";

const Description = () => {
  const [tab, setTab] = useState("desc");
  return (
    <div className="mt-[100px] lg:mb-[13vw] 2xl:mb-[350px] wrapper relative isolate">
      <img
        src="/desc-wave.png"
        className="absolute lg:block hidden top-0 left-1/2 -translate-x-1/2 object-cover w-full -z-10"
        alt=""
      />
      <div className="contain  flex-col gap-5 justify-start items-center md:text-left text-center md:items-start">
        <div className="w-full mb-5 flex justify-center md:justify-start items-center border-b border-solid border-[#737373]">
          <button
            onClick={() => setTab("desc")}
            className={`relative isolate bg-transparent text-2xl sm:text-[28px] font-medium px-5 sm:px-7 pb-3 text-white ${
              tab === "desc"
                ? "border-b-2 border-solid border-[#FFC101]"
                : "border-none"
            } `}
          >
            {tab === "desc" && (
              <span className="w-full h-full bg-tab opacity-10 absolute left-0 bottom-0 -z-10"></span>
            )}
            Description
          </button>
          <button
            onClick={() => setTab("token")}
            className={`relative isolate bg-transparent text-2xl sm:text-[28px] font-medium px-5 sm:px-7 pb-3 text-white ${
              tab === "token"
                ? "border-b-2 border-solid border-[#FFC101]"
                : "border-none"
            } `}
          >
            {tab === "token" && (
              <span className="w-full h-full bg-tab opacity-10 absolute left-0 bottom-0 -z-10"></span>
            )}
            Token Sale
          </button>
        </div>
        <h2 className="title leading-[1.4]">
          <span className="grText bg-yellowGr">Ordinal Pad</span> is the perfect
          launchpad for the Ordinal ecosystem for several reasons:
        </h2>
        <p className="text-white opacity-80 text-lg">
          - Firstly, it is an user-friendly and secure platform that allows
          users to easily participate in Ordinal's most promising projects
          before they launch. Because of our platform's simple and intuitive
          design, even those who are new to cryptocurrency and DeFi can easily
          navigate the platform and start participating in projects without any
          technical knowledge.
        </p>
        <p className="text-white opacity-80 text-lg">
          - Secondly, Ordinal Pad has integrated various features that make it
          easy for users to stake their tokens in order to earn a generous
          yield, while they are waiting for new project launches.. Additionally,
          we are building a strong community of users and developers who are
          constantly working to improve the platform, adding new features and
          optimizing existing ones.
        </p>
        <p className="text-white opacity-80 text-lg">
          Overall, Ordinal Pad's accessibility, user-friendly interface, and
          robust features set make it the perfect launchpad for the Ordinal
          ecosystem.
        </p>
        <Button>Whitepaper</Button>
        <div className="flex md:flex-row flex-col justify-between gap-3 md:gap-0 items-center w-full">
          <p className="text-white font-semibold text-lg">
            Tags:{" "}
            <span className="grText bg-yellowGr">
              #featured #ordinal #bone #launchpad #artnft
            </span>
          </p>
          <div className="flex justify-start items-center gap-5">
            <p className="text-white font-semibold text-lg">Socials:</p>
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
