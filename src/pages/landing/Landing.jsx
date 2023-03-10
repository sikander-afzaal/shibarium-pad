import Brand from "./Brand";
import Funds from "./Funds";
import Hero from "./Hero";
import How from "./How";
import Join from "./Join";
import Launched from "./Launched";
import Upcoming from "./Upcoming";

const Landing = () => {
  return (
    <div className="relative w-full overflow-hidden pb-[150px]">
      <Hero />
      <Funds />
      <How />
      <Upcoming />
      <Brand />
      <Launched />
      <Join />
    </div>
  );
};

export default Landing;
