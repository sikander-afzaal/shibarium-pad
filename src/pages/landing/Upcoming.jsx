import Button from "../../components/Button";

const Upcoming = () => {
  return (
    <div className="wrapper overflow-hidden relative isolate mt-[80px] lg:mt-[150px]">
      <div className="bg-yellowStripe w-[190px] h-[490px] opacity-70 rotate-[43.83deg] md:block hidden absolute right-0 bottom-[50%] xl:bottom-0 -z-10"></div>
      <div className="contain flex-col justify-center items-center gap-4">
        <h2 className="title">Upcoming Projects</h2>
        <p className="text-white text-center text-lg opacity-80">
          We bring in some of the most vetted and successful projects within the
          Ordinal Ecosystem
        </p>
        <div className="grid-cols-1 grid place-items-center xl:grid-cols-3 mt-5 w-full gap-10 xl:gap-8">
          <ProjectBox img="/hero-nft.png" name="Ordinal Pad #01" />
          <ProjectBox img="/hero-nft.png" name="Ordinal Pad #01" />
          <ProjectBox img="/hero-nft.png" name="Ordinal Pad #01" />
        </div>
        <div className="flex justify-center items-center gap-4 lg:flex-row flex-col text-center mt-14">
          <p className="text-white text-center text-lg opacity-80">
            Providing a platform to assist with the most innovative ordinal
            projects
          </p>
          <Button>
            See all{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5 ml-1"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
              />
            </svg>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Upcoming;

const ProjectBox = ({ img, time, name, starting, price, allocation }) => {
  return (
    <div className="flex flex-col max-w-[380px] justify-start items-center w-full p-2 rounded-[10px] bg-white bg-opacity-5 border  border-solid border-[#FFBD02]">
      <div className="relative">
        <img src={img} className="w-full aspect-video object-cover" alt="" />
        <div className="flex absolute bottom-3 left-1/2 -translate-x-1/2 px-0 py-2 justify-between items-center w-[90%] bg-text rounded-[10px]">
          <div className="flex w-full justify-center items-center flex-col gap-2 border-r border-solid border-[#4B506D] ">
            <p className="text-white text-sm font-medium">Days:</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="white"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </div>
          <div className="flex justify-center w-full items-center flex-col gap-2 border-r border-solid border-[#4B506D] ">
            <p className="text-white text-sm font-medium">Hours:</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="white"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </div>
          <div className="flex justify-center w-full items-center flex-col gap-2 border-r border-solid border-[#4B506D] ">
            <p className="text-white text-sm font-medium">Minutes:</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="white"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </div>
          <div className="flex justify-center w-full items-center flex-col gap-2 ">
            <p className="text-white text-sm font-medium">Seconds:</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="white"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </div>
        </div>
      </div>
      <div className="flex justify-start items-start flex-col gap-1 mt-4 px-2 w-full">
        <div className="flex justify-between w-full items-center gap-2">
          <p className="text-[#1877F2] text-[22px] font-bold">$OPAD</p>
          <p className="text-white text-lg">
            Starting: <strong>04.01.2023</strong>
          </p>
        </div>
        <h5 className=" grText bg-yellowGr mb-1 text-[26px] font-bold">
          {name}{" "}
        </h5>
        <div className="flex sm:items-center justify-between items-start flex-col sm:flex-row gap-2 w-full">
          <p className="text-white opacity-80 text-lg">
            Price per Token: <strong> XXXX</strong>
          </p>
          <p className="text-white opacity-80 text-lg">Allocation: XX</p>
        </div>
        <div className="self-center -mt-3 translate-y-1/2">
          <Button>Token Sale</Button>
        </div>
      </div>
    </div>
  );
};