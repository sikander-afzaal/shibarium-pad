import Button from "../../components/Button";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

const Brand = () => {
  return (
    <div className="wrapper relative isolate mt-[100px] xl:mt-[250px] ">
      <img
        src="/brand.png"
        className="absolute -z-10 max-h-[1000px] sm:block hidden top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-full  object-cover"
        alt=""
      />
      <div className="contain xl:flex-row flex-col gap-16 xl:gap-0 justify-between items-center ">
        <div className="flex w-full justify-start items-center text-center xl:text-left xl:items-start flex-col gap-4">
          <button className="bg-white border-none  rounded-[10px] px-6 py-4 uppercase text-text font-medium">
            Launchpad
          </button>
          <h2 className="grTitle">Brand Ambassadors</h2>
          <Button disabled>See All</Button>
        </div>
        <div className="w-full max-w-[650px] xl:mt-0 mt-12">
          <Splide
            options={{
              autoWidth: true,
              perMove: 1,
              type: "loop",
              width: "100%",
              gap: "0.5rem",
              pagination: false,
              breakpoints: {
                450: {
                  perPage: 1,
                  autoWidth: false,
                },
              },
            }}
            hasTrack={false}
            aria-label="..."
          >
            <SplideTrack>
              <SplideSlide>
                <BrandCard />
              </SplideSlide>
              <SplideSlide>
                <BrandCard />
              </SplideSlide>
            </SplideTrack>

            <div className="splide__arrows flex justify-center items-center gap-4 absolute bottom-full right-[32%] sm:right-[18%] -translate-x-1/2 sm:translate-x-1/2">
              <button className="text-text opacity-100 rounded-[7px] w-[50px] static h-[50px] bg-yellowGr splide__arrow splide__arrow--prev p-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-7 h-7"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                  />
                </svg>
              </button>
              <button className="static text-text opacity-100 rounded-[7px] w-[50px] h-[50px] bg-yellowGr splide__arrow splide__arrow--next p-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-7 h-7"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                  />
                </svg>
              </button>
            </div>
          </Splide>
        </div>
      </div>
    </div>
  );
};

export default Brand;

const BrandCard = () => {
  return (
    <div className="bg-white bg-opacity-10 border transition-all duration-500 scale-[0.85] border-transparent flex justify-start items-start flex-col p-3 rounded-[10px] border-solid gap-3 w-full max-w-[440px]">
      <img
        src="/hero-nft.png"
        className="rounded-[10px] w-full aspect-[1/0.7] object-cover"
        alt=""
      />
      <div className="px-2 flex justify-start items-start flex-col gap-2">
        <h3 className="text-white text-xl font-semibold">
          Ordinal | @OrdianalGems
        </h3>
        <p className="text-xl font-semibold text-white">148.5K Followers</p>
      </div>
    </div>
  );
};
