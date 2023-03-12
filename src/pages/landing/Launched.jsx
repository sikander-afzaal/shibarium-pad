const Launched = ({ content }) => {
  return (
    <div className="wrapper mt-[75px] sm:mt-[100px] xl:mt-[250px] 2xl:mt-[350px] relative isolate overflow-hidden">
      <div className="bg-yellowStripe w-[190px] h-[490px] opacity-70 rotate-[43.83deg] md:block hidden absolute right-0 bottom-[50%] xl:bottom-[20%] -z-10"></div>
      <div className="contain flex-col justify-center items-center">
        <h2 className="title">
          {content.title}{" "}
          <span className="grText bg-yellowGr">{content.titleGr}</span>
        </h2>
        <div className="grid grid-cols-1 place-items-center xl:grid-cols-3 w-full gap-8 mt-8">
          <LaunchedBox img={"/question.jpg"} translate={content} />
          <LaunchedBox img={"/question.jpg"} translate={content} />
          <LaunchedBox img={"/question.jpg"} translate={content} />
        </div>
      </div>
    </div>
  );
};

export default Launched;

const LaunchedBox = ({ img, translate }) => {
  return (
    <div className="flex flex-col max-w-[380px] justify-start items-center w-full p-2 rounded-[10px] bg-white bg-opacity-5 border  border-solid border-[#FFBD02]">
      <div className="relative">
        <img src={img} className="w-full aspect-[1/0.7]  object-cover" alt="" />
      </div>
      <div className="flex justify-start items-start flex-col gap-1 mt-4 px-2 w-full">
        <div className="flex justify-between w-full items-center gap-2">
          <h3 className="dark:text-white text-primary-bg gap-2 flex justify-start items-center  text-[22px] font-bold">
            $???{" "}
            <img
              src="/check-yellow.png"
              className="w-5 object-contain"
              alt=""
            />
          </h3>
          <div className="flex justify-center items-center bg-yellow cursor-pointer min-w-[21px] aspect-square rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="#041435"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
              />
            </svg>
          </div>
        </div>
        <h5 className=" grText bg-yellowGr mb-1 text-[26px] font-bold">
          Coming Soon
        </h5>
        <p className="dark:text-white text-primary-bg">
          The ultimate launchpad designed exclusively for the Ordinal Ecosystem
        </p>
        <p className="dark:text-white text-primary-bg opacity-80 text-lg">
          {translate.raised}: <strong> XXXX</strong>
        </p>

        <div className="flex sm:items-center justify-between items-start flex-col sm:flex-row gap-2 w-full">
          <p className="dark:text-white text-primary-bg opacity-80 text-lg">
            {translate.participants}: <strong> XXXX</strong>
          </p>
          <p className="dark:text-white text-primary-bg opacity-80 text-lg">
            {translate.ended}: xx/xx/xx
          </p>
        </div>
      </div>
    </div>
  );
};
