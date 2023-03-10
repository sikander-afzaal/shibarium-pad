import Button from "../../components/Button";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

const Brand = () => {
  return (
    <div className="wrapper relative isolate mt-[150px]">
      <div className="contain justify-between items-center ">
        <div className="flex justify-start items-start flex-col gap-4">
          <button className="bg-white border-none  rounded-[10px] px-6 py-4 uppercase text-text font-medium">
            Launchpad
          </button>
          <h2 className="grTitle">Brand Ambassadors</h2>
          <Button disabled>See All</Button>
        </div>
      </div>
    </div>
  );
};

export default Brand;
