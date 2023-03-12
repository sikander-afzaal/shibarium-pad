import Button from "../../components/Button";

const How = ({ content }) => {
  return (
    <div className="wrapper isolate relative mt-[0px] lg:mt-[60px] 2xl:mt-[200px]">
      <div className="bg-yellowStripe w-[190px] h-[490px] opacity-70 -rotate-[43.83deg] md:block hidden absolute left-0 bottom-[30%] lg:bottom-0 -z-10"></div>
      <div className="contain lg:flex-row flex-col justify-start items-center gap-16 sm:gap-[120px]">
        <div className="relative w-[90%] sm:w-auto isolate">
          <div className="border -rotate-[9.15deg] border-yellow border-solid rounded-[10px] overflow-hidden">
            <img
              src="/question.jpg"
              className="w-full aspect-square max-w-[546px]"
              alt=""
            />
          </div>
          <div className="border border-yellow bg-white bg-opacity-5 w-full h-full border-solid rounded-[10px] absolute left-0 top-0 -z-10"></div>
        </div>
        <div className="flex  justify-start items-center text-center lg:text-left lg:items-start flex-col gap-5">
          <h2 className="title max-w-[470px]">{content.title}</h2>
          <Button>{content.btn}</Button>
        </div>
      </div>
    </div>
  );
};

export default How;
