import Brand from "./Brand";
import Funds from "./Funds";
import Hero from "./Hero";
import How from "./How";
import Join from "./Join";
import Launched from "./Launched";
import Upcoming from "./Upcoming";

const Landing = ({ content }) => {
  return (
    <div className="relative w-full overflow-hidden pb-[150px]">
      <Hero content={content.hero} />
      <Funds content={content.funds} />
      <How content={content.how} />
      <Upcoming content={content.upcoming} />
      <Brand content={content.brand} />
      <Launched content={content.launched} />
      <Join content={content.sale} />
    </div>
  );
};

export default Landing;
